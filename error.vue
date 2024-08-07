<template>
    <div class="error-page">
      <v-container>
        <v-row class="fill-height" align="center" justify="center">
          <v-col class="text-center">
            <v-img class="mx-auto" max-width="200" src="/assets/error.svg"></v-img>
            <h1 class="display-1 text-h1">{{ error.statusCode }}</h1>
            <h2 class="text-subtitle-1">{{ error.message }}</h2>
            <p class="mt-5" v-if="error.statusCode === 404">Lo siento, la página que estás buscando no existe.</p>
            <p v-else class="mt-5">Hubo un problema al procesar tu solicitud.</p>
            <v-btn variant="tonal" class="mt-5" color="#0801ff" to="/">Regresar al inicio <v-icon right>mdi-chevron-right</v-icon></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['error'])
  </script>
  
  <style scoped>
  .error-page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  </style>