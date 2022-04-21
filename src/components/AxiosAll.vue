<template>
    <div class="wrapper">
        <h2>{{msg}}</h2>
        <h3>{{res1}}-----{{res2}}</h3>
       </h3>
    </div>
</template>

<script>
export default {
    name: 'AxiosAll',
    props: {
        msg: String,
    },
    data(){
        return {
          res1:"",
          res2:""
            
        };
    },
    created(){
     this.$axios.all(
         [
             this.getHello(),this.getWorld()
         ]
     ).then(
         this.$axios.spread((res1,res2)=> {
             console.log(res1.data.args.param + "" + res2.data.args.param);
             this.res1 = res1.data.args.param;
             this.res2 = res2.data.args.param;
         })
     )
    },
    methods: {
        getHello() {
            return this.$axios.get("http://httpbin.org/get?param=hello");
        },
        getWorld(){
             return this.$axios.get("http://httpbin.org/get?param=world");
        },
    },

};
</script>
<style scoped>
    .wrapper{
        width: 300px;
        height: 200px;
        text-align: center;
        background-color: #333;
        color: #fff;
        
    }
</style>