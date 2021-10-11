<template>
  <BaseLayout :isActive="isActive">
    <template #contentHeader>
      <b>Khách hàng</b>
    </template>
    <template #contentMain>
      <h1>Đây là trang khách hàng</h1>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: "Client",
  components: {BaseLayout},
  data(){
    return{
      isActive:'5-3'
    }
  }
}
</script>

<style scoped>

</style>