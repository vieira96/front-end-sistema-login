<template>
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
        <div class="card">
            <div class="d-flex w-100 justify-content-center"> <p class="font-light fs-1">Entrar</p></div>
            <div class="card-body">
                <form @submit.prevent="entrar()" >
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="user.email">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="user.password">
                    </div>
                    
                    <div v-if="this.error" class="alert alert-danger mt-3">{{error}}</div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                    <router-link to="/register" type="submit" class="ms-2 btn">Registrar-se</router-link>
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
            entrar() {
                this.signin({user: this.user}).then((response) => {
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
                'signin',
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