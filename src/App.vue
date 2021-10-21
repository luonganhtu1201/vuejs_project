<template>
  <div id="app">
    <div id="nav">
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link> |-->
<!--      <router-link :to="`/detail/${userId}`">Detail</router-link>-->
<!--      <button @click="pushToProfile()">Push to Profile</button>-->
<!--      <button @click="pushToPost()">Push to Post</button>-->
<!--      <Baselayout/>-->
    </div>
    <router-view/>
<!--    <Base/>-->
  </div>
</template>
<script>
// import Baselayout from "./components/homeworks/unit05/BaseLayout";
// import Base from "./components/productTest/Base";
export default {
  name: "App",
  // components: {Base},
  // components: { Baselayout},
  data(){
    return{
      userId : 6
    }
  },
  methods:{
    // pushToProfile(){
    //   this.$router.push({ path: `/user/6/profile` })
    // },
    // pushToPost(){
    //   this.$router.push({ path: `/user/6/post` })
    // },
    pushToProduct(){
      this.$router.push({ path: `/product` })
    }
  }
}
</script>
<style lang="scss">
body{
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>