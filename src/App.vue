<template>
  <div id="app">
    <baljupop1></baljupop1>
    <baljupop2 v-on:getCheckGubun="gubun"></baljupop2>
    <div v-if="getGubun == 'gubun2'">
      <baljupop3></baljupop3>
    </div>
    <div v-else>
      <baljupop4></baljupop4>
    </div>
    <div></div>
    
  </div>
</template>

<script>
import baljupop1 from './components/baljupop1.vue';
import baljupop2 from './components/baljupop2.vue';
import baljupop3 from './components/baljupop3.vue';
import baljupop4 from './components/baljupop4.vue';

export default {
  name: 'app',
  components: {
    baljupop1,
    baljupop2,
    baljupop3,
    baljupop4
  },
  data(){
    return{
      getGubun : 'gubun2'
    }
  },
  methods:{
    gubun:function(gubun){
      console.log(gubun);
      this.getGubun = gubun;
    }
  }
}
</script>

<style>
*{
  font-size: 9pt;
  font-family: 돋움;
}

body{
  margin:0 auto;
  padding:0;
  width:97%;
  background-color:#e4e4e3;
  min-width:800px;
  font-size: 9pt;
}
</style>
