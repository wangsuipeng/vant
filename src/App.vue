<template>
  <div id="app">
    <img src="./assets/logo3.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app img {
  display: inline-block;
  margin-bottom: 50px;
  width: 190px;
  animation: rotateHAHA 3s linear infinite;
}
@keyframes rotateHAHA {
  0% {
    transform: rotate(360deg)
  }
  100% {
    transform: rotate(0deg)
  }
}
</style>
