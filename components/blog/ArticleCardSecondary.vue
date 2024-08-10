<template>
    <v-card class="card-container" :elevated="0" variant="text" :href="href">
        <div class="d-flex flex-column flex-md-row">
            <v-img :src="imgSrc"  :aspect-ratio="16 / 9" cover></v-img>
            <div class="card-content pa-2">
                <div class=".logo-date d-flex flex justify-space-between align-center w-100">
                    <v-img class="logo w-100 mb-2" :src="imgBlog"></v-img>
                    <p>{{ date }}</p>
                </div>

                <div class="article-title mb-5">
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

.card-content {
    width: 100%;

    @media only screen and (min-width: 1028px) {
        width: 60%;
        padding: 16px;
    }


}

.card-container {
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

.logo {
    max-width: 40px;
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

.card-container p {
    font-size: 16px;

    @media only screen and (min-width: 1024px) {
        font-size: 18px;
    }
}

.article-title p {
    color: grey;
}

.logo-date p {
    font-size: 14px;

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
}
</style>