<template>
  <div class="wrapper">
    <ul>
      <li @click="gotoRouteHandle('home')" :class="{active:active === 'home'}">home</li>
      <li @click="gotoRouteHandle('blog')" :class="{active:active === 'blog'}">blog</li>
      <li @click="gotoRouteHandle('news')" :class="{active:active === 'news'}">news</li>
      <li @click="gotoRouteHandle('photo')" :class="{active:active === 'photo'}">photo</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      active: 'home'
    }
  },
  methods: {
    gotoRouteHandle(name) {
      this.active = name
      this.$router.push({ name: name })
    }
  }
}
</script>

<style scoped>
ul,
li {
  list-style: none;
}
ul {
  overflow: hidden;
}
ul li {
  width: 100px;
  height: 30px;
  line-height: 30px;
  float: left;
  text-align: center;
  cursor: pointer;
}
li.active {
  background-color: #1acd7e;
}
</style>