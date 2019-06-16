<template>
  <div class="container">
    <div class="row justify-content-xl-center text-center">      
      <form class="login-signin" @submit.prevent="login">
        <h2 class="form-signin-heading">Login</h2>
        <label for="inputEmail" class="sr-only">E-mail</label>
        <input v-model="user.username" type="email" class="form-control" placeholder="Email" id="inputEmail">
        <label for="inputPassword" class="sr-only">Password</label>
        <input v-model="user.password" type="password" class="form-control" placeholder="Password" id="inputPassword">
       <button @click="login" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        let uri = 'http://www.gestor.com/api/login';
        axios.post(uri, this.user).then(response => {
        let access_token = response.data.access_token;

        localStorage.setItem('access_token', access_token);

       });
      }
    }
  }
</script>