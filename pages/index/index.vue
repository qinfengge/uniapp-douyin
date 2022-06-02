<template>
	<view class="content">
		<video id="video" :src="dataList[0].url" autoplay="true" :loop="isLoop" :http-cache="true" :controls="showControllers" show-fullscreen-btn="true"
		 show-loading="true" @loadedmetadata="loadData"  @tap="PauseVideo" play-btn-position="center" @fullscreenchange="disableIcon" @ended="playEnd"
		 objectFit="contain" style="width: 400px; height: 800px;"></video>
		 <image v-show="!isPlay" src="../../static/play_1.png" class="playBtn" @tap="playVideo"></image>
		<text style="margin: 15px 0;" v-model="dataList[0].name">{{dataList[0].name}}</text>
		<view class="memu">
			<switch :checked="isAutoNext" @change="autoNext" />自动连播
			<button @click="preVideo()">上一个视频</button>
			<button @click="nextVideo()">下一个视频</button>
			<switch :checked="isExRandom" @change="exRandom" />视频去重
		</view>
	</view>
</template>

<script>
	import kaiVideoSwiper from '@/components/kai-video-swiper/kai-video-swiper.nvue'
	import {randomList, exRandom, findById} from '../../common/api.js'
	export default {
		data() {
			return {
				url: '',
				showControllers: false,
				dataList: [],
				isLoop: true,
				isPlay: true,
				isAutoNext: false,
				isExRandom: false,
				preCount: 1,
				hasPlayedList: []
			}
		},
		onLoad() {
			this.addData()
			this.initStorage()
		},
		onReady: function(res) {
		        // #ifndef MP-ALIPAY
		        this.videoContext = uni.createVideoContext('video')
		        // #endif
		    },
		methods: {
			addData(){
				randomList().then(res =>{
					console.log(res)
					this.dataList = res[1].data.data
					
					// for(var i=0;i<res[1].data.data.length;i++){
					// 	this.setStorage(res[1].data.data[i].id)
					// }
				})
			},
			addExData(){
				uni.getStorage({
					key: 'hasPlayedList',
					success: function (res) {
						console.log(res.data);
						exRandom(res.data).then(res =>{
							console.log(res)
							this.dataList = res[1].data.data
						})
					}
				});
			},
			loadData(e){
				// console.log(e)
				if(e.detail.duration >=60){
					this.showControllers = true
				}else{
					this.showControllers = false
				}
			},
			preVideo(){
				const _this = this
				uni.getStorage({
					key: 'hasPlayedList',
					success:function(res){
						if(res.data.length == 0){
							uni.showToast({
								icon:'error',
								duration:2000,
								title: '没有上一条视频'
							})
						}else{
							if(_this.preCount<=res.data.length){
								console.log("count======="+_this.preCount)
								console.log(res.data[res.data.length-_this.preCount])
								const preId = res.data[res.data.length-_this.preCount]
								findById(preId).then(res =>{
									_this.dataList.unshift(res[1].data.data)
								})
								_this.preCount++
							}
							else{
								uni.showToast({
									icon:'error',
									duration:2000,
									title: '没有上一条视频'
								})
							}
						}
					}
				})
			},
			nextVideo(){
				this.isPlay = true
				this.preCount = 1
				if(this.dataList.length<=2){
					
					if(!this.isExRandom){
						randomList().then(res =>{
							console.log(res)
							for(var i=0;i<res[1].data.data.length;i++){
								this.dataList.push(res[1].data.data[i])
							}
						})
						this.dataList.shift()
					}else{
						this.setStorage(this.dataList[0].id)
						this.setStorage(this.dataList[1].id)
						const _this = this
						uni.getStorage({
							key: 'hasPlayedList',
							success: function (res) {
								console.log(res.data);
								exRandom(res.data).then(res =>{
									if(res[1].data.code===200){
										console.log(res)
										for(var i=0;i<res[1].data.data.length;i++){
											_this.dataList.push(res[1].data.data[i])
										}
									}else{
										uni.showToast({
											icon: 'success',
											duration: 2000,
											title: res[1].data.data
										})
										_this.isExRandom = false
										_this.nextVideo()
									}
								})
								console.log(_this.dataList)
								// this.setStorage(this.dataList[0].id)
								_this.dataList.shift()
							}
						});
					}
				}else{
					this.setStorage(this.dataList[0].id)
					this.dataList.shift()
				}
			},
			disableIcon(){
				
				this.isPlay = true
			},
			PauseVideo(){
				
					this.videoContext.pause()
					this.isPlay = false
				
			},
			playVideo(){
				
					this.videoContext.play()
					this.isPlay = true
			},
			//点击自动连播修改switch状态和视频loop状态
			autoNext(){
				if(this.isAutoNext){
					this.isAutoNext =  false
					this.isLoop = true
				}else{
					this.isAutoNext =  true
					this.isLoop = false
					console.log(this.isLoop)
				}
			},
			//视频结束后调用此方法获取下一个视频
			playEnd(){
				console.log(this.isAutoNext)
				if(this.isAutoNext){
					this.nextVideo()
				}
			},
			//把已经播放过的视频Id存放到session
			exRandom(){
				if(this.isExRandom){
					this.isExRandom = false
				}else{
					this.isExRandom = true
				}
			},
			initStorage(){
				//使用set去除重复的视频ID值
				uni.setStorage({
					key: "hasPlayedList",
					data: Array.from(new Set(this.hasPlayedList))
				})
			},
			setStorage(pid){
				this.hasPlayedList.push(pid)
				this.initStorage()
				uni.getStorage({
					key: 'hasPlayedList',
					success: function (res) {
						console.log(res.data);
					}
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.memu{
		width: 500px;
		height: 50px;
		display: flex;
		flex: content;
	}
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.playBtn{
		width: 50px;
		height: 50px;
		position: absolute;
		bottom: 500px;
	}
</style>
