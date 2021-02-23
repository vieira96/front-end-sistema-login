import UserServices from '@/resources/user/services/UserServices'

export default {
    signin:({commit}, payload) => {
        console.log('commit', commit)
        return UserServices.login(payload.user)
            .then((response) => {
                return response
            })
        
    },

    signup:({commit}, payload) => {
        console.log('commit', commit)
        return UserServices.register(payload.user)
            .then((response) => {
                return response
            })
        
    },

    edit:({commit}, payload) =>{
        console.log(commit);
        return UserServices.update(payload.user, payload.token)
            .then((response) => {
                return response
            })
    },

    delete:({commit}, payload) => {
        return UserServices.delete(payload.token)
            .then((response) => {
                commit('logar', '');
                return response
            })
    },

    checkLogin({commit} ,payload){
        return UserServices.tokenValidate(payload)
            .then((response) => {
                commit('logar', response.data.user)
                return response
            }).catch((response) => {
                return response
            })
    },

    logout({commit}, payload) {
        return UserServices.logout(payload).then((response) => {
            if(response.data.success) {
                commit('logout')
            }
        })
    },
    


}