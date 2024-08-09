<template>
    <div class="d-flex flex-column flex-md-row justify-space-between align-md-center ga-6 mt-15">
        <div>
            <h2 class="text-h5 font-weight-bold text-md-h4 mb-2">
                Ingeniería de Software
            </h2>
            <p>Artículos recientes</p>
        </div>
        <div>
            <v-btn variant="tonal" class="mt-5" color="#0801ff" href="/ingenieria-de-software">
                Ver todos los articulos
                <v-icon right>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
    </div>
    <div class="d-flex flex-column flex-md-row justify-space-between ga-6 mt-10" v-if="loading">
        <v-skeleton-loader width="100%" type="image, article, chip" color="#f5f1f1"></v-skeleton-loader>
        <v-skeleton-loader width="100%" type="image, article, chip" color="#f5f1f1"></v-skeleton-loader>
        <v-skeleton-loader width="100%" type="image, article, chip" color="#f5f1f1"></v-skeleton-loader>
    </div>
    <div class="d-flex flex-column flex-md-row justify-space-between ga-6 mt-10" v-else>
        <ArticleCard v-for="article in blogEntry" :href="getHref(article.slug)" :imgSrc="getImgSrc(article.imageUrl)"
        :date="article.created_at_formated" :title="article.title" :description="article.summary"
        :categories="article.categories" />
    </div>
</template>

<script setup>
import ArticleCard from './ArticleCard.vue';
import api from '../../api.js';

const dominio = api.defaults.baseURL;
const getHref = (slug) => `/blog/${slug}`;
const getImgSrc = (imageUrl) => `${dominio}${imageUrl}`;

// const { data: blogEntry, pending: loading } = await useAsyncData('ingenieria-articles', () =>
//   api.get('/api/articles/filter?seccion=ingenieria&limit=3').then(response => response.data.data)
// );

const blogEntry = ref([]);
const loading = ref(true);

const getArticles = async () => {
  api.get('/api/articles/filter?seccion=ingenieria&limit=3')
    .then(response => {
      blogEntry.value = response.data.data;

      loading.value = false;
    })
    .catch(error => {
      
      loading.value = false;
    });
}

onMounted(() => {
  getArticles();
})
</script>