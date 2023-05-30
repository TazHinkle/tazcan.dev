<script setup>
import useInventory from "./composables/useInventory.js";
import {computed, onMounted, onUnmounted, ref} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import Home from "./views/Home.vue";
import InventoryView from "./views/InventoryView.vue";

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
}

const currentRoute = ref(routes.find((element)=> element.path === route.fullPath));
const routeLinkComputed = computed(()=> {
  return [
    {path: '/', name: 'Home', component: Home},
    ...routes
        .filter((route) => Object.keys(inventory).includes(route.path))
  ]
})
const journey = (direction) => {
    let index = routes.findIndex((element) => element.path === currentRoute.value.path)
  if(
      (direction === 'forward' && currentRoute.value.path !== '/resume') ||
      (direction === 'back' && currentRoute.value.path !== '/')
  ) {
    (direction === 'forward') ? currentRoute.value = routes[++index] : currentRoute.value = routes[--index];
    router.push(currentRoute.value);
    window.scrollTo(0, 0);
  }
}

const journeyForwardDisabled = computed(()=> {
  return currentRoute.value.path === '/resume';
})
const journeyBackDisabled = computed(()=> {
  return currentRoute.value.path === '/';
})
const navigateByLink = (route) => {
  currentRoute.value = route;
  window.scrollTo(0, 0);
}
const skipToEnd = () => {
  currentRoute.value = routes[routes.length - 1];
  router.push(currentRoute.value);
  window.scrollTo(0, 0);
}
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
      <RouterView></RouterView>
    </div>
    <div class="top"></div>
    <div class="left"
         v-if="screenWidth > 600"
    >
      <div class="navLeft">
        <ul>
          <li v-for="route in routeLinkComputed">
            <RouterLink :to="{name: route.name}" @click="navigateByLink(route)">{{labelMap[route.path]}}</RouterLink></li>
        </ul>
      </div>
    </div>
    <div class="right" v-if="screenWidth > 600"></div>
    <div class="bottom"></div>
    <div class="consoleBody"></div>
    <div class="belowScreen">
      <div class="buttonBar">
<!--        <button-->
<!--            @click="journey('forward')"-->
<!--            :disabled="journeyForwardDisabled"-->
<!--        >{{ (currentRoute.path === routes[0].path) ? 'Start' : 'Continue' }}</button>-->
        <button @click="skipToEnd">Skip to the End</button>
<!--        <button v-if="screenWidth < 601">Mobile Button!</button>-->
      </div>
<!--      <nav class="buttonBar" v-if="screenWidth < 601">-->
<!--        <RouterLink v-for="route in routeLinkComputed" :to="{name: route.name}"  @click="navigateByLink(route)">{{labelMap[route.path]}}</RouterLink>-->
<!--      </nav>-->
      <div class="noooooo">
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
      <div class="inventory">
        <InventoryView
          :inventory="inventory"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
.inventory {
  border: 2px solid #eee;
  margin: 0 2%;
}
.noooooo {
  display: flex;
  justify-content: center;
}
</style>
