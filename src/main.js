import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import qs from "qs";
/* import { config } from 'vue/types/uid'; */
Vue.config.productionTip = false

Vue.prototype.$qs = qs;
axios.defaults.baseURL = "http://httpbin.org"

let instance = axios.create({
  baseURL:"http://httpbin.org",
});

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
instance.interceptors.request.use(
  (config) => {
    if(true){
      config.headers["JWT-Token"] = "";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


instance.interceptors.response.use(

  (response) => {
    const res = response.data;
    alert("请求成功");
    if(res.statuscode != 1){
      return Promise.reject({
        status: res.statuscode,
        message: res.message,
      });
    }else{
      return response.data;
    }
  },
  (error) => {
    if(error && error.response) {
      switch (error.response.status){
        case 400:
          error.message = "错误请求";
          break;
      }
    }
  }
);
Vue.prototype.$axios = axios;
new Vue({
  render: h => h(App),
}).$mount('#app')
