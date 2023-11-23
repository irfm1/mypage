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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
