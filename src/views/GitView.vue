<script setup>
import useInventory from '../composables/useInventory.js';
const { addItemToInventory } = useInventory();
addItemToInventory('/git');
</script>
<template>
  <div class="gitView">
    <div class="imageHolder">
      <img src="../assets/logos/git-icon-white.png" alt="Git logo" height="150" />
    </div>
    <p>It's nearly impossible to overstate the importance of Version Control in application development. I started playing around with Git on my own, making a GitHub profile and pushing little projects or tutorials to it as I worked. Professionally, I made use of GitHub at Infosys as well as my personal and volunteer work, and GitLab while working at CityGro. Particularly at CityGro, I worked on many branches in short succession and was once called a "branch hero" by a senior coworker.</p>
    <p>Something I sometimes mention in interviews as an example of leadership, was actually leading a Git/GitHub study group with several fellow new hires at Infosys. We practiced committing, merging, and resolving conflicts through command line (using Bash) and in the Visual Studio Code IDE (later, I used JetBrain's IntelliJ IDEA, which has wonderful Git integration).</p>
  </div>

</template>
