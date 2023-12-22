<template>
	<view class="container">
		<view class="form">
			<view class="logo">
				<u--image src="/static/logo.png"
					shape="circle" width="200rpx" height="200rpx">
				</u--image>
			</view>
			<u-transition :show="true" mode="slide-left">
				<view class="title">智撩AI问答机器人</view>
			</u-transition>
			<u-transition :show="true" mode="slide-right">
				<view class="desc">智你困境，撩你烦恼，机器人帮你写答案！</view>
			</u-transition>
			<view class="btn-group">
				<view class="btn" v-on:click="onToForm">
					<u-button shape="circle" iconColor="#ffffff" color="#7966ff" icon="chat-fill" text="智撩AI问答">
					</u-button>
				</view>
				<view class="btn" v-on:click="onToDuihua">
					<u-button shape="circle" iconColor="#ffffff" color="#7966ff" icon="weixin-fill" text="智撩AI对话">
					</u-button>
				</view>
				<view class="btn" v-on:click="toMiniProgram('wx461ff8f867f3d028')">
					<u-button shape="circle" color="#7966ff"  text="星河取图(高清原图)">
					</u-button>
				</view>
				<view class="btn" v-on:click="toMiniProgram('wx94ae52ceae00e13c')">
					<u-button shape="circle" color="#7966ff"  text="pgtp智图(壁纸原图)">
					</u-button>
				</view>
				<view class="btn">
					<u-button open-type='contact' color="#7966ff" :plain="true" text="咨询客服(意见反馈)"></u-button>
				</view>
			</view>
			<view class="adContainer" v-if="wxBannerAdIds.length">
				<!-- #ifdef MP-WEIXIN -->
				<ad :unit-id="wxBannerAdIds[Math.floor(Math.random() * wxBannerAdIds.length + 1) - 1]"></ad>
				<!-- #endif -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				admin: false
			};
		},
		async onLoad({userId}) {
			if(userId) uni.setStorageSync('userId', userId)
		},
		onShareAppMessage: function() {
			return {
				title: '智撩AI问答',
				imageUrl: '/static/wenda.png',
				path: '/pages/index/index?userId='+this.vuex_user._id
			};
		},
		onShareTimeline: function() {
			return {
				title: '智撩AI问答',
				imageUrl: '/static/wenda.png',
				path: '/pages/index/index?userId='+this.vuex_user._id
			};
		},
		methods: {
			dianyingpiao() {
				uni.navigateToMiniProgram({
					appId: 'wx6c405b6b53d74d46',
					success(res) {
						// 打开成功
					}
				})

			},
			toMiniProgram(appId) {
				uni.navigateToMiniProgram({
					appId: appId,
					success(res) {
						// 打开成功
					}
				})

			},
			async handlefig(code) {
				
			},
			onToForm() {
				uni.navigateTo({
					url: '/main/form/index'
				})
			},
			onToDuihua() {
				uni.navigateTo({
					url: '/main/duihua/duihua'
				})
			},
			onToWeb(url) {
				uni.navigateTo({
					url: '/main/webview/webview?url=' + encodeURIComponent(url)
				})
			},
		}
	}
</script>

<style lang="scss">
	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 220rpx;

		.title {
			font-size: 38rpx;
			font-weight: bolder;
			margin-top: 15rpx;
		}

		.desc {
			margin-top: 15rpx;
			font-size: 28rpx;
			color: #666;
		}
		.adContainer{
			width: 80%;
			margin: 10rpx auto;
		}
		.btn-group {
			width: 80%;

			.btn {
				margin: 30rpx 0rpx;

				.u-button {
					height: 100rpx;
				}
			}
		}
	}
</style>
