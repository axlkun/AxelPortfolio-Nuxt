<template>
  <div class="mt-5 mr-0 ml-0 pa-2 pa-md-5 rounded rounded-xl hero-background">

    <v-row class="align-md-center w-100">

      <v-col cols="12" md="6">
        <h1 class="text-primary-color font-weight-bold mb-1">Axel Cruz Space - Blog de Programación</h1>
        <p class="text-h4 text-md-h3 font-weight-bold">
          Todo sobre programación e Ingeniería de Software
        </p>
      </v-col>

      <v-col cols="12" md="6">
        <div>
          <p class="text-h6 font-weight-bold text-md-h5 mb-2">Explora por:</p>
        </div>
        <div class="d-flex ga-3 flex-wrap">
          <v-chip href="/programacion" size="large" color="#0801ff">
            <svg-icon type="mdi" :path="mdiCodeBraces"></svg-icon>Programación
          </v-chip>
          <v-chip href="/ingenieria-de-software" size="large" color="#0801ff">
            <svg-icon type="mdi" :path="mdiBrightness5"></svg-icon>Ingeniería
          </v-chip>
          <v-chip href="/startups-sideprojects" size="large" color="#0801ff">
            <svg-icon type="mdi" :path="mdiCashMultiple"></svg-icon>Startups
          </v-chip>
        </div>
      </v-col>

    </v-row>

    <div class="d-flex flex-column justify-center text-center search-container">
      <div>
        <p class="text-h6 font-weight-bold text-md-h5 mb-2">Artículos de Programación</p>
        <p>¿Buscas un tema en específico?</p>

        <!-- Campo de búsqueda con ícono de lupa -->
        <v-text-field
          class="input-size"
          v-model="searchQuery"
          label="Buscar artículos..."
          clearable
          hide-details
          outlined
        >
          <template #append>
            <!-- Ícono de lupa como botón -->
            <v-btn icon @click="searchArticles">
              <svg-icon type="mdi" :path="mdiMagnify" color="blue"></svg-icon>
            </v-btn>
          </template>
        </v-text-field>
      </div>
    </div>

  </div>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCodeBraces, mdiBrightness5, mdiCashMultiple, mdiMagnify } from '@mdi/js';
import { useRouter } from 'vue-router';

const router = useRouter();

// Declaración de la variable de búsqueda
const searchQuery = ref('');

function searchArticles() {
  // Redirige a la página de resultados con el query parameter
  if (searchQuery.value) {
    router.push({ path: '/busqueda-articulos', query: { query: searchQuery.value } });
  }
}

</script>

<style scoped>

.hero-background{
  background-color: var(--primary-grey);
}

.search-container{
  margin-top: 30px;

  @media only screen and (min-width: 960px) {
    margin-top: 80px;
  }
}

.input-size{
  max-width: 600px;
  margin: 20px auto;
}
</style>