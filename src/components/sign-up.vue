<template>
  <div class="box">
    
   
    <h1>Registeration</h1>
   
    <div class="in">
        <label for="name">Name</label>
        <div>  <input type="text" v-model="username" placeholder="Enter your name"
             /><img v-if="username.length >= 5" src="../assets/ok.svg" alt=""></div>

             <label for="name">Email</label>
        <div>  <input type="text" v-model="mail" placeholder="Enter your email"
             /><img v-if="mail.length >= 6" src="../assets/ok.svg" alt=""></div>
  
    <div class="button_action">
      <button v-on:click="mail = ' @gmail.com' ">@gmail.com</button> <button v-on:click="mail = '@yahoo.com' ">@yahoo.com</button>  <button v-on:click="mail = '@outlook.com' ">@outlook.com</button>  <button v-on:click="mail = '@aol.com' ">@aol.com</button>
    </div>
    
    </div>
  
    <div class="in">
    <label for="name">Password</label>
    <div>
      <v-text-field type="password"> 
        <input v-model="password_confirmation" type="password" placeholder="8 characters minimum" required/><img v-if="password_confirmation.length >= 8" src="../assets/ok.svg" alt="">

      </v-text-field>
      </div>  
     <div class="password_bar">
      <div :class="{'bar':true, 'green':(password_confirmation.length > 1)}" ></div> 
      <div :class="{'bar':true, 'green':(password_confirmation.length > 3)}" ></div> 
      <div :class="{'bar':true, 'green':(password_confirmation.length > 5)}" ></div>  
      <div :class="{'bar':true, 'green':(password_confirmation.length > 7)}" ></div> 
    </div>
    <label for="name">Renter your password</label>
    <div>
      <v-text-field type="password"> 
        <input v-model="password" type="password" placeholder="Confirm your password" required/><img v-if="!password_confirmation" style="display: none;" src="../assets/ok.svg" alt=""><img v-else-if="password === password_confirmation" src="../assets/ok.svg" alt="">
      </v-text-field>
    </div>
  <label for="name">Location</label>
        <div>  <input type="text" placeholder="your location" /><img v-if="!mail" style="display: none;" src="../assets/ok.svg" alt=""><img v-else-if="mail_confirm === mail" src="../assets/ok.svg" alt=""></div>
  
   
    </div>
    
    <div class="check_bar">
      <div> <input type="checkbox" name="" id="">
      <label for="">Remember me</label></div>
     
      <a href="">Forgot your password? </a>
  
    </div>
  
  
    <button class="log">
      Sign Up
      </button>
     
  
  <span>Do you have an account? <a href="/">Login</a> </span> 
  </div>
  
  </template>
  
  
  <script>
  export default {
  
    data() {
      return {
        password:"",
        userLoggedIn: false,
        username:"",
        mail:"",
        mail_confirm:"",
        password_confirmation:"",
        isActive: false,

      };
      
    },
    toggle() {
this.isActive = ! this.enable ;
},
  };
  
  </script>
  
  
  <style scoped>
@import '../assets/style.css';
.box{
display: flex;
    position: absolute;
    left: 30%;
    top: 11%;
    width: 60%;
}
</style>
  
  