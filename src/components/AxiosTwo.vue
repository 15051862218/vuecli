<template>
    <div>
        <h2>{{msg}}</h2>
        <img :src="imgUrl" alt="">
    </div>
</template>

<script>
export default {
    name: 'AxiosTwo',
    props: {
        msg: String,
    },
    data(){
        return {
            imgUrl:'',
        };
    },
    created(){
        this.$axios({
            methods: "get",
            url:"http://httpbin.org/image/png",
            responseType:"blob",
        }).then((response) => {
            console.log(typeof response.data);
            this.imgUrl = window.URL.createObjectURL(response.data);
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