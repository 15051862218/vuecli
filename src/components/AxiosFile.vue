<template>
    <div class="wrapper">
        <h2>{{msg}}</h2>
        
       
    </div>
</template>

<script>
export default {
    name: 'AxiosFile',
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
        this.$axios({
            methods: "get",
            url:"http://47.96.31.161:9000/my-file/img5.png",
            onDownloadProgress(progress){
                console.log(Math.round((progress.loaded / progress.total)* 100) + "%");

            },
            onUploadProgress: (progressEvent) => {

            },  
     
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