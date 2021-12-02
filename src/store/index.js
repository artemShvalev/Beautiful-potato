import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      getApp: document.getElementById("#app"),
      isShowModal: false,
      tasks: JSON.parse(localStorage.getItem("my-tasks")) ?? [],
    };
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem("my-tasks", JSON.stringify(state.tasks));
    },
    changeTask(state, task) {
      const idx = state.tasks.findIndex((t) => t.id === task.id);
      state.tasks[idx] = task;
      localStorage.setItem("my-tasks", JSON.stringify(state.tasks));
    },
    del(state, task) {
      const findIndex = state.tasks.splice((t) => t.id === task.id);
      state.tasks[findIndex] = task;
      localStorage.setItem("my-tasks", JSON.stringify(state.tasks));

    },
    addClass(state) {
      state.getApp = document.documentElement.classList.add("dark");
    },
    removeClass(state) {
      state.getApp = document.documentElement.classList.remove("dark");
    }
  },
  actions: {
    createTask({ commit }, task) {
      if (task.setData < new Date()) {
        task.status = "cancelled";
      }
      commit("createTask", task);
    },
    changeTask({ commit }, task) {
      commit("changeTask", task);
    },
  },
  getters: {
    activeTasksCount(state) {
      return state.tasks.filter((t) => t.status === "Active").length;
    },
    tasks(state) {
      return state.tasks;
    },
    taskById(_, getters) {
      return (id) => getters.tasks.find((t) => t.id === id);
    },
  },
});
