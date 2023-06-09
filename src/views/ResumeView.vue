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
  <div class="resumeView">
    <h1>Taz Hinkle</h1>
    <h3>Software Developer</h3>
    <div class="wrapper">
      <div class="one">
        <h4>Relevant Experience</h4>
        <p><strong>Junior Software Developer</strong></p>
        <p>CityGro</p>
        <p>June 2022 – April 2023</p>
        <ul>
          <li>Worked with an enterprise Marketing and User Segment Analysis Tool in a
            complex codebase using: Vue.js, Vuetify, Koa.js, MongoDB, VueX store, and
            VueX ORM.</li>
          <li>Designed the company’s current API documentation, including:
            <ul>
              <li>A "Build a Request" area with a GUI to guide a user through proper
                request formatting.</li>
              <li>An FAQ section based on reading real customer service emails and
                modifying content to be more generally applicable and scrubbing
                any identifying information for the original customers.</li>
            </ul>
          </li>
          <li>Worked with development and project management tools: Slack, GitLab, Clickup, IntelliJ IDEA.</li>
          <li>Completed over 80 tickets, including bug ﬁxes and feature requests.</li>
        </ul>
        <p><strong>Associate (Software Developer)</strong></p>
        <p>Infosys</p>
        <p>October 2021 – June 2022</p>
        <ul>
          <li>Contracted with Goldman Sachs in a Developer/Maintenance role:
            <ul>
              <li>Monitored and troubleshot critical processes, mostly the recording
                and reporting of trade options.</li>
              <li>Fixed bugs using the GS proprietary language SLang.</li>
              <li>Participated in daily standup meetings and code reviews with my
                team.</li>
            </ul>
          </li>
          <li>Kept current with the company’s policy for continuous learning, earning
            company certiﬁcations in a variety of tech based disciplines, including:
            <ul>
              <li>Programming: JavaScript, Node.js, Angular, and Typescript.</li>
              <li>Data: SQL, MySQL, Data structures.</li>
              <li>Project Methodologies: Agile, Scrum, Kanban.</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="two">
        <h4>Skills</h4>
        <p v-for="skill in skillList">{{skill}}</p>
        <h4>Education and Certificates</h4>
        <p>BS Information Technology – Western Governors University 2020</p>
        <p>ITIL Foundation Certificate in IT Service Management 2020</p>
        <p>CIW Advanced HTML5 & CSS3 Specialist 2019</p>
        <p>CIW Site Development Associate 2019</p>
        <p>CompTIA Project+ 2019</p>
      </div>
    </div>
    <div class="imageHolder">
      <a href="https://github.com/TazHinkle" target="_blank"><img src="../assets/logos/github-mark-32px.png" alt="GitHub"></a>
      <a href="https://www.linkedin.com/in/taz-hinkle-9870321a/" target="_blank"><img src="../assets/logos/li-in-bug.png" alt="LinkedIn"></a>
    </div>
  </div>
</template>

<style scoped>
h4 {
  color: #6a0055;
}
p {
  margin: 0;
}
.imageHolder a {
  display: inline-block;
  padding: 8px;
  margin: 8px;
}
@media (min-width: 750px) {
  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .one {
    width: 60%
  }
  .two {
    margin-left: 5%;
    width: 25%;
  }
}
</style>
