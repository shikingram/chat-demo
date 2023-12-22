<template>
	<view>
		<u-notice-bar bgColor='#7966ff' color="#fff" text="由于服务人数过多,如果出现异常建议退出重新尝试,AI对话已支持上下文连续对话欢迎体验" mode="closable">
		</u-notice-bar>
		<view class="box-1" id="list-box">
			<view class="talk-list">
				<view v-for="(item,index) in talkList" @click="handleCopy(item.content)" :key="index"
					:id="`msg-${index}`">
					<view class="item flex_col" :class=" item.type == 1 ? 'push':'pull' ">
						<image v-if="item.type == 1" :src="vuex_user?vuex_user.avatar:'/static/avatar.png'" mode="aspectFill" class="pic"></image>
						<image v-else src="/static/logo.png" mode="aspectFill" class="pic"></image>
						<view v-if="item.content" class="content">{{item.content}}</view>
						<view v-else class="content"><u-loading-icon></u-loading-icon></view>
					</view>
				</view>
			</view>
		</view>
		<view class="box-2">
			<view class="flex_col">
				<view @click="handleopen">
					<image class="avatar" :src="vuex_user?vuex_user.avatar:'/static/avatar.png'"></image>
				</view>
				<view class="flex_grow">
					<input type="text" class="content" v-model="content" placeholder="请输入聊天内容"
						placeholder-style="color:#DDD;" :cursor-spacing="6">
				</view>
				<button class="send" @tap="send">发送</button>
			</view>
		</view>
		<u-popup :show="show" :round="10" mode="bottom" @close="close" closeable>
			<view class="UPOP">
				<view class="title ">我的</view>
				<view class="margin">
					<view class="userInfo-box">
						<view class="userInfo" @click="recordClick">
							<image class="avatar" :src="vuex_user?vuex_user.avatar:'/static/avatar.png'"></image>
							<view class="info">
								<view class="name ">{{vuex_user?vuex_user.name:'登录/注册'}}</view>
								<view class="award u-light-color">剩余<text class="span ">{{vuex_user?vuex_user.integral:0}}</text>积分</view>
							</view>
						</view>
						<u-cell isLink :border="false" title="智撩AI机器人-" :value="isvalue" clickable @click="handlepicopen"></u-cell>
					</view>
					<view class="stat ">
						<view class="have ">{{'每次对话消耗：'+chatIntegral+'积分'}}</view>
					</view>
					<view class="videoAd">
						<view class="info ">
							<view class="inviteTitle ">每日签到获取积分</view>
							<view class="award ">奖励<text class="span ">{{signIntegral}}</text>积分</view>
						</view>
						<view class="btn" @click="signClick">签到</view>
					</view>
					<u-line></u-line>
					<view class="invite">
						<view class="info ">
							<view class="inviteTitle ">邀请新的小伙伴来体验</view>
							<view class="award ">奖励<text class="span ">{{inviteIntegral}}</text>积分/个，每天最多<text class="span ">{{10}}</text>人</view>
							<view class="hint ">提示：点击右上角<text class="more ">···</text>可分享朋友圈邀请</view>
						</view>
						<view class="btn">
							<text>邀请朋友</text>
							<button open-type="share"></button>
						</view>
					</view>
					<u-line></u-line>
					<view class="videoAd">
						<view class="info">
							<view class="videoAdTitle ">看视频广告攒次数</view>
							<view class="award ">奖励<text class="span ">{{adIntegral}}</text>积分/次</view>
						</view>
						<view class="btn" @click="adClick">观看视频</view>
					</view>
				</view>
				<u-button open-type='contact' color="#7966ff" :plain="true" text="咨询客服(意见反馈)"></u-button>
			</view>
		</u-popup>
		<u-picker :show="picshow" :columns="columns" keyName="label" @cancel="handlepiccancel" @confirm="handlepicconfirm"></u-picker>
		<models v-if="downShow" :title="downTitle" :btnText="'看广告领 '+adIntegral+' 积分'" :authorize="false" @close="downShow = false" @save="adClick"></models>
		<models v-if="loginShow"
		:ad="true"
		title="为了更好的玩机体验，快去授权登录吧"
		btnText="授权登录" 
		@save="getUserInfo" 
		@close="loginShow = false"></models>
		
		<models v-if="signShow"
		:authorize="false" 
		:ad="true"
		:title="signTitle"
		btnText="知道了" 
		closeText=" " 
		@save="signShow = false"></models>
		<wxLogin @submit="submitLogin"></wxLogin>
	</view>
</template>

<script>
	// 在页面中定义激励视频广告
	let videoAd = null
	import models from '@/components/model/model.vue'
	import wxLogin from '@/components/wxLogin/wxLogin.vue'
	export default {
		components:{
			models,
			wxLogin
		},
		data() {
			return {
				picshow: false,
				isvalue: '标准线路',
				columns: [
					[{
						channel: '',
						label: '标准线路',
					},{
						channel: 1,
						label: '官方路线1',
					},{
						channel: 2,
						label: '官方路线2',
					}]
				],
				channel: '',
				// 签到
				isSign: false,
				signShow: false,
				signTitle: '',
				signIntegral: 0,
				inviteIntegral: 0,
				adIntegral: 0,
				chatIntegral: 0,
				// 登录弹窗
				loginShow: false,
				talkList: [],
				content: '',
				downShow: false,
				downTitle: '',
				show: false,
			}
		},
		async onLoad() {
			const that = this
			uni.setNavigationBarTitle({
				title: `智撩AI机器人-${this.isvalue}`,
			})
			that.getConfig()
		},
		onShareAppMessage(res) {
			return {
				title: '我等风也等你，近听水无声~',
				imageUrl: '/static/wenda.png',
				path: '/pages/index/index?userId='+this.vuex_user._id
			}
		},
		onShareTimeline(res) {
			return {
				title: '我等风也等你，近听水无声~',
				imageUrl: '/static/wenda.png',
				path: '/pages/index/index?userId='+this.vuex_user._id
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.getHistoryMsg();
			});
		},
		methods: {
			async getConfig(){
				let that = this
				let config = await uniCloud.callFunction({
					name: 'config_map',
					data: {
						appcode: that.appcode,
						'keys': ['signIntegral', 'inviteIntegral', 'adIntegral','chatIntegral']
					},
				})
				if(config.result.success) {
					that.signIntegral = parseInt(config.result.data[0])
					that.inviteIntegral = parseInt(config.result.data[1])
					that.adIntegral = parseInt(config.result.data[2])
					that.chatIntegral = parseInt(config.result.data[3])
				}
			},
			async signClick(){
				var that = this
				if(!that.vuex_user){
					that.loginShow = true
					return
				}
				if(that.isSign){
					uni.showToast({
						icon: 'none',
						title: '已签到',
						duration: 1500
					})
					return
				} 
				
				uni.showLoading({
					mask: true,
					title: '签到中...'
				})
				let sign = await uniCloud.callFunction({
					name: 'sign_add',
					data: {
						appcode: that.appcode,
						"userId": that.vuex_user._id
					},
				})
				uni.hideLoading()
				if(sign.result.success){
					that.getUser()
					that.signTitle = "<p style='font-weight: 550;font-size: 16px;'>签到成功</p><p style='padding-top: 10px;'>获得<span class='num'>"+sign.result.integral+"</span>积分</p>"
					that.signShow = true
					that.isSign = true
				}else{
					uni.showToast({
						icon: 'none',
						mask: true,
						title: sign.result.msg,
						duration: 1500
					})
				}
			},
			recordClick(){
				if(!this.vuex_user){
					this.loginShow = true
					return
				}
				uni.navigateTo({
					url: '/main/integral/record'
				})
			},
			modelSave(){
				if(!this.vuex_user){
					this.loginShow = true
					return
				}
				this.modelShow = false
			},
			async getUser(){
				let that = this
				let detail = await uniCloud.callFunction({
					name: 'query_map',
					data: {
						dbName: "wx_user",
						id: that.vuex_user._id
					},
				})
				that.$u.vuex('vuex_user', detail.result)
			},
			// 我的
			async getSign(){
				let that = this
				const startTime = new Date(new Date().toLocaleDateString()).getTime()
				const endTime = new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1
				let query = await uniCloud.callFunction({
					name: 'sign_flag',
					data: {
						dbName: 'wx_sign',
						"userId": that.vuex_user._id,
						"startTime": startTime,
						"endTime": endTime
					},
				})
				if(query.result.success) that.isSign = true
				else that.isSign = false
			},
			adClick(){
				var that = this
				if(!that.vuex_user){
					that.loginShow = true
					return
				}
				uni.showLoading({
				  title: '加载中'
				});
				if (videoAd) {
					videoAd.show().then(() => {
						uni.hideLoading()
					}).catch(err => {
						// 失败重试
						videoAd.load().then(() => {
							uni.hideLoading()
							videoAd.show()
						}).catch(err => {
							uni.hideLoading()
							uni.showToast({
							    icon: 'none',
							    title: '访问人数过多，请稍后再试',
							    duration: 3000
							});
							console.log('激励视频 广告显示失败')
						})
					})
				}else{
					that.adLoad()
					videoAd.show().then(() => {
						uni.hideLoading()
					}).catch(err => {
						// 失败重试
						videoAd.load().then(() => {
							uni.hideLoading()
							videoAd.show()
						}).catch(err => {
							uni.hideLoading()
							uni.showToast({
							    icon: 'none',
							    title: '访问人数过多，请稍后再试',
							    duration: 3000
							});
							console.log('激励视频 广告显示失败')
						})
					})
				}
			},
			adLoad(){
				var that = this
				if (wx.createRewardedVideoAd) {
					// 加载激励视频广告
					// #ifdef MP-QQ
					videoAd = wx.createRewardedVideoAd({
						adUnitId: "cbe2baa6cdb9b4f2c75269d000476ee6"
					});
					// #endif
					// #ifdef MP-WEIXIN
					videoAd = wx.createRewardedVideoAd({
						adUnitId: that.wxRewardedAdIds[Math.floor(Math.random() * that.wxRewardedAdIds.length + 1) - 1]
					});
					// #endif
					//捕捉错误
					videoAd.onError(err => {
						// 进行适当的提示
						uni.hideLoading()
						uni.showToast({
						    icon: 'none',
						    title: '访问人数过多，请稍后再试',
						    duration: 3000
						});
						console.log('videoAd onError', err);
					});
					// 监听关闭
					videoAd.onClose(status => {
						uni.hideLoading()
						if ((status && status.isEnded) || status === undefined) {
							// 正常播放结束，下发奖励
							that.downShow = false
							if(that.vuex_user){
								that.userIntegral()
							}
						} else {
							// 播放中途退出，进行提示
							uni.showToast({
							    icon: 'none',
							    title: '未播放完，下发奖励失败',
							    duration: 3000
							});
							console.log('中途退出')
						}
					});
				}
			},
			async userIntegral(){
				var that = this
				uni.showLoading({
					mask: true,
					title: '加载中...'
				})
				let data = await uniCloud.callFunction({
					name: 'user_integral',
					data: {
						appcode: that.appcode,
						userId: that.vuex_user._id
					},
				})
				uni.hideLoading()
				if(data.result.success){
					that.getUser()
					that.signTitle = "<p style='font-weight: 550;font-size: 16px;'>恭喜你！</p><p style='padding-top: 10px;'>获得<span class='num'>"+data.result.integral+"</span>积分</p>"
					that.signShow = true
				}
			},
			
			
			// 登录
			async getUserInfo(){
				uni.showLoading({
					title: '授权中...'
				});
				var that = this
				await uni.getUserInfo({
				  desc: '更新您的个人信息',
				  success: (res) => {
					  that.name = res.userInfo.nickName; //昵称
					  that.avatar = res.userInfo.avatarUrl; //头像
					  // 成功后进行登录,获取code
					  that.wxlogin();
				  },
				  fail(err){
					  uni.showToast({
					  	icon: 'none',
					  	title: '授权失败',
					  	duration: 1500
					  })
				  }
				})
				uni.hideLoading()
			},
			async submitLogin(e){
				let that = this;
				that.name = e.name
				that.avatar = e.avatar
				uni.showLoading({
					title: '更新中...'
				});
				let res = await uniCloud.callFunction({
					name: 'user_update',
					data: {
						userId: that.vuex_user._id,
						name: this.name,
						avatar: this.avatar
					},
				})
				uni.hideLoading()	
				if(res.result.success){
					that.getUser()
					uni.showToast({
						icon: 'none',
						title: '更新成功!',
						duration: 1500
					})
				}else{
					uni.showToast({
						icon: 'none',
						title: '更新失败',
						duration: 1500
					})
				}
			},
			//已经授权，自动登录
			async wxlogin() {
				let that = this;
				uni.showLoading({
					title: '登录中...'
				});
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						let code = loginRes.code;
						that.wxloginres(code);
					},
					fail(err){
						uni.hideLoading()
						uni.showToast({
							icon: 'none',
							title: '登录失败',
							duration: 1500
						})
					}
				});
				
			},
			//登录后提交服务器获取进一步信息
			async wxloginres(wxcode) {
				let that = this;
				
				var userId = uni.getStorageSync('userId')
				
				var mptype
				// #ifdef MP-WEIXIN
					mptype = 'wx'
				// #endif
				// #ifdef MP-QQ
					mptype = 'qq'
				// #endif
				
				let authorize = await uniCloud.callFunction({
					name: 'user_authorize',
					data: {
						appcode:that.appcode,
						name: that.name,
						avatar: that.avatar,
						mptype: mptype,
						code: wxcode,
						userId: userId,
					},
				})
				if(authorize.result.success){
					that.$u.vuex('vuex_user',authorize.result.data)
					that.getUser()
					await that.getSign()
					uni.showToast({
						icon: 'none',
						mask: true,
						title: '登录成功',
						duration: 1500
					})
					// #ifdef MP-WEIXIN
					if(!authorize.result.newUser){
						that.loginShow = false
						that.$u.vuex('showWxLogin',true)
					}
					// #endif
					// #ifndef MP-WEIXIN
					// #endif
					uni.removeStorageSync('userId')
				}else{
					uni.showToast({
						icon: 'none',
						mask: true,
						title: authorize.result.msg,
						duration: 1500
					})
				}
				uni.hideLoading()
				that.loginShow = false
			},
			getLoginShow(){
				let that = this
				that.loginShow = true
			},
			
			handlepicopen() {
				this.picshow = true
				this.show = false
			},
			handlepiccancel() {
				this.picshow = false
			},
			handlepicconfirm(data) {
				this.channel = data.value[0].channel
				this.picshow = false
				this.isvalue = data.value[0].label
				uni.setNavigationBarTitle({
					title: `智撩AI机器人-${this.isvalue}`,
				})
			},
			close() {
				this.show = false
			},
			handleopen() {
				this.show = true
			},
			handleCopy(message) {
				const that = this
				uni.setClipboardData({
					data: message,
					success: function() {}
				})
			},
			// 获取历史消息
			getHistoryMsg() {
				let get = async () => {
					let data = [{
						content: `智撩AI为您服务：\n1. 知乎百度答题、做作业题目\n2. 写代码、写文案、写论文，写小说\n3. 文案润色、翻译、写诗作词\n4. 扮演面试官、扮演书籍电影角色\n例1：写一篇工作日报我是行政\n例2：帮我写作业，题目是xxx\n例3：把下文翻译成英文：xxx\n例4：写一出能活的短视频剧本\n例5：英文写物理相关的论文\n例6：用王小波的风格写篇情书\n
或者可以问我其他问题\n越完整的描述，我越精确`, // 消息内容
						type: 0,// 此为消息类别，设 1 为发出去的消息，0 为收到对方的消息,
						state: 0
					}];
					// 将获取到的消息数据合并到消息数组中
					this.talkList = [...data, ...this.talkList];
					// 数据挂载后执行，不懂的请自行阅读 Vue.js 文档对 Vue.nextTick 函数说明。
					// 设置当前滚动的位置
					this.setPageScrollTo();
				}
				get();
			},
			// 设置页面滚动位置
			setPageScrollTo() {
				this.$nextTick(() => {
					const selector = `#msg-${this.talkList.length-1}`;
					let view = uni.createSelectorQuery().in(this).select(selector);
					view.boundingClientRect((res) => {
						uni.pageScrollTo({
							scrollTop: res.top - 30, // -30 为多显示出大半个消息的高度，示意上面还有信息。
							duration: 0
						});
					}).exec();
				})
			},
			// 发送信息
			async send() {
				const that = this
				if(!that.vuex_user){
					that.loginShow = true
					return
				}
				if (!that.content) {
					uni.showToast({
						title: '请输入有效的内容',
						icon: 'none'
					})
					return;
				}
				if(this.chatIntegral > 0){
					var integral = this.vuex_user.integral
					if(integral < this.chatIntegral){
						this.show = true
						this.downShow = true
						this.downTitle = "<p style='font-weight: 550;font-size: 16px;'>提问需要 "+this.chatIntegral+" 积分</p><p style='padding-top: 10px;'>您当前仅有<span class='num'>"+integral+"</span>积分，无法发起提问，快去赚积分吧~</p>"
						return
					}
				}
				that.talkList.push({
					content: that.content, // 消息内容
					type: 1 ,// 此为消息类别，设 1 为发出去的消息，0 为收到对方的消息,
					state: 1,
				})
				that.talkList.push({
					content: null, // 消息内容
					type: 2 ,// 此为消息类别，设 1 为发出去的消息，0 为收到对方的消息,
					state: 0,
				})
				this.$forceUpdate()
				// 设置当前滚动的位置
				this.setPageScrollTo();
				let messages = that.talkList.filter(item=>{
					return item.state==1
				})
				messages = messages.map(item=>{
					return {
						content: item.content,
						role: item.type==1?'user':'assistant'
					}
				})
				that.content = ''
				let res = await uniCloud.callFunction({
					name: 'openai',
					data: {
						messages:messages,
						channel:that.channel,
						appcode:that.appcode,
						userId: that.vuex_user._id
					},
				})
				if(res.result.success){
					that.getUser()
					that.talkList[that.talkList.length-1] = {
						content: res.result.content, // 消息内容
						type: 0 ,// 此为消息类别，设 1 为发出去的消息，0 为收到对方的消息,
						state: 1,
					}
					this.$forceUpdate()
					// 设置当前滚动的位置
					this.setPageScrollTo();
				}else{
					uni.showToast({
						title: res.result.msg,
						icon: 'none'
					})
					that.talkList[that.talkList.length-2].state = 0
					that.talkList[that.talkList.length-1] = {
						content: res.result.msg, // 消息内容
						type: 0 ,// 此为消息类别，设 1 为发出去的消息，0 为收到对方的消息,
						state: 0,
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "duihua.scss"
</style>
