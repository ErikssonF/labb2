<template>

    <li>
        {{ text }}

        <button @click="$emit('deleteItem', index)">
            Delete
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
    background-color: #5f493d;
    border: none;
    color: white;
    padding: 5px 8px;
    margin-bottom: 3px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    border-radius: 8px;
}
</style>