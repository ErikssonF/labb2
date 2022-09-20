<template>

    <main>
        <input ref="input" id="input" type="text" v-model="userInput" placeholder="Skriv här" />

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
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;

}

ul {
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
    border-top: 5px solid black;
}

input {
    margin-top: 10px;
    margin-bottom: 10px;
    background: transparent;
    top: 20vh;
    border: none;
    color: black;
    text-align: center;
}

button {
    background-color: #fb6107;
    /* Green */
    border: none;
    color: white;
    padding: 5px 8px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    border-radius: 8px;
}

::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: black;
    opacity: 0.8;
    /* Firefox */
}
</style>