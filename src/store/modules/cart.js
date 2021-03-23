const state = {
    cartItems: []
  }
  
  const mutations = {
    UPDATE_CART_ITEMS(state, payload) {
      state.cartItems = payload;
    },
    ADD_CART_ITEM(state, payload) {
      state.cartItems.push(payload);
    },
    UPDATE_ITEM_QUANTITY(state, payload) {
      state.cartItems = state.cartItems.map(item => (item.id == payload.id) ? payload : item)
    }
  }
  
  const actions = {
    getCartItems({ commit }) {
      let storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      commit('UPDATE_CART_ITEMS', storedCart)
    },
    addCartItem({ commit, state }, cartItem) {
      if (state.cartItems.includes(cartItem)) {
        cartItem.quantity++;
        commit('UPDATE_ITEM_QUANTITY', cartItem)
      } else {
        commit('ADD_CART_ITEM', cartItem)
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
    removeAllCartItems({ commit }) {
      commit('UPDATE_CART_ITEMS', [])
      localStorage.setItem('cart', [])
    }
  }
  
  const getters = {
    cartItems: state => state.cartItems,
    cartTotal: state => {
      return state.cartItems.reduce((acc, cartItem) => {
        return (cartItem.quantity * cartItem.price) + acc;
      }, 0).toFixed(2);
    },
    cartQuantity: state => {
      return state.cartItems.reduce((acc, cartItem) => {
        return cartItem.quantity + acc;
      }, 0);
    }
  }
  
  
  const cartModule = {
    state,
    mutations,
    actions,
    getters
  }
  
  export default cartModule;