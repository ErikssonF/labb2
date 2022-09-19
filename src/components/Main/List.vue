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
    tasks.value.push(userInput.value);
    localStorage.setItem('list', JSON.stringify(tasks.value));

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
    background-color: burlywood;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>