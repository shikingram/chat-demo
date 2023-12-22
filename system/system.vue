<template>
	<view>
		<view class="top relative u-flex u-row-around u-p-b-60 u-p-l-30 u-p-r-30">
			<view class="u-flex-col u-col-center">
				<view class="u-p-b-15 nums">200.89</view>
				<view class="utit">资金池</view>
			</view>
			<view class="u-flex-col u-col-center">
				<view class="u-p-b-15 nums">200.89</view>
				<view class="utit">总收入</view>
			</view>
			<view class="u-flex-col u-col-center">
				<view class="u-p-b-15 nums">200.89</view>
				<view class="utit">总支出</view>
			</view><!-- 
			<view class="nums">后台管理</view> -->
		</view>
		<view class="relative bg-white u-p-30 border-bottom">
			<view class="title">数据统计</view>
		</view>
		<view class="grid u-text-center u-flex u-row-between u-flex-wrap">
			<view class="tab u-flex-col u-row-center">
				<view class="u-p-b-15"><text class="num">{{userCount}}</text></view>
				<view class="">用户数</view>
			</view>
		</view>
		<u-gap height="15" bg-color="#F5F6F8"></u-gap>
		<view class="relative bg-white u-p-30 border-bottom">
			<view class="title">系统菜单</view>
		</view>
		<view class="u-flex u-row-left u-col-center u-flex-wrap u-text-center u-p-t-30 u-p-b-30">
			<view class="tab u-flex u-flex-col u-row-center" @click="configClick">
				<u-icon name="/system/static/icon/guanyu.png" size="22"></u-icon>
				<view class="u-p-t-10">程序配置</view>
			</view>
			<view class="tab u-flex u-flex-col u-row-center" @click="userClick">
				<u-icon name="/system/static/icon/kefu1.png" size="22"></u-icon>
				<view class="u-p-t-10">用户管理</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navbarBackground: {
					background: 'rgba(0,0,0,0)'
				},
				userCount: 0,
			}
		},
		onLoad() {
			this.getUserCount()
		},
		methods: {
			async getUserCount(){
				let count = await uniCloud.callFunction({
					name: 'query_count',
					data: {
						dbName: "wx_user"
					},
				})
				this.userCount = count.result
			},
			configClick(){
				uni.navigateTo({
					url: '/system/config/configList'
				})
			},
			userClick(){
				uni.navigateTo({
					url: '/system/user/userList'
				})
			}
		}
	}
</script>

<style lang="scss">
	.tab{
		width: 33.33%;
		padding: 30rpx;
	}
	.top{
		width: 100vw;
		height: 460rpx;
		margin-top: -250rpx;
		padding-top: 250rpx;
		background-color: #7966ff;
		position: fixed;
		top: 0;
	}
	.title{
		border-left: 6rpx solid #7966ff;
		padding-left: 15rpx;
		line-height: 28rpx;
		color: #000000;
		font-weight: 550;
	}
	.border-bottom{
		border-bottom: 1rpx solid #f2f4fd;
	}
	.relative{
		position: relative;
	}
	.bg-white{
		background-color: #FFFFFF;
	}
	.grid{
		.tab{
			width: 33%;
			height: 180rpx;
		}
	}
	.num{
		font-weight: 550;
		font-size: 48rpx;
		color: #7966ff;
	}
	.nums{
		color: #fff;
		font-size: 36rpx;
		font-weight: 550;
	}
	.utit{
		color: #fff;
	}
</style>