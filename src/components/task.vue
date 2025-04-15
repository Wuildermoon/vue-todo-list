<script setup>
import { defineProps, defineEmits, reactive, watch } from "vue";

const props = defineProps({
  task: Object,
  index: Number,
});

const emit = defineEmits(["remove", "update"]);

const task = reactive({ ...props.task });

watch(
  task,
  () => {
    emit("update", props.index, task);
  },
  { deep: true }
);

const removeTask = () => {
  emit("remove", props.index, task);
};
const updateTask = () => {
  emit("update", props.index, task);
};
</script>

<template>
  <li :key="index" class="task">
    <input type="checkbox" v-model="task.completed" @change="updateTask" />
    <span :class="{ done: task.completed }">{{ task.text }}</span>
    <button class="cross" @click="removeTask(index)">❌</button>
  </li>
</template>

<style scoped>
.task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  gap: 0.8rem;
  min-width: 10dvw;
}
.cross {
  font-size: 0.5rem;
  padding: 0.25rem;
}
.done {
  text-decoration: line-through;
}
</style>
