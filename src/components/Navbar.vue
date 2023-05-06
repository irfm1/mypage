<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Ícaro Moura</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
    .navbar {
        background-color: #e3f2fd;
    }

    .navbar-brand {
        font-weight: bold;
    }

    .nav-link {
        font-weight: bold;
    }

    .nav-link:hover {
        color: #42b983;
    }

    .active {
        color: #42b983;
    }

    .navbar-toggler {
        border: none;
    }

    .navbar-toggler-icon {
        background-image: url("https://img.icons8.com/ios/50/000000/menu-filled.png");
        width: 30px;
        height: 30px;
    }

    .navbar-toggler:focus {
        outline: none;
    }

    .navbar-nav {
        margin-left: auto;
    }

    .navbar-nav .nav-item {
        margin-left: 20px;
    }

    .navbar-nav .nav-item .nav-link {
        color: #000;
    }

    .navbar-nav .nav-item .nav-link:hover {
        color: #42b983;
    }

    .navbar-nav .nav-item .active {
        color: #42b983;
    }


  </style>