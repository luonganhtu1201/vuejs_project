<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <lession02></lession02>-->
<!--    <ProductPage/>-->
<!--    <NewsDetailPage/>-->
<!--    <Todo/>-->
<!--    <Lession01/>-->
    <Exercise/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// -----------Unit 01-----------
// import HelloWorld from './components/homeworks/unit01/lesson01'
// import HelloWorld from './components/homeworks/unit01/lesson02'
// -----------Unit 02------------
// import Lession01 from "./components/homeworks/unit02/lession01";
// import Lession02 from "./components/homeworks/unit02/lession02";
import Exercise from "./components/homeworks/unit03/lession02/Exercise";
// -----------Unit 03------------
//  import Todo from "./components/homeworks/unit03/lession01/Todo";
// -----------Unit 04 -----------
// import ProductPage from "./components/homeworks/unit04/lession01/ProductPage";
// import NewsDetailPage from "./components/homeworks/unit04/lession02/NewsDetailPage";

export default {
  name: 'App',
  components: {
    Exercise,
    // Todo,
    // Lession01,
    // NewsDetailPage,
    // ProductPage,
    // Lession02
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
