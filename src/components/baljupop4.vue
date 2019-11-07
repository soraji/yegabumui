<template>
  <div>
    <div class="bigboxBorder">
      <div class="scrollBlind">
        <table class="tableTitle">
          <tr>
            <td v-bind:style="{ fontSize: fontSize + 'pt' }" class="num">No</td>
            <td v-bind:style="{ fontSize: fontSize + 'pt' }" class="code">기관코드</td>
            <td v-bind:style="{ fontSize: fontSize + 'pt' }" class="baljucheo">공고기관</td>
            <td v-bind:style="{ fontSize: fontSize + 'pt' }" class="yegabumui">예가범위</td>
            <td v-bind:style="{ fontSize: fontSize + 'pt' }" class="count">자료건수</td>
            <td v-bind:style="{ fontSize: fontSize + 'pt' }" class="down">다운</td>
            <td v-bind:style="{ fontSize: fontSize + 'pt' }" class="apply">적용</td>
          </tr>
        </table>
        <table  v-for="(index,i) in this.$store.state.balju_yega" class="tableContent">
          <tr>
            <td class="num"></td>
            <td class="code"></td>
            <td class="baljucheo"></td>
            <td class="yegabumui"></td>
            <td class="count"></td>
            <td class="down"></td>
            <td class="apply"></td>
          </tr>
        </table>
        <table v-for="(i,blank) in blanks" v-bind:key="blank" class="tableContent">
          <tr>
            <td class="num">{{i}}</td>
            <td class="code"></td>
            <td class="baljucheo"></td>
            <td class="yegabumui"></td>
            <td class="count"></td>
            <td class="down"></td>
            <td class="apply"></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {EventBus} from '../eventBus.js';
export default {
  data(){
    return{
      blanks:new Array(10),
      fontSize: this.$store.state.fontSize
    }
  },
  created(){
    // this.$store.dispatch('FETCH_BALJU_YEGA');
    EventBus.$on("font-change", fontSize => {
      this.fontSize = fontSize;
    });
  },
  // updated(){
  //   this.fontSize = this.$store.state.fontSize;
    
  // }
}
</script>

<style scoped>
.scrollBlind{
  width: 100%;
  height:950px;
	overflow-y:scroll;
}

.tableTitle{
  margin:0 auto;
  table-layout: fixed; 
  width:100%; 
  text-align:center; 
  height: 21px;
  background-color:#e4e4e3;
  border-collapse: collapse;
  border-bottom: 2px solid #333331;
  border-top:1px solid #fff;
  border-left:1px solid #fff;
  border-right:1px solid #000000;
  border-bottom:1px solid #000000;
}
.tableTitle tr td{
  border:1px solid #919191;
}

.tableContent{
  margin:0 auto;
  table-layout: fixed;
  word-break: break-all;
  width:100%; 
  background-color: #fff;
  border-collapse: collapse;
}
.tableContent td{
  border-top: 1px solid #e1e1e2; 
  border-right: 1px solid #e1e1e2; 
  border-left: 1px solid #e1e1e2; 
  border-collapse: collapse;
  padding:0px 2px 0px 5px;
  height: 22px;
}
.bigboxBorder{
  border-top:1px solid #fff;
  border-left:1px solid #fff;
  border-right:1px solid #000000;
  border-bottom:1px solid #000000;
  padding:3px;
}

.tableContent .code{
  color:#316be6;
  cursor: pointer;
}

.tableContent .baljucheo{
  color:#316be6;
  text-indent: 10px;
  cursor: pointer;
}
.num{
  width:5%;
  text-align: center;
}
.code{
  width:10%;
  text-align: center;
}
.baljucheo{
  width:40%;
  text-align: left;
  text-indent: 12px;
}
.yegabumui{
  width:10%;
  text-align: center;
}
.count{
  width:10%;
  text-align: center;
}
.down{
  width:5%;
  text-align: center;
}
.apply{
  width:5%;
  text-align: center;
}
</style>