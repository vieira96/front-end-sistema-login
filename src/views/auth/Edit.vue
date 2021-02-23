<template>
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
        <div v-if="loading"><h1>Carregando!</h1></div>
        <div v-else class="card">
            <div class="d-flex w-100 justify-content-center"> <p class="font-light fs-1">Editar</p></div>
            <div class="card-body">
                <form @submit.prevent="editar()" >
                    
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" v-model="user.name">
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" v-model="user.password">
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Confirm password</label>
                        <input type="password" class="form-control" v-model="user.confirm_password">
                    </div>

                    <div v-if="error" class="alert alert-danger mt-3">{{error}}</div>
                    
                    <button type="submit" class="btn btn-primary">Salvar</button>
                    <router-link to="/" type="submit" class="ms-3 btn">Voltar</router-link>

                </form>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapState, mapActions } from 'vuex'

    export default {

        data() {
            return {
                user: {},
                error: '',
                loading: true
            }
        },
        methods: {
            editar() {
                let token = window.localStorage.getItem('token')
                this.edit({user: this.user, token: token})
                    .then((response) => {
                        if(response.data.success) {
                            this.$router.push({path: '/'})
                        } else {
                            this.error = response.data.error
                        }
                    })
            },
            ...mapActions([
                'signup',
                'edit',
                'checkLogin'
            ])
        },
        computed: {
            ...mapState([
                'loggedUser'
            ])
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
                    this.user = Object.assign({}, this.loggedUser)
                }
            })
        },

    }
</script>