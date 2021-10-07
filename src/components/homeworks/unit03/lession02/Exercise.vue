<template>
<div class="container">
  <div class="wrap-1">
    <ProductForm @createProduct="receiveItem" :editProduct="editProduct"></ProductForm>
  </div>
  
  <div class="wrap-2">
    <ProductList @editProduct="editItem" :products="products"></ProductList>
  </div>
</div>
</template>

<script>
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
export default {
  name: "Exercise",
  components: {ProductList, ProductForm},
  data(){
    return{
      products:[],
      editProduct:{
        id:'',
        name:'',
        isAvailable:false,
        quantity:'',
        unitPrice:''
      }
    }
  },
  methods:{
    receiveItem:function(data){
      data.id = this.products.length
      if (data.quantity === 0){
        data.isAvailable = false
      }else{
        data.isAvailable = true
      }
      this.products.push(data)
    },
    editItem:function (data){
      this.editProduct.id = data.id
      this.editProduct.name = data.name
      this.editProduct.isAvailable = data.isAvailable
      this.editProduct.quantity = data.quantity
      this.editProduct.unitPrice = data.unitPrice
      console.log(this.editProduct)
      return this.editProduct
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  .wrap-1{
    width: 40%;
    padding: 10px;
  }
  .wrap-2{
    width: 60%;
    padding: 10px;
    height: 416.23px;
  }
}
</style>