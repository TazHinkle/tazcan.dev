<script setup>
// pull in state.progress
// if not html badge, add it.
import useInventory from '../composables/useInventory.js';
const { addItemToInventory } = useInventory();
addItemToInventory('/css');

</script>

<template>
  <div class="cssView">
    <div class="imageHolder">
      <img src="../assets/logos/css_logo.png" alt="css logo" height="150"/>
    </div>
    <p>My first big step into styling was in adopting the Bootstrap framework. I used this on multiple personal projects, and also while working at Infosys. It's a great time-saver from going from your first line of code to having a solid looking GUI with minimal hassle.</p>
    <p>Vuetify is flashy, with it's prefab components ready to be slotted into a Vue.js project. It also has some very good documentation. I got very, very familiar with the Vuetify docs while working at CityGro.</p>
    <p>In some ways, learning modern CSS with flexbox, media queries, and percentage based sizing, is the most powerful tool, as it can be used both on its own, and to modify the styling of the other frameworks as needed.</p>
  </div>
</template>

<style scoped>
.imageHolder {
  display: flex;
  justify-content: center;
}
.imageHolder img {
  animation-duration: 2.5s;
  animation-name: flip-with-scale;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
}

@keyframes flip-with-scale {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(720deg);
  }
}

</style>
