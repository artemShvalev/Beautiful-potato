<template>
      <span :class="['badge',className ]">{{text}}</span>
</template>

<script>
import { ref, watch } from "vue";
export default {
props: {
  type: {
    type: String,
    validator(value){
      return ['Active', 'Success', 'Pending', 'cancelled'].includes(value)
    }
  }
},
  setup(props) {

    const classesMap = {
      Active: 'inline-block rounded-full text-white bg-green-500 px-2 py-1 text-xs font-bold mr-3',
      cancelled: 'inline-block rounded-full text-white bg-red-500 px-2 py-1 text-xs font-bold mr-3',
      Success:    'inline-block rounded-full text-white bg-indigo-500 px-2 py-1 text-xs font-bold mr-3',
      Pending: 'inline-block rounded-full text-white bg-yellow-500 px-2 py-1 text-xs font-bold mr-3'
    }
      const textMap = {
      active: 'Активен',
      cancelled: 'Отменен',
      done: 'Завершен',
      pending: 'Выполняется'
    }

    const className = ref(classesMap[props.type])
    const text = ref(textMap[props.type])

    watch(props, val => {
      className.value = classesMap[val.type]
      text.value = textMap[val.type]
    })

    return {
      className,
      text
    }

  },
};


</script>