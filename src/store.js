import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  cartItems: []
};

const mutations = {
  ADD_ITEM(state, item) {
    state.cartItems.push(item);
  }
};

const actions = {
  addItem(context, item) {
    context.commit("ADD_ITEM", item);
  }
};

const getters = {
  getCartItems(state) {
    return state.cartItems;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
