<template>
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
        <div class="card">
            <div class="d-flex w-100 justify-content-center"> <p class="font-light fs-1">Cadastro</p></div>
            <div class="card-body">
                <form @submit.prevent="cadastrar()" >
                    
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" v-model="user.name">
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" aria-describedby="emailHelp" v-model="user.email">
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" v-model="user.password">
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Confirm password</label>
                        <input type="password" class="form-control" v-model="user.confirm_password">
                    </div>

                    <div v-if="this.error" class="alert alert-danger mt-3">{{error}}</div>
                    
                    <button type="submit" class="btn btn-primary">Cadastrar</button>
                    <router-link to="/login" type="submit" class="ms-5 btn">Entrar</router-link>

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
                error: ''
            }
        },
        methods: {
            cadastrar() {
                this.signup({user: this.user}).then((response) => {
                    if(response.data.error === '') {
                        let token = response.data.token
                        window.localStorage.setItem('token', token)
                        this.$router.push({path: '/'})
                    } else {
                        this.error = response.data.error
                    }
                })
                
            },
            ...mapActions([
                'signup'
            ])
        },
        computed: {
            ...mapState([
                'loggedUser'
            ])
        },
        created() {
        },

    }
</script>