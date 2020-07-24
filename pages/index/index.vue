<template>
	<view class="content">
		<!-- 顶部导航条 -->
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			<view
				class="cu-item"
				:class="index == TabCur ? 'text-green cur' : ''"
				v-for="(item, index) in nav"
				:key="index"
				@tap="tabSelect"
				:data-id="index"
				:data-pageID="item.pageId"
			>
				{{ item.name }}
			</view>
		</scroll-view>
		<!-- 轮播组件-->
		<view class="banner">
			<swiper class="screen-swiper" :class="dotStyle ? 'square-dot' : 'round-dot'" :indicator-dots="true" :circular="true"  :autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item, index) in swiperImg" :key="index">
					<image :src="item.img.url" mode="aspectFill" ></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			TabCur: 0,
			scrollLeft: 0,
			nav: [],
			cardCur: 0,
			swiperImg:[],
			dotStyle: true
		};
	},
	methods: {
		tabSelect(e) {
			//导航跳转链接 e.target.dataset.pageid
			// console.log(e.target.dataset.pageid);
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
		},
		// 初始化towerSwiper
		TowerSwiper(name) {
			let list = this[name];
			for (let i = 0; i < list.length; i++) {
				list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2));
				list[i].mLeft = i - parseInt(list.length / 2);
			}
			this.swiperImg = list;
		},
		getNav(){// get导航组件数据
			uni.request({
				url: '/api/v3/m1/cms/nav?pageId=5da95458b896310cf66ba97f',
				method: 'GET',
				success: res => {
					// console.log(res.data.data.nav);
					this.nav = res.data.data.nav;
				}
			});
		},
		getImg(){ //get图片数据组
			uni.request({
				url: '/api/v3/m1/cms/page/detail?pageId=5da95458b896310cf66ba97f',
				method: 'GET',
				success: res => {
					this.swiperImg = res.data.data.data[0].data
					console.log(res.data.data.data[0].data);
				}
			});
		}
	},
	mounted() {
		// 初始化轮播组件
		this.TowerSwiper('swiperImg');
		this.getNav();
		this.getImg();
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
.text-green,
.line-green,
.lines-green {
	color: #d62f81;
}
.banner {
	height: 300px;
	width: 100%;
	margin-top: 18px;
	padding: 0 10px;
}
.uni-swiper-dot {
	width: 12px !important;
	height: 3px !important;
}
.uni-swiper-dot-active{
	width: 16px;
	background-color: #d62f81 !important;
}
</style>
