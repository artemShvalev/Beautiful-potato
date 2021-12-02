<template>
<div class="
 m-0
 p-0
 h-16
 bg-green-600
 text-green-50
 mx-auto 
 font-nav 
 flex 
 justify-between
 flex-row
 
 dark:bg-purple-700
 dark:text-white
 
 "
 >
 <transition name="fade">
  <h1 class="mx-5 my-4 text-white" @click="show"><router-link to="/">Beatiful Potate</router-link> <span v-if="show">🥔</span></h1>
  </transition>

  <button class="font-nav dark:text-white hover:text-purple-900 dark:hover:text-green-400" @click="addClass" >Change Theme</button>
  <button 
  v-if="addClass" 
  class="font-nav 
  dark:text-white 
  dark:hover:text-green-500" 
  @click="removeClass">
  Change Back
  </button>

<!-- ul container -->
  <ul class="flex text-blue-50">
    <li class="mx-5 my-5 dark:hover:text-green-100 hover:text-blue-100">
      <router-link to="/">All Tasks</router-link>
    </li>
    <li class="mx-5 my-5 dark:hover:text-green-100 hover:text-blue-100">
      <router-link to="/create">Create Task</router-link>
    </li>
  </ul>
</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    ...mapMutations([
      'addClass',
      'removeClass'
    ])
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>