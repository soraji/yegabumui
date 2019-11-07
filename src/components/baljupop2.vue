<template>
<div>
  <table class="tableTitle">
    <tr>
      <td style="width:30%;">
        <select name="baljucheck" id="baljucheck">
          <option value="">공고기관 전체검색</option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </td>
      <td style="width:40%;">
        <input type="text" name="baljucheo" id="baljucheo">
      </td>
      <td style="width: 40px;">
        <img src="../assets/msearch1.gif" alt="조회">
      </td>
    </tr>
  </table>
  <table class="condition">
    <tr>
      <td style="width:40px;">
        <input type="text" name="allcount" readonly="" v-bind:value="this.$store.state.page.ListCount">
      </td>
      <td style="width:100px;">
        <input type="text" name="currentpage" v-bind:value="this.$store.state.page.StartPage">
        <b> / </b>
        <input type="text" name="allpage" readonly="" v-bind:value="this.$store.state.page.ListCount/this.$store.state.page.countview">
      </td>
      <td style="width:100px;">
        <span><img src="../assets/leftarrow1.gif" alt="좌측화살표" @click="prepage()"></span>&nbsp;&nbsp;
        <span><img src="../assets/rightarrow.gif" alt="우측화살표" @click="nextpage()"></span>
      </td>
      <td>ㆍ예가범위 (
        <input type="radio" name="gubun1" id="gubun1" value="gubun1" v-model="gubun" @click="setCheckGubun('gubun1')">
          <span v-bind:style="[ gubun === 'gubun1' ? {color:'#ff0000'} : {color:'#000000'} ]">전체</span>
        <input type="radio" name="gubun2" id="gubun2" value="gubun2" v-model="gubun" @click="setCheckGubun('gubun2')"> 
          <span v-bind:style="[ gubun === 'gubun2' ? {color:'#ff0000'} : {color:'#000000'} ]">공고기관</span>
        )
      </td>
      <td align="right" style="width:160px;">ㆍ정렬기준:	</td>
      <td align="right" style="width:85px;">
        <select name="" id="">
          <option value="">자료건수↑</option>
          <option value="">자료건수↓</option>
          <option value="">공고기관↑</option>
          <option value="">공고기관↓</option>
        </select>
      </td>
    </tr>
  </table>
</div>
  
</template>

<script>
import {EventBus} from '../eventBus.js';
export default {
  data(){
    return{
      gubun: "gubun2"
    }
  },
  created(){
    this.$store.dispatch('FETCH_BALJU_YEGA');
  },
  methods:{
    prepage:function(){
      if(this.$store.state.page.StartPage > 1){
        this.$store.state.page.StartPage = this.$store.state.page.StartPage - 1;
      }
    },
    nextpage:function(){
      if(this.$store.state.page.ListCount/this.$store.state.page.countview > this.$store.state.page.StartPage){
        this.$store.state.page.StartPage = this.$store.state.page.StartPage + 1;
      }
    },
    setCheckGubun:function(gubun){
      this.$emit('getCheckGubun',gubun);
    }
  }
}
</script>

<style scoped>

.tableTitle{
  margin:0 auto;
  margin-top:8px;
  table-layout: fixed; 
  width:100%; 
  text-align:center; 
  background-color:#e4e4e3;
  border-collapse: collapse;
  border-top:1px solid #fff;
  border-left:1px solid #fff;
  border-right:1px solid #000000;
  border-bottom:1px solid #000000;
  margin-bottom:3px;
  padding:10px;
  height:38px;
}

.condition{
  margin:0 auto;
  table-layout: fixed; 
  width:100%; 
}

input[name="allcount"] {
  width: 33px;
  border:1px solid #000000;
  text-align:center;
  color:#ffffff; 
  background-color:#0A246A; 
}

input[name="currentpage"]{
  width: 23px;
  border:1px solid #000000;
  text-align:center;
  color:#000000; 
  background-color:#ffffff;
}

input[name="allpage"]{
  width: 23px;
  border:1px solid #E4E4E3;
  text-align:center;
  color:#000000; 
  background-color:#E4E4E3;
}

select[name="baljucheck"]{
  width:100%;
  margin:0 4px;
  height:20px;
}

input[name="baljucheo"]{
  width:100%;
  margin:0 4px;
}
img{
  cursor: pointer;
}
.gubuncheck{
  color:red;
}
</style>