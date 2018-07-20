import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: [],
    dialog: false,
    restaurants: [],
    review: false,
    reviewData: []
  },
  mutations: {
    setFoods (state, payload) {
      state.foods = payload
    },
    setDialog (state, payload) {
      state.dialog = payload
    },
    setRestaurants (state, payload) {
      state.restaurants = payload
    },
    setReview (state, payload) {
      state.review = payload
    },
    setReviewData(state, payload) {
      state.reviewData = payload
    }
  },
  actions: {
    getFoods (context) {
      axios.get('http://localhost:3000/foods/image')
      .then(({data})=> {
        console.log('axios get adata')
        console.log(data)
        context.commit('setFoods',data)
      })
    },
    getRestaurants (context,query) {
      console.log('get Restaurant zomato',query)
      let token = localStorage.getItem('token')
      context.commit('setDialog', true)
      axios.get(`http://localhost:3000/api/search`,{
        headers: {
          title: query,
          token: token
        }
      })
      .then(({data}) => {
        console.log(data.result.restaurants, 'ini data')
        let result = data.result.restaurants
        // console.log(resu)
        context.commit('setRestaurants', result)
      })
      .catch(err=> {
        console.log(err.message)
      })
    },
    openReview (context,resId) {
      console.log('openreview',resId)
      let token = localStorage.getItem('token')
      context.commit('setReview',true)
      axios.get(`http://localhost:3000/api/reviews`, {
        headers: {
          id: resId,
          token : token
        }
      })
      .then(({data})=>{
        console.log(data.user_reviews, ' ini data')
        context.commit('setReviewData', data.user_reviews)
      })
    },
    deletePhoto (context, index) {
      console.log('delete photo id')
    },
    updatePhoto (context, index) {
      console.log('update id')
    }
  }
})
