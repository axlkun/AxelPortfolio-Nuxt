<template>
    <myHeader v-if="refValue == 'home'"></myHeader>
    <myBlogHeader v-else></myBlogHeader>
    
    <v-sheet class="projects">
        <v-sheet class="container">
            <v-sheet class="title">
                <h1>Blog</h1>
                <p>Descubre todo tipo de artículos relacionados a la Programación, <br> Ingeniería de Software y Startups!
                </p>
            </v-sheet>
        </v-sheet>

        <v-sheet class="skeleton d-flex flex-column-reverse flex-md-column" v-if="loading" color="#f5f1f1">
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

        <articlestList :blogEntry="blogEntry" :home="isHome" v-else></articlestList>

        <contactSection v-if="refValue == 'home'"></contactSection>

    </v-sheet>
    
    <myFooter v-if="refValue == 'home'"></myFooter>
    <myBlogFooter v-else></myBlogFooter>
</template>

<script setup>
import api from '../api';
import articlestList from '../components/ArticlesList.vue';
import contactSection from '../components/ContactSection.vue';
import myBlogHeader from '../components/blog/BlogHeader.vue';
import myBlogFooter from '../components/blog/BlogFooter.vue';
import myHeader from '../components/Header.vue';
import myFooter from '../components/Footer.vue';
import { useRoute } from 'vue-router';

const blogEntry = ref([]);
const loading = ref(true);
const route = useRoute();

// Obtener parámetros de consulta
const query = route.query;
const refValue = query.ref; // Obtén el valor del parámetro "ref"

// Determinar si home es true o false
const isHome = computed(() => refValue === 'home');

const getArticles = async () => {
        try {
        const response = await api.get('/api/articles');

        if (response.status === 200) {
            blogEntry.value = response.data.data;
        } else {
            console.error('Respuesta no exitosa:', response);
            $router.push('/');
        }
    } catch (error) {
        console.error('Error al hacer la solicitud GET:', error);
        $router.push('/');
    } finally {
        loading.value = false;
    }
}

onMounted(() => {
    getArticles();
})

useSeoMeta({

robots: 'index, follow',

title: 'Axel Cruz | Blog',
author: 'Axel Cruz',
description: 'Hola! bienvenido a AxelCruz.space, un blog en el que puedes aprender sobre programación, encontrar guías sobre Ingeniería de Software y experiencias en el desarrollo de SideProjects.',
keywords: 'programación, fullstack developer, axel cruz, php, laravel, nuxt, vue, vuetify, mysql, sqlserver, startp, sideproject, solopreneur',

ogTitle: 'Axel Cruz | Blog',
ogDescription: 'Hola! bienvenido a AxelCruz.space, un blog en el que puedes aprender sobre programación, encontrar guías sobre Ingeniería de Software y experiencias en el desarrollo de SideProjects.',
ogImage: 'https://www.axelcruz.space/og-image.png',
ogUrl: 'https://www.axelcruz.space/blog',
ogType: 'website',

twitterCreator: '@Axlkun',
twitterImage: 'https://www.axelcruz.space/og-image.png',
twitterCard: 'summary_large_image',
twitterTitle: 'Axel Cruz | Blog',
twitterDescription: 'Hola! bienvenido a AxelCruz.space, un blog en el que puedes aprender sobre programación, encontrar guías sobre Ingeniería de Software y experiencias en el desarrollo de SideProjects.'
})
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
</style>