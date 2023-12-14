<template>
  <Navbar />
  <div class=" m-5 pt-5"> 
    <div class="row">
      <div class="col-3">
        <SkillsBar />
        
      </div>
      <div class="col-9">
        <about-page />
      </div>
    </div>
     
  </div>
 

</template>

<script>
import AboutPage from './components/AboutPage.vue'
import Navbar from './components/Navbar.vue'
import SkillsBar from './components/SkillsBar.vue';




export default {
  name: 'App',
  components: {
    AboutPage,
    Navbar,
    SkillsBar,

  },
  data() {
    return {
      selectedSkill: 'Frontend',
    };
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
