<template>
  <div class="mybutton" @click="handle">
  	{{btnName}}
  </div>
</template>

<script>
export default {
  name: 'Button',
  props:['btnName'],
  data () {
    return {
    }
  },
  methods:{
  	handle(){
  		this.$emit('handleClick')
  	}
	}
}
</script>

<style scoped>
	.mybutton{
		width: 200px;
		border: 1px solid blue;
		margin:10px auto;
		text-align: center;
	}
</style>
