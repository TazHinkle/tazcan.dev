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
  <p>While I have utilized vanilla JavaScript on the frontend, I have also used it in the context of popular frameworks Vue, and Angular (TypeScript). It has processed and validated many a form, and handled the state and handling that has made my web applications truly interactive experiences.</p>
  <p>As a full stack developer, I have also used Node.js in backend situations, particularly adjusting endpoints in the API, but also writing queries to the database (primarily MySQL at Infosys and MongoDb at CityGro), and defining custom classes for applications. I am also acquainted with Java, and even did one project in Rust, but the majority of my backend programming has been JavaScript. In early personal projects I utilized the Express framework, while at CityGro we used Koa. Both have great libraries of HTTP helpers.</p>
</template>
