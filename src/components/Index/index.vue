<template>
	<div>
		<Vh></Vh>
		<Vm></Vm>
		<Vf></Vf>
	</div>
</template>

<script>
	import '@/components/Index/index.css'
	import Vh from '@/components/gC/Vheader'
	import Vf from '@/components/gC/Vfooter'
	import Vm from '@/components/Index/Vimain'
	
export default {
  name: 'index',
  data () {
    return {
      msg: '',
    }
  },
  components:{
  		Vh,
  		Vf,
  		Vm,
  }
}
</script>

<style scoped>

</style>
