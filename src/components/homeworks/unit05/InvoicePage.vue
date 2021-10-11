<template>
  <BaseLayout :isActive="isActive">
    <template #contentHeader>
      <b>Quản lý hóa đơn</b>
    </template>
    <template #contentMain>
      <h1>Đây là trang quản lý hóa đơn</h1>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: "InvoicePage",
  components: {BaseLayout},
  data(){
    return{
      isActive:'3'
    }
  }
}
</script>

<style scoped>

</style>