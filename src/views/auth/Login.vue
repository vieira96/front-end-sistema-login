<template>
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
        <div class="card">
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
                    <button type="submit" class="btn btn-primary">Submit</button>
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
                user: {}
            }
        },
        methods: {
            entrar() {
                this.signIn({user: this.user}).then(() => {
                    this.$router.push({path: '/'})
                })
                
            },
            ...mapActions([
                'signIn',
                'checkLogin'
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