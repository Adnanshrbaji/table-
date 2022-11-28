<template>
<div class="box" style="    display: flex;">

    <center>
        <h1>VUESTIC <sup> ADMIN</sup></h1>
    </center>

    <div class="in">
        <label for="name">Email</label>
        <div> <input type="text" v-model="username" placeholder="E-mail" /><img v-if="username.length >= 4" src="../assets/ok.svg" alt=""></div>
    </div>

    <div class="in">
        <label for="name">Password</label>
        <div>
            <input v-model="password" type="password" :name="string" placeholder="password" required /><img v-if="password.length >= 8" src="../assets/ok.svg" alt="">
        </div>

    </div>

    <div class="password_bar">
        <div :class="{'bar':true, 'green':(password.length > 1)}"></div>
        <div :class="{'bar':true, 'green':(password.length > 3)}"></div>
        <div :class="{'bar':true, 'green':(password.length > 5)}"></div>
        <div :class="{'bar':true, 'green':(password.length > 7)}"></div>
    </div>

    <div class="check_bar">
        <div> <input type="checkbox" name="" id="">
            <label for="">Remember me</label></div>

        <a href="">Forget password? </a>

    </div>

    <button class="log">
        Login
    </button>

    <span>You don't have an account ? <a href="/signup">Register</a> </span>
</div>
</template>

    
    
    
<script>
export default {
    data() {
        return {
            password: "",
            userLoggedIn: false,
            username: ""
        };

    },
    method: {
        changeStep() {
            this.$emit("nextStep", "signinfr");
        }
    }
};
</script>
    
    
<style scoped>
@import '../assets/style.css';

.box {
    display: flex;
    position: absolute;
    left: 30%;
    top: 11%;
    width: 50%;
}
</style>
