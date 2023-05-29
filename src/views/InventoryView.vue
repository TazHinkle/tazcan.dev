<script setup>
defineProps(['inventory'])
</script>
<template>
  <div class="backpack">
    <div class="navLevelItems">
      <img v-if="inventory['/html']" src="../assets/logos/html_logo.png" height="50" alt="html logo"/>
      <img v-if="inventory['/css']" src="../assets/logos/css_logo.png" height="50" alt="css logo"/>
      <img v-if="inventory['/js']" src="../assets/logos/javascript-node-js-logo.png" height="50" alt="js logo"/>
      <img v-if="inventory['/git']" src="../assets/logos/git-icon-white.png" height="50" alt="git logo"/>
      <img v-if="inventory['/vue']" src="../assets/logos/vue_logo.png" height="50" alt="vue logo"/>
    </div>
    <div class="subItems"></div>
  </div>
</template>
<style>
.backpack {
  min-height: 60px;
}
</style>
