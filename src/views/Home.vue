<template>
    <div>
        <div v-if="!loading">
            <h1>{{this.loggedUser}}</h1>
            <button @click="deslogar" class="btn btn-primary">Deslogar</button>
        </div>
        <div v-else>Carregando</div>
    </div>
</template>

<script>


import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return {
            loading: true
        }
    },
    computed: {
        ...mapState([
            'loggedUser'
        ]),
        ...mapGetters([
            'getUser'
        ])
    },

    methods: {
        ...mapActions([
            'checkLogin',
            'logout',
        ]),
        deslogar() {
            let token = window.localStorage.getItem('token')
            if(!token || !this.loggedUser) {
                this.$router.push({path: '/login'})
                return
            }
            this.logout(token).then(() => {
                window.localStorage.removeItem('token')
                this.$router.push({path: '/login'})
            })
            
        }
    },
    created() {
        let token = window.localStorage.getItem('token')
        if(!token) {
            this.$router.push({path: '/login'})
            return
        }
        this.checkLogin(token).then(() => {
            if(!this.loggedUser) {
                window.localStorage.removeItem('token')
                this.$router.push({path: '/login'})
            }else {
                this.loading = false
            }
        })
    },
    
}
</script>
