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


};


const removeTask = () => {
    tasks.value.splice(userInputRemove.value, 1);
}

</script>

// window.addEventListener("resize", resizeFunction);

// userName = document.querySelector("#userNameInput");
// password = document.querySelector("#password");
// jsonBtn = document.querySelector("#jsonbtn");
// jsonText = document.querySelector("#jsontext");
// let output = document.querySelector("#output");
// const form = document.querySelector("#signup-form");
// const welcomeMessageOutput = document.querySelector("#welcomeMessage");



// if(form)
// form.addEventListener("submit", saveUserInput);

// function saveUserInput(event){

//     event.preventDefault();

//     if(userName && password){
//     data = {
//         "userName":userName.value,
//         "lastName":password.value
//     }


//     localStorage.setItem("username", data.userName);

//     welcomeMessageOutput.textContent = localStorage.getItem("username");

//     let userNameTest = welcomeMessageOutput.textContent;

//     welcomeMessageOutput.textContent = `Välkommen ${userNameTest}!`;  

//     }else{
//         console.error("skärp DAJJ")
//         alert("Fyll i användarnamn & lösenord");
//     };
// }

// if(form)
// form.addEventListener('submit', saveUserInput);

// function checkUser(){
  
//     var test = 'test';
//     try {
//         localStorage.setItem(test, test);
//         localStorage.removeItem(test);
//         return true;
//     } catch(e) {
//         return false;
//     }
// }

// if(checkUser()){
//   console.log("funkar")

//   welcomeMessageOutput.textContent = localStorage.getItem("username");

//   let userNameTest = welcomeMessageOutput.textContent;
  
//   welcomeMessageOutput.textContent = `Välkommen ${userNameTest}!`;  

// }else{
//   console.log("funkar inte")
// }