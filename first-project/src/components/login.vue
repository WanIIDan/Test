<template>
    <div>
        <h1>我是登录页面</h1>
        <input type="text" v-model="username"><br><br>
        <input type="text" v-model="password"><br><br>
        <button @click="handleSubmit">
            点击登录
        </button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data(){
            return {
                username: '',
                password: ''
            }
        },
        created(){
            console.log(this.$route.query)
        },
        methods: {
            handleSubmit(){
                axios.post('http://localhost:3000/login').then(res=>{
                    if(res.data.code == 200){
                        alert('登录成功')
                        this.$router.push('/')
                    }else{
                        alert('登录失败')
                    }
                })
            }
        },
        name: "login"
    }
</script>

<style scoped>

</style>