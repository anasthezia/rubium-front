<template>
  <div id="app">
    <!-- <Nav/> -->
    <Header/>

    <Homepage />
    <Services/>
    <Vacancies/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Homepage from './components/Homepage.vue'
import Header from './components/Header.vue'
import Services from './components/services/services.vue'
import Vacancies from './components/Vacancies.vue'



export default {
  name: 'App',
  components: {
    Homepage,
    Header,
    Services,
    Vacancies
  }
}
</script>

<style>
  html {
    font-size: 10px;
  }
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #434345;
  /* margin-top: 60px; */
}
</style>
