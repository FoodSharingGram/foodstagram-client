<template>
<div>
    <div class="Instagram-card" v-for="(food, index) in foods" :key="index" >
    <div class="Instagram-card-header">
      <img src="https://vignette.wikia.nocookie.net/3__/images/2/20/Kirito.png/revision/latest?cb=20160218144042&path-prefix=300-heroes" class="Instagram-card-user-image">
      <a class="Instagram-card-user-name" href="#"> {{food.user.username}} </a>
      <div class="Instagram-card-time"> {{food.date}} </div>
    </div>

    <div class="Instagram-card">
      <img :src= "food.url"/>
    </div>

    <div class="Instagram-card-content">
      <v-btn @click="getRestaurants(food.title)" flat> {{food.title}}  </v-btn>
      <p><a class="Instagram-card-content-user" href="#"> {{food.user.username}} </a>
      {{food.description}} </p>
      <v-btn @click="download(food.url)">download</v-btn>
    <hr>
    </div>  

    <div class="Instagram-card-footer">
      <input class="comments-input"  type="text" placeholder="your comment goes here"/>
      <button type="button" class="btn btn-primary btn-sm">Post</button>
    </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import FileSaver from 'file-saver'
import axios from 'axios'
export default {
    created () {
      this.$store.dispatch('getFoods')
    },
    computed: {
      ...mapState([
        'foods'
      ]),
    },
    methods: {
      ...mapActions([
        'getRestaurants'
      ]),
      download (image) {
        let sendUrl = image;

        axios({
          url: 'http://localhost:3000/foods/image/download',
          method: 'GET',
          query:{ q: sendUrl },
          responseType: 'blob', // important
        }).then((response) => {
          console.log(response.data)

          let blob = new Blob([response.data])
          FileSaver.saveAs(blob, 'file.jpg')

      });
      }
    },
}
</script>

<style scoped>

a{
  text-decoration: none;
}
img {
  max-width: 100%;
}
.Instagram-card{
	background: #ffffff;
	border: 1px solid #f2f2f2;
	border-radius: 3px;
	width: 100%;
	max-width: 600px;
	margin: auto;
    margin-top: 3%
}

.Instagram-card-header{
	padding: 20px;
	height: 40px;
    margin-bottom: 5%;
    align-content: left;
}

.Instagram-card-user-image{
	border-radius: 50%;
	width: 40px;
	height: 40px;
	vertical-align: middle;
}

.Instagram-card-time{
	float: right;
	width: 80px;
	padding-top:10px;
	text-align: right;
	color: #999;
}

.Instagram-card-user-name{
	margin-left:20px;
	font-weight:bold;
  color: #262626;
}

.Instagram-card-content{
  padding: 20px;
}

.Likes{
  font-weight: bold;
}

.Instagram-card-content-user{
  font-weight: bold;
  color: #262626;
}

.hashtag{
  color: #003569;
}

.comments{
  color:#999;
}

.user-comment{
  color: #003569;
}

.Instagram-card-footer{
  padding: 20px;
  display: flex;
  align-items: center;
}

hr{
  border: none;
  border-bottom: 1px solid #ccc;
  margin-top: 30px;
  margin-bottom: 0px;
  padding-bottom: 0px;
 
}


.footer-action-icons{
  font-size: 16px;
  color: #ccc;
}

.comments-input{
  border: none;
  margin-left: 10px;
  width: 100%;
}
</style>
