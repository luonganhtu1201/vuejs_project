<template>
  <div class="container">
    <header>
      <slot name="banner"></slot>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Trang chủ</el-menu-item>
        <el-submenu index="2">
          <template slot="title">Thể thao</template>
          <el-menu-item index="2-1">Bóng đá trong nước</el-menu-item>
          <el-menu-item index="2-2">Bóng đá châu âu</el-menu-item>
          <el-menu-item index="2-3">Võ thuật</el-menu-item>
          <el-menu-item index="2-4">Các môn thể thao khác</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">Sức khỏe</template>
          <el-menu-item index="3-1">Kiến thức giới tính</el-menu-item>
          <el-menu-item index="3-2">Làm đẹp</el-menu-item>
          <el-menu-item index="3-3">Đại dịch Covid-19</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">Pháp luật</el-menu-item>
        <el-menu-item index="5">Du lịch</el-menu-item>
        <el-menu-item index="6">Giáo dục</el-menu-item>
        <el-menu-item index="7">Văn hóa</el-menu-item>
        <el-menu-item index="8">Công nghệ</el-menu-item>
        <el-menu-item index="9">Giải trí</el-menu-item>

      </el-menu>
    </header>
    <main>
      <el-row>
        <el-col :span="6">
          <slot name="left"></slot>
        </el-col>
        <el-col :span="12">
          <slot name="center"></slot>
        </el-col>
        <el-col :span="6">
          <slot name="right"></slot>
        </el-col>
      </el-row>
    </main>
  </div>
</template>

<script>
export default {
  name: 'baselayout',

  data(){
    return {
      activeIndex: '1',
    }
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  align-items: center;
  justify-content: center;
}
</style>
