<template>
<div class="
 container
 m-0
 p-0
 h-16
 bg-green-600 
 text-green-50 
 rounded 
 mx-auto 
 font-nav 
 flex 
 justify-between
 flex-row">

  <h1 class="mx-5 my-4">Freelance</h1>

<!-- ul container -->
  <ul class="flex text-blue-50">
    <li class="mx-5 my-5">
      <router-link to="/">All Tasks</router-link>
    </li>
    <li class="mx-5 my-5">
      <router-link to="/create">Create Task ⁺</router-link>
    </li>
  </ul>
</div>
</template>

<script>

export default {
  components: {
  },
  setup() {
    return {
    }
  },
}
</script>