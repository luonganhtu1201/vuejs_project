<template>
  <div class="container">
    <div class="loginWrap">
      <div class="inputWrap">
        <div class="inputLabel">Nhập tiêu đề</div>
        <input type="text" v-model="title" placeholder="Nhập tiêu đề ...">
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Nhập nội dung</div>
        <textarea v-model="content" name="" id="" cols="30" rows="10" placeholder="Nhập nội dung ..."></textarea>
      </div>
    </div>
    <div class="infoWrap">
      <div class="infoLabel">
        <p>{{title}}</p>
        <span v-html="content"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lesson01",
  data(){
    return {
      title:'',
      content:''
    }
  },
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;

  .loginWrap {
    border: 2px dotted #6E6E6E;
    border-radius: 5%;
    padding: 24px;
    height: 250px;
    width: 300px;

    .inputWrap {
      margin-bottom: 12px;

      .inputLabel {
        font-weight: bold;
        margin-bottom: 8px;
        text-align: left;
      }

      input {
        width: 292px;
        height: 30px;
      }
      textarea{
        width: 292px;
      }
    }

    button {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      margin-top: 20px;
      background: #0080dd;
      color: #fff;
      border: unset;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
    }
  }

  .infoWrap {
    border: 2px dotted #6E6E6E;
    border-radius: 5%;
    padding: 24px;
    height: 250px;
    width: 480px;
    margin-left: 24px;

    .infoLabel {
      font-weight: bold;
      color: black;
      text-align: left;

      span{
        font-weight: normal;
      }
    }
  }
}
</style>