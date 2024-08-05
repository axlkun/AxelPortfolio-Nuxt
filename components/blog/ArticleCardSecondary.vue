<template>
    <v-card class="article-entry" :elevated="0" variant="text" :href="href">
        <div class="d-flex justify-between">
            <v-img :src="imgSrc" min-width="160" cover></v-img>
            <div class="pa-2">
                <div class="img-container">
                    <v-img class="img" :src="imgBlog"></v-img>
                    <p>{{ date }}</p>
                </div>

                <div class="article-title">
                    <h3>{{ title }}</h3>
                    <p>{{ description }}</p>
                </div>

                <div class="d-flex flex-wrap pa-0">
                    <v-chip class="mr-2 mb-2">
                        {{ category }}
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
        type: String,
        default: '/'
    },
    imgSrc: {
        type: String,
        default: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
    },
    imgBlog: {
        type: String,
        default: ''
    },
    date: {
        type: String,
        default: '18 Junio 2024'
    },
    title: {
        type: String,
        default: 'Top western road trips'
    },
    description: {
        type: String,
        default: '1,000 miles of wonder 1,000 miles of wonder'
    },
    category: {
        type: String,
        default: 'Programación'
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