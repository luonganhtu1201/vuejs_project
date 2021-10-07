<template>
  <div class="container">
    <div class="search-wrapper">
      <div class="search-box">
        <input type="text" placeholder="Tìm kiếm theo tên sản phẩm" v-model="search"
               @keyup.enter="searchProduct()">
        <div class="search-icon">
          <div class="search">
            <div class="search-circle"></div>
            <div class="search-rectangle"></div>
          </div>
        </div>
        <div class="close-icon" v-if="isClose" @click="deleteAll()">
          <div class="close">
            <div class="right"></div>
            <div class="left"></div>
          </div>
        </div>
      </div>
    </div>
    <table>
      <tr class="headTable">
        <th>STT</th>
        <th>Sản phẩm</th>
        <th>Giá</th>
        <th>Số lượng</th>
        <th>Trạng thái</th>
      </tr>
      <tr v-for="(product, index) in productData" :key="index">
        <td>{{ index + 1 }}</td>
        <td class="productName">
          <img :src="product.image" alt="">
          <a href="#">{{product.name}}</a>
        </td>
        <td>
          {{
            new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'VND',
              minimumFractionDigits: 0
            }).format(product.price)
          }}
        </td>
        <td>{{ product.quantity }}</td>
        <td>
          <span v-if="product.isAvailable" style="color: #96e2c2">Còn hàng</span>
          <span v-else style="color: #f74c4c">Hết hàng</span>
        </td>
      </tr>
      <tr v-if="productData.length === 0">
        <td colspan="5">Không có dữ liệu</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "lession01",
  data() {
    return {
      search: '',
      products: [
        {
          name: 'iPhone 12 Pro Max Chính Hãng',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
          price: 32990000,
          quantity: 566,
          isAvailable: true
        },
        {
          name: 'iPhone 12 Chính Hãng (VN/A)',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwXfjwuJIi7teNG13soue7Rgc0qofzaMMJcLczgssD2AXBbtjmvavqDriZ0Rk6xQ7k1s&usqp=CAU',
          price: 21790000,
          quantity: 123,
          isAvailable: true
        },
        {
          name: 'iPhone 11 Chính hãng',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
          price: 16690000,
          quantity: 0,
          isAvailable: false
        },
        {
          name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
          price: 12190000,
          quantity: 1023,
          isAvailable: true
        },
        {
          name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwXfjwuJIi7teNG13soue7Rgc0qofzaMMJcLczgssD2AXBbtjmvavqDriZ0Rk6xQ7k1s&usqp=CAU',
          price: 26500000,
          quantity: 45,
          isAvailable: true
        }
      ],
      productData: [
        {
          name: 'iPhone 12 Pro Max Chính Hãng',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
          price: 32990000,
          quantity: 566,
          isAvailable: true
        },
        {
          name: 'iPhone 12 Chính Hãng (VN/A)',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwXfjwuJIi7teNG13soue7Rgc0qofzaMMJcLczgssD2AXBbtjmvavqDriZ0Rk6xQ7k1s&usqp=CAU',
          price: 21790000,
          quantity: 123,
          isAvailable: true
        },
        {
          name: 'iPhone 11 Chính hãng',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
          price: 16690000,
          quantity: 0,
          isAvailable: false
        },
        {
          name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
          price: 12190000,
          quantity: 1023,
          isAvailable: true
        },
        {
          name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwXfjwuJIi7teNG13soue7Rgc0qofzaMMJcLczgssD2AXBbtjmvavqDriZ0Rk6xQ7k1s&usqp=CAU',
          price: 26500000,
          quantity: 45,
          isAvailable: true
        }
      ],
      isClose: false
    }
  },
  methods: {
    deleteAll() {
      this.search = ''
    },
    searchProduct() {
      let str = this.search.trim().toLowerCase()
      this.productData = []
      if (this.search === '') {
        this.productData = this.products
      } else {
        this.productData = this.products.filter(data => data.name.toLowerCase().indexOf(str) !== -1);
      }
    }
  },
  watch: {
    search(value) {
      if (value !== '') {
        this.isClose = true
      } else {
        this.isClose = false
        this.productData = this.products
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 50%;
  margin: 0 auto;

  .search-wrapper {
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom: 20px;

    .search-box {
      position: relative;

      input {
        padding: 10px 30px 10px 40px;
        width: 250px;
        border: 1px solid black;
      }
      input:focus {
        outline-color: #0080dd;
      }
      input:hover {
        border-color: #0080dd;
      }
      .search-icon {
        position: absolute;
        left: 10px;
        top: 8px;

        .search {
          left: 0;
          position: relative;
          margin: 0 auto;
          text-align: center;

          .search-circle {
            left: 0;
            width: 15px;
            height: 15px;
            border: 1px solid #333;
            border-radius: 50%;
          }
          .search-rectangle {
            position: absolute;
            right: -5px;
            bottom: -2px;
            width: 7px;
            transform: rotate(45deg);
            border: 1px solid #333;
          }
        }
      }

      .close-icon {
        position: absolute;
        right: 20px;
        top: 18px;
        cursor: pointer;

        .close {
          position: relative;

          .right {
            position: absolute;
            width: 10px;
            border: 1px solid black;
            transform: rotate(45deg);
          }
          .left {
            position: absolute;
            width: 10px;
            border: 1px solid black;
            transform: rotate(135deg);
          }
        }
      }
    }
  }

  table{
    border-collapse: collapse;
    width: 720.61px;
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