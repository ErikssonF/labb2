<template>

  <input ref="input" id="input" type="text" v-model="userInput" />

  <button v-on:click="addTask">
    Lägg till
  </button>

  <ul>
    <li v-for="(value, index) in tasks">
      {{index}} {{ value }}
    </li>
  </ul>

  <br>

  <input ref="input" type="text" v-model="userInputRemove" />
  <button v-on:click="removeTask">
    Ta bort
  </button>

</template>

<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'
import MyButton from './components/MyButton.vue'

const userInput = ref();
const userInputRemove = ref();

const tasks = ref([]);

const addTask = () => {
  tasks.value.push(userInput.value);
};

const removeTask = () => {
  tasks.value.splice(userInputRemove.value, 1);
}

</script>