<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link" > Home <span class="sr-only" >(current)</span> </router-link>
        <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="`profile/${userId}`"> Profile </router-link>
      </li>
      <li v-if="loginStatus==false">
          <!-- <a class="nav-link" href=""> Don't have an account yet?</a> -->
          <router-link class="nav-link" to="register"> Don't have an account yet? </router-link>
      </li>
      <li v-if="loginStatus==false">
         <router-link to="login" class="nav-link"> Login </router-link>
      </li>
      <li v-if="loginStatus==true">
         <router-link to="upload" class="nav-link"> Upload </router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button v-if="loginStatus==true" class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="logout" >Logout</button>
    </form>
  </div>
</nav>
</template>

<script>
export default {
    data () {
      return {
        iduser : localStorage.getItem('userId'),
        loginStatus: false
      }
    },
    created () {
        if (localStorage.hasOwnProperty('token')) {
          this.loginStatus = true
        }
    },
    methods: {
        topNav () {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        },
        logout () {
          localStorage.clear()
        }
    }
}
</script>

<style scoped>

</style>
