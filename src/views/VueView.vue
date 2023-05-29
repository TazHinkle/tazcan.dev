<script setup>
import useInventory from '../composables/useInventory.js';
const { addItemToInventory } = useInventory();
addItemToInventory('/vue');
</script>
<template>
  <div class="imageHolder">
    <img src="../assets/logos/vue_logo.png" alt="Vue logo" height="150" />
  </div>
  <p>I started using Vue in personal projects, mostly using the CDN method rather than doing a build. It made for a great way to start learning the options API before getting into component building. While working for CityGro, I worked with a full webpack Vue2 project, including VueX, and VueX ORM.</p>
  <p>I am currently working towards a Vue certification through vuejs.org.</p>
</template>
