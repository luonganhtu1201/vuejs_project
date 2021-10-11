<template>
  <BaseLayout :isActive="isActive">
    <template #contentHeader>
      <b>Đơn hàng</b>
    </template>
    <template #contentMain>
      <h1>Đây là trang đơn hàng</h1>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: "Order ",
  components: {BaseLayout},
  data(){
    return{
      isActive:'5-2'
    }
  }
}
</script>

<style scoped>

</style>