<script setup>
const skillList = [
    'JavaScript',
    'Vue',
    'HTML5',
    'CSS3',
    'Vuetify',
    'Bootstrap',
    'Git',
    'GitLab/GitHub',
    'API Integration',
    'Agile Development',
    'IntelliJ IDEA',
    'Node.js/Express/Koa',
    'Angular',
    'Java'

]
</script>
<template>
  <div class="wrapper">
    <div class="one">
      <h1>Taz Hinkle</h1>
      <h3>Software Developer</h3>
      <h4>Relevant Experience</h4>
    </div>
    <div class="two">
      <h4>Skills</h4>
      <p v-for="skill in skillList">{{skill}}</p>
    </div>
  </div>
</template>

<style>
.wrapper {
  display: grid;
  grid-template-columns: 70% 30%;
}
.two {
  padding-top: 90px;
}
h4 {
  color: #6a0055;
}
p {
  margin: 0;
}
</style>
