<template>

  <main>
    <RouterView />
    <div id="app"></div>
    <h1>
      tjena
    </h1>
  </main>

</template>

<script setup>
import Main from '@/components/Main/Main.vue';

</script>


<style scoped>
main {
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #606C38;
  min-height: 90vh;
}
</style>