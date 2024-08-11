<template>
    <div class="d-flex flex-column flex-md-row justify-space-between align-md-center ga-6 mt-15">
        <div>
            <svg-icon type="mdi" :path="mdiCashMultiple" style="color: #0801ff"></svg-icon>
            <h2 class="text-h4 text-md-h5 font-weight-bold mb-3 text-primary-color">Startups y SideProjects</h2>
            <p class="text-h5 font-weight-bold text-md-h4 mb-3">Encuentra ideas y aprende a escalarlas</p>
            <p>Encuentra consejos prácticos sobre la creación de Startups - SideProjects, <br> desde la validación de ideas hasta la ejecución y escalado de proyectos</p>
        </div>
        <div>
            <v-btn variant="tonal" class="mt-5" color="#0801ff" href="/startups-sideprojects">
                Ver todos los articulos
                <svg-icon type="mdi" :path="mdiChevronRight"></svg-icon>
            </v-btn>
        </div>
    </div>
    <div class="d-flex flex-column flex-md-row justify-space-between ga-6 mt-10" v-if="loading">
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
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCashMultiple, mdiChevronRight  } from '@mdi/js';


const dominio = api.defaults.baseURL;

const getHref = (slug) => `/blog/${slug}`;
const getImgSrc = (imageUrl) => `${dominio}${imageUrl}`;

// const { data: blogEntry, pending: loading } = await useAsyncData('startup-articles', () =>
//   api.get('/api/articles/filter?seccion=startup&limit=2').then(response => response.data.data)
// );

const blogEntry = ref([]);
const loading = ref(true);

const getArticles = async () => {
  api.get('/api/articles/filter?seccion=startup&limit=2')
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