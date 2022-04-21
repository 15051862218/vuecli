<template>
    <div class="wrapper">
        <h2>{{msg}}</h2>
        <h3>{{content}}</h3>

    </div>
</template>

<script>
export default {
    name: 'AxiosOne',
    props: {
        msg: String,
    },
    data(){
        return {
            content:'',
            
        };
    },
    created(){
        this.$axios({
            methods: "get",
            url:"http://httpbin.org/get?param=hello",
        }).then((response) => {
            this.content = response.data.args.param;
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