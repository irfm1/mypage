<template>
  <div class="card">
    <div class="card-header">
      <h3>Skills</h3>
    </div>
    <div class="card-body">
      <div class="mt-2" @click="updateSelectedSkill('Frontend')">
        <h4>Frontend</h4>
        <div class="progress">   
          <div class="progress-bar"  role="progressbar" style="width: 60%" aria-valuenow="80" aria-valuemin="0"
            aria-valuemax="100">60%</div>
        </div>
      </div>
      <div class="mt-2" @click="updateSelectedSkill('Backend')">
        <h4>Backend</h4>
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="70" aria-valuemin="0"
            aria-valuemax="100">90%</div>
        </div>
      </div>
      <div class="mt-2" @click="updateSelectedSkill('Database')">
        <h4>Database</h4>
        <div class="progress">
          <div class="progress-bar"  role="progressbar" style="width: 70%" aria-valuenow="60" aria-valuemin="0"
            aria-valuemax="100">70%</div>
        </div>
      </div>
      <div class="mt-2" @click="updateSelectedSkill('DevOps')">
        <h4>DevOps</h4>
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0"
            aria-valuemax="100">60%</div>
        </div>
        </div>
    </div>
  </div>

  <div class="mt-3" v-if="selectedSkill">
    <SkillsSelect :selectedSkill="selectedSkill" @selectedSkillChanged="updateSelectedSkill" />
  </div>
</template>

<script>
import SkillsSelect from './SkillSelect.vue';


export default {
  name: 'SkillsBar',
  components: {
    SkillsSelect,
  },
  data() {
    return {
      selectedSkill: null,
    };
  },
  methods: {
    updateSelectedSkill(skill) {
      if (this.selectedSkill === skill) {
        this.selectedSkill = null;
      } else {
        this.selectedSkill = null;
        this.selectedSkill = skill;
      }
    },
  },
  computed: {
    skills() {
      return this.$store.state.skills;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
