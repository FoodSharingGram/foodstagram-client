<template>
    <div id="RegisterForm">
    <form style="text-align:center">
        <label style="font-size:20px; color:black;">Username:</label><br>
        <input v-model="username" type="text" style="max-width:400px;"> <br>
        <label style="font-size:20px; color:black;">Email:</label> <br>
        <input v-model="email" type="email" style="max-width:400px;"> <br>
        <label style="font-size:20px; color:black;">Password:</label><br>
        <input v-model="password" type="password" style="max-width:400px;"> <br>
        <label style="font-size:20px; color:black;">City:</label><br>
        <input v-model="city" type="text" style="max-width:400px;"> <br>
        <br>
        <a class="waves-effect waves-light btn" id="register" @click="postRegister">Register</a>
    </form>
</div>
</template>
<script>
// INCOMPLETE ROUTING
import axios from 'axios';
import { log } from 'util';
import swal from 'sweetalert';

export default {

    data () {
        return {
            username: '',
            email: '',
            password: '',
            city: '',
        }
    },
    methods: {
        postRegister () {
            let username = this.username;
            let email = this.email;
            let password = this.password;
            let city = this.city;
            console.log(username, email, password, city)

            axios.post('http://localhost:3000/users/register', { 
                username: username,
                email: email,
                password: password,
                city: city
                })
            //use arrow function
            .then((response) => {
                console.log(response)
                console.log("Redirecting to Login")
                this.$router.push('/login')
                
            })
            .catch((err) => {
                swal("Error", "Missing or Incorrect fields!", "warning")
                console.log(err);
            });
        }
    }  

}
</script>

<style scoped>

</style>
