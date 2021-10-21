<template>
  <div class="product">
    <table>
      <tr class="headTable">
        <th>STT</th>
        <th>Sản phẩm</th>
        <th>Giá</th>
        <th>Số lượng</th>
        <th>Trạng thái</th>
        <th>Hành động</th>
      </tr>
      <tr v-for="(item,index) in items" :key="index">
        <td>{{index+1}}</td>
        <td class="productName">
          <img :src="item.image" alt="">
          <a href="#">{{item.name}}</a>
        </td>
        <td>{{ new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'VND',
          minimumFractionDigits: 0
        }).format(item.price) }}</td>
        <td>{{item.quantity}}</td>
        <td>
          <span v-if="item.isAvailable" style="color: #96e2c2">Còn hàng</span>
          <span v-else style="color: #f74c4c">Hết hàng</span>
        </td>
        <td>
          <button @click="addProduct(item)">Thêm vào giỏ</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
  name: "CartIn",
  methods:{
    ...mapMutations([
      'updateCart',
      'updateTotal'
    ]),
    addProduct(data){
      let list = this.cartOut;
      let flag = true
      if (data.quantity > 0){
        if (list.length > 0){
          for (let i = 0 ; i < list.length ; i++){
            if (data.id === list[i].id){
              list[i].soluong = parseInt(list[i].soluong)+1
              flag = true
              break
            }else {
              flag = false
            }
          }
          if (!flag){
            data.soluong = 1;
            this.updateCart(data)
          }
        }else {
          data.soluong = 1;
          this.updateCart(data)
        }
      }else{
        alert("Sản phẩm hết hàng")
      }
      this.updateTotal()
    },
  },
  computed: {
    ...mapState([
      'items',
      'cartOut'
    ]),
  }
}
</script>

<style scoped lang="scss">
.product{
  height: 270px;
  border: 1px solid #0000000d;
  table{
    border-collapse: collapse;
    .headTable{
      background-color: #f2f6fe;
    }
    tr{
      .productName{
        text-align: left;
        display: flex;
        align-items: center;
        a{
          text-decoration: none;
          padding-left: 8px;
          color: #56a3e7;
        }
      }
      td{
        height: 36px;
        padding:5px 15px;
        border-left: 1px solid #0000000d;

        img{
          width: 30px;
        }

        button{
          background-color: #0080dd;
          color: white;
          border: none;
          padding: 6px;
          border-radius: 3px;
        }
        button:hover{
          background-color: #3db6e3;
          cursor: pointer;
        }
      }
      th{
        padding: 10px 5px;
        border: 1px solid #0000000d;
      }
    }
  }
}
</style>