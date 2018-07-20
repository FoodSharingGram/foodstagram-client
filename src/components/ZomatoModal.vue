<template>
<v-dialog v-model="dialog" max-width="30.4%"  >
  <main style="background-color:#ff5252	">
<div
    id="e3"
    style="max-width: 600px; margin: auto;"
  >
    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="white" class="white--black" v-for="(resto, index) in restaurants" :key="index" >
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs5>
                    <v-card-media
                      :src="resto.restaurant.featured_image"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                  <v-flex xs7>
                    <div>
                      <div class="headline"> {{resto.restaurant.name}} <span class="w3-tag" > {{resto.restaurant.user_rating.aggregate_rating}} </span> </div>
                      <div> <strong>  {{resto.restaurant.location.locality}}  </strong></div>
                      <p> {{resto.restaurant.location.address}} </p>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-card color="red lighten-2" >
              <v-card-text>
                  CUISINE {{resto.restaurant.cuisines}} <br>
                  COST FOR TWO {{resto.restaurant.average_cost_for_two}} {{resto.restaurant.currency}} <br>
                  HOURS <br>
              </v-card-text>
              <v-card-action>
                <v-btn @click="openReview(resto.restaurant.id)" > get review </v-btn>
              </v-card-action>
              </v-card>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-btn @click="check"> check </v-btn>
    </v-card>
  </div>
  </main>
</v-dialog>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
    computed: {
      dialog: {
        get () {
          return this.$store.state.dialog
        },
        set () {
          this.$store.commit('setDialog', false)
        }
      },
      ...mapState([
        'restaurants'
      ])
    },
    methods: {
      check () {
        console.log(this.restaurants)
      },
      ...mapActions([
        'openReview'
      ])
    }
}
</script>


<style scoped>
.w3-tag {
    background-color:#3F7E00;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center
}
</style>
