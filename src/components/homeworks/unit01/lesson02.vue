<template>
  <div class="calculator">
    <table>
      <tr>
        <td class="result" colspan="4">{{current}}</td>
      </tr>
      <tr>
        <td class="function-keys" @click="clean()">C</td>
        <td class="function-keys">
          <div @click="del()">del</div>
        </td>
        <td class="function-keys">
          <div @click="percent()">%</div>
        </td>
        <td class="calculation">
          <div @click="getNumber('/')">/</div>
        </td>
      </tr>
      <tr>
        <td>
          <div @click="getNumber('7')">7</div>
        </td>
        <td>
          <div @click="getNumber('8')">8</div>
        </td>
        <td>
          <div @click="getNumber('9')">9</div>
        </td>
        <td class="calculation">
          <div @click="getNumber('*')">*</div>
        </td>
      </tr>
      <tr>
        <td>
          <div @click="getNumber('4')">4</div>
        </td>
        <td>
          <div @click="getNumber('5')">5</div>
        </td>
        <td>
          <div @click="getNumber('6')">6</div>
        </td>
        <td class="calculation">
          <div @click="getNumber('-')">-</div>
        </td>
      </tr>
      <tr>
        <td>
          <div @click="getNumber('1')">1</div>
        </td>
        <td>
          <div @click="getNumber('2')">2</div>
        </td>
        <td>
          <div @click="getNumber('3')">3</div>
        </td>
        <td class="calculation">
          <div @click="getNumber('+')">+</div>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <div @click="getNumber('0')">0</div>
        </td>
        <td>
          <div @click="getNumber('.')">.</div>
        </td>
        <td class="calculation">
          <div @click="calculate()">=</div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "lesson02",
  data(){
    return {
      current: '0',
      list : ['+','-','*','/','%','.'],
    }
  },
  methods:{
    clean() {
      this.current = '0'
    },
    del(){
      if (this.current.length >1){
        this.current = this.current.slice(0,-1);
      }else {
        this.current ='0';
      }
    },
    calculate(){
      let check = true
      this.list.forEach((e) => {
        if (this.current.charAt(this.current.length-1) === e) {
          check = false
        }
      })
      if (check) {
        this.current = String(eval(this.current));
      }
      if (this.current === 'Infinity' || this.current === 'NaN'){
        this.current = 'Lỗi';
      }
    },
    getNumber(number){
      let flag = false
      let flagLast = false
      let current = this.current
      if (current === 'Lỗi'){
        this.current = '0';
      }
      this.list.forEach((e) => {
        if (number === e) {
          flag = true
        }
        if (current.charAt(current.length - 1) === e) {
          flagLast = true
        }
      })
      if (current === '0') {
        if (flag) {
          this.current += number
        } else {
          this.current = number
        }
      }else if (flagLast && !flag) {
          this.current += number
      }else if(flag && flagLast){
        this.current = this.current.slice(0,-1) + number
      } else {
        this.current += number
      }
    },
    percent(){
      if (this.current === 'Lỗi'){
        this.current = '0';
      }
      let flag = -1
      let check = false
      let key = ''
      let current = this.current
      for (var i = 0; i < current.length; i++){
        this.list.forEach((e) => {
          if (current[i] === e){
            flag = i
          }
          if (current.charAt(current.length - 1) === e){
            check = true
          }
        })
      }
      if (flag !== -1 && !check) {
        key = this.current.slice(flag, this.current.length)
        key = String(key/100)
        this.current = current.slice(0, flag+1) + key
      } else if (this.current.length >= 1 && !check){
        this.current = current/100
      }else {
        key = current.slice(0, current.length-1)
        key = String(key/100)
        this.current = key
      }
    }
  }
}
</script>

<style scoped lang="scss">
.calculator {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;

  table{
    background-color: #2f2f31;
    border-radius: 5px;
    tr{
      td{
        width: 50px;
        height: 50px;
        background-color: #616163;
        color: white;
        border-radius: 5px;
        cursor: pointer;
      }
      td:hover{
        background-color: #6E6E6E;
      }
    }
  }
  .result{
    width: 200px;
    background-color: #2f2f31;
    text-align: right;
    padding-right: 15px;
  }
  .result:hover{
    background-color: #2f2f31;
  }
  .function-keys{
    background-color: #424345;
  }
  .function-keys:hover{
    background-color: #3b3c40;
  }
  .calculation{
    background-color: #f49e3f;
  }
  .calculation:hover{
    background-color: #ffffff;
    color: #f49e3f;
  }
}
</style>