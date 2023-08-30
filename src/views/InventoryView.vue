<script setup>
import HtmlView from "./HtmlView.vue";

defineProps(['inventory'])
</script>
<template>
  <div class="inventory">
    <div class="navLevelItems">
      <RouterLink :to="{name: 'HtmlView'}">
        <img :class="(!inventory['/html']) ? 'notVisited' : 'visited'" src="../assets/logos/html_logo.png" alt="html logo"/>
      </RouterLink>
      <RouterLink :to="{name: 'CssView'}">
        <img :class="(!inventory['/css']) ? 'notVisited' : 'visited'" src="../assets/logos/css_logo.png" alt="css logo"/>
      </RouterLink>
      <RouterLink :to="{name: 'JavaScriptView'}">
        <img :class="(!inventory['/js']) ? 'notVisited' : 'visited'" src="../assets/logos/javascript-node-js-logo.png" alt="js logo"/>
      </RouterLink>
      <RouterLink :to="{name: 'GitView'}">
        <img :class="(!inventory['/git']) ? 'notVisited' : 'visited'" src="../assets/logos/git-icon-white.png" alt="git logo"/>
      </RouterLink>
      <RouterLink :to="{name: 'VueView'}">
        <img :class="(!inventory['/vue']) ? 'notVisited' : 'visited'" src="../assets/logos/vue_logo.png" alt="vue logo"/>
      </RouterLink>

    </div>
    <div class="subItems"></div>
  </div>
</template>
<style scoped>
.inventory {
  border: 2px solid #eee;
  margin: 0 2%;
  min-height: 60px;
  width: 90%;
  padding: 4px;
  top: 85%;
  position: fixed;
}
.inventory a {
  display: inline-block;
  width: 50px;
  height: 50px;
  position: relative;
}
.inventory a.router-link-active::before {
  content: '';
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  background-color: #dddddd;
  z-index: -1;
  border-radius: 50%;
  box-shadow: 0 0 8px #dddddd, 0 0 8px #dddddd, 0 0 8px #dddddd, 0 0 8px #dddddd;
  opacity: 0.25;
}

.inventory a img {
  max-width: 100%;
  display: block;
}
.navLevelItems {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.notVisited {
  opacity: 20%;
}
@media (min-width: 750px) {
  .inventory {
    top: calc(50vh + 200px);
    width: 500px;
  }
}
</style>
