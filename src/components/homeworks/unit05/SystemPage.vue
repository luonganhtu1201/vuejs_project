<template>
  <BaseLayout :isActive="isActive">
    <template #contentHeader>
      <b>Cài đặt hệ thống</b>
    </template>
    <template #contentMain>
      <h1>Đây là trang cài đặt hệ thống</h1>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: "SystemPage",
  components: {BaseLayout},
  data(){
    return{
      isActive:'6'
    }
  }
}
</script>

<style scoped>

</style>