<template>
    <div>
      <table class="text">
        <tr>
          <td >◈자료건수가 많은 공고기관을 적용하여 분석하세요.</td>
          <td align="right">
            <button type="button" name="fontplus" v-on:click="biggerFont()"> 가+ </button>
            <button type="button" name="fontminus" v-on:click="smallerFont()"> 가- </button>
          </td>
        </tr>
      </table>
      
      
      <table class="tableclass">
        <tr>
          <td v-bind:style="{ fontSize: fontSize + 'pt' }">예가방법</td>
          <td v-bind:style="{ fontSize: fontSize + 'pt' }" style="font-weight:bold;">예가범위</td>
          <td v-bind:style="{ fontSize: fontSize + 'pt' }">예비가격</td>
          <td v-bind:style="{ fontSize: fontSize + 'pt' }">예비추첨</td>
          <td v-bind:style="{ fontSize: fontSize + 'pt' }">추첨번호</td>
          <td v-bind:style="{ fontSize: fontSize + 'pt' }">낙찰하한</td>  
        </tr>
        <tr class="tableclass2">
          <td v-bind:style="{ fontSize: fontSize + 'pt' }">복수예가</td>
          <td v-bind:style="{ fontSize: fontSize + 'pt' }" style="font-weight:bold;">97~103</td>
          <td v-bind:style="{ fontSize: fontSize + 'pt' }">비공개</td>
          <td v-bind:style="{ fontSize: fontSize + 'pt' }">4(추첨)/15(총)</td>
          <td v-bind:style="{ fontSize: fontSize + 'pt' }">비공개</td>
          <td v-bind:style="{ fontSize: fontSize + 'pt' }">87.745</td>
        </tr>
      </table>
    </div>
</template>

<script>
import {EventBus} from '../eventBus.js';
export default {
  data(){
    return{
      fontSize: this.$store.state.fontSize
    }
  },
  methods:{
    biggerFont:function(){
      var fontSize = this.$store.state.fontSize;
      if(fontSize > 11.5){
      }else{
        this.fontSize += 0.5;
        this.$store.state.fontSize += 0.5;

        EventBus.$emit("font-change",this.fontSize);
      }
    },
    smallerFont:function(){
      var fontSize = this.$store.state.fontSize;
      if(fontSize < 9.5){
      }else{
        this.fontSize -= 0.5;
        this.$store.state.fontSize -= 0.5;

        EventBus.$emit("font-change",this.fontSize);
      }
    }
  }
}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
.text{
  text-align:left; 
  height:30px;
  width: 100%;
  margin-top:10px;
}
.textsize tr td{
  font-size: var(--size);
}

.tableclass{
  background-color:#e4e4e3;
  margin:0 auto;
  padding:0;
  table-layout: fixed; 
  width:100%; 
  text-align:center; 
  border:1px solid #717171;
  border-collapse: collapse;
}

.tableclass tr td{
  border:1px solid #717171;
  height:26px;
  margin:0;
  padding:0;
}

.tableclass2{
  background-color: #F6F6F6;
}

button[name="fontplus"]{
  width:35px;
  border-radius: 5px 0 0 5px;
  border-top:1px solid white;
  border-left:1px solid white;
  font-size: 11pt;
  height: 20px;
}
button[name="fontminus"]{
  width:35px;
  border-radius: 0 5px 5px 0 ;
  border-top:1px solid white;
  font-size: 9pt;
  height: 20px;
  position: relative;
  top:-2px;
}
button:focus{
  outline:none;
}
</style>