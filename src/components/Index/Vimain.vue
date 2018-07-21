<template>
	<div class="Hmbox">
		<div class="Hmain">
					<lbt></lbt>
		</div>
	</div>
</template>

<script>
	import lbt from '@/components/Index/lunbotu.vue'
	
export default {
  name: 'index',
  data () {
    return {
      msg: '',
    }
  },
  components:{
  	lbt
  }
}
</script>

<style scoped>



</style>
