<script setup>
defineProps(['inventory'])
</script>
<template>
  <img v-if="inventory['/html']" src="../assets/logos/html_logo.png" height="50"/>
  <img v-if="inventory['/css']" src="../assets/logos/css_logo.png" height="50"/>
  <img v-if="inventory['/git']" src="../assets/logos/git-icon-white.png" height="50"/>
  <img v-if="inventory['/js']" src="../assets/logos/javascript-node-js-logo.png" height="50"/>
  <img v-if="inventory['/js']" src="../assets/logos/vue_logo.png" height="50"/>
</template>
