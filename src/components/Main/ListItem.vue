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
    border-top: 1px 1px 1px 1px solid black;

}
</style>