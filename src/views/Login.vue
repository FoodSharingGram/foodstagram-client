<template>
<div>
    <RegisterForm> </RegisterForm>
    <LoginForm> </LoginForm>
</div>
</template>

<script>
//import component first
import RegisterForm from '@/components/RegisterForm.vue'
import LoginForm from '@/components/LoginForm.vue'
export default {
    components: {
        RegisterForm,
        LoginForm
    }
}
</script>

<style scoped>

</style>
