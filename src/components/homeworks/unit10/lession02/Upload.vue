<template>
<div class="uploadImage">
  <div class="img-default">
    <img @click="openUpload()" v-if="check" :src="defaultImg" alt="">
  </div>
  <div class="update-avt">
    <input id="imgAv" type="file" style="display: none" @change="onFileChange"/>
    <div v-if="!check" id="preview">
      <img class="update" v-if="checkBlock" :src="imgUpdate" @click="openUpload()"/>
      <img class="upload" v-else :src="imgPreview" @click="openUpload()"/>
    </div>
    <div class="icon-x">
      <i @click="defaultImage" class="el-icon-circle-close"></i>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['imgUpdate','reLoad'],
  name: "Upload",
  data(){
    return{
      checkBlock: true,
      check:true,
      urlImage : '',
      imgPreview: null,
      defaultImg :'https://lh3.googleusercontent.com/proxy/euwqC1QYGtjCvqJxSKlbPF3U_eKV4qbyw9IXfz9Of21mz0PugzcrUOEFYPGpIiLgo_b_688JSCI9UwIeDW3B-r54VfQBGA-KQuf9W4mqV558jks2lSS9gzvfU-ED'
    }
  },
  methods:{
    onFileChange(e) {
      this.urlImage = e.target.files[0];
      this.imgPreview = URL.createObjectURL(this.urlImage);
      this.check = false
      this.$emit('uploadImage',this.urlImage);
    },
    openUpload(){
      document.getElementById('imgAv').click();
    },
    defaultImage(){
      this.imgPreview = ''
      this.urlImage = null
      this.check = true
      this.$emit('uploadImage',this.urlImage);
    }
  },
  watch:{
    imgUpdate:function (){
      this.check = false
    },
    imgPreview:function (){
      if (this.imgPreview !== null){
        this.checkBlock = false
      }
    },
    reLoad:function (){
      this.check = true
      this.defaultImage();
    },
  }
}
</script>

<style scoped lang="scss">
.uploadImage{
  width: 100%;
  margin: 0 auto;
  height: 100%;
  .update-avt{
    width: 100%;
    height: 100%;
    position: relative;
    .icon-x{
      position: absolute;
      top: 0;
      left: 84%;
      font-size: 25px;
      color: white;
      cursor: pointer;
      display: none;
    }
    #preview{
      width: 100%;
      cursor: pointer;
      height: 100%;
      box-shadow: 2px 2px 30px -5px gray;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .update-avt:hover .icon-x{
    display: block;
    transition: ease-in 2s;
  }
  .img-default{
    cursor: pointer;
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>