<template>
  <BaseLayout :isActive="isActive">
    <template #contentHeader>
      <b>Sản phẩm</b>
    </template>
    <template #contentMain>
      <h1>Đây là trang sản phẩm</h1>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: "Product",
  components: {BaseLayout},
  data(){
    return{
      isActive:'5-1'
    }
  }
}
</script>

<style scoped>

</style>