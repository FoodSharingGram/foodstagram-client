<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 md3>
                <v-card>
                    <img class="image" src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3667914/1820/1213/m1/fpnw/wm1/mm0k1z4eopjimitemdhs6fmiqbvykaf8eubhbyldigxeuwfu2irobuuqz5pjkc1q-.jpg?1512111122&s=54f66daefac23151f5aa1b08d3c76cca" alt="">
                    <div class="middle">
                        <v-btn @click="deletePhoto()">Update</v-btn> <v-btn @click="updatePhoto()">Delete</v-btn>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    computed: {
        ...mapState([

        ])
    },
    methods: {
        ...mapActions([
            'deletePhoto', 'updatePhoto'
        ])
    }
}
</script>

<style scoped>
img {
    max-width: 100%;
}
.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.image:hover {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>
