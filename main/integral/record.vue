<template>
	<view>
		<view class="top">
			<view class="icon u-flex u-row-center u-col-center u-p-t-20">
				<image src="@/static/icon/jinbi1.png"></image>
			</view>
			<view class="kapian u-flex-col u-row-center u-col-center u-p-t-30">
				<view class="price">{{vuex_user.integral}}</view>
				<view class="shuom u-font-12 u-tips-color u-p-t-10">当前可用积分</view>
			</view>
		</view>
		<view class="u-p-l-40 u-p-r-40">
			<view class="u-font-18 u-m-t-80 u-m-b-30 title">积分明细</view>
			<view class="safe-area-inset-bottom">
				<block v-for="(item,index) in recordList" :key="index">
					<view class="u-flex u-row-between u-col-center border-bottom u-p-t-30 u-p-b-30">
						<view class="">
							<view class="">{{item.name}}</view>
							<view class="u-font-12 u-light-color u-p-t-10">{{$u.timeFormat(item.time, 'yyyy-mm-dd hh:MM:ss')}}</view>
						</view>
						<view class="yesNum" v-if="item.mode == 1">+ {{item.integral}}</view>
						<view class="noNum" v-else>- {{item.integral}}</view>
					</view>
					<view class="adContainer u-p-t-40" v-if="index%10===0&&wxBannerAdIds.length">
						<!-- #ifdef MP-WEIXIN -->
						<ad :unit-id="wxBannerAdIds[Math.floor(Math.random() * wxBannerAdIds.length + 1) - 1]"></ad>
						<!-- #endif -->
					</view>
				</block>
			</view>
			<view v-if="noData"
			class="u-flex u-flex-col u-col-center"
			style="width: 100vw;height: 50vh;padding-top: 40rpx;background-color: #FFFFFF;">
				<view class="">
					<image style="width: 300rpx;height: 300rpx;" src="/static/nodata.png"></image>
				</view>
				<view class="u-tips-color u-font-12 u-p-t-30">
					没有数据哦~
				</view>
				<view class="adContainer u-p-t-40" v-if="wxBannerAdIds.length">
					<!-- #ifdef MP-WEIXIN -->
					<ad :unit-id="wxBannerAdIds[Math.floor(Math.random() * wxBannerAdIds.length + 1) - 1]"></ad>
					<!-- #endif -->
				</view>
			</view>
		</view>
		
		<view class="" v-if="!noData">
			<u-loadmore :status="loadStatus" :font-size="12" :margin-top="15" :margin-bottom="15" color="#B8B8B8"/>
		</view>
		<view class="safe-area-inset-bottom">
			<view class="" style="height: 1px;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				recordList: [],
				// 无数据
				noData: false,
				// 分页
				pageIndex: 0,
				loadStatus: 'loadmore',
				userId: ''
			}
		},
		async onLoad({userId}) {
			
			if(userId) this.userId = userId
			else this.userId = this.vuex_user._id
			await this.getIntegralRecord()
		},
		methods: {
			async getIntegralRecord(){
				let that = this
				
				var newList = that.recordList
				that.pageIndex = that.pageIndex + 1
				that.noData = false
				that.loadStatus = 'loading'
				
				let list = await uniCloud.callFunction({
					name: 'query_list',
					data: {
						dbName: "wx_record",
						filter: {
							"user_id": that.userId
						},
						order: {
							name: 'time',
							type: 'desc'
						},
						pageIndex: that.pageIndex,
						pageSize: 10
					},
				})
				
				if(list.result.hasMore) that.loadStatus = 'loadmore'
				else that.loadStatus = 'nomore'
				
				newList = newList.concat(list.result.data)
				that.recordList = newList
				
				if(that.recordList.length == 0) that.noData = true
				else that.noData = false
			},
		},
		onReachBottom(){
			let that = this;
			if(that.loadStatus == 'nomore') return
			that.getIntegralRecord()
		},
	}
</script>

<style lang="scss">
	.top{
		image{
			width: 120rpx;
			height: 120rpx;
		}
		.kapian{
			height: 240rpx;
			margin: -60rpx 40rpx 0 40rpx;
			background: linear-gradient(to bottom right, #6cb3ff, #866BF1);
			color: #FFFFFF;
			border-radius: 36rpx;
			box-shadow: 0px 10px 20px #a2beff;
			.price{
				font-size: 32px;
				font-weight: 700;
			}
			.shuom{
				color: #E5E5E5;
			}
		}
	}
	.yesNum{
		color: #7966ff;
		font-weight: 700;
		white-space: nowrap;
		padding-left: 10rpx;
	}
	.noNum{
		color: #bdbdbd;
		font-weight: 700;
		white-space: nowrap;
		padding-left: 10rpx;
	}
	.border-bottom{
		border-bottom: 1rpx solid #F6F6F6;
	}
	.title{
		border-left: 6rpx solid #648af1;
		padding-left: 15rpx;
		line-height: 34rpx;
		color: #808080;
	}
	.adContainer{
		width: 100%;
	}
</style>
