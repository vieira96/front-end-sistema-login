import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
})

export default {
    login(user) {
        return apiClient.post('/auth/login', user)
    },

    register(user) {
        return apiClient.post('/auth/register', user)
    },

    tokenValidate(token) {
        return apiClient.get('/auth/user', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    },

    erro() {
        return apiClient.get('/401')
    },

    logout(token) {
        return apiClient.get('/auth/logout', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

}