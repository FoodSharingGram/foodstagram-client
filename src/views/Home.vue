<template>
  <div class="home">
    <Navbar></Navbar>
    <Card></Card>
    <ZomatoModal/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Card from '@/components/Card.vue'
import CommentSection from '@/components/CommentSection.vue'
import ZomatoModal from '@/components/ZomatoModal.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Navbar,
    Card,
    CommentSection,
    ZomatoModal,
  }
}
</script>
