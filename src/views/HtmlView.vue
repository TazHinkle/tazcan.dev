<script setup>
import useInventory from '../composables/useInventory.js';
const { addItemToInventory } = useInventory();
addItemToInventory('/html');

</script>

<template>
  <div class="htmlView">
    <div class="imageHolder">
      <img src="../assets/logos/html_logo.png" alt="html logo" height="150"/>
    </div>
    <p>I don't remember a time when I didn't love computers, but it wasn't until I was a teenager and made my first website that I got a taste for creating my own content. I put some basic html up on a Geocities website- and got "fancy" and made it have white text against a black background. I discovered exciting things like FTP utilities and tables (so many tables...). It was just a great experience and a skill that I was able to use for my own ends and sometimes to help out a friend.</p>

    <p>Later, and I'm skipping some steps, I learned about the different versions of html and how much more powerful HTML5 was than previous versions. It has audio and video tags, along with the super cool canvas. Then there were the really fancy things like the expanded local storage, offline caching, and cross-document messaging features.</p>
    <div class="svgAnimation">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" width="270" height="270">

        <rect
            width="120"
            height="120"
            fill="#aaa"
        />
        <rect
            width="100"
            height="100"
            fill="#888"
        />
        <rect
            width="80"
            height="80"
            fill="#666"
        />
        <rect
            width="60"
            height="60"
            fill="#444"
        />
        <rect
            width="40"
            height="40"
            fill="#222"
        />
        <rect
            width="20"
            height="20"
            fill="#000"
        />
        <circle
            r="10"
            cx="10"
            cy="10"
            fill="rgb(55,20,110)"
            id="my-ball"
        />
        <animate
            xlink:href="#my-ball"
            attributeName="cy"
            from="10"
            to="300"
            dur="6s"
            repeatCount="indefinite"
        />
        <animate
            xlink:href="#my-ball"
            attributeName="cx"
            from="10"
            to="270"
            dur="6s"
            repeatCount="indefinite"
        />
        <animate
            xlink:href="#my-ball"
            attributeName="r"
            from="5"
            to="25"
            dur="6s"
            repeatCount="indefinite"
        />
      </svg>
    </div>
  </div>
</template>
