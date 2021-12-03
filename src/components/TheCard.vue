<template>
<h1 v-if="tasks.length === 0" class="text-black text-center mt-4 text-3xl font-noTasks dark:text-indigo-300">Задач пока нет 😉(Нажми "Create task")</h1>
<template v-else>
  <div>
      <h3 class="pt-5 text-green-300 text-center  text-3xl font-noTasks dark:text-indigo-300 dark:bg-black">Всего активных задач: {{ activeTasksCount }}</h3>
  </div>
  <div class="rounded max-w mt-5 mb-10 flex justify-center items-center lg:h-screen flex-wrap mx-auto  lg:my-0 dark:bg-black">
	<div class="w-full lg:w-3/5 rounded lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75  lg:mx-0 mb-10">
	<div class="rounded p-4 md:p-12 text-center lg:text-left dark:bg-purple-100 mb-10" v-for="task in tasks" :key="task.id">
			<h1 class="text-3xl font-bold mb-2 lg:pt-0 dark:text-indigo-600">{{task.title}}</h1>

      <statusBages :type="task.status"/>

      <p class="text-green-600 font-bold mb-2 lg:pt-0 dark:text-blue-600">{{new Date(task.setData).toLocaleDateString()}}</p>
      <h2 class="mb-2">Description:</h2>
      <p>
        {{task.description}}
      </p>

      <button class="bg-green-600 text-green-100 w-1/3 h-10 mt-5 rounded-sm brightness-200 dark:bg-indigo-600" @click="open(task.id)">Посмотреть</button>
		</div>
	</div>
</div>
  </template>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import statusBages from "./statusBages.vue";

export default {
  components: {
    statusBages,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const tasks = computed(() => store.getters.tasks);
    const activeTasksCount = computed(() => store.getters.activeTasksCount);

    return {
      tasks,
      activeTasksCount,
      open: (id) => router.push(`/task/${id}`),
    };
  },
};
</script>