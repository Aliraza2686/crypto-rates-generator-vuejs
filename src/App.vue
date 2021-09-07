<template>
  <router-view v-slot="{ Component }">
     <transition name="route" appear mode="in-out" >
      <component :is="Component">

      </component>
     </transition>
  </router-view>
</template>

<style>
body {
  font-family: 'Dosis', sans-serif;
}
.route-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-to{
   opacity: 1;
   transform: translateX(0);
}
.route-enter-active{
   transition: all 0.8s ease;
}
.route-leave-from{
  opacity: 1;
  transform: translateX(0);
}
.route-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active{
  transition: all 0.8s ease;
}
</style>
