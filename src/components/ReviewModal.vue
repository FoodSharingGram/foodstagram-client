<template>
    <v-dialog v-model="review" >
        <v-card v-for="(review, index) in reviewData" :key="index" color="white">
            <v-card-text  >
              <Strong> {{review.review.user.name}}</Strong> : {{review.review.review_text}}
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    computed: {
      review: {
        get () {
          return this.$store.state.review
        },
        set () {
          this.$store.commit('setReview', false)
        }
      },
      ...mapState([
        'reviewData'
      ])
    },
}
</script>

<style scoped>

</style>
