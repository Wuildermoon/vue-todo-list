<script setup>
import { ref } from "vue";
import Task from "./components/task.vue";

const newTask = ref("");
const tasks = ref([]);

const addTask = () => {
  if (newTask.value.trim() === "") return;

  tasks.value.push({ text: newTask.value, completed: false });
  newTask.value = "";
};

const removeTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>

<template>
  <section>
    <header>
      <h1>📝 To-do List</h1>
    </header>
    <main>
      <form @submit.prevent="addTask">
        <input type="text" v-model="newTask" placeholder="Write a task" />
        <button type="submit">Add</button>
      </form>

      <ul>
        <Task
          v-for="(task, index) in tasks"
          :key="index"
          :task="task"
          :index="index"
          @remove="removeTask"
          @update="updateTask"
        />
      </ul>
    </main>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
}
input {
  padding: 0.5rem 1rem;
  margin: 1rem;
  background: transparent;
  border-radius: 0.5rem;
}
</style>
