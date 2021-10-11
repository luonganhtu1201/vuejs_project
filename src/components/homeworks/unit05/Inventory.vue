<template>
  <BaseLayout :isActive="isActive">
    <template #contentHeader>
      <b>Tồn kho</b>
    </template>
    <template #contentMain>
      <h1>Đây là trang tồn kho</h1>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: "Inventory",
  components: {BaseLayout},
  data(){
    return{
      isActive:'5-5'
    }
  }
}
</script>

<style scoped>

</style>