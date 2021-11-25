import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      tasks: JSON.parse(localStorage.getItem('my-tasks')) ?? []
    }
  },
  mutations: {
    createTasks(state, task) {
      state.tasks.push(task)
      localStorage.setItem('my-tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({ commit }, task) {
      if (task.setData < new Date()) {
        task.status = 'cancelled'
      }
      commit('createTask', task);
    },
    changeTask({ commit }, task) {
      commit('changeTask', task);
    }
  },
  getters: {
    activeTasksCount(state) {
      return state.tasks.filter(t => t.status === 'active').length
    },
    tasks(state) {
      return state.tasks
    },
    taskById(_, getters) {
      return id => getters.tasks.find(t => t.id === id)
    }
    
  }
})
