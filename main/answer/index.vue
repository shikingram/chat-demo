<template>
	<view class="container">
		<view class="answer">
			<view class="ask">{{text}}</view>
			<view class="content">
				{{message}}
			</view>
		</view>
		<view class="adContainer" v-if="wxBannerAdIds.length">
			<!-- #ifdef MP-WEIXIN -->
			<ad :unit-id="wxVideoAdIds[Math.floor(Math.random() * wxVideoAdIds.length + 1) - 1]" ad-type="video" ad-theme="white"></ad>
			<!-- #endif -->
		</view>
		<view class="sheet">
			<view class="btn">
				<u-button open-type='contact' color="#7966ff" :plain="true" text="咨询客服(意见反馈)"></u-button>
			</view>
			<view class="btn">
				<u-button @click="handleCopy" iconColor="#ffffff" color="#7966ff" icon="file-text" text="复制问题答案">
				</u-button>
			</view>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message: '',
				text: ''
			};
		},
		async onLoad({text,channel}) {
			this.text = text
			const that = this
			uni.showLoading({
				title: 'AI处理中',
				mask: true
			})
			let res = await uniCloud.callFunction({
				name: 'openai',
				data: {
					messages:[{
						content: that.text,
						role: 'user'
					}],
					channel:channel,
					appcode:that.appcode,
					userId: that.vuex_user._id
				},
			})
			uni.hideLoading()
			if(res.result.success){
				that.getUser()
				that.message = res.result.content
				this.$forceUpdate()
			}else{
				uni.showToast({
					title: res.result.msg,
					icon: 'none'
				})
				that.message = res.result.msg
			}
		},
		methods: {
			handleCopy() {
				const that = this
				uni.setClipboardData({
					data: that.message,
					success: function() {}
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
		},
	}
</script>

<style lang="scss">
	.adContainer{
		width: 90%;
		margin: 0 auto;
		margin-top: 100rpx;
	}
	.answer {
		width: 90%;
		margin: 0 auto;
		margin-top: 30rpx;
		z-index: -1;
	
		.ask {
			font-size: 36rpx;
			font-weight: bolder;
		}
	
		.content {
			margin-top: 30rpx;
			color: #606266;
		}
	}
	.action {
		width: 92%;
		position: fixed;
		bottom: 0rpx;
		top: 0rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 80rpx;
		align-items: center;
		box-shadow: 10rpx 10rpx 10rpx #eee;
		padding: 30rpx;
		z-index: 999;
		background-color: #fff;
	}

	.sheet {
		width: 100%;
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		bottom: env(safe-area-inset-bottom);
		padding: 30rpx 0rpx;
		background-color: #fff;
		box-shadow: -10rpx -10rpx 10rpx #eee;

		.btn {
			width: 42%;

			.u-button {
				height: 90rpx;
			}
		}
	}
</style>
