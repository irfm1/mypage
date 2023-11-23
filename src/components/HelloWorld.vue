<template>
  <div>
    <h1>My Projects</h1>
    <div v-for="project in projects" :key="project.name">
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
      <a :href="project.url" target="_blank">View Project</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      projects: [
        {
          name: 'Underconstruction',
          description: 'A simple project to get started with Vue.js',
          url: 'https://github.com/irfm1'
        },
        // Add more projects here...
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
  }

  a {
    color: #42b983;
  }

  a:hover, a:focus {
    color: #3b8070;
  }

  .projects {
    margin-top: 40px;
  }

  .projects > div {
    margin-bottom: 40px;
  }

  .projects > div:last-child {
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

  .projects a:hover, .projects a:focus {
    text-decoration: none;
  }

  .projects .view-all {
    margin-top: 20px;
  }

  .projects .view-all a {
    font-size: 16px;
  }

  .projects .view-all a:hover, .projects .view-all a:focus {
    text-decoration: underline;
  }

  .projects .view-all a i {
    margin-left: 5px;
  }

  .projects .view-all a:hover i, .projects .view-all a:focus i {
    color: #3b8070;
  }

  .projects .view-all a i.fa {
    font-size: 14px;
  }

  .projects .view-all a:hover i.fa, .projects .view-all a:focus i.fa {
    color: #3b8070;
  }

  .projects .view-all a i.fas {
    font-size: 12px;
  }

  .projects .view-all a:hover i.fas, .projects .view-all a:focus i.fas {
    color: #3b8070;
  }

  .projects .view-all a i.far {
    font-size: 14px;
  }

  .projects .view-all a:hover i.far, .projects .view-all a:focus i.far {
    color: #3b8070;
  }
</style>
