<template>
    <div class="d-flex flex-column flex-md-row justify-space-between align-md-center ga-6 mt-15">
        <div>
            <h2 class="text-h5 font-weight-bold text-md-h4 mb-2">
                Programación
            </h2>
            <p>Artículos recientes</p>
        </div>
        <div>
            <v-btn variant="tonal" class="mt-5" color="#0801ff">
                Ver todos los articulos
                <v-icon right>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
    </div>
    <div class="programacion-articles-container" v-if="loading">

        <SkeletonArticleCardSecondary></SkeletonArticleCardSecondary>
        <SkeletonArticleCardSecondary></SkeletonArticleCardSecondary>
        <SkeletonArticleCardSecondary></SkeletonArticleCardSecondary>
        <SkeletonArticleCardSecondary></SkeletonArticleCardSecondary>

    </div>
    <div class="programacion-articles-container" v-else>

        <ArticleCardSecondary v-for="article in blogEntry" :href="getHref(article.slug)" :imgSrc="getImgSrc(article.imageUrl)" :date="article.created_date"
        :title="article.title" :description="article.summary"
        :categories="article.categories" />

    </div>
</template>

<script setup>
import ArticleCardSecondary from './ArticleCardSecondary.vue';
import SkeletonArticleCardSecondary from './SkeletonArticleCardSecondary.vue';
import api from '../../api.js';

const dominio = api.defaults.baseURL;

const getHref = (slug) => `/blog/${slug}`;
const getImgSrc = (imageUrl) => `${dominio}${imageUrl}`;

// const { data: blogEntry, pending: loading } = await useAsyncData('programacion-articles', () =>
//   api.get('/api/articles/filter?seccion=programacion&limit=4').then(response => response.data.data)
// );

const blogEntry = ref([]);
const loading = ref(true);

const getArticles = async () => {
  api.get('/api/articles/filter?seccion=programacion&limit=4')
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

<style scoped>
.programacion-articles-container {

    margin-top: 30px;
    display: grid;
    gap: 2rem;
    background: transparent;
    grid-template-columns: 1fr;

    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 4rem;
        grid-column-gap: 2rem;
    }
}

</style>