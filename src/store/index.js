import Vue from 'vue';
import Vuex from 'vuex';
import {fetchbaljupop} from '../api/api.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    balju_yega:[],
    fontSize: 9,
    page:[]
  },
  mutations:{
    SET_BALJU_YEGA(state,data){
      state.balju_yega = data;
    },
    SET_PAGE(state,data){
      state.page = data;
    }
  },
  actions:{
    FETCH_BALJU_YEGA(context){
      fetchbaljupop()
      .then(response =>{
        context.commit('SET_BALJU_YEGA',response.data.content);
        context.commit('SET_PAGE',response.data.totalcount[0]);
      })
      .catch(error =>{
        console.log(error);
      })
    }
  }
})
