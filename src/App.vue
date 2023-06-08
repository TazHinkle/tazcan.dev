<script setup>
import useInventory from "./composables/useInventory.js";
import {computed, onMounted, onUnmounted, ref} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import Home from "./views/Home.vue";
import InventoryView from "./views/InventoryView.vue";
import { onKeyDown } from "@vueuse/core";

const router = useRouter();
const routes = router.getRoutes();
const route = useRoute();
console.log('route', route.fullPath);
const {inventory} = useInventory()

const labelMap = {
  '/': 'Home',
  '/html': 'HTML',
  '/css': 'CSS',
  '/js': 'JavaScript',
  '/git': 'Git',
  '/vue': 'Vue',
  '/resume': 'Resume',
}

const journey = (direction) => {
    const index = routes.findIndex((element) => element.path === route.path)
  if(
      (direction === 'forward' && route.path !== '/resume') ||
      (direction === 'back' && route.path !== '/')
  ) {
    const nextRoute = (direction === 'forward') ? routes[index + 1] : routes[index - 1]
    router.push(nextRoute);
  }
}
onKeyDown('ArrowRight', ()=> {
  journey('forward');
})
onKeyDown('ArrowLeft', ()=> {
  journey('back');
})
const journeyForwardDisabled = computed(()=> {
  return route.path === '/resume';
})
const journeyBackDisabled = computed(()=> {
  return route.path === '/';
})

const screenWidth = ref(window.innerWidth)

const handleResize = () => {
  screenWidth.value = window.innerWidth
}
onMounted(()=> {
  window.addEventListener('resize', handleResize)
});
onUnmounted(()=>{
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div>
    <div class="screenContent">
      <RouterView v-slot="{ Component }">
        <Transition>
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
    <div class="top"></div>
    <div class="borderTop"></div>
    <div class="left"
         v-if="screenWidth > 600"
    >
      <div class="navLeft">
        <ul>
          <li v-for="item in routes">
            <RouterLink
              :to="{name: item.name}"
              :class="{active: item.name === route.name}"
            >{{labelMap[item.path]}}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="right" v-if="screenWidth > 600"></div>
    <div class="bottom"></div>
    <div class="belowScreen">
      <div class="buttonBar">
        <RouterLink :to="{name: 'ResumeView'}" class="resumeButton">Skip to Resume</RouterLink>
      </div>
      <div class="directionPad">
        <svg
            width="120"
            height="120"
            xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="40" y="14" width="30" height="30" stroke="black" fill="black"/>
          <rect
              x="9"
              y="45"
              width="30"
              height="30"
              stroke="black"
              fill="black"
              @click="journey('back')"
              :disabled="journeyBackDisabled"
          />
          <rect x="40" y="45" width="30" height="30" stroke="black" fill="black"/>
          <rect x="71"
                y="45"
                width="30"
                height="30"
                stroke="black"
                fill="black"
                @click="journey('forward')"
                :disabled="journeyForwardDisabled"
          />
          <rect x="40" y="76" width="30" height="30" stroke="black" fill="black"/>
        </svg>
      </div>
      <InventoryView
          :inventory="inventory"
      />
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
.directionPad {
  display: flex;
  justify-content: center;
}
.router-link-active {
  color: #b20260;
}
.resumeButton {
  display: inline-block;
  text-decoration: none;
  padding: 8px;
  color: #ddd;
  border-radius: 8px;
  background-color: #000;
  box-shadow: 0 0 3px #dddddd;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
