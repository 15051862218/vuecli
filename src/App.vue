<template>
  <div id="app">
  <AxiosOne msg="使用axios发起请求 canshu "></AxiosOne>
   <AxiosTwo msg="使用axios发起请求 tupain"></AxiosTwo>
    <axios-three msg="使用axios发起请求json"></axios-three>
    <axios-post  msg="使用axios  post发起请求" ></axios-post>
    <axios-all msg="使用axios All发起请求" ></axios-all>
     <axios-file msg="使用axios File发起请求" ></axios-file>
  </div>
</template>

<script>
import AxiosOne from './components/AxiosOne.vue'
import AxiosTwo from './components/AxiosTwo.vue'
import AxiosThree from './components/AxiosThree.vue'
import AxiosPost from './components/AxiosPost.vue'
import AxiosAll from './components/AxiosAll.vue'
import AxiosFile from './components/AxiosFile.vue'
export default {
  name: 'App',
  components: {
    AxiosOne,
    AxiosThree,
    AxiosTwo,
    AxiosPost,
    AxiosAll,
    AxiosFile
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}
</style>
