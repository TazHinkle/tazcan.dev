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
  <p>The component based programming model provided by Vue is ideal for Single Page Applications. It's lightweight compared to other frameworks, but just as powerful. I am currently working towards a Vue 3 certification through vuejs.org. Vue 3, specifically the Composition API, seems to be even more sleek and powerful than Vue 2 and I'm very excited to use it in more projects.</p>
</template>
