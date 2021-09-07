<template>
  <div class="home">

 <router-link to="/crypto">Crypto</router-link>

   <div class="container">
     <div class="form">
      
      <form class="form-group" @submit.prevent="register">
<!-- 
        <div class="alerts" v-if="messages">
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div> -->
<!-- 
        <h3 class="text-center">Register</h3> -->
        <!-- <label>Name :</label>
        <input type="text"  class="form-control" v-model="name">
        <label >Email :</label>
        <input type="email" class="form-control" v-model="email">
        <label >Password :</label>
        <input type="password" class="form-control" v-model="password">
        <button class=" btn mt-3 btn-block btn-primary" type="submit">Register</button> -->
      </form>

     </div>
   </div>
  </div>
</template>

<script>

import axios from 'axios'
import VueCookie from 'vue-cookies'
export default {
  name: 'Home',
  data() {
    return {
        name : '',
        email : '',
        password : '',
        messages : ''
    }
  },
  methods: {
    async register() {

     
    }
  }
}
</script>

<style scoped>
.form {
  position: absolute;
  top: 20%;
  left: 30%;
  width: 40%;
}
</style>
