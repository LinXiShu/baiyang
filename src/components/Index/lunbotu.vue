<template>
	<div class="swiperContainer">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item, index) in slides" :key="index">
					<img :src="item" width="100%" >
				</swiper-slide>
			</swiper>
	</div>
</template>

<script>

import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'index',
  data () {
    return {
      msg: '',
      slides: [
				'//gfs5.gomein.net.cn/T1wGbQBQxT1RCvBVdK.jpg',
				'//gfs7.gomein.net.cn/T1bzDQB_bT1RCvBVdK.jpg',
				'//gfs6.gomein.net.cn/T1opKQB_Yv1RCvBVdK.jpg',
				'//gfs8.gomein.net.cn/T1eeY_BXdv1RCvBVdK.jpg',				'//gfs6.gomein.net.cn/T1opKQB_Yv1RCvBVdK.jpg',
				'//gfs8.gomein.net.cn/T1eeY_BXdv1RCvBVdK.jpg',				'//gfs6.gomein.net.cn/T1opKQB_Yv1RCvBVdK.jpg',
				'//gfs7.gomein.net.cn/T1qMAbBKhv1RCvBVdK.jpg',				'//gfs6.gomein.net.cn/T1opKQB_Yv1RCvBVdK.jpg',
				'//gfs7.gomein.net.cn/T17GYQBQCT1RCvBVdK.jpg',				'//gfs6.gomein.net.cn/T1opKQB_Yv1RCvBVdK.jpg',
				'//gfs7.gomein.net.cn/T17GYQBQCT1RCvBVdK.jpg',
				],
      swiperOption: {
			autoPlay: {
				delay:2000,
				stopOnLastSlide: false,
				disableOnInteraction: false,
			}
		
      },
    }
  },
  components:{
  		swiper,
  		swiperSlide
  },
}
</script>

<style scoped>

	.swiperContainer{
		width: 100%;
		height: 4rem;
	}
</style>
