import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: []
  },
  mutations: {
    setFoods (state, payload) {
      state.foods = payload
    }
  },
  actions: {
    getFoods (context) {
      axios.get('http://localhost:3000/foods/image')
      .then(({data})=> {
        console.log('axios get adata')
        // console.log(data)
        context.commit('setFoods',data)
      })
    }
  }
})
