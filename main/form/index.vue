<template>
	<view class="container">
		<view class="bg"></view>
		<view class="form">
			</u-notice-bar>
			<view class="header">
				<view class="title">
					<view>回答你需要的问题</view>
					<view>消耗{{chatIntegral}}积分/次；剩余{{vuex_user?vuex_user.integral:0}}积分</view>
				</view>
			</view>
			<u-transition :show="true" mode="fade-left">
				<view class="panel">
					<u-cell isLink :border="false" title="填写您的问题" :value="isvalue" clickable @click="handleopen">
					</u-cell>
					<u-picker :show="picshow" :columns="columns" keyName="label" @cancel="handlecancel"
						@confirm="handleconfirm"></u-picker>
					<view class="textarea">
						<u--textarea v-model="text" height="140" placeholder="请输入您的问题"></u--textarea>
					</view>
					<view class="btn-group">
						<view class="btn paste">
							<u-button icon="file-text" text="粘贴问题" @click="handlezt"></u-button>
						</view>
						<view class="btn get">
							<u-button @click="onSubmitGPT" iconColor="#ffffff" color="#7966ff" icon="edit-pen"
								text="获取问题答案"></u-button>
						</view>
					</view>
				</view>
			</u-transition>
		</view>
		<view class="alert">
			<u-alert title="当前使用人数过多,获取答案可能超过30秒钟" type="error"></u-alert>
		</view>
		<view class="adContainer" v-if="wxBannerAdIds.length">
			<!-- #ifdef MP-WEIXIN -->
			<ad :unit-id="wxBannerAdIds[Math.floor(Math.random() * wxBannerAdIds.length + 1) - 1]"></ad>
			<!-- #endif -->
		</view>
		<view class="tool">
			<view class="header">
				<view class="title">功能特性</view>
			</view>
			<u-transition :show="true" mode="slide-up">
				<view class="grid">
					<view class="item">
						<view class="icon">
							<u-icon size="28" name="/main/static/1.png">
							</u-icon>
						</view>
						<view class="title">AI回答</view>
						<view class="desc">轻松获取</view>
					</view>
					<view class="item">
						<view class="icon">
							<u-icon size="28" name="/main/static/2.png">
							</u-icon>
						</view>
						<view class="title">智能答案</view>
						<view class="desc">免去千篇一律</view>
					</view>
					<view class="item">
						<view class="icon">
							<u-icon size="28" name="/main/static/3.png">
							</u-icon>
						</view>
						<view class="title">自动代码</view>
						<view class="desc">免去繁琐搜索</view>
					</view>
					<view class="item">
						<view class="icon">
							<u-icon size="28" name="/main/static/4.png">
							</u-icon>
						</view>
						<view class="title">引导写作</view>
						<view class="desc">AI发散思维</view>
					</view>
					<view class="item">
						<view class="icon">
							<u-icon size="28" name="/main/static/5.png">
							</u-icon>
						</view>
						<view class="title">存在限制</view>
						<view class="desc">会有偏见内容</view>
					</view>
					<view class="item">
						<view class="icon">
							<u-icon size="28" name="/main/static/6.png">
							</u-icon>
						</view>
						<view class="title">在线工具</view>
						<view class="desc">无需下载软件</view>
					</view>
				</view>
			</u-transition>
		</view>
		<u-toast ref="uToast"></u-toast>
		<u-popup :show="show" :round="10" mode="bottom" @close="show = false" closeable>
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
				text: '',
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
				isday: 0,
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
				downShow: false,
				downTitle: '',
				show: false
			};
		},
		async onLoad() {
			this.getConfig()
		},
		onShow() {
			const that = this
		},
		onShareAppMessage: function(options) {
			const that = this;
			// 设置菜单中的转发按钮触发转发事件时的转发内容
			const shareObj = {
				title: '智撩AI问答',
				imageUrl: '/static/wenda.png', //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
				path: '/pages/index/index?userId='+this.vuex_user._id,
			};
			// 返回shareObj
			return shareObj;
		},
		onShareTimeline: function() {
			const that = this;
			// 设置菜单中的转发按钮触发转发事件时的转发内容
			const shareObj = {
				title: '智撩AI问答',
				imageUrl: '/static/wenda.png', //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
				path: '/pages/index/index?userId='+this.vuex_user._id,
			};
			// 返回shareObj
			return shareObj;
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
			handleopen() {
				this.picshow = true
			},
			handlecancel() {
				this.picshow = false
			},
			handleconfirm(data) {
				this.channel = data.value[0].channel
				this.picshow = false
				this.isvalue = data.value[0].label
			},
			async handlelog() {
				const that = this
				uni.navigateTo({
					url: `/main/answer/index?text=${that.text}&channel=${that.channel}`
				})
			},
			handlezt() {
				const that = this
				uni.getClipboardData({
					success: function(res) {
						that.text = res.data
					}
				})
			},
			onSubmitGPT() {
				if(!this.vuex_user){
					this.loginShow = true
					return
				}
				if (this.text.length === 0) return this.$refs.uToast.show({
					type: 'default',
					message: "请输入问题"
				})
				if(this.chatIntegral > 0){
					var integral = this.vuex_user.integral
					if(integral < this.chatIntegral){
						this.show = true
						this.downShow = true
						this.downTitle = "<p style='font-weight: 550;font-size: 16px;'>提问需要 "+this.chatIntegral+" 积分</p><p style='padding-top: 10px;'>您当前仅有<span class='num'>"+integral+"</span>积分，无法发起提问，快去赚积分吧~</p>"
						return
					}
				}
				this.handlelog()
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .u-cell__body {
		padding: 0 !important;
	}
	.adContainer,
	.tool {
		width: 90%;
		margin: 15rpx auto;

		.header {
			.title {
				margin-bottom: 30rpx;
			}
		}

		.grid {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;

			.item {
				width: 30%;
				display: flex;
				flex-direction: column;
				align-items: center;
				background-color: #e8eafe;
				margin: 15rpx 0rpx;
				padding: 30rpx 0rpx;
				border-radius: 10rpx;

				.title {
					color: #1B2B20;
					margin-top: 15rpx;
				}

				.desc {
					color: #67776C;
					font-size: 24rpx;
				}
			}
		}
	}

	.alert {
		width: 90%;
		margin: 30rpx auto;
	}

	.form {
		width: 90%;
		margin: 0 auto;
		z-index: 999;

		.header {
			margin-bottom: 30rpx;

			.title {
				text-align: center;
				color: #fff;
				margin: 30rpx 0rpx;
				display: flex;
				justify-content: space-between;
			}
		}

		.panel {
			padding: 30rpx;
			background-color: #fff;
			border-radius: 15rpx;
			box-shadow: 0rpx 10rpx 10rpx #eee;

			// .head {
			// 	display: flex;
			// 	flex-direction: row;
			// 	justify-content: space-between;

			// 	.tips {
			// 		color: #dd6161;
			// 	}
			// }

			.textarea {
				margin-top: 30rpx;
			}

			.btn-group {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin-top: 30rpx;

				.paste {
					width: 40%;
				}

				.get {
					width: 56%;
				}
			}
		}
	}

	.bg {
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		width: 100%;
		background-color: #7966ff;
		min-height: 200rpx;
		border-radius: 0rpx 0rpx 140rpx 140rpx;
		z-index: -1;
	}
	.UPOP {
		padding: 30rpx;
	
		.title {
			align-items: center;
			display: flex;
			font-size: 30rpx;
			font-weight: 450;
			height: 90rpx;
			justify-content: center;
		}
	
		.margin {
			margin: auto;
			.userInfo-box{
				display: flex;
				align-items: flex-start;
				justify-content: space-between;
			}
			.userInfo {
				align-items: center;
				display: flex;
				margin-bottom: 30rpx;
				.info {
					color: #3a3a3a;
					display: flex;
					flex-direction: column;
					font-size: 29rpx;
					justify-content: center;
					.name {
						font-size: 40rpx;
						font-weight: 500;
					}
					
				}
				.avatar{
					width: 100rpx;
					height: 100rpx;
					border-radius: 100rpx;
					margin-right: 30rpx;
				}
			}
	        .stat {
				align-items: center;
				color: #7966ff;
				display: flex;
				font-size: 27rpx;
				margin-bottom: 30rpx;
	
				.free,
				.have {
					background-color: rgba(81, 181, 237, .1);
					border-radius: 7rpx;
					padding: 13rpx;
				}
	
				.free {
					margin-left: 30rpx;
				}
			}
	
			.invite {
				align-items: center;
				display: flex;
				justify-content: space-between;
				margin-bottom: 10rpx;
				margin-top: 15rpx;
				.info {
					line-height: 50rpx;
	
					.inviteTitle {
						color: #3a3a3a;
						font-size: 30rpx;
						font-weight: 450;
					}
	
					.award {
						color: #3a3a3a;
						font-size: 28rpx;
					}
	
					.award .span {
						color: #7966ff;
						margin-left: 10rpx;
						margin-right: 10rpx;
					}
	
					.hint {
						align-items: center;
						color: #ababab;
						display: flex;
						font-size: 25rpx;
					}
	
					.hint .more {
						font-size: 40rpx;
						margin-left: 5rpx;
						margin-right: 5rpx;
					}
	
				}
	
				.btn {
					align-items: center;
					background-color: rgba(81, 181, 237, .1);
					border-radius: 50rpx;
					color: #7966ff;
					display: flex;
					font-size: 28rpx;
					height: 60rpx;
					justify-content: center;
					padding-left: 25rpx;
					padding-right: 25rpx;
					position: relative;
	
					button {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						opacity: 0;
					}
				}
			}
	
			.videoAd {
				align-items: center;
				display: flex;
				justify-content: space-between;
				margin-bottom: 10rpx;
				margin-top: 15rpx;
	
				.info {
					line-height: 50rpx;
	
					.videoAdTitle {
						color: #3a3a3a;
						font-size: 30rpx;
						font-weight: 450;
					}
	
					.award {
						color: #3a3a3a;
						font-size: 28rpx;
					}
	
					.award .span {
						color: #7966ff;
						margin-left: 10rpx;
						margin-right: 10rpx;
					}
				}
	
				.btn {
					align-items: center;
					background-color: rgba(81, 181, 237, .1);
					border-radius: 50rpx;
					color: #7966ff;
					display: flex;
					font-size: 28rpx;
					height: 60rpx;
					justify-content: center;
					padding-left: 25rpx;
					padding-right: 25rpx;
					position: relative;
				}
			}
		}
	}
</style>
