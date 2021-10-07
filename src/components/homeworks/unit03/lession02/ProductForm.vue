<template>
  <div class="formDetail">
    <h2>Sản Phẩm</h2>
    <div class="formInput">
      <p><strong>Tên sản phẩm</strong><span class="obligatory">(*)</span></p>
      <input type="text" placeholder="Nhập tên sản phẩm" v-model="name">
      <span>{{errorName}}</span>
      <p><strong>Đơn giá</strong><span class="obligatory">(*)</span></p>
      <input type="number" placeholder="Nhập đơn giá" v-model="unitPrice">
      <span>{{errorPrice}}</span>
      <p><strong>Số lượng</strong><span class="obligatory">(*)</span></p>
      <input type="number" placeholder="Nhập số lượng" v-model="quantity">
      <span>{{errorQuantity}}</span>
      <div class="btnProduct">
        <button class="addProduct" @click="addProduct()">Tạo mới</button>
        <button class="destroyItem" @click="destroyItem()">Huỷ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductForm",
  props:['editProduct'],
  data(){
    return{
      name:'',
      unitPrice:'',
      quantity:'',
      errorName:'',
      errorPrice:'',
      errorQuantity:''
    }
  },
  methods:{
    addProduct(){
      if (this.name === ''|| this.unitPrice==='' || this.quantity===''){
        if(this.name === ''){
          this.errorName = "Tên không được để trống"
        }
        if(this.unitPrice === ''){
          this.errorPrice = "Giá không được để trống"
        }
        if(this.quantity === ''){
          this.errorQuantity = "Số lượng không được để trống"
        }
      } else {
        let data = []
        data.name = this.name
        data.unitPrice = this.unitPrice
        data.quantity = this.quantity
        this.$emit('createProduct',data)
        return [
          this.name= '',
          this.unitPrice = '',
          this.quantity = ''
        ]
      }
    },
    destroyItem(){
      return[
        this.name = '',
        this.unitPrice = '',
        this.quantity = ''
      ]
    }
  },
  watch:{
    name(value){
      if (value.length > 0){
        this.errorName = ""
      }
    },
    unitPrice(value){
      if (value.length > 0){
        this.errorPrice = ""
      }
    },
    quantity(value){
      if (value.length > 0){
        this.errorQuantity = ""
      }
    },
  }
}
</script>

<style scoped lang="scss">
h2{
  text-align: center;
}
.obligatory{
  color: red;
  margin-left: 5px;
}
.formDetail{
  text-align: left;
  border: 1px solid #a6a5a5;
  .formInput{
    padding: 20px;
    input{
      width: 525.67px;
      height: 32px;
    }
    .btnProduct{
      padding-top: 10px;
      .addProduct{
        width: 75px;
        padding: 8px;
        background-color: #50a5f5;
        color: white;
        border: none;
        border-radius: 6px;
        margin-right: 5px;
        cursor: pointer;
      }
      .destroyItem{
        width: 75px;
        padding: 8px;
        background-color: #e3e3e3;
        color: black;
        border: none;
        border-radius: 6px;
        cursor: pointer;
      }
      .addProduct:hover{
        background-color: #328fe7;
      }
      .destroyItem:hover{
        background-color: #b7b7b7;
      }
    }
  }
}
</style>