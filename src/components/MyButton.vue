<template>
    <button @click="handleButtonClicked">{{text}}</button>
</template>

<script setup>

const props = defineProps({
    text: {
        type: String,
        default: "No text"
    }
})

const emit = defineEmits(['buttonClicked'])

const handleButtonClicked = () => {
    emit('buttonClicked', 29)
}

</script>