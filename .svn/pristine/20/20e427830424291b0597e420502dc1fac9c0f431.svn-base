<template>
  <form class="form-signin">
    <h2 class="form-signin-heading">Please sign in</h2>
    <label for="inputEmail" class="sr-only">username</label>
    <input type="text" v-model="username" id="inputEmail" class="form-control" placeholder="Email address">
    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Password">
    <div class="checkbox">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="btn btn-lg btn-primary btn-block" @click="save()" type="submit">Sign in</button>
  </form>
</template>
<style>


</style>
<script>
    export default {
        data(){
            return {
                username:'张三',
                password:'123',
            }
        },
        methods: {
          save(){
            const user = {
              username : this.username,
              password : this.password,
            };
            console.log('this is save')
            this.$store.dispatch('signin',user);
            this.$router.replace({ path: '/home' })
          }
        }
    }


</script>
