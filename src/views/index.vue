<template>
	<div class="wrapper">
		<el-button @click="gotoRouteHandle('home')">home</el-button>
		<el-button @click="gotoRouteHandle('blog')">blog</el-button>
		<el-button @click="gotoRouteHandle('news')">news</el-button>
		<el-button @click="gotoRouteHandle('photo')">photo</el-button>
		
		<!--<router-link to="/home">首页</router-link>
		
		<router-link to="/blog">博客</router-link>
		
		<router-link to="/news">新闻</router-link>
		
		<router-link to="/photo">相册</router-link>-->
		
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
			gotoRouteHandle(name){
				
				this.$router.push({name:name});    // url: /home/blog  可以正常显示页面内容
				
			}
		}
	}
</script>

<style>
</style>