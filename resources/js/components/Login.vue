<template>
  <div class="container">
    <div class="row justify-content-xl-center text-center">      
      <form class="login-signin" @submit.prevent="login">
        <h2 class="form-signin-heading">Login</h2>
        <label for="inputEmail" class="sr-only">E-mail</label>
        <input v-model="username" type="email" class="form-control" placeholder="Email" id="inputEmail">
        <label for="inputPassword" class="sr-only">Password</label>
        <input v-model="password" type="password" class="form-control" placeholder="Password" id="inputPassword">
       <button @click="login" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'login',
    data(){
      return {
        username: '',
        password: ''        
      }
    },
    methods: {
      login(){
        this.$store.dispatch('retriveToken', {
          username: this.username,
          password: this.password
        })
        .then(response => {
          this.$router.push({name: 'aplication'})
        })
      }
    }
  }
</script>