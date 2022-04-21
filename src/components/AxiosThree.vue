<template>
    <div class="wrapper">
        <h2>{{msg}}</h2>
        <h3>{{obj.title}}</h3>
        <h4>{{obj.author}}</h4>
        <div v-for="(item,index) in obj.slides" :key="index">
                {{item.title}}
        </div>

    </div>
</template>

<script>
export default {
    name: 'AxiosThree',
    props: {
        msg: String,
    },
    data(){
        return {
           obj:{},
            
        };
    },
    created(){
        this.$axios({
            methods: "get",
            url:"http://httpbin.org/json",
        }).then((response) => {
            this.obj = response.data.slideshow;
        });
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