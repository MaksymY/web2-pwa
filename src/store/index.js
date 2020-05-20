import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorie: [],
  },
  mutations: {
    ADD_FAVORIE(state, article) {
			state.favorie.push(article);
		},
  },
  actions: {
    addToFavorite({ commit }, article) {
				commit("ADD_FAVORIE", article);
		},
  },
})
