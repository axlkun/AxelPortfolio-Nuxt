<template>
    <v-card class="article-entry" :elevated="0" variant="text" :href="href">
        <div class="d-flex">
            <v-img
                :src="imgSrc"
                class="article-image"
                cover
            ></v-img>
            <div class="article-content pa-2">
                <div class="img-container">
                    <v-img class="img" :src="imgBlog"></v-img>
                    <p>{{ date }}</p>
                </div>

                <div class="article-title">
                    <h3>{{ title }}</h3>
                    <p>{{ description }}</p>
                </div>

                <div class="d-flex flex-wrap pa-0">
                    <v-chip v-for="category in categories" :key="category.id" class="mr-2 mb-2">
                        {{ category.name }}
                    </v-chip>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script setup>
import { defineProps } from 'vue';
import imgBlog from '../../assets/logo-axel.svg';

const props = defineProps({
    href: {
        type: String
    },
    imgSrc: {
        type: String
    },
    imgBlog: {
        type: String
    },
    date: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String,

    },
    categories: {
        type: Array
    }
});
</script>

<style scoped>
.article-entry {
    display: flex;
    flex-direction: row;
}

.article-image {
    width: 33.33%; /* Ocupa 1/3 del contenedor */
    height: auto;
}

.article-content {
    width: 66.67%; /* Ocupa 2/3 del contenedor */
    padding: 16px; /* Ajusta el padding según sea necesario */
}

.img-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px; /* Espaciado entre la imagen y el texto */
}

.img {
    width: 100%;
    height: auto;
    margin-bottom: 8px; /* Espaciado debajo de la imagen */
}

.article-title {
    margin-bottom: 16px;
}

.d-flex {
    display: flex;
}

.d-flex.flex-wrap {
    flex-wrap: wrap;
}

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