<template>
	<view>
		<view class="menu u-m-l-30 u-m-r-30">
			<u-tabs :list="tagList" :scrollable="false" lineColor="#7966ff" :current="tagCurrent" @change="cateClick"></u-tabs>
		</view>
		<view class="" style="padding-top: 80rpx;">
			<view class="" v-for="(item, index) in userList" :key="index">
				<!-- <u-gap height="15" bg-color="#F5F6F8"></u-gap> -->
				<view class="u-flex u-row-left u-col-top u-p-l-40 u-p-r-40 u-p-t-20 u-p-b-20 border-top">
					<image class="avatar" :src="item.avatar"></image>
					<view class="btns u-flex u-row-between u-p-l-20 u-p-t-10">
						<view class="">
							<view class="title u-font-16 u-line-1">
								{{item.name}}
							</view>
							<view class="u-tips-color u-p-t-10 u-font-12">
								积分：{{item.integral}}
							</view>
						</view>
						<view class="tags_ tag-active_" @click="moreClick(item._id, item.status)">操作</view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="noData"
		class="u-flex u-flex-col u-col-center"
		style="width: 100vw;height: 50vh;padding-top: 200rpx;background-color: #FFFFFF;">
			<view class="">
				<image style="width: 300rpx;height: 300rpx;" src="/static/nodata.png"></image>
			</view>
			<view class="u-tips-color u-font-12 u-p-t-30">
				没有数据哦~
			</view>
		</view>
		
		<view class="" v-if="!noData">
			<u-loadmore :status="loadStatus" :fontSize="12" :marginTop="15" :marginBottom="15" color="#B8B8B8" iconColor="#B8B8B8"/>
		</view>
		<view class="safe-area-inset-bottom">
			<view class="" style="height: 1px;"></view>
		</view>
		
		<u-action-sheet :actions="sheetList" :closeOnClickOverlay="true" :closeOnClickAction="true" :safeAreaInsetBottom="true" :show="sheetShow"  @select="sheetClick" @close="sheetShow=false"></u-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tagCurrent: 0,
				tagList: [{
					name: '正常'
				}, {
					name: '封禁'
				}],
				sheetList: [],
				userId: '',
				// 用户列表
				userList: [],
				sheetShow: false,
				// 无数据
				noData: false,
				// 分页
				pageIndex: 0,
				loadStatus: 'loadmore',
			}
		},
		async onLoad() {
			var that = this
			await that.getUserList(1)
		},
		methods: {
			async getUserList(on){
				var that = this
				that.loadStatus ='loading'
				var newList = that.userList
				if(on == 1){
					that.userList = []
					newList = []
					that.pageIndex = 0
				}
				
				that.pageIndex = that.pageIndex + 1
				var filter = {}
				if(that.tagCurrent == 1) filter = {'status': 2}
				else filter = {'status': 1}
				let list = await uniCloud.callFunction({
					name: 'query_list',
					data: {
						dbName: "wx_user",
						filter: filter,
						order: {
							name: 'time',
							type: 'desc'
						},
						pageIndex: that.pageIndex,
						pageSize: 15
					},
				})
				
				if(list.result.hasMore) that.loadStatus = 'loadmore'
				else that.loadStatus = 'nomore'
				
				newList = newList.concat(list.result.data)
				that.userList = newList
				
				if(that.userList.length == 0) that.noData = true
				else that.noData = false
			},
			cateClick(e){
				if(e.index == this.tagCurrent) return
				this.tagCurrent = e.index
				this.getUserList(1)
			},
			moreClick(id, status){
				var that = this
				that.userId = id
				if(status === 1){
					that.sheetList = [{
						name: '他的积分' 
					},{
						name: '封禁账户' 
					}]
				}
				if(status === 2){
					that.sheetList = [{
						name: '他的积分' 
					},{
						name: '解除封禁' 
					}]
				}
				that.sheetShow = true
			},
			async sheetClick(e){
				var that = this
				var text = e.name
				if(text === '封禁账户' || text === '解除封禁'){
					
					var status = 1, msg = "确定解除封禁状态吗？"
					if(text === '封禁账户') status = 2, msg = "确定封禁当前账户吗？"
					
					uni.showModal({
						title: '封禁提示',
						content: msg,
						confirmText: '封禁',
						confirmColor: '#7966ff',
						success: async function (res) {
							if (res.confirm) {
								uni.showLoading({
									mask: true,
									title: '加载中...'
								})
								let query = await uniCloud.callFunction({
									name: 'query_edit',
									data: {
										dbName: 'wx_user',
										filter: {
											'_id': that.userId
										},
										upData: {
											status: status
										}
									},
								})
								if(query.result.success){
									that.getUserList(1)
								}
								uni.showToast({
									icon: 'none',
									title: query.result.msg,
									mask: true,
									duration: 1000
								})
							}
						}
					})
				}else if(text === '他的积分'){
					uni.navigateTo({
						url: `/main/integral/record?userId=${that.userId}`
					})
				}
			}
		},
		onReachBottom(){
			let that = this;
			if(that.loadStatus == 'nomore') return
			that.getUserList()
		},
	}
</script>

<style lang="scss">
	.menu{
		position: fixed;
		left: 0;
		width: calc(100% - 60rpx);
		z-index: 99;
		background-color: #FFFFFF;
	}
	
	.tags_{
		font-size: 12px;
		color: #909399;
		border: 1rpx solid #B8B8B8;
		border-radius: 8rpx;
		line-height: 46rpx;
		padding: 0 20rpx;
	}
	
	.tag-active_{
		background-color: #7966ff;
		color: #fff;
		box-shadow: 0px 0px 10px #f2f4fd;
		animation: tiaobig 0.8s ease-in-out alternate infinite;
		animation-iteration-count:1;
		border: none;
	}
	
	.avatar{
		width: 90rpx;
		height: 90rpx;
		border-radius: 90rpx;
	}
	.btns{
		width: 580rpx;
		.title{
			font-weight: 550;
		}
	}
	.border-top{
		border-top: 1rpx solid #F3F4F6;
		position: relative;
	}
	@keyframes tiaobig {
		0% {
			transform: scale(0.92);
		}
		25% {
			transform: scale(1.08);
		}
		50% {
			transform: scale(0.96);
		}
		75% {
			transform: scale(1.06);
		}
		100% {
			transform: scale(0.94);
		}
	}
</style>