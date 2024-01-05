<template>
    <v-sheet class="projects">
        <v-sheet class="container">
            <v-sheet class="title">
                <h1>Blog</h1>
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

        <articlestList :blogEntry="blogEntry" v-else></articlestList>

        <contactSection></contactSection>
    </v-sheet>
</template>

<script setup>
import api from '../api';
import articlestList from '../components/ArticlesList.vue';
import contactSection from '../components/ContactSection.vue';

const blogEntry = ref([]);
let loading = ref(true);

const getArticles = () => {
    api.get('/api/articles')
        .then(response => {

            if (response.status === 200) {
                blogEntry.value = response.data.data;
            } else {
                console.error('Respuesta no exitosa:', response);
                this.$router.push('/');
            }
        })
        .catch(error => {
            console.error('Error al hacer la solicitud GET:', error);
            this.$router.push('/');
        })
        .finally(() => {
            loading = false; // Desactiva el estado de carga después de la solicitud
        });
}

onMounted(() => {
    getArticles();
})

useSeoMeta({

robots: 'index, follow',

title: 'Axel Cruz | Blog',
author: 'Axel Cruz',
description: 'Hola! soy Axel Cruz, Ingeniero en Sistemas Computacionales y Programador en México. En este blog puedes encontrar artículos relacionados con el desarrollo de software, startups, noticias de tecnología y mucho más.',

ogTitle: 'Axel Cruz | Fullstack Developer',
ogDescription: 'Hola! soy Axel Cruz, Ingeniero en Sistemas Computacionales y Programador en México, apasionado por el desarrollo de software de alto performance y excelente experiencia de usuario.',
ogImage: 'https://www.axelcruz.space/og-image.png',
ogUrl: 'https://www.axelcruz.space/',
ogType: 'website',

twitterCreator: '@Axlkun',
twitterImage: 'https://www.axelcruz.space/og-image.png',
twitterCard: 'summary_large_image',
twitterTitle: 'Axel Cruz | Blog',
twitterDescription: 'Hola! soy Axel Cruz, Ingeniero en Sistemas Computacionales y Programador en México. En este blog puedes encontrar artículos relacionados con el desarrollo de software, startups, noticias de tecnología y mucho más.'
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
    font-size: 35px;
    font-weight: 400;
    margin: 0 auto;
    background: transparent;
    color: var(--primary-blue);
    text-align: center;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;
        font-weight: 400;
        text-align: start;
    }

}
</style>