<template>
  <BaseLayout :isActive="isActive">
    <template #contentHeader>
      <b>Doanh thu</b>
    </template>
    <template #contentMain>
      <h1>Đây là trang doanh thu</h1>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: "Revenue",
  components: {BaseLayout},
  data(){
    return{
      isActive:'5-4'
    }
  }
}
</script>

<style scoped>

</style>