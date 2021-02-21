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
                console.log('resposta signup', response)
                return response
            })
        
    },

    checkLogin({commit} ,payload){
        return UserServices.tokenValidate(payload)
            .then((response) => {
                commit('logar', response.data.user)
            }).catch(() => {return null})
    },

    logout({commit}, payload) {
        return UserServices.logout(payload).then((response) => {
            if(response.data.success) {
                commit('logout')
            }
        })
    },
    


}