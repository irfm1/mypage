<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom mb-5">
    <a class="navbar-brand ms-3" href="#">
      <img src="logo.svg" alt="" width="64" height="50" class="d-inline-block align-text-top">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-around" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a to="/" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a to="/projects" class="nav-link">Projects</a>
        </li>
        <li class="nav-item">
          <a to="/about" class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a to="/contact" class="nav-link">Contact</a>
        </li>
      </ul>
    </div>
    <div class="d-flex justify-content-end me-3">
      <div :class="{ 'dark-mode': darkMode, 'card-container': true }">
        <!-- ... rest of your code ... -->
        <div class="card-footer">
          <button @click="darkMode = !darkMode">
            <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>
        </div>
      </div>
    </div>

  </nav>
</template>
  
<script>
export default {
  name: 'NavBar',
  data() {
    return {
      darkMode: false,
    };
  },
  watch: {
    darkMode(newVal) {
      if (newVal) {
        document.body.classList.add('dark-mode');
        console.log('dark mode');
      } else {
        document.body.classList.remove('dark-mode');
        console.log('light mode');
      }
    },
  },
};
</script>
  
<style scoped>
.dark-mode {
  background-color: #333;
  color: #fff;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
</style>

