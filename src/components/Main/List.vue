<template>

    <main>
        <input ref="input" id="input" type="text" v-model="userInput" placeholder="Enter task here" />

        <button v-on:click="addTask" id="addTaskButton">
            Add task
        </button>

        <br>

        <section id="listSection">
            <ul>
                <ListItem @deleteItem="removeTaskLeft" v-for="(value, index) in tasksLeft" :text="value"
                    :index="index" />
            </ul>

            <ul>
                <ListItem @deleteItem="removeTaskRight" v-for="(value, index) in tasksRight" :text="value"
                    :index="index" />
            </ul>

        </section>

    </main>

    <button @click="toggleDark" id="darkModeToggle"> Change color scheme
    </button>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import ListItem from '@/components/Main/ListItem.vue';

const tasksRight = ref([]);
const tasksLeft = ref([]);

const userInput = ref();

const addTask = () => {

    if (userInput.value.length > 0) {

        if (tasksLeft.value.length > tasksRight.value.length) {

            tasksRight.value.push(userInput.value);
            localStorage.setItem('listRight', JSON.stringify(tasksRight.value));
        }
        else {
            tasksLeft.value.push(userInput.value);
            localStorage.setItem('listLeft', JSON.stringify(tasksLeft.value));
        }

    } else {
        alert('Empty fields not allowed');
    }
    userInput.value = "";
}


const removeTaskLeft = (index) => {

    tasksLeft.value.splice(index, 1);
    localStorage.setItem('listLeft', JSON.stringify(tasksLeft.value));

}

const removeTaskRight = (index) => {

    tasksRight.value.splice(index, 1)
    localStorage.setItem('listRight', JSON.stringify(tasksRight.value))
}

onMounted(() => {
    const evenList = localStorage.getItem('listRight');
    const oddList = localStorage.getItem('listLeft')

    if (evenList || oddList) {

        tasksRight.value = JSON.parse(evenList);
        tasksLeft.value = JSON.parse(oddList);
    }

});

let toggled = true;

const toggleDark = () => {

    if (toggled) {
        document.getElementById("main").style.backgroundColor = "#faedcd";
        document.getElementById("headerMain").style.backgroundColor = "#d4a373";

        toggled = false;

    } else {
        document.getElementById("main").style.backgroundColor = "#b7c576";
        document.getElementById("headerMain").style.backgroundColor = "#859d43";

        toggled = true;
    }
};

</script>

<style scoped>
#darkModeToggle {
    position: absolute;
    top: 35px;
    right: 35px;
    background-color: #5f493d;
    border: none;
    color: white;
    padding: 5px 8px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    border-radius: 8px;
}


#listSection {
    display: flex;
}

main {
    width: 60vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;

}

ul {
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 2px;
    border-top: 2px solid black;
    width: 25vw;
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

#addTaskButton {
    background-color: #5f493d;
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
    color: black;
    opacity: 0.8;
}
</style>