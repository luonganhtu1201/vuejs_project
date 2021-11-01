<template>
  <div class="productPage">
    <el-row>
      <el-col :span="8">
        <el-card>
          <el-form ref="form" label-width="200px">
            <el-form-item label="Tên sản phẩm" label-width="140px">
              <el-input v-model="name"></el-input>
              <span class="error">{{errorProduct}}</span>
            </el-form-item>
            <el-form-item label="Giá sản phẩm" label-width="140px">
              <el-input type="number" min="1" v-model="price"></el-input>
              <span class="error">{{errorPrice}}</span>
            </el-form-item>
            <el-form-item label="Mô tả sản phẩm" label-width="140px">
              <el-input type="textarea" v-model="description"></el-input>
            </el-form-item>
            <el-form-item class="submit">
              <el-button type="info" @click="reset()">Hủy</el-button>
              <a v-if="flag" class="el-button el-button--primary is-plain btn-create" @click="addProduct">
                <i class="el-icon-plus"></i>
                <span>Tạo mới</span>
              </a>
              <a v-else class="el-button el-button--primary is-plain btn-create" @click="updateProduct(id)">
                <i class="el-icon-plus"></i>
                <span>Cập nhật</span>
              </a>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card>
          <div class="headerContent">
            <div class="searchWarp">
              <el-input
                  v-model="key"
                  class="style-input-search inputSearch"
                  placeholder="Nhập vào tên SP để tìm kiếm"
                  clearable>
              </el-input>
              <el-button class="inputSearch" icon="el-icon-search" @click="search">Tìm kiếm</el-button>
            </div>
          </div>
        </el-card>
        <el-card class="card-table">
          <el-table
              :data="products"
              border
              style="width: 100%" class="table-products">
            <el-table-column
                prop="id"
                label="ID"
                width="80px"
                >
            </el-table-column>
            <el-table-column
                prop="name"
                label="Tên sản phẩm">
            </el-table-column>
            <el-table-column
                label="Giá sản phẩm"
            >
              <template slot-scope="product">
                <span>{{ formatPrice(product.row.price) }}</span>
              </template>
            </el-table-column>
            <el-table-column
                prop="description"
                label="Mô tả">
            </el-table-column>
            <el-table-column
                label="Hành động">
              <template slot-scope="scope">
                <el-button
                    size="mini"
                    @click="editProduct(scope.row)">Cập nhật</el-button>
                <el-button
                    size="mini"
                    type="danger"
                    @click="deleteProduct(scope.row.id)">Xóa</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-row v-if="products.length>0">
            <el-col :span="14">
              <div class="textInfo">
                <p>Sản phẩm : {{ page.from }} - {{ page.to }}  trong  {{ page.total }} </p>
              </div>
            </el-col>

            <el-col :span="10">
              <el-pagination
                  layout="prev, pager, next"
                  :total="page.total"
                  :page-size="page.pageSize"
                  :current-page="page.currentPage"
                  @current-change="change"
              >
              </el-pagination>
            </el-col>

          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'ProductView',
  data () {
    return {
      key: '',
      products: [],
      errorProduct:'',
      errorPrice:'',
      page: {
        currentPage: 1,
        pageSize: 5,
        total: 0,
        from: 0,
        to: 0
      },
      id: '',
      name: '',
      price: '',
      description: '',
      flag: true,
    }
  },
  methods: {
    search() {
      this.getProducts()
    },
    editProduct(value){
      this.id = value.id
      this.name = value.name
      this.price = value.price
      this.description = value.description
      this.flag = false
    },
    handleValidate(){
      let check = true;
      if (this.name.length === 0){
        this.errorProduct = "Tên sản phẩm không được để trống "
        check = false
      }else if(this.name.length < 5) {
        this.errorProduct = "Tên sản phẩm ít nhất có 5 kí tự"
        check = false
      }
      if (this.price.length === 0 ){
        this.errorPrice = "Giá sản phẩm không được để trống"
        check = false
      }
      return check
    },
    updateProduct(id) {
      if (this.handleValidate()){
        axios({
          method: 'post',
          url: 'http://vuecourse.zent.edu.vn/api/products/' + id,
          data: {
            name: this.name,
            price: this.price,
            description: this.description
          }
        }).then(() => {
          this.reset()
          this.getProducts()
          this.$message({
            type: 'success',
            message: 'Cập nhật thành công!'
          });
        }).catch(() => {
        });
      }
    },
    deleteProduct(id) {
      this.$confirm('Nếu đồng ý sản phẩm sẽ không thể khôi phục lại được?', 'Lưu ý', {
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy',
        type: 'warning'
      }).then(() => {
        axios({
          method: 'delete',
          url: 'http://vuecourse.zent.edu.vn/api/products/' + id,
        }).then(() => {
          this.getProducts()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Xóa thất bại!'
          });
        });
        this.$message({
          type: 'success',
          message: 'Xóa thành công!'
        });
      }).catch(() => {

      });
    },
    addProduct() {
      if (this.handleValidate()){
        axios({
          method: 'post',
          url: 'http://vuecourse.zent.edu.vn/api/products',
          data: {
            name: this.name,
            price: this.price,
            description: this.description
          }
        }).then(() => {
          this.reset()
          this.getProducts()
          this.$message({
            type: 'success',
            message: 'Thêm mới thành công!'
          });
        }).catch(() => {
        });
      }
    },
    change(value) {
      this.getProducts(value)
    },
    reset() {
      this.name = ''
      this.price = ''
      this.description = ''
      this.errorPrice = ''
      this.errorProduct = ''
      this.flag = true
    },
    getProducts(val = 1) {
      let q = this.key
      let page  = val
      axios({
        method: 'get',
        url: 'http://vuecourse.zent.edu.vn/api/products' ,
        params: {
          q: q,
          page: page
        }
      }).then((response) => {
        this.products = response.data.data.data
        this.page.from = response.data.data.from
        this.page.to = response.data.data.to
        this.page.current_page = response.data.data.current_page
        this.page.last_page = response.data.data.last_page
        this.page.per_page = response.data.data.per_page
        this.page.total = response.data.data.total
      }).catch(() => {
      });
    },
    formatPrice(val) {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val)
    }
  },
  mounted() {
    this.getProducts()
  },
  watch: {
    key:function () {
      if(this.key.length === 0){
        this.getProducts()
      }
    },
    name:function (){
      this.errorProduct = ""
    },
    price:function (){
      this.errorPrice = ""
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form-item::v-deep .el-form-item__label{
  text-align: center;
  font-weight: bold;
}
.el-col{
  padding: 10px;
}
.error{
  font-size: 13px;
  color: red;
}
.productPage {
  width: 95%;
  margin: 0 auto;
  .headerContent {
    display: flex;
    align-content: center;
    justify-content: space-between;
    .searchWarp {
      display: flex;
      width: 60%;
      .inputSearch {
        margin-right: 15px;
      }
      .style-input-search {
        width: 50%;
      }
    }
  }
  .el-card {
    margin-top: 20px;
    padding: 0;
  }
  .submit {
    text-align: right;
  }
}
</style>