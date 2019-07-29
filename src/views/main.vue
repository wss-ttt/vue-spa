<template>
	<div class="wrapper">
		<div class="sidebar">
			<el-menu class="sidebar-el-menu"
			background-color="#545c64" 
			text-color="#fff" 
			active-text-color="#ffd04b"
			:default-active="this.$route.path" 
			router>
				<el-menu-item v-for="(item,index) in items" :index="item.index" :key="item.index">
					<i :class="item.icon"></i>
					<span>{{item.title}}</span>
				</el-menu-item>
			</el-menu>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default{
		name:'',
		data(){
			return{
				items:[
					{
						icon:'el-icon-menu',
						index:'/home',
						title:'首页'
					},
					{
						icon:'el-icon-document',
						index:'/photo',
						title:'相册'
					},
					{
						icon:'el-icon-setting',
						index:'/blog',
						title:'博客'
					},
					{
						icon:'el-icon-location',
						index:'/news',
						title:'新闻'
					},
				]
			}
		},
	}
</script>
<style>
	.sidebar{
		/*width: 250px;*/
		position: absolute;
		top:0;
		left: 0;
		bottom: 0;
		border: 1px solid #ddd;
	}
	.sidebar-el-menu:not(.el-menu--collapse) {
		width: 250px;
	}
	.content{
		position: absolute;
		top:0;
		left: 250px;
		right: 0;
		bottom: 0;
		padding: 30px;
		background-color: #ccc;
	}
</style>
