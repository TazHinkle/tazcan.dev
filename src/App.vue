<script setup>
// import useInventory from "./composables/useInventory.js";
import {onMounted, onUnmounted, ref} from 'vue';
// import {useRouter, useRoute} from 'vue-router';
// import Home from "./views/Home.vue";
// import InventoryView from "./views/InventoryView.vue";
// import { onKeyDown, useSwipe } from "@vueuse/core";
import ResumeView from "./views/ResumeView.vue";

// const router = useRouter();
// const routes = router.getRoutes();
// const route = useRoute();
//
// const {inventory} = useInventory();
// const screenContentElement = ref(null);
// useSwipe(screenContentElement, {
//   onSwipeEnd: (e, direction)=> {
//     const swipeMap = {
//       'right': 'back',
//       'left': 'forward'
//     }
//     const journeyDirection = swipeMap[direction];
//     if(journeyDirection) {
//       journey(journeyDirection);
//     }
//   }
// });
// const labelMap = {
//   '/': 'Home',
//   '/html': 'HTML',
//   '/css': 'CSS',
//   '/js': 'JavaScript',
//   '/git': 'Git',
//   '/vue': 'Vue',
//   '/resume': 'Resume',
// }
// const journey = (direction) => {
//     const index = routes.findIndex((element) => element.path === route.path)
//   if(
//       (direction === 'forward' && route.path !== '/resume') ||
//       (direction === 'back' && route.path !== '/')
//   ) {
//     const nextRoute = (direction === 'forward') ? routes[index + 1] : routes[index - 1]
//     router.push(nextRoute);
//   }
// }
// onKeyDown('ArrowRight', ()=> {
//   journey('forward');
// })
// onKeyDown('ArrowLeft', ()=> {
//   journey('back');
// })
// const journeyForwardDisabled = computed(()=> {
//   return route.path === '/resume';
// })
// const journeyBackDisabled = computed(()=> {
//   return route.path === '/';
// })

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
  <div class="app">
    <ResumeView />
  </div>
</template>
