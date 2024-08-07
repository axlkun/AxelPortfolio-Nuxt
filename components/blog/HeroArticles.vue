<template>

  <div class="d-flex flex-column flex-md-row mt-10 ga-5" v-if="loading">
    <div class="flex-grow-1">
      <v-skeleton-loader height="400" type="image, article, chip" color="#f5f1f1"></v-skeleton-loader>
    </div>

    <div class="flex-grow-1">

      <SkeletonArticleCardSecondary></SkeletonArticleCardSecondary>

      <SkeletonArticleCardSecondary></SkeletonArticleCardSecondary>

    </div>
  </div>

  <div class="d-flex flex-column flex-md-row mt-10 ga-5" v-else>
    <div class="flex-grow-1">
      <ArticleCard :href="getHref(blogEntry[0].slug)" :imgSrc="getImgSrc(blogEntry[0].imageUrl)"
        :date="blogEntry[0].created_at_formated" :title="blogEntry[0].title" :description="blogEntry[0].summary"
        :categories="blogEntry[0].categories" />
    </div>

    <div class="flex-grow-1">

      <ArticleCardSecondary :href="getHref(blogEntry[1].slug)" :imgSrc="getImgSrc(blogEntry[1].imageUrl)"
        :date="blogEntry[1].created_at_formated" :title="blogEntry[1].title" :description="blogEntry[1].summary"
        :categories="blogEntry[1].categories" class="mb-5" />

      <ArticleCardSecondary :href="getHref(blogEntry[2].slug)" :imgSrc="getImgSrc(blogEntry[2].imageUrl)"
        :date="blogEntry[2].created_at_formated" :title="blogEntry[2].title" :description="blogEntry[2].summary"
        :categories="blogEntry[2].categories" />

    </div>
  </div>
</template>

<script setup>
import ArticleCard from './ArticleCard.vue';
import ArticleCardSecondary from './ArticleCardSecondary.vue';
import SkeletonArticleCardSecondary from './SkeletonArticleCardSecondary.vue';
import api from '../../api.js';

const dominio = api.defaults.baseURL;

const getHref = (slug) => `/blog/${slug}`;
const getImgSrc = (imageUrl) => `${dominio}${imageUrl}`;

// const { data: blogEntry, pending: loading } = await useAsyncData('hero-articles', () =>
//   api.get('/api/articles?limit=3').then(response => response.data.data)
// );


const blogEntry = ref([]);
const loading = ref(true);

const getArticles = async () => {
  api.get('/api/articles?limit=3')
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
