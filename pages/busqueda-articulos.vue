<template>
  <myBlogHeader></myBlogHeader>
  
  <v-sheet class="projects">
      <v-sheet class="container">
          <v-sheet class="title">
              <h1>Artículos</h1>
              <p>Resultados de la búsqueda</p>
          </v-sheet>
      </v-sheet>

      <v-sheet class="skeleton d-flex flex-column-reverse flex-md-column mb-5" v-if="loading" color="#f5f1f1">
          <template v-for="rowIndex in 2">
              <v-row :class="rowIndex === 1 ? 'pt-md-10' : ''">
                  <template v-for="colIndex in 3">
                      <v-col cols="12" md="4">
                          <v-skeleton-loader :height="rowIndex == 1 ? 500 : 400" type="image, article, chip"
                              color="#f5f1f1"></v-skeleton-loader>
                      </v-col>
                  </template>
              </v-row>
          </template>
      </v-sheet>

      <div v-if="!loading && blogEntry.length === 0" class="error-page">
        <v-container>
          <v-row class="fill-height" align="center" justify="center">
            <v-col class="text-center">
              <v-img class="mx-auto" max-width="200" src="/assets/error.svg"></v-img>
              <h1 class="display-1 text-h4">Sin coincidencias</h1>
              <h2 class="text-subtitle-1">No se encontró ningún artículo</h2>
              <v-btn variant="tonal" class="mt-5" color="#0801ff" to="/">Regresar al inicio  <svg-icon type="mdi" :path="mdiChevronRight"></svg-icon></v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <articlestList class="mb-5" :blogEntry="blogEntry" :home="false" v-else></articlestList>

  </v-sheet>
  
  <myBlogFooter></myBlogFooter>
</template>
  
<script setup>
import api from '../api';
import articlestList from '../components/ArticlesList.vue';
import myBlogHeader from '../components/blog/BlogHeader.vue';
import myBlogFooter from '../components/blog/BlogFooter.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiChevronRight  } from '@mdi/js';
  
  const route = useRoute();
  const blogEntry = ref([]);
  const loading = ref(true);
  
  onMounted(async () => {
    const query = route.query.query;
    if (query) {

      // Realiza la petición a la API usando el valor de búsqueda
      console.log(query)

      try {
        const response = await api.get(`/api/articles/search?query=${query}`);

        if (response.status === 200) {
            blogEntry.value = response.data.data;
        } else {
            console.error('Respuesta no exitosa:', response);
            
        }
    } catch (error) {
        console.error('Error al hacer la solicitud GET:', error);
      
    } finally {
        loading.value = false;
    }
    }
  });
</script>

<style scoped>
.projects {
  background-color: var(--primary-background);
}

.container {
  max-width: 90%;
  background: transparent;
  margin: 0 auto;
}

.title {
  
  margin: 15px auto;
  background: transparent;
  color: var(--primary-blue);
  text-align: center;
}

.title h1{
  font-size: 35px;
  font-weight: 700;

  @media only screen and (min-width: 1024px) {
      font-size: 55px;
  }
}

.title p{
  color: black;
}

.error-page {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;
}
</style>