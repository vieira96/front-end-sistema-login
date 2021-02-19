import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex)

const state = {
    loggedUser: ''
}

const getters = {
	getUser(){
		return state.loggedUser
	}
}

export default new Vuex.Store({
	strict: true,	
	state,
	getters,
	actions,
	mutations
})
