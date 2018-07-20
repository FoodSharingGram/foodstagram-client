<template>
<div>
    <Navbar></Navbar>
    <PhotoCollection></PhotoCollection>
</div>
</template>

<script>
import PhotoCollection from '@/components/PhotoCollection.vue'
import Navbar from '@/components/Navbar.vue'
export default {
    components: {
        PhotoCollection,
        Navbar
    }
}
</script>
<style scoped>

</style>
