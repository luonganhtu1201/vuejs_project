<template>
  <div class="cart">
    <h4>Giỏ hàng</h4>
    <div class="addProduct">
      <div class="cartEmpty" v-if="cartOut.length === 0">
        Không có sản phẩm nào được thêm vào giỏ
      </div>
      <table v-else>
        <tr v-for="(list,index) in cartOut" :key="index">
          <td>
            <img :src="list.image" alt="">
          </td>
          <td>
            <p><b>{{list.name}}</b></p>
            <p>{{ new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'VND',
              minimumFractionDigits: 0
            }).format(list.price)}}</p>
          </td>
          <td>
            <input type="number" @change="changeCart(index)" v-model="list.soluong">
          </td>
          <td>
            <button @click="deleteProduct(list)">Xóa</button>
          </td>
        </tr>
      </table>
    </div>
    <div class="total">
      <b>Tổng tiền : {{ new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
      }).format(total) }}</b>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
  name: "CartOut",
  methods:{
    ...mapMutations([
        'changeCartStore',
        'updateTotal',
        'deleteProductStore'
    ]),
    changeCart(id){
      let data = this.cartOut;
      if(data[id].soluong <= 0){
        this.changeCartStore(id)
      }
      this.updateTotal()
    },
    deleteProduct(data){
      this.deleteProductStore(data);
      this.updateTotal()
    }
  },
  computed: {
    ...mapState([
      'cartOut',
      'total'
    ]),
  }
}
</script>

<style  scoped lang="scss">
.cart{
  background: #0000000d;
  border: 1px solid #0000000d;
  width: 590px;
  text-align: left;
  margin-left: 20px;
  h4{
    padding-left: 4px;
    margin-left: 8px;
  }
  .addProduct{
    height: 400px;
    table{
      padding-left: 5px;
      width: 100%;
      tr{
        td{
          border-bottom: 1px dotted gray;
          padding: 10px 0px;
          p{
            margin: 0px;
          }
          img{
            width: 30px;
          }
          button{
            background-color: red;
            color: white;
            border: none;
            padding: 6px;
            border-radius: 3px;
          }
          button:hover{
            background-color: #b42e56;
            cursor: pointer;
          }
        }
      }
    }
  }
  .total{
    text-align: right;
    margin: 15px;
    b{
      color: red;
    }
  }
}
.cartEmpty{
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
}
</style>