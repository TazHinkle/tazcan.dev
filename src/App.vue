<script setup>
import useInventory from "./composables/useInventory.js";
const {inventory} = useInventory()
const journey = () => {
  alert('not implemented')
}
const skipToEnd = () => {
  alert('not implemented')
}
</script>

<template>
  <div>
    <div class="screenContent">
      <RouterView></RouterView>
    </div>
    <div class="top"></div>
    <div class="left"></div>
    <div class="right"></div>
    <div class="bottom"></div>
    <div class="consoleBody"></div>
    <div class="belowScreen">
      <button @click="journey">Start Journey</button>
      <button @click="skipToEnd">Skip to the End</button>
      <nav>
        <RouterLink :to="{name: 'HtmlView'}">HTML</RouterLink>
        <RouterLink :to="{name: 'CssView'}">CSS</RouterLink>
        <RouterLink :to="{name: 'Home'}">Home</RouterLink>
      </nav>
      <div class="inventory">
        <pre>{{inventory}}</pre>
      </div>
    </div>
  </div>
</template>

