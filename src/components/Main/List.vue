<template>

    <main>
        <input ref="input" id="input" type="text" v-model="userInput" />

        <button v-on:click="addTask">
            Lägg till
        </button>

        <br>

        <ul>
            <ListItem @deleteItem="removeTask" v-for="(value, index) in tasks" :text="value" :index="index" />
        </ul>
    </main>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import ListItem from '@/components/Main/ListItem.vue';

const tasks = ref([]);

const userInput = ref();

const addTask = () => {

    if (userInput.value.length > 0) {
        tasks.value.push(userInput.value);
        localStorage.setItem('list', JSON.stringify(tasks.value));
    } else {
        alert('Empty fields not allowed');
    }
};

const removeTask = (index) => {

    tasks.value.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(tasks.value));
}

onMounted(() => {
    const jsonString = localStorage.getItem('list');

    if (jsonString) {

        tasks.value = JSON.parse(jsonString);
    }

});

</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

ul {
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
}
</style>