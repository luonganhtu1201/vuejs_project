<template>
  <div class="container">
    <div class="todo">
      <h1>Todo</h1>
      <el-input placeholder="Nhập công việc và ấn enter để thêm ..." v-model="keySearch" @keyup.enter="addListTask()"></el-input>
      <div class="item">
        <TodoItem :listTask="listTask"></TodoItem>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "Todo",
  components: {TodoItem},
  data(){
    return {
      keySearch:'',
      listTask : [],
    }
  },
  methods:{
    addListTask(){
      let data = [];
      data.name = this.keySearch
      data.done = false
      data.decor = false
      this.listTask.push(data)
      this.keySearch = ''
    }
  },
  mounted() {
    window.addEventListener('keyup', event => {
      if (event.keyCode === 13) {
        this.addListTask()
      }
    })
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff7373;
  .todo{
    background-color: #efefef;
    padding: 20px;
    margin: 20px;
    width: 40%;
    border-radius: 10px;
    h1{
      color: #96e2c2;
    }
    .item{
      overflow: auto;
      height: 350px;
    }
  }
}
</style>