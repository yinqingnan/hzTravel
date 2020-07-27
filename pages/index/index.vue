<template>
	<view class="content">
		<!-- 顶部导航条切换 -->
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
		<!-- 首页界面 -->
		<view class="home" v-if="pageShow">
			<!-- 轮播组件-->
			<view class="banner">
				<swiper
					class="screen-swiper"
					:class="dotStyle ? 'square-dot' : 'round-dot'"
					:indicator-dots="true"
					:circular="true"
					:autoplay="true"
					interval="5000"
					duration="500"
				>
					<swiper-item v-for="(item, index) in swiperImg" :key="index"><image :src="item.img.url" mode="aspectFill"></image></swiper-item>
				</swiper>
			</view>
			<!-- MainNavIcon -->
			<view class="Navgroup">
				<ul class="MainNavIcon">
					<li v-for="(item, index) in MainNavIcon" :key="index">
						<image :src="item.img" mode=""></image>
						<text class="imglabel">{{ item.label }}</text>
					</li>
				</ul>
				<ul class="VideNavIcon">
					<li v-for="(item, index) in VideNavIcon" :key="index">
						<image :src="item.img" mode=""></image>
						<text class="imglabel2">{{ item.label }}</text>
					</li>
				</ul>
			</view>
			<view class="grouptltle">
				<!-- 旅行日志 -->
				<view><image :src="travelimg" mode="" style="width: 100%;height: 64rpx;"></image></view>
				<view class="uni-padding-wrap interval">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<swiper class="swiper" :indicator-dots="false" :autoplay="false" style="width: 100%;height: 678rpx;">
								<swiper-item v-for="(item, index) in traveljournalIMg" :key="index" style="height: 100%;width: 100%;">
									<image :src="item.img.url" mode="" style="width: 98%;height: 100%;"></image>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
				<!-- 主题推荐 -->
				<view><image :src="themeimg" mode="" style="width: 100%;height: 64rpx;"></image></view>
				<view class="uni-padding-wrap interval">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<swiper class="swiper" :indicator-dots="false" :autoplay="false" style="width: 100%;height:360rpx;">
								<swiper-item v-for="(item, index) in themeIMgArr" :key="index" style="height: 100%;width: 100%;">
									<image :src="item.img.url" mode="" style="width: 98%;height: 100%;"></image>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
				<!-- 大牌酒店 -->
				<view><image :src="hotelimg" mode="" style="width: 100%;height: 64rpx;"></image></view>
				<view class="hotel">
					<ul class="list_group">
						<li v-for="(item, zIndex) in hotelarr" :key="zIndex" class="list_effect">
							<image :src="item.img" mode=""></image>
							<text>{{ item.title }}</text>
							<text>{{ item.subtitle }}</text>
							<ul>
								<li v-for="(el, zIndex1) in item.mark" :key="zIndex1">
									<view>{{ el.name }}</view>
								</li>
							</ul>
							<text>￥{{ price(item.price) }}起/人</text>
							<text>{{ item.tip_mark }}</text>
						</li>
					</ul>
				</view>
				<!-- 火辣四川 -->
				<view><image :src="sichuanimg" mode="" style="width: 100%;height: 64rpx;"></image></view>
				<view class="hotel">
					<ul class="list_group">
						<li v-for="(item, zIndex) in sichuanarr" :key="zIndex" class="list_effect">
							<image :src="item.img" mode=""></image>
							<text>{{ item.title }}</text>
							<text>{{ item.subtitle }}</text>
							<ul>
								<li v-for="(el, zIndex1) in item.mark" :key="zIndex1">
									<view>{{ el.name }}</view>
								</li>
							</ul>
							<text>￥{{ price(item.price) }}起/人</text>
							<text>{{ item.tip_mark }}</text>
						</li>
					</ul>
				</view>
				<!-- 五彩云南 -->
				<view><image :src="yunnanimg" mode="" style="width: 100%;height: 64rpx;"></image></view>
				<view class="hotel" style="margin-bottom: 200rpx;">
					<ul class="list_group">
						<li v-for="(item, zIndex) in yunnanarr" :key="zIndex" class="list_effect">
							<image :src="item.img" mode=""></image>
							<text>{{ item.title }}</text>
							<text>{{ item.subtitle }}</text>
							<ul>
								<li v-for="(el, zIndex1) in item.mark" :key="zIndex1">
									<view>{{ el.name }}</view>
								</li>
							</ul>
							<text>￥{{ price(item.price) }}起/人</text>
							<text>{{ item.tip_mark }}</text>
						</li>
					</ul>
				</view>
			</view>
		</view>
		<!-- 跳转切换页面 -->
		<view class="homeTWO" v-else style="margin-top: 120rpx;width: 100%;">
			<view>
				<ul class="subsidiary">
					<li v-for="(item, zIndex) in subsidiary" :key="zIndex" class="subsidiary_li">
						<image :src="item.img" mode=""></image>
						<text>
							<span>{{ item.title }}</span>
						</text>
						<text>{{ item.subtitle }}</text>
						<view>
							<ul>
								<li v-for="(el, zIndex1) in item.mark" :key="zIndex1">
									<view>{{ el.name }}</view>
								</li>
							</ul>
							<text>￥{{ price(item.price) }}起/人</text>
						</view>
						<text>{{ item.tip_mark }}</text>
					</li>
				</ul>
			</view>
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
			swiperImg: [],
			dotStyle: true,
			pageShow: true,
			MainNavIcon: [],
			VideNavIcon: [],
			travelimg: '',
			traveljournalIMg: [],
			themeimg: '',
			themeIMgArr: [],
			hotelimg: '',
			hotelarr: [],
			sichuanimg: '',
			sichuanarr: [],
			yunnanimg: '',
			yunnanarr: [],
			subsidiary: []
		};
	},
	methods: {
		price(num) {
			num = parseInt(num);
			var result = [],
				counter = 0;
			num = (num || 0).toString().split('');
			for (var i = num.length - 1; i >= 0; i--) {
				counter++;
				result.unshift(num[i]);
				if (!(counter % 3) && i != 0) {
					result.unshift(',');
				}
			}
			return result.join('');
		},
		tabSelect(e) {
			//导航跳转链接 e.target.dataset.pageid
			// console.log(e.target.dataset.pageid);
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
			let pagenum = e.target.dataset.id;
			if (pagenum == 0) {
				this.pageShow = true;
			} else if (pagenum == 1) {
				this.pageShow = false;
				let obj = {
					'ids[0]': 1967,
					'ids[1]': 1965,
					'ids[2]': 2213,
					'ids[3]': 2290
				};
				this.switchpage(obj);
			} else if (pagenum == 2) {
				this.pageShow = false;
				let obj = {
					'ids[0]': 2369,
					'ids[1]': 2350
				};
				this.switchpage(obj);
			} else if (pagenum == 3) {
				this.pageShow = false;
				let obj = {
					'ids[0]': 2193,
					'ids[1]': 2190,
					'ids[2]': 2289,
					'ids[3]': 2288,
					'ids[4]': 2156
				};
				this.switchpage(obj);
			} else if (pagenum == 4) {
				this.pageShow = false;
				let obj = {
					'ids[0]': 1479,
					'ids[1]': 1936,
					'ids[2]': 1983,
					'ids[3]': 1832,
					'ids[4]': 1460,
					'ids[5]': 1914
				};
				this.switchpage(obj);
			} else {
				this.pageShow = false;
			}
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
		getNav() {
			// get导航组件数据
			uni.request({
				url: '/api/v3/m1/cms/nav?pageId=5da95458b896310cf66ba97f',
				method: 'GET',
				success: res => {
					// console.log(res.data.data.nav);
					this.nav = res.data.data.nav;
				}
			});
		},
		getImg() {
			//get图片数据组
			uni.request({
				url: '/api/v3/m1/cms/page/detail?pageId=5da95458b896310cf66ba97f',
				method: 'GET',
				success: res => {
					this.swiperImg = res.data.data.data[0].data;
					this.traveljournalIMg = res.data.data.data[2].data;
					this.travelimg = res.data.data.data[1].data[0].img.url;
					this.themeimg = res.data.data.data[3].data[0].img.url;
					this.themeIMgArr = res.data.data.data[4].data;
					this.hotelimg = res.data.data.data[5].data[0].img.url;
					this.sichuanimg = res.data.data.data[7].data[0].img.url;
					this.yunnanimg = res.data.data.data[9].data[0].img.url;
					console.log(res.data.data.data);
				}
			});

			uni.request({
				// VideNavIcon数据
				url: '/api/v3/m1/theme/group',
				method: 'GET',
				success: res => {
					this.VideNavIcon = res.data.data.list;
					// console.log(this.VideNavIcon)
				}
			});
			uni.request({
				// MainNavIcon 数据
				url: '/api/v3/m1/homepage/icons/a',
				method: 'GET',
				success: res => {
					this.MainNavIcon = res.data.data.list;
					// console.log(this.MainNavIcon);
				}
			});
			uni.request({
				// 大牌酒店,热辣四川,多彩云南
				url: '/api/v3/m1/product/list/by_ids',
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				data: {
					'ids[0]': 2296,
					'ids[1]': 2295,
					'ids[2]': 2365,
					'ids[3]': 2364,
					'ids[4]': 2193,
					'ids[5]': 2190,
					'ids[6]': 2289,
					'ids[7]': 2288,
					'ids[8]': 2140,
					'ids[9]': 1965,
					'ids[10]': 1967,
					'ids[11]': 2213
				},
				success: res => {
					// console.log(res.data.data.list);
					let arr = res.data.data.list;
					this.hotelarr = [];
					this.sichuanarr = [];
					this.yunnanarr = [];
					// 大牌酒店数据
					for (let i = 0; i <= 3; i++) {
						// console.log(arr[i]);
						this.hotelarr.push(arr[i]);
					}
					// 热辣四川数据
					for (let i = 4; i <= 7; i++) {
						// console.log(arr[i]);
						this.sichuanarr.push(arr[i]);
					}
					// 彩云之南数据
					for (let i = 8; i <= arr.length - 1; i++) {
						// console.log(arr[i]);
						this.yunnanarr.push(arr[i]);
					}
				}
			});
		},
		switchpage(obj) {
			uni.request({
				// 大牌酒店,热辣四川,多彩云南模拟数据
				url: '/api/v3/m1/product/list/by_ids',
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				data: obj,
				success: res => {
					console.log(res.data.data.list);
					this.subsidiary = res.data.data.list;
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
	background: #fff;
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
.nav {
	position: fixed;
	z-index: 10;
	top: 37px;
}
.text-green,
.line-green,
.lines-green {
	color: #d62f81;
}
.banner {
	height: 400rpx;
	width: 100%;
	margin-top: 18px;
	padding: 0 10px;
}
.uni-swiper-dot {
	width: 12px !important;
	height: 3px !important;
}
.uni-swiper-dot-active {
	width: 16px;
	background-color: #d62f81 !important;
}
.home {
	width: 100%;
	margin-top: 28px;
}
.MainNavIcon {
	display: flex;
	margin: 18px 18px 25px;
	justify-content: space-between;
	padding: 0;
}
.MainNavIcon > li {
	width: 25%;
	list-style: none;
}
.MainNavIcon > li >>> image {
	width: 80rpx;
	height: 80rpx;
	display: block;
	margin: 0 auto;
}
.imglabel {
	display: block;
	text-align: center;
	margin-top: 12rpx;
	font-size: 12rpx;
}
.VideNavIcon {
	display: flex;
	margin: 18px 18px 25px;
	justify-content: space-between;
	padding: 0;
}
.VideNavIcon > li {
	width: 20%;
	list-style: none;
	border-right: 0.5px solid #f0f0f0;
}
.VideNavIcon > li:last-child {
	border: 0;
}
.VideNavIcon > li >>> image {
	width: 40rpx;
	height: 40rpx;
	display: block;
	margin: 0 auto;
}
.imglabel2 {
	display: block;
	text-align: center;
	margin-top: 12rpx;
	font-size: 10rpx;
}
.Navgroup {
	margin-bottom: 30rpx;
}
.grouptltle {
	margin-left: 10px;
}
.interval {
	margin: 18px;
}

.list_group {
	display: flex;
	justify-content: space-between;
	/* margin: 18px 32px 18px 18px; */
	margin-right: 10px;
	flex-wrap: wrap;
	margin-top: 20rpx;
}
.list_effect {
	width: 48%;
	margin: 10rpx 0 20rpx 0;
	position: relative;
}
.list_effect > image {
	/* width: 330rpx; */
	width: 100%;
	height: 204rpx;
}
.list_effect > text:nth-of-type(1) {
	width: 100%;
	display: block;
	font-size: 24rpx;
	margin-bottom: 3px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	letter-spacing: 0.15px;
}
.list_effect > text:nth-of-type(2) {
	overflow: hidden;
	display: block;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-bottom: 6px;
	font-size: 20rpx;
	color: #898989;
	letter-spacing: 0.15px;
}
.list_effect > ul {
	display: flex;
	justify-content: start;
	flex-wrap: wrap;
}
.list_effect > ul > li > view {
	font-size: 9px;
	padding: 1px 3px;
	margin-right: 6px;
	margin-bottom: 6px;
	list-style: none;
	border: 0.5px solid rgba(193, 67, 116, 0.2);
	padding: 3px 6px;
	color: #c14374;
	letter-spacing: 0.2px;
}
.list_effect > text:nth-of-type(3) {
	font-size: 12px;
	letter-spacing: 0.3px;
	font-family: PingFangSC-Medium;
	color: #c04374;
	white-space: nowrap;
}
.list_effect > text:nth-of-type(4) {
	position: absolute;
	top: 0;
	left: 0;
	font-size: 20rpx;
	padding: 1px 3px;
	left: 9px;
	color: #fff;
	background: rgba(0, 0, 0, 0.5);
	border-radius: 0 0 3px 3px;
}
.subsidiary > li {
	margin: 30rpx 15px;
	position: relative;
}
.subsidiary > li:last-child {
	margin-bottom: 120rpx;
}
.subsidiary > li > image {
	width: 100%;
}

.subsidiary_li > text:nth-of-type(1) {
	font-family: PingFangSC-Medium;
	font-size: 30rpx;
	color: #333;
	letter-spacing: 0;
	display: block;
	font-weight: 500;
	margin-bottom: 6px;
}

.subsidiary_li > text:nth-of-type(2) {
	font-family: PingFangSC-Light;
	font-size: 11px;
	color: #898989;
	letter-spacing: 0.15px;
	margin-bottom: 9px;
}
.subsidiary_li > text:nth-of-type(2) span:after {
	content: '';
	display: inline-block;
	width: 1px;
	height: 8px;
	background: #ccc;
	margin: 0 4px;
}
.subsidiary_li > view {
	display: flex;
	justify-content: space-between;
}
.subsidiary_li > view > ul {
	display: flex;
	justify-content: start;
	flex-wrap: wrap;
}
.subsidiary_li > view > text {
	font-family: PingFangSC-Medium;
	font-size: 36rpx;
	color: #c04374;
	letter-spacing: 0.8px;
	white-space: nowrap;
}
.subsidiary_li > view > ul > li {
	list-style: none;
	border: 0.5px solid rgba(193, 67, 116, 0.2);
	padding: 3px 6px;
	font-family: PingFangSC-Light;
	font-size: 10px;
	color: #c14374;
	letter-spacing: 0.2px;
	margin-right: 9px;
}
.subsidiary_li > text:nth-of-type(3) {
	position: absolute;
	top: 0;
	left: 9px;
	padding: 3px 6px;
	color: #fff;
	background: rgba(0, 0, 0, 0.5);
	border-radius: 0 0 3px 3px;
	font-size: 12px;
}
</style>
