<script setup>
import useInventory from '../composables/useInventory.js';
const { addItemToInventory } = useInventory();
addItemToInventory('/js');
</script>
<template>
  <div class="imageHolder">
    <img src="../assets/logos/javascript-node-js-logo.png" alt="JavaScript logo" height="150" />
  </div>
  <p>Originally I focused my learning on ES5, completely vanilla, highest compatability code. I used this in my personal projects and my volunteer work with <a href="https://freeukgen.github.io/FreeUKGenealogyWP/inner_donation.html" target="_blank" >Free UK Genealogy</a>. Starting with my employment at Infosys and continuing, I focused more on learning the utility of ES6 and beyond.</p>
</template>
