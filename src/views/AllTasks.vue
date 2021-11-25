<template>
  <TheCard/>
  <template>
  <div class="max-w flex justify-center items-center lg:h-screen flex-wrap mx-auto  lg:my-0">
	<div class="w-full lg:w-3/5 rounded lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75  lg:mx-0">
	<div class="p-4 md:p-12 text-center lg:text-left">
			<h1 class="text-3xl font-bold mb-2 lg:pt-0">{{newTask}}</h1>

      <span class="inline-block rounded-full text-white bg-green-500 px-2 py-1 text-xs font-bold mr-3">Active</span>
      <span class="inline-block rounded-full text-white bg-indigo-500 px-2 py-1 text-xs font-bold mr-3">Success</span>
      <span class="inline-block rounded-full text-white bg-yellow-500 px-2 py-1 text-xs font-bold mr-3">Pending</span>
      <span class="inline-block rounded-full text-white bg-red-500 px-2 py-1 text-xs font-bold mr-3">Not Executed</span>

      <p class="text-green-600 font-bold mb-2 lg:pt-0">{{setDate}}</p>
      <h2 class="mb-2">Description</h2>
      <p>
        {{description}}
      </p>
		</div>
	</div>
</div>
      </template>
</template>

<script>
import TheCard from '../components/TheCard.vue'

export default{
  components: {
    TheCard
  },
}
</script>
