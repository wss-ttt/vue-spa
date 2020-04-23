<template>
	<div class="wrapper">
		<h2>我是index2页面</h2>
		<el-button @click = "goto('aa')">aa页面</el-button>
		<el-button @click = "goto('bb')">bb页面</el-button>
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
			goto(name){
				this.$router.push({name:name});
			}
		}
	}
</script>

<style>
</style>