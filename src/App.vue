<template>
  <div id="app" class="container">
    <NavBar/>
    <div class="menu target" @click="showNavBar"></div>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
  </div>
</template>

<script>
import './assets/scss/main.scss'
import NavBar from "./components/NavBar"
import Section1 from "./components/section1"
import Section2 from "./components/section2"
import Section3 from "./components/section3"
import Section4 from "./components/section4"
export default {
  name: 'App',
  components: {
    NavBar,
    Section1,
    Section2,
    Section3,
    Section4
  },
  methods: {
    showNavBar(){
      document.querySelectorAll('.target').forEach(item=>{
        item.classList.toggle('change');
      });
    }
  },
}
</script>

<style lang="scss">
</style>
