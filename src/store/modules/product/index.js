import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000'

const state = {
  productItems: [] 
}

const mutations = {
  UPDATE_PRODUCT_ITEMS (state, payload) {
    state.productItems = payload;
  }
}

const actions = {
  getProductItems ({ commit }) {
    axios.get('/products').then((response) => {
      commit('UPDATE_PRODUCT_ITEMS', response.data)
    });
  }
}

const getters = {
  productItems: state => state.productItems
}

const productModule = {
  state,
  mutations,
  actions,
  getters
}

export default productModule;