<template>
  <v-app id="app" class="general-bg">

      <NuxtPage :blogEntry="blogEntry" />
   
  </v-app>
</template>

<script setup>
import api from './api';

const blogEntry = ref([]);

const getArticles = async () => {
  api.get('/api/articles?limit=6')
    .then(response => {
      blogEntry.value = response.data.data;
    })
    .catch(error => {
      console.error('Error al hacer la solicitud GET:', error);
    });
}

onMounted(() => {
  getArticles();
})

</script>

<style scoped>
.general-bg{
  background-color: var(--primary-background);
}
</style>
