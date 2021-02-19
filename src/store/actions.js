import UserServices from '@/resources/user/services/UserServices'

export default {
    signIn:({commit}, payload) => {
        console.log('commit', commit)
        return UserServices.login(payload.user)
            .then((response) => {
                if(response.data.error === '') {
                    let token = response.data.token
                    window.localStorage.setItem('token', token)
                }
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