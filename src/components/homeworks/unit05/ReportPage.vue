<template>
  <BaseLayout :isActive="isActive">
    <template #contentHeader>
      <b>Báo cáo thống kê</b>
    </template>
    <template #contentMain>
      <h1>Đây là trang báo cáo thống kê</h1>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: "ReportPage",
  components: {BaseLayout},
  data(){
    return{
      isActive:'4'
    }
  }
}
</script>

<style scoped>

</style>