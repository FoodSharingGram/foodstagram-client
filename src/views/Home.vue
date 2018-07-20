<template>
  <div class="home">
    <Navbar></Navbar>
    <Card></Card>
    <ZomatoModal/>
    <ReviewModal></ReviewModal>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Card from '@/components/Card.vue'
import CommentSection from '@/components/CommentSection.vue'
import ZomatoModal from '@/components/ZomatoModal.vue'
import ReviewModal from '@/components/ReviewModal.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Navbar,
    Card,
    CommentSection,
    ZomatoModal,
    ReviewModal
  },
  created () {
    if (!localStorage.hasOwnProperty('token')) {
      this.$router.push('/login')
    }
  } 
}
</script>
