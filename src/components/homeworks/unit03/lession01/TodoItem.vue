<template>
<table v-if="listTask.length > 0">
  <tr v-for="(item,index) in listTask" :key="index">
    <td>
      <input type="checkbox" @change="done(index)">
    </td>
    <td :class="item.decor ? 'textDecor' : ''">{{item.name}}</td>
    <td class="delete">
      <button v-if="item.done === true" @click="deleteTask(index)"><b>Xóa</b></button>
    </td>
  </tr>
</table>
  <div class="nodata" v-else>
    <p>Không có data</p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props:['listTask'],
  data(){
    return{

    }
  },
  methods:{
    deleteTask(id){
      this.listTask.splice(id, 1);
      console.log(this.listTask)
    },
    done(id){
      let list = this.listTask
      if (list[id].done === true){
        list[id].done = false
        list[id].decor = false
      }else{
        list[id].done = true
        list[id].decor = true
      }
      list.push([])
      let last = list.length - 1;
      list.splice(last, 1);
      console.log(list)
    }
  }
}
</script>

<style scoped lang="scss">
.nodata{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: red;
}
.textDecor{
  text-decoration: line-through;
}
table{
  width: 100%;
  text-align: left;
  padding-top: 10px;
  overflow: auto;
  tr{
    .delete{
      text-align: center;
    }
    td{
      padding: 8px;
      border-bottom: 1px dotted black;
      height: 53px;
      button{
        border: none;
        background-color: #ff4747;
        padding: 10px 15px;
        color: white;
        border-radius: 8%;
        cursor: pointer;
      }
      button:hover{
        background-color: red;
      }
    }
  }
}
</style>