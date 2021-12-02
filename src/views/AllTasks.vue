<template>
  <TheCard/>
  <template v-if="task" :class="{task: 'dark:bg-indigo-100'}">
  <div class="max-w flex justify-center items-center lg:h-screen flex-wrap mx-auto  lg:my-0 dark:bg-gray-400">
	<div class="w-full lg:w-3/5 rounded lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75  lg:mx-0">
	<div class="p-4 md:p-12 text-center lg:text-left">
			<h1 class="text-3xl font-bold mb-2 lg:pt-0 dark:text-purple-400">{{task.newTask}}</h1>

      <statusBages :type="task.status"/>

      <p class="text-green-600 font-bold mb-2 lg:pt-0 dark:text-red-400">{{task.setDate}}</p>
      <h2 class="mb-2 dark:divide-red-600">Description</h2>
      <p class="dark:text-purple-400">
        {{task.description}}
      </p>
		</div>
	</div>
</div>
  </template>
</template>

<script>
import {computed, watchEffect} from 'vue'
import {useStore} from 'vuex'
import TheCard from '../components/TheCard.vue'
import statusBages from '../components/statusBages.vue'

export default{
  components: {
    TheCard,
    statusBages
    },
  props: ['id'],
  setup(props) {
    const store = useStore();
    const task = computed(() => store.getters.taskById(idStore))

    const setStatus = status => {
      const updated = {...task.value, status}
        store.dispatch('changeTask', updated)
    }

      const idStore = watchEffect(() => {
      console.log(props.id)
    })


    return{
      task,
      idStore,
      setStatus,
    }
  }
}
</script>
