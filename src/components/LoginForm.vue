<!-- HTML -->

<template>
<div id="LogInForm">
    <h1>Log In</h1><br>
    <form style="text-align:center">
        <label style="font-size:20px; color:black;">Email:</label> <br>
        <input v-model="email" type="email" style="max-width:400px;"> <br>
        <label style="font-size:20px; color:black;">Password:</label><br>
        <input v-model="password" type="password" style="max-width:400px;"> <br>
        <br>
        <a class="waves-effect waves-light btn" id="login" @click="postLogin">Log In</a>
    </form>
</div>
</template>

<!-- JAVASCRIPT -->
<script>
import axios from 'axios';
import { log } from 'util';
import swal from 'sweetalert';

export default {
    
    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        postLogin () {
            console.log('you are in')
            let email = this.email
            let password = this.password;
        
        axios.post('http://localhost:3000/users/login', { 
                email: email,
                password: password,
                })
            //use arrow function
            .then(({data}) => {
                // console.log(data.user._id)
                localStorage.setItem('token',data.token)
                localStorage.setItem('userid',data.user._id)
                console.log(data.token, ' ini token')
                console.log('ini userid', data.user._id)
                this.$router.push('/')
                swal("Welcome!","Welcome to FoodStaGram", "success")
            })
            .catch((err) => {
                swal("Whoops!", "Invalid Email or Password", "warning")
                console.log(err);
            });
        }
    }
    
}
</script>

<!-- CSS -->
<style scoped>

</style>
