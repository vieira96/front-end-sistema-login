export default {

    logout: (state) => {
        state.loggedUser = ''
    },

    logar: (state, payload) => {
        state.loggedUser = payload
    },
    
}