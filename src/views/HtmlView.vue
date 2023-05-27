<script setup>
// pull in state.progress
// if not html badge, add it.
import useInventory from '../composables/useInventory.js';
const { addItemToInventory } = useInventory();
addItemToInventory('/html');

</script>

<template>
  <div class="imageHolder">
    <img src="../assets/logos/html_logo.png" alt="html logo" height="150"/>
  </div>
  <p>I don't remember a time when I didn't love computers, but it wasn't until I was a teenager and made my first website that I got a taste for creating my own content. I put some basic html up on a Geocities website- and got "fancy" and made it have white text against a black background. I discovered exciting things like FTP utilities and tables (so many tables...). It was just a great experience and a skill that I was able to use for my own ends and sometimes to help out a friend.</p>

  <p>Later, and I'm skipping some steps, I learned about the different version of html and how much more powerful HTML5 was than previous versions. It has audio and video tags, along with the super cool canvas. Then there were the really fancy thing like the expanded local storage, offline caching, and cross-document messaging features.</p>
</template>
<style scoped>
.imageHolder {
  display: flex;
  justify-content: center;
}

</style>
