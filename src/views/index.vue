<template>
	<div class="wrapper">
		<el-button @click="gotoRouteHandle('blog')">blog</el-button>
		<el-button @click="gotoRouteHandle('news')">news</el-button>
		<el-button @click="gotoRouteHandle('photo')">photo</el-button>
		<hr />
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				
			}
		},
		methods:{
			gotoRouteHandle(path){
				
				this.$router.push({name:path});    // url:  /home/blog   可以正常显示页面内容
				
				// this.$router.push({path:'/'+path});    // url:  /blog     // 显示不出内容
				
				// this.$router.push({path: '/home/'+path});    // url: /home/blog    可以正常显示页面内容
			}
		}
	}
</script>

<style>
</style>