<template>
	<view>
		<view class="u-p-l-20 u-p-r-20">
			<view class="tab u-m-t-20" v-for="(item, index) in configList" :key="index" v-if="item.key != 'access_token'">
				<view class="u-p-l-30 u-p-r-30 u-p-t-30 u-p-b-30 border-bottom u-flex u-row-between">
					<view class="title">{{item.name}}</view>
					<view class="yes">{{item.key}}</view>
				</view>
				<view class="u-font-12 u-tips-color u-p-l-30 u-p-r-30 u-p-t-15 u-p-b-15 u-flex u-row-between">
					<view class="" style="width: 80%;">当前：{{item.val}}</view>
					<view class="">
						<view class="" v-if="item.val === true || item.val === false">
							<u-switch v-model="item.val" size="14" activeColor="#7966ff" inactiveColor="#F8F8F8" @change="switchChange(item._id, index)"></u-switch>
						</view>
						<view class="u-flex u-row-right" v-else @click="sheetClick(item._id, index)">
							<view class="u-p-r-10">操作</view>
							<view class="arror-right"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="noData"
		class="u-flex u-flex-col u-col-center"
		style="width: 100vw;height: 50vh;padding-top: 200rpx;">
			<view class="">
				<image style="width: 300rpx;height: 300rpx;" src="/static/nodata.png"></image>
			</view>
			<view class="u-tips-color u-font-12 u-p-t-30">
				没有数据哦~
			</view>
		</view>
		
		<view class="add" @click="addClick">
			<image src="/system/static/icon/add.png"></image>
		</view>

		<view class="safe-area-inset-bottom">
			<view class="" style="height: 10px;"></view>
		</view>
		
		<u-modal :show="editShow" title="配置" :showCancelButton="true" confirmText="保存" confirmColor="#7966ff" content="content" :asyncClose="true"  @confirm="editChange" @cancel="editShow=false" negativeTop="280">
			<view class="u-m-t-30" style="width: 100%">
				<view class="">
					<u--input v-model="config.name" border="surround" border-color="#F7F7F7" clearable :height="80" placeholder="填写配置的说明"/>
				</view>
				<view class="u-p-t-15">
					<u--input v-model="config.key" border="surround" border-color="#F7F7F7" clearable :height="80" placeholder="填写配置的键"/>
				</view>
				<view class="u-p-t-15">
					<u--textarea v-model="config.val" border="surround" border-color="#F7F7F7" clearable autoHeight :height="80" placeholder="填写配置的值,多个值逗号隔开"/>
				</view>
			</view>
		</u-modal>
		
		<u-action-sheet :actions="sheetList" :closeOnClickOverlay="true" :closeOnClickAction="true" :safeAreaInsetBottom="true" :show="sheetShow"  @select="sheetChange" @close="sheetShow=false"></u-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sheetList: [
					{
						name: '编辑',
					}, 
					{
						name: '删除' 
					}
				],
				configId: '-1',
				sheetShow: false,
				configList: [],
				// 无数据
				noData: false,
				// 分页
				editShow: false,
				config: {
					name: '',
					key: '',
					val: ''
				}
			}
		},
		onLoad() {
			this.getConfigList()
		},
		methods: {
			async getConfigList(){
				var that = this
				
				let list = await uniCloud.callFunction({
					name: 'query_list',
					data: {
						dbName: "wx_config",
						appcode: that.appcode,
						pageIndex: 1,
						pageSize: 100
					},
				})
				
				if(list.result.hasMore) that.loadStatus = 'loadmore'
				else that.loadStatus = 'nomore'
				
				that.configList = list.result.data.filter(item=>{
					return item.vals.some(valItem=>valItem.appcode==(that.appcode||1001))
				})
				that.configList.forEach(item=>{
					item.val = item.vals.filter(valItem=>valItem.appcode==(that.appcode||1001))[0].val
				})
				
				if(that.configList.length == 0) that.noData = true
				else that.noData = false
			},
			sheetClick (id, index){
				this.configId = id
				this.config.name = this.configList[index].name
				this.config.key = this.configList[index].key
				this.config.val = this.configList[index].val
				this.sheetShow = true
			},
			addClick(){
				this.config = {
					name: '',
					key: '',
					val: '',
					vals:[],
				}
				this.configId = '-1'
				this.editShow = true
			},
			async sheetChange(e){
				var that = this
				var text = e.name
				if(text === '编辑'){
					that.editShow = true
				}else if(text === '删除'){
					uni.showModal({
					    title: '删除提示',
					    content: '确定删除当前配置吗？',
						confirmText: '删除',
						confirmColor: '#7966ff',
					    success: async function (res) {
					        if (res.confirm) {
					            uni.showLoading({
					            	mask: true,
					            	title: '删除中...'
					            })
					            let query = await uniCloud.callFunction({
					            	name: 'query_del',
					            	data: {
					            		dbName: 'wx_config',
					            		filter: {
					            			'_id': that.configId,
					            		}
					            	},
					            })
					            if(query.result.success){
					            	that.getConfigList()
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
				}
			},
			async editChange(){
				var that = this
				if(!that.config.name){
					that.$u.toast("请填写配置的说明");
					return;
				}else if(!that.config.name){
					that.$u.toast("请填写配置的键");
					return;
				}else if(!that.config.name){
					that.$u.toast("请填写配置的值");
					return;
				}else{
					uni.showLoading({
						mask: true,
						title: '加载中...'
					})
					if(that.config.val == 'true') that.config.val = true
					else if(that.config.val == 'false') that.config.val = false
					if(that.configList.some(item=>item._id==that.configId)){
						that.config.vals = that.configList.filter(item=>item._id==that.configId)[0].vals||[]
						if(that.config.vals.some(item=>item.appcode==that.appcode)){
							that.config.vals.forEach(item=>{
								if(item.appcode==(that.appcode||1001)){
									item.val = that.config.val
								}
							})
						}else{
							that.config.vals.push({
								appcode: that.appcode||1001,
								val: that.config.val
							})
						}
					}
					let query = await uniCloud.callFunction({
						name: 'query_edit',
						data: {
							dbName: "wx_config",
							filter: {
								'_id': that.configId
							},
							upData: that.config,
							addData: that.config,
						},
					})
					if(query.result.success){
						that.getConfigList()
					}
					uni.showToast({
						icon: 'none',
						title: query.result.msg,
						mask: true,
						duration: 1000
					})
				}
				that.editShow = false
			},
			async switchChange(id, index){
				var that = this
				this.configId = id
				this.config.name = this.configList[index].name
				this.config.key = this.configList[index].key
				this.config.val = this.configList[index].val
				uni.showLoading({
					mask: true,
					title: '加载中...'
				})
				if(this.config.val == 'true') this.config.val = true
				else if(this.config.val == 'false') this.config.val = false
				if(that.configList.some(item=>item._id==that.configId)){
					that.config.vals = that.configList.filter(item=>item._id==that.configId)[0].vals||[]
					if(that.config.vals.some(item=>item.appcode==that.appcode)){
						that.config.vals.forEach(item=>{
							if(item.appcode==(that.appcode||1001)){
								item.val = that.config.val
							}
						})
					}else{
						that.config.vals.push({
							appcode: that.appcode||1001,
							val: that.config.val
						})
					}
				}
				let query = await uniCloud.callFunction({
					name: 'query_edit',
					data: {
						dbName: "wx_config",
						filter: {
							'_id': this.configId
						},
						upData: this.config
					},
				})
				if(!query.result.success){
					this.configList[index].val = !this.configList[index].val
				}
				uni.showToast({
					icon: 'none',
					title: query.result.msg,
					mask: true,
					duration: 1000
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F7F7F7;
	}
	.tab{
		background-color: #FFFFFF;
		border-radius: 12rpx;
	}
	.arror-right{
		width: 15rpx;
		height: 15rpx;
		border-top: 3rpx solid #a9acb3;
		border-right: 3rpx solid #a9acb3;
		transform: rotate(45deg);
	}
	.border-bottom{
		border-bottom: 1rpx solid #F3F4F6;
	}
	.yes{
		color: #19BE6B;
	}
	.title{
		font-weight: 550;
	}
	.add{
		animation: tiaobig 1.5s ease-in-out alternate infinite;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 140rpx;
		right: 30rpx;
		border-radius: 120rpx;
		width: 90rpx;
		height: 90rpx;
		box-shadow: 0px 1px 8px #C8C8C8;
		display: flex;
		align-items: center;
		justify-content: center;
		image{
			min-width: 106rpx;
			min-height: 106rpx;
			height: 106rpx;
			width: 106rpx;
		}
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