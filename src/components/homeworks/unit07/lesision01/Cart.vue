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
    deleteProduct(id){
      this.listCart.splice(id, 1);
      let data = this.listCart;
      this.total = 0;
      for (let i = 0 ; i < data.length;i++){
        this.total += data[i].soluong*data[i].price
      }
    },
    changeCart(id){
      let data = this.listCart;
      if(data[id].soluong <= 0){
        this.listCart.splice(id, 1);
      }
      this.total = 0;
      for (let i = 0 ; i < data.length;i++){
        this.total += data[i].soluong*data[i].price
      }
    }
  },
}
</script>

<style  scoped lang="scss">
.container {
  display: flex;
}
</style>