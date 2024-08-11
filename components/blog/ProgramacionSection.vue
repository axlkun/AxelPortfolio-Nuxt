<template>
    <div class="d-flex flex-column flex-md-row justify-space-between align-md-center ga-6 mt-15">
        <div>
            <h2 class="text-h5 font-weight-bold text-md-h4 mb-2">
                Programación
            </h2>
            <p>Encuentra guías prácticas y tutoriales para mejorar tus habilidades de desarrollo. <br> Destacando tecnologías como: Spring Boot, Laravel, Vue.js y Nuxt </p>
        </div>
        <div>
            <v-btn variant="tonal" class="mt-5" color="#0801ff" href="/programacion">
                Ver todos los articulos
                <svg-icon type="mdi" :path="mdiChevronRight"></svg-icon>
            </v-btn>
        </div>
    </div>
    <div class="programacion-articles-container" v-if="loading">

        <!-- <SkeletonArticleCardSecondary></SkeletonArticleCardSecondary>
        <SkeletonArticleCardSecondary></SkeletonArticleCardSecondary>
        <SkeletonArticleCardSecondary></SkeletonArticleCardSecondary>
        <SkeletonArticleCardSecondary></SkeletonArticleCardSecondary> -->

        <v-skeleton-loader width="100%" type="image, article, chip" color="#f5f1f1"></v-skeleton-loader>
        <v-skeleton-loader width="100%" type="image, article, chip" color="#f5f1f1"></v-skeleton-loader>
        <v-skeleton-loader width="100%" type="image, article, chip" color="#f5f1f1"></v-skeleton-loader>
        <v-skeleton-loader width="100%" type="image, article, chip" color="#f5f1f1"></v-skeleton-loader>

    </div>
    <div class="programacion-articles-container" v-else>

        <ArticleCard v-for="article in blogEntry" :href="getHref(article.slug)" :imgSrc="getImgSrc(article.imageUrl)" :date="article.created_date"
        :title="article.title" :description="article.summary"
        :categories="article.categories" />

    </div>
</template>

<script setup>
// import ArticleCardSecondary from './ArticleCardSecondary.vue';
// import SkeletonArticleCardSecondary from './SkeletonArticleCardSecondary.vue';
import ArticleCard from './ArticleCard.vue';
import api from '../../api.js';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiTagOutline, mdiChevronRight  } from '@mdi/js';

const dominio = api.defaults.baseURL;

const getHref = (slug) => `/blog/${slug}`;
const getImgSrc = (imageUrl) => `${dominio}${imageUrl}`;

// const { data: blogEntry, pending: loading } = await useAsyncData('programacion-articles', () =>
//   api.get('/api/articles/filter?seccion=programacion&limit=4').then(response => response.data.data)
// );

const blogEntry = ref([]);
const loading = ref(true);

const getArticles = async () => {
  api.get('/api/articles/filter?seccion=programacion&limit=6')
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
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 4rem;
        grid-column-gap: 2rem;
    }
}

</style>