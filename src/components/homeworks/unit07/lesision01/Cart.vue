<template>
  <div class="container">
    <CartIn/>
    <CartOut/>
  </div>
</template>

<script>
import CartIn from "./CartIn";
import CartOut from "./CartOut";
export default {
  name: "Cart",
  components: {CartOut, CartIn},
  data(){
    return{
      total:0,
      listCart:[],
    }
  },
  methods:{

  },
}
</script>

<style  scoped lang="scss">
.container {
  display: flex;
}
</style>