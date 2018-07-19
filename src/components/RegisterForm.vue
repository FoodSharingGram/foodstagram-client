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
import axios from 'axios';
export default {

    data () {
        return {
            username: '',
            email: '',
            password: '',
            city: ''
        }
    },
    methods : {
        postRegister () {
            let obj = { 
                username: this.username,
                email: this.email,
                password: this.password,
                city: this.city
                }

            console.log(obj);
            axios.post('http://localhost:3000/users/register', obj)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (err) {
                console.log(err);
            });
        }
    }  

}
</script>

<style scoped>

</style>
