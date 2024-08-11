<template>
    <v-card class="article-entry" :elevated="0" variant="text" :href="href">
        <v-img :src="imgSrc" cover :aspect-ratio="16 / 9"></v-img>
    
        <v-sheet class="img-container">
          <v-img class="img" :src="imgBlog"></v-img>
          <p>{{ date }}</p>
        </v-sheet>
    
        <v-sheet>
          <v-sheet class="article-title">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
          </v-sheet>
    
          <v-card-text class="d-flex flex-wrap pa-0">
            <v-chip v-for="category in categories" class="mr-2 mb-2">
              {{ category.name }}
          </v-chip>
          </v-card-text>
        </v-sheet>
      </v-card>
</template>

<script setup>
import imgBlog from '../../assets/logo-axel.svg';

const props = defineProps({
  href: {
    type: String
  },
  imgSrc: {
    type: String
  },
  date: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  categories: {
    type: Array
  }
});
</script>

<style scoped>
.article-entry {
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background: transparent;
    line-height: 1.2;
    transition: transform 0.3s, filter 0.3s;
    width: 100%;

    @media only screen and (min-width: 768px) {
        padding: 15px;
    }

    &:hover {
        transform: scale(1.01);
        cursor: pointer;
    }
}

.article-entry * {
    background: inherit;
}

.img-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.img {
    max-width: 40px;
}

.article-title {
    margin-bottom: 15px;
}

.article-title h3 {
    font-size: 16px;
    text-align: start;
    margin-bottom: 15px;
    font-weight: bold;
    color: var(--primary-blue);

    @media only screen and (min-width: 1024px) {
        font-size: 18px;
    }
}

.article-entry p {
    font-size: 16px;

    @media only screen and (min-width: 1024px) {
        font-size: 18px;
    }
}

.article-title p {
    color: grey;
}

.img-container p {
    font-size: 14px;

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
}
</style>