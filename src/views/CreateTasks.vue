<template>
  <div class="container w-full mx-auto">
    <div class="bg-gradient-to-b from-green-800 to-grey-400 h-96 mt-5 dark:bg-gray-to-b dark:from-purple-700"></div>
    <div class="mx-auto  sm:px-6 lg:px-8 mb-5">
        <div class="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72 dark:bg-gray-100">
            <p class="text-3xl font-bold leading-7 text-center dark:text-indigo-400">Create new Task</p>
            <form @submit.prevent="submit">
                <div class="md:flex items-center mt-12">
                    <div class="w-full flex flex-col">
                        <label class="font-nav leading-none dark:text-green-500 dark:text-2xl">How u be name this task?</label>
        
                        <input type="text" v-model="title" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-green-300 mt-4 bg-white-100 border rounded border-gray-300 font-nav" />
                    </div>
                </div>
                <div class="md:flex items-center mt-8">
                    <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none dark:text-green-500 dark:text-2xl">Set Data</label>
                        <input  v-model="setData" type="date" class="text-center font-nav leading-none text-gray-900 p-3 focus:outline-none focus:border-green-300 mt-4 bg-white-100 border rounded border-gray-300">
                    </div>
                    
                </div>
                <div>
                    <div class="w-full flex flex-col mt-8">
                        <label class="font-semibold leading-none dark:text-green-500 dark:text-2xl">Message</label>
                        <textarea v-model="description" type="text" class="h-40 text-base leading-none text-grey-900 p-3 focus:border-green-300 mt-4 bg-white-100 border rounded border-gray-300"></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full">
                    <button  :disabled="!isValid" class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-purple-500 rounded hover:bg-green-600 focus:ring-6 focus:ring-offset-2 focus:ring-white-700 focus:outline-none dark:text-2xl dark:bg-indigo-400 dark:hover:bg-green-400">
                        Create!
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

export default{
    setup() {
    const store = useStore();
    const router = useRouter();  

    const title = ref('');
    const setData = ref(null);
    const description = ref('');

    const  submit = () =>  {
        const NewTask = {
            title: title.value,
            setData: new Date(setData.value).setHours(23,59,59,999),
            description: description.value,
            id: Date.now().toString(),
            status: 'Active'
        }
        store.dispatch('createTask', NewTask) // Здесь что то не так с мутацией она в actions;
        router.push('/')
    }
        const isValid = computed(() => {
            return title.value !== '' &&
            setData.value && description.value !== ''
        })

    

    return{
        title,
        setData,
        description,
        submit,
        isValid
      }
    },
}
</script>
