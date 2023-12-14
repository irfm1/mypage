<template>
  <div class="card-container">
    <div class="card">
      <div class="card-header">
        <h3>About Me</h3>
      </div>
      <div class="card-body row">
      <div class="profile">
        <div class="profile-img-container">
            <img src="profile_img.jpeg" alt="profile" class="profile-img">
            <img src="flag.svg" alt="flag" class="flag-img">
        </div>
        <span class="profile-name">Ícaro Moura</span>
        <div class="profile-description mt-3">
          <p>Hi, I'm a software developer from Brazil. I'm currently freelancing as a fullstack developer.</p>
          <p>I'm a big fan of open source projects and I'm always looking for new challenges.</p>
        </div>
      </div>
      <div class="card-footer">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
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
  text-align: center;
}

</style>
