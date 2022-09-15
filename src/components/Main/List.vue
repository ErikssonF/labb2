<template>

    <input ref="input" id="input" type="text" v-model="userInput" />

    <button v-on:click="addTask">
        Lägg till
    </button>

    <br>

    <input ref="input" type="text" v-model="userInputRemove" />
    <button v-on:click="removeTask">
        Ta bort
    </button>

    <ul>
        <li v-for="(value, index) in tasks">
            {{index}} {{ value }}
        </li>
    </ul>

</template>

<script setup>
import { ref } from 'vue';

const tasks = ref([]);

const userInput = ref();
const userInputRemove = ref();

const addTask = () => {
    tasks.value.push(userInput.value);
    localStorage.setItem(userInput.value, userInput.value)

};

const removeTask = () => {

    for (var i = 0; i < localStorage.length; i++) {
        console.log(localStorage.getItem(localStorage.key(i)));
    }
    // tasks.value.splice(userInputRemove.value, 1);
}

</script>