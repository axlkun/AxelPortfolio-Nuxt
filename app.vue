<template>
  <v-app id="app">

    <myHeader></myHeader>
    <main>
      <router-view :blogEntry="blogEntry"></router-view>
    </main>
    <myFooter :blogEntry="blogEntry"></myFooter>
  </v-app>
</template>

<script setup>
import api from './api';

import myHeader from './components/Header.vue';
import myFooter from './components/Footer.vue';


const blogEntry = ref([]);

const getArticles = async () => {
  api.get('/api/articles?limit=6')
    .then(response => {
      this.blogEntry = response.data.data;
    })
    .catch(error => {
      console.error('Error al hacer la solicitud GET:', error);
    });
}

onMounted(() => {
  getArticles();
})

</script>

<style scoped></style>
