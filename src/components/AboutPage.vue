<template>
  <div class="card-container">
    <div class="card">
      <div class="card-header">
        <h3>{{ language === 'en' ? 'About Me' : 'Sobre Mim' }}</h3>
        <label class="switch">
          <input type="checkbox" v-model="isEnglish" @click="switchLanguage">
          <span class="slider round"></span>
        </label>
      </div>
      <div class="card-body row">
        <div class="profile">
          <div class="profile-img-container">
            <img src="profile_img.jpeg" alt="profile" class="profile-img">
            <img src="flag.svg" alt="flag" class="flag-img">
          </div>
          <span class="profile-name">Ícaro Moura</span>
       
          <div class="profile-description mt-3 " id="english" v-if="isEnglish">
            <p>Hello, I'm a seasoned full-stack software developer hailing from Brazil. I'm currently leveraging my skills
              in the freelance market.</p>
            <p>As an avid supporter of open-source projects, I'm constantly on the lookout for innovative challenges that
              push the boundaries of technology.</p>
            <p>While I'm always eager to learn and adapt to new technologies, I have a deep-rooted expertise in Laravel,
              which I've honed over the years.</p>
            <p>Feel free to reach out if you have any intriguing projects, insightful suggestions, or simply wish to
              connect. Happy coding!</p>
          </div>
          <div class="profile-description mt-3" id="portugues" v-else>
            <p>Olá, sou um desenvolvedor de software full-stack experiente do Brasil. Atualmente, estou aproveitando minhas
              habilidades no mercado freelance.</p>
            <p>Como um ávido defensor de projetos de código aberto, estou sempre em busca de desafios inovadores que
              ultrapassem os limites da tecnologia.</p>
            <p>Embora eu esteja sempre ansioso para aprender e me adaptar a novas tecnologias, tenho uma experiência
              enraizada no Laravel, que aprimorei ao longo dos anos.</p>
            <p>Sinta-se à vontade para entrar em contato se tiver algum projeto intrigante, sugestões perspicazes ou
              simplesmente desejar se conectar. Bom desenvolvimento!</p>
        </div>    
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEnglish: true, // default language
    };
  },
  computed: {
    language() {
      return this.isEnglish ? 'en' : 'pt';
    }
  },
  methods: {
    switchLanguage() {
      this.isEnglish = !this.isEnglish;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

a {
  color: #42b983;
}

a:hover,
a:focus {
  color: #3b8070;
}

.projects {
  margin-top: 40px;
}

.projects>div {
  margin-bottom: 40px;
}

.projects>div:last-child {
  margin-bottom: 0;
}

.projects h2 {
  margin-bottom: 5px;
}

.projects p {
  margin-top: 5px;
  margin-bottom: 10px;
}

.projects a {
  font-size: 14px;
}

.projects a:hover,
.projects a:focus {
  text-decoration: none;
}

.projects .view-all {
  margin-top: 20px;
}

.projects .view-all a {
  font-size: 16px;
}

.projects .view-all a:hover,
.projects .view-all a:focus {
  text-decoration: underline;
}

.projects .view-all a i {
  margin-left: 5px;
}

.projects .view-all a:hover i,
.projects .view-all a:focus i {
  color: #3b8070;
}

.projects .view-all a i.fa {
  font-size: 14px;
}

.projects .view-all a:hover i.fa,
.projects .view-all a:focus i.fa {
  color: #3b8070;
}

.projects .view-all a i.fas {
  font-size: 12px;
}

.projects .view-all a:hover i.fas,
.projects .view-all a:focus i.fas {
  color: #3b8070;
}

.projects .view-all a i.far {
  font-size: 14px;
}

.projects .view-all a:hover i.far,
.projects .view-all a:focus i.far {
  color: #3b8070;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #42b983;
}

.profile-img-container {
  position: relative;
}

.flag-img {
  position: absolute;
  bottom: -10px;
  right: 55px;
  width: 30px;
  height: 30px;

}

.profile-name {
  margin-top: 10px;
  font-weight: 600;
  font-size: 20px;
}

.profile-description {
  margin-top: 10px;
  font-size: 16px;
  text-align: center;}

  .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: green;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}



</style>
