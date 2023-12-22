<template>
	<view>
		<view class="">
			<view :style="{marginTop: menuButtonInfo.top + (menuButtonInfo.bottom - menuButtonInfo.top)/2+'px'}"></view>
			<view class="u-flex u-row-between u-col-center u-p-r-40">
				<view class="user u-p-l-40 u-p-r-40 u-flex u-row-left u-col-center" @click="loginClick">
					<image class="avatar" :src="vuex_user?vuex_user.avatar:'/static/avatar.png'"></image>
					<view class="u-p-l-20">
						<view class="name u-font-18">{{vuex_user?vuex_user.name:'登录/注册'}}</view>
						<view class="addr u-light-color u-p-t-10 u-font-12">有封面的红包就是有排面~</view>
					</view>
				</view>
				<!-- <view class="" style="margin-top: 100rpx;"  @click="exitClick">
					<u-icon name="/static/icon/exit.png" size="56"></u-icon>
				</view> -->
			</view>
			<view class="jifen u-flex u-row-left u-p-l-30 u-p-r-30 u-m-t-50">
				<view class="tab u-flex-col u-row-center u-col-center u-p-t-40 u-p-b-40 border-box" hover-class="hover-class" hover-stay-time="50">
					<view class="icon u-flex u-row-center u-col-center">
						<image src="/static/icon/user1.png"></image>
					</view>
					<view class="title u-main-color u-p-t-10 u-font-12">邀请好友</view>
					<view class="cont u-light-color u-p-t-10 u-font-12">+{{inviteIntegral}}积分/位</view>
					<button open-type="share" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;opacity: 0;"></button>
				</view>
				<view class="tab u-flex-col u-row-center u-col-center u-p-t-40 u-p-b-40 border-box" hover-class="hover-class" hover-stay-time="50" @click="signClick">
					<view class="icon u-flex u-row-center u-col-center" :class="isSign?'icons':''">
						<image src="/static/icon/user2.png"></image>
					</view>
					<view class="title u-main-color u-p-t-10 u-font-12">每日签到</view>
					<view class="cont u-light-color u-p-t-10 u-font-12">+{{signIntegral}}积分/天</view>
				</view>
				<view class="tab u-flex-col u-row-center u-col-center u-p-t-40 u-p-b-40 border-box" hover-class="hover-class" hover-stay-time="50" @click="adClick">
					<view class="icon u-flex u-row-center u-col-center">
						<image src="/static/icon/video.png"></image>
					</view>
					<view class="title u-main-color u-p-t-10 u-font-12">赚取积分</view>
					<view class="cont u-light-color u-p-t-10 u-font-12">+{{adIntegral}}积分/次</view>
				</view>
			</view>
			<view class="menu u-m-l-40 u-m-r-40 u-m-t-40 border-box">
				<view class="u-flex u-row-between u-p-30" hover-class="hover-class1" hover-stay-time="50" @click="recordClick">
					<view class="u-flex u-row-left">
						<image src="/static/icon/jinbi.png"></image>
						<view class="u-p-l-20">我的积分</view>
					</view>
					<view class="u-flex u-row-right">
						<view class="u-light-color u-font-12 u-p-r-10">{{vuex_user?vuex_user.integral:0}}积分</view>
						<view class="arror-right"></view>
					</view>
				</view>
				
			</view>
			<view class="adContainer u-m-40" v-if="wxVideoAdIds.length">
				<!-- #ifdef MP-WEIXIN -->
				<ad :unit-id="wxVideoAdIds[Math.floor(Math.random() * wxVideoAdIds.length + 1) - 1]" ad-type="video" ad-theme="white"></ad>
				<!-- #endif -->
			</view>
			<view class="menu u-m-l-40 u-m-r-40 u-m-t-40 border-box">
				<!-- #ifndef MP-QQ -->
				<view class="u-flex u-row-between u-p-30 border-bottom" style="position: relative;" hover-class="hover-class1" hover-stay-time="50">
					<view class="u-flex u-row-left">
						<image src="/static/icon/kefu.png"></image>
						<view class="u-p-l-20">联系客服</view>
					</view>
					<view class="u-flex u-row-right">
						<view class="arror-right"></view>
					</view>
					<button open-type="contact" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;opacity: 0;"></button>
				</view>
				<!-- #endif -->
				<view class="u-flex u-row-between u-p-30" hover-class="hover-class1" hover-stay-time="50" @click="systemClick" v-if="vuex_user.system == 1">
					<view class="u-flex u-row-left">
						<image src="/static/icon/qianbao.png"></image>
						<view class="u-p-l-20">管理后台</view>
					</view>
					<view class="u-flex u-row-right">
						<view class="arror-right"></view>
					</view>
				</view>
			</view>
			<view class="quit u-text-center u-p-t-40" v-if="vuex_user" @click="exitClick">退出登录</view>
			<view class="" style="height: 180rpx;"></view>
		</view>
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
	let videoAd = null;
	// 获取系统状态栏的高度
	let menuButtonInfo = {};
	// 如果是小程序，获取右上角胶囊的尺寸信息，避免导航栏右侧内容与胶囊重叠(支付宝小程序非本API，尚未兼容)
	// #ifdef MP-WEIXIN || MP-BAIDU || MP-TOUTIAO || MP-QQ
	menuButtonInfo = uni.getMenuButtonBoundingClientRect();
	// #endif
	
	import models from '@/components/model/model.vue'
	import wxLogin from '@/components/wxLogin/wxLogin.vue'
	export default {
		components:{
			models,
			wxLogin
		},
		data() {
			return {
				menuButtonInfo: menuButtonInfo,
				loadShow: true,
				// 签到
				isSign: false,
				signShow: false,
				signTitle: '',
				signIntegral: 0,
				inviteIntegral: 0,
				adIntegral: 0,
				// 登录弹窗
				loginShow: false,
			}
		},
		async onLoad() {
			let that = this
			if(that.vuex_user){
				that.getUser()
			}
			that.loadShow = false
			
		},
		async onShow(){
			let that = this
			await that.getConfig()
			that.adLoad()
			if(that.vuex_user){
				that.getSign()
			}
		},
		methods: {
			loginClick(){
				var that = this
				if(!that.vuex_user){
					that.loginShow = true
					return
				}else{
					// #ifdef MP-WEIXIN
					that.$u.vuex('showWxLogin',true)
					// #endif
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
			exitClick(){
				var that = this
				uni.showModal({
				    title: '温馨提示',
				    content: '确定退出当前登录账户？',
					confirmText: '退出',
					confirmColor: '#7966ff',
				    success: async function (res) {
				        if (res.confirm) {
				            that.$u.vuex('vuex_user','')
				            that.isSign = false
				        }
				    }
				})
			},
			systemClick(){
				uni.navigateTo({
					url: '/system/system'
				})
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
			async getConfig(){
				let that = this
				let config = await uniCloud.callFunction({
					name: 'config_map',
					data: {
						appcode: that.appcode,
						'keys': ['signIntegral', 'inviteIntegral', 'adIntegral']
					},
				})
				if(config.result.success) {
					that.signIntegral = parseInt(config.result.data[0])
					that.inviteIntegral = parseInt(config.result.data[1])
					that.adIntegral = parseInt(config.result.data[2])
				}
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
					that.signTitle = "<p style='font-weight: 550;font-size: 16px;'>恭喜成功获取积分</p><p style='padding-top: 10px;'>获得<span class='num'>"+data.result.integral+"</span>积分</p>"
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
		},
		onShareAppMessage(res) {
			return {
				title: '我等风也等你，近听水无声~',
				imageUrl: '/static/share_bg.jpg',
				path: '/pages/index/index?userId='+this.vuex_user._id
			}
		},
		onShareTimeline(res) {
			return {
				title: '我等风也等你，近听水无声~',
				imageUrl: '/static/share_bg.jpg',
				path: '/pages/index/index'
			}
		}
	}
</script>

<style lang="scss">
	.user{
		.avatar{
			width: 116rpx;
			height: 116rpx;
			border-radius: 116rpx;
		}
		.name{
			font-size: 40rpx;
			font-weight: 500;
		}
	}
	.jifen{
		.tab{
			position: relative;
			background-color: #FFFFFF;
			width: 234rpx;
			margin-right: 10rpx;
			margin-left: 10rpx;
			.title{
				font-weight: 550;
			}
			.icon{
				width: 80rpx;
				height: 80rpx;
				border-radius: 80rpx;
				image{
					width: 46rpx;
					height: 46rpx;
				}
			}
		}
		.tab:nth-child(1) .icon{
			background-image: linear-gradient(to bottom right, #8acfaf, #5FBB92, #8acfaf);
			margin-right: 10rpx;
		}
		.tab:nth-child(2) .icon{
			background-image: linear-gradient(to bottom right, #f0d35c, #F0B347, #f0d35c);
			margin-right: 10rpx;
		}
		.tab:nth-child(2) .icons{
			background-image: linear-gradient(to left top, #dadada , #dadada, #dadada);
		}
		.tab:nth-child(3) .icon{
			background-image: linear-gradient(to bottom right, #8c99de, #836AF0, #8c99de);
		}
	}
	.border-box{
		box-shadow: 0 0px 24px rgba(231, 231, 231, 0.65);
		border-radius: 16rpx;
	}
	.menu{
		image{
			width: 38rpx;
			height: 38rpx;
		}
	}
	.border-bottom{
		border-bottom: 1rpx solid #F6F6F6;
	}
	.hover-class{
		transform:scale(0.95);
		transition: all 0.2s;
	}
	.hover-class1{
		background-color: #F8F8F8;
	}
	.arror-right{
		width: 15rpx;
		height: 15rpx;
		border-top: 3rpx solid #a9acb3;
		border-right: 3rpx solid #a9acb3;
		transform: rotate(45deg);
	}
	.quit{
		color: #fa6868;
	}
</style>
