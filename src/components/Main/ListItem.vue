<template>

    <li>
        {{ text }}

        <button @click="$emit('deleteItem', index)">
            Ta bort
        </button>
    </li>

</template>

<script setup>
defineProps(["text", "index"]);

</script>

<style scoped>
li {
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
}

button {
    background-color: #833000;
    border: none;
    color: white;
    padding: 5px 8px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    border-radius: 8px;
}
</style>