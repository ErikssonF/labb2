<template>

    <li>
        {{ text }}

        <br>
        <button @click="$emit('deleteItem', index)">
            Ta bort
        </button>
    </li>

</template>

<script setup>
defineProps(["text", "index"]);

</script>