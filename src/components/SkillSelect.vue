<template>
  <!-- fill the card with if of the selected skill -->
  <div class="card skills">
    <div class="card-header">
      <h3>{{ selectedSkill }}</h3>
    </div>
    <div class="card-body ">
      <div v-for="(skill, index) in skills" :key="index">
        <div v-if="skill.name === selectedSkill">
          <div v-for="(innerSkill, innerIndex) in skill.skills" :key="innerSkill"> 
          <h4>{{ innerSkill }}</h4>
          <div class="progress">
            <div class="progress-bar" role="progressbar" :style="{ width: percentage[innerIndex] }" aria-valuenow="70"
              aria-valuemin="0" aria-valuemax="100">{{ percentage[innerIndex] }}</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SkillsSelect',
  props: {
    selectedSkill: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      skills: [
        {
          name: 'Frontend',
          skills: ['JavaScript', 'Vue', 'Bootstrap', 'Html5+CSS'],
          percentage: ['70%', '50%', '90%', '90%'],
        },
        {
          name: 'Backend',
          skills: ['Laravel', 'Node.js', 'Express.js', 'Django'],
          percentage: ['90%', '40%', '40%', '40%'],
        },
        {
          name: 'Database',
          skills: ['Oracle SQL', 'PostgreSQL', 'MySQL', 'SQLite'],
          percentage: ['45%', '50%', '90%', '90%'],
        },
        {
          name: 'DevOps',
          skills: ['Docker', 'AWS', 'Ansible', 'Git'],
          percentage: ['80%', '60%', '50%', '75%'],
        },
      ],
    };
  },
  computed: {
    percentage() {
      const skill = this.skills.find((skill) => skill.name === this.selectedSkill);
      return skill.percentage;
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- animate the progess bar as it change value -->
<style scoped>
.skills {
  animation: animate 1s ease-in-out;
}

@keyframes animate {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}


</style>
