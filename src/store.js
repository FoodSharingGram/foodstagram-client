import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: [],
    dialog: false,
    restaurants: []
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
      context.commit('setDialog', true)
      let id = '5b509cb99da4443f7475aefd'
      axios.get(`http://localhost:3000/api/search/${id}`,{
        headers: {
          title: query
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
    deletePhoto (context, index) {
      console.log('delete photo id')
    },
    updatePhoto (context, index) {
      console.log('update id')
    }
  }
})
