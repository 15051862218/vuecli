<template>
    <div class="wrapper">
        <h2>{{msg}}</h2>
        <h3>{{firstName}}-----{{lastName}}</h3>
         <h3>{{firstName1}}-----{{lastName1}}</h3>
    </div>
</template>

<script>
export default {
    name: 'AxiosPost',
    props: {
        msg: String,
    },
    data(){
        return {
            firstName:"",
               lastName:"",
                  firstName1:"",
               lastName1:"",
           obj:{
               firstName:"",
               lastName:"",
                  firstName1:"",
               lastName1:"",
           },
            
        };
    },
    created(){
        this.$axios({
            method: "post",
            url:"http://httpbin.org/post",
            headers:{
                "content-type": "application/json",
            },
            data:{
                 firstName:"zhang",
               lastName:"si",
            },
        }).then((response) => {
           let resobj = JSON.parse(response.data.data);
           this.firstName = resobj.firstName;
           this.lastName  = resobj.lastName;
        });
        let obj = {
            firstName1: "li",
            lastName1: "SI",
        }
         this.$axios({
            method: "post",
            url:"http://httpbin.org/post",
            headers:{
                "content-type": "application/x-www-form-urlencoded",
            },
            data:
                this.$qs.stringify(obj),
            
        }).then((response) => {
           let resobj =response.data.form;
           this.firstName1 = resobj.firstName1;
           this.lastName1  = resobj.lastName1;
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