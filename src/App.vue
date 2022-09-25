<template>

  <main id="main">
    <RouterView />
  </main>

</template>

<script setup>
import Main from '@/components/Main/Main.vue';

</script>


<style scoped>
#main {
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #b7c576;
  min-height: 40vh;
  width: 60vw;
  border-radius: 25px;
  box-shadow: 0 0 10px black;
}

p {
  text-align: center;
}
</style>