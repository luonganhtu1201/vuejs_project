<template>
  <BaseLayout>
    <template #banner>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in banner" :key="item">
          <el-image :src="item" class="image-carousel"></el-image>
        </el-carousel-item>
      </el-carousel>
    </template>

    <template #left>
      <el-image :src="qcLeft"></el-image>
    </template>

    <template #center>
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">Giải trí</a></el-breadcrumb-item>
          <el-breadcrumb-item>Bản tin tốc chiến</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="blog-content">
        <h1><strong>XIN GIỚI THIỆU GIẢI VÔ ĐỊCH TỐC CHIẾN ĐNÁ 2021</strong></h1>
        <p>Là lúc người chơi và fan hâm mộ có thể chuyển sự quan tâm của mình sang giải đấu tiếp theo sẽ diễn ra từ giữa tháng 9 đến đầu tháng 10, Giải Vô Địch Liên Minh Tốc Chiến ĐNÁ 2021.</p>
        <hr>
        <p>Thời điểm Giải Đấu Mùa Thu Của Icon Series SEA Tốc Chiến sắp kết thúc cũng là lúc người chơi và fan hâm mộ có thể chuyển sự quan tâm của mình sang giải đấu tiếp theo sẽ diễn ra từ giữa tháng 9 đến đầu tháng 10, Giải Vô Địch Liên Minh Huyền Thoại: Tốc Chiến ĐNÁ 2021.</p>
        <p>Riot Games Đông Nam Á sẽ phối hợp cùng ESL Châu Á để tổ chức sự kiến hấp dẫn này. Xem trailer sự kiện tại đây:</p>
        <p>
          <img class="imgTocchien loaded" src="https://i.ytimg.com/vi/iVZ_9fPm028/maxresdefault.jpg" alt="">
        </p>
        <p><i><strong>THÔNG TIN VỀ GIẢI VÔ ĐỊCH TỐC CHIẾN ĐNÁ 2021</strong></i></p>
        <p>21 đội tuyển xuất sắc nhất từ Giải Đấu Mùa Thu Của Icon Series SEA Tốc Chiến đang diễn ra sẽ góp mặt trong Giải Vô Địch Tốc Chiến ĐNÁ 2021. Những đội tuyển đến từ 8 khu vực của Đông Nam Á bao gồm: Singapore, Malaysia, Thái Lan, Việt Nam, Philippines, Indonesia, Đài Bắc Trung Hoa và Hồng Kông sẽ cùng tranh tài để giành một phần trong tổng giải thưởng 200.000 đô-la Mỹ. Thêm vào đó, Giải Vô Địch Tốc Chiến ĐNÁ 2021 cũng sẽ mang tới cơ hội thi đấu cho các đội tuyển đến từ Úc và New Zealand thông qua Vòng Loại Châu Đại Dương.</p>
        <p>Giải Vô Địch Tốc Chiến ĐNÁ 2021 sẽ có 3 giai đoạn thi đấu:</p>
        <ul>
          <li>Giai đoạn 1 - Khởi Đầu: 14 - 19/09/2021</li>
          <li>Giai đoạn 2 - Vòng Bảng: 23 - 26/09/2021</li>
          <li>Giai đoạn 3 - Sự Kiện Chính: 30/09/2021 - 03/10/2021</li>
        </ul>
        <p>Chúng tôi sẽ sớm chia sẻ thêm thông tin về sự kiện và các đội tuyển tham dự. Hãy ghé thăm <a href="">website</a> về Thi Đấu Cạnh Tranh của Tốc Chiến để cập nhật những thông tin mới nhất và theo dõi ESL Châu Á trên Facebook, Twitter và Instagram để biết thêm chi tiết.</p>
        </div>

    </template>

    <template #right>
        <el-image :src="qcRight"></el-image>
    </template>

  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: 'NewsDetailPage',
  components: {
    BaseLayout
  },
  data(){
    return {
      banner: [
          'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2020/05/dang-ky-lien-minh-huyen-thoai-1.jpg',
          'https://newsmd1fr.keeng.net/tiin/archive/images/20201207/155041_3.jpg',
          'https://cdn.tgdd.vn/Files/2020/11/01/1303861/wild-rift-1-1140x570_800x450.png'
      ],
      qcLeft: 'https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt0879d8bf2622e9f3/5fad85fb24612d7400da4f30/WR_Cityscape_Channel_Header_Vietnam_Vertical_01.jpg',
      qcRight: 'https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt6edd1de0e7c5a90e/5fad850a09ed4c6f277ec969/WR_Cityscape_Channel_Header_Malaysia_Vertical_01.jpg'
    }
  },

  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//start banner
.el-carousel__item {
  .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .image-carousel {
    width: 100%;
    object-fit: cover;
  }
}
// end banner

// start left content


// end left content


// start center content
.breadcrumb {
  margin-top: 10px;
  margin-left: 10px;
}
.blog-content {
  width: 97%;
  text-align: left;
  padding: 10px;
  .imgTocchien{
    width: 100%;
  }
}

// end center content
</style>
