<template>
    <div>
        <div v-if="message === ''">
            <div v-if="!loading">
                <h1>Nome do usuario logado: {{loggedUser.name}}</h1>
                <button @click="deslogar" class="btn btn-primary me-3">Deslogar</button>
                <router-link to="/edit" class="btn btn-primary">Editar</router-link>
                <button @click="deletar" class="btn btn-danger ms-3">Deletar Usuario</button>
            </div>
            <div v-else>Carregando</div>
        </div>
        <h1 v-else>Mensagem: {{message}}</h1>
    </div>
</template>

<script>


import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return {
            loading: true,
            message: ''
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
            'delete'
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
            
        },
        deletar() {
            let token = window.localStorage.getItem('token')
            if(!token || !this.loggedUser) {
                this.$router.push({path: '/login'})
                return
            }
            this.delete({token: token}).then((response) => {
                alert('delete')
                this.message = response.data.success
                setTimeout(() => {
                    this.message = ''
                    window.localStorage.removeItem('token')
                    this.$router.push({path: '/login'})
                }, 5000)
            })
        }
    },

    created() {
        let token = window.localStorage.getItem('token')
        if(!token) {
            this.$router.push({path: '/login'})
            return
        }
        this.checkLogin(token).then((response) => {
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
