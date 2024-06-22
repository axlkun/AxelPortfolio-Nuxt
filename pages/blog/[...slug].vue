<template>
    <v-sheet class="project">

        <v-sheet v-if="loading" class="skeleton">
            <!-- Contenedor principal -->
            <v-sheet color="#f5f1f1">
                <v-sheet color="#f5f1f1">
                    <v-row justify-center>
                        <!-- Contenedor 70% -->
                        <v-col cols="12" md="9" class="pt-12">
                            <v-skeleton-loader type="heading" color="#f5f1f1"></v-skeleton-loader>
                            <v-skeleton-loader type="subtitle" color="#f5f1f1"></v-skeleton-loader>
                            <v-skeleton-loader type="chip" color="#f5f1f1"></v-skeleton-loader>
                            <v-skeleton-loader type="image" color="#f5f1f1" class="pt-md-12 pb-md-12"></v-skeleton-loader>
                            <v-skeleton-loader type="paragraph" color="#f5f1f1"></v-skeleton-loader>
                            <v-skeleton-loader type="paragraph" color="#f5f1f1"></v-skeleton-loader>
                            <v-skeleton-loader type="paragraph" color="#f5f1f1"></v-skeleton-loader>
                        </v-col>
                        <!-- Contenedor 30% -->
                        <v-col cols="12" md="3" class="pt-12">
                            <v-skeleton-loader type="list-item-two-line" color="#f5f1f1"></v-skeleton-loader>
                            <v-skeleton-loader type="list-item-two-line" color="#f5f1f1"></v-skeleton-loader>
                            <v-skeleton-loader type="list-item-two-line" color="#f5f1f1"></v-skeleton-loader>
                            <v-skeleton-loader type="list-item-two-line" color="#f5f1f1"></v-skeleton-loader>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-sheet>

        </v-sheet>

        <v-sheet class="container" v-else>

            <v-sheet class="description-container">
                <v-breadcrumbs class="pl-0" :items="items" divider=">" color="#0801ff"></v-breadcrumbs>
                <v-sheet class="project-data">
                    <v-sheet class="project-description">
                        <v-sheet class="title">
                            <h1> {{ article.title }}</h1>
                        </v-sheet>

                        <v-sheet class="description">
                            <p> {{ article.summary }} </p>
                        </v-sheet>

                        <v-sheet class="d-flex flex-wrap justify-start mt-2 mb-2">
                            <v-chip v-for="category in article.categories" class="mr-2 mb-2" color="#0801ff">
                                {{ category.name }}
                            </v-chip>
                        </v-sheet>

                    </v-sheet>

                    <v-sheet class="project-info">
                        <v-sheet class="link-container">
                            <h3>Autor</h3>
                            <a href="https://twitter.com/Axlkun">Axel Cruz</a>
                        </v-sheet>
                        <v-sheet class="link-container">
                            <h3>Fecha</h3>
                            <p> {{ article.created_date }} </p>
                        </v-sheet>
                        <v-sheet class="link-container">
                            <h3>Tiempo de lectura</h3>
                            <p>3 min</p>
                        </v-sheet>
                    </v-sheet>
                </v-sheet>
            </v-sheet>

            <v-sheet class="img-container">
                <v-img :src="`${dominio}${article.imageUrl}`" :alt="article.alt_image" max-height="500" aspect-ratio="16/9"
                    cover></v-img>
            </v-sheet>

            <v-sheet class="article-content">
                <div class="html-content" v-html="article.description"></div>
            </v-sheet>

        </v-sheet>

        <v-sheet class="title-container">
            <h2>Artículos relacionados</h2>
        </v-sheet>

        <articlesList :blogEntry="articles"></articlesList>

        <contactSection></contactSection>

    </v-sheet>
</template>

<script setup>
import api from '../api';
import articlesList from '../components/ArticlesList.vue';
import contactSection from '../components/ContactSection.vue';
import Prism from 'prismjs';

import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-java';

import 'prismjs/themes/prism-okaidia.css';
import { ref, watch, onMounted, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const items = ref([
    {
          title: 'Inicio',
          disabled: false,
          href: '/',
        },
        {
          title: 'Blog',
          disabled: false,
          href: '/proyectos',
        },
        {
          title: 'Artículo',
          disabled: true,
        },
])

const route = useRoute();
const router = useRouter();
const slug = ref(route.params.slug);
const dominio = api.defaults.baseURL;
const article = ref(null);
const articles = ref(null);
const loading = ref(true);


const highlightCode = () => {

    nextTick(() => {
        Prism.highlightAll();
    });
};

const loadData = async () => {
    loading.value = true;

    try {
        const articleResponse = await loadArticle();
        if (articleResponse.status === 200) {
            article.value = articleResponse.data.data;

            useSeoMeta({

                robots: 'index, follow',
                title: () => "Axel Cruz | " + article.value.title,
                author: 'Axel Cruz',
                description: () => article.value.meta_description,
                keywords: () => article.value.keywords,

                ogTitle: 'Axel Cruz | Fullstack Developer',
                ogDescription: 'Hola! soy Axel Cruz, Ingeniero en Sistemas Computacionales y Programador en México, apasionado por el desarrollo de software de alto performance y excelente experiencia de usuario.',
                ogImage: 'https://www.axelcruz.space/og-image.png',
                ogUrl: 'https://www.axelcruz.space/',
                ogType: 'website',

                twitterCreator: '@Axlkun',
                twitterImage: () => dominio + article.value.imageUrl,
                twitterCard: 'summary_large_image',
                twitterTitle: () => 'Axel Cruz | ' + article.value.title,
                twitterDescription: () => article.value.summary
            })
        } else {
            // Redirige al índice en caso de respuesta no exitosa
            this.$router.push('/');
        }
    } catch (error) {
        handleError(error);
    }
    finally {
        loading.value = false;
        highlightCode();
    }

    // Realiza la otra petición en segundo plano
    loadRelatedArticles();
}


const loadArticle = async () => {
    return await api.get(`/api/articles/${slug.value}`);
}


const loadRelatedArticles = async () => {
    try {
        const relatedArticlesResponse = await api.get(`/api/related-articles/${slug.value}`);
        articles.value = relatedArticlesResponse.data.data;
    } catch (error) {
        console.error('Error al obtener artículos relacionados:', error);
    }
}


const handleError = (error) => {
    console.error('Error al hacer la solicitud GET:', error);
    router.push('/');
};

watch(() => route.params.slug, () => {
    slug.value = route.params.slug;
    loadData();
});

onMounted(() => {
    // Cargar lenguajes adicionales
    //loadLanguages(['php','java']);
    loadData();
    console.log(Prism);
});

</script>

<style scoped>
.project {
    background-color: var(--primary-background);
}

.container {
    max-width: 90%;
    background: transparent;
    margin: 0 auto;
    display: flex;
    flex-direction: column;


    @media only screen and (min-width: 1024px) {
        max-width: 90%;
    }
}

.container * {
    background: inherit;
}

.title {
    font-size: 35px;
    font-weight: bold;
    color: var(--primary-blue);
    text-align: start;
    line-height: 1.1;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;

    }

}

.description {
    margin: 15px 0;
}

.img-container {

    width: 100%;

    @media only screen and (min-width: 1024px) {
        margin-bottom: 30px;
        width: 70%;
    }
}

.description-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 15px;

    @media only screen and (min-width: 1024px) {
        margin: 30px 0;
    }

}

.project-data {
    display: flex;
    flex-direction: column;
    font-size: 16px;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        font-size: 18px;

    }
}

.project-description {
    flex: 70%;
}

.project-info {
    flex: 30%;
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 15px;

    @media only screen and (min-width: 1024px) {

        align-items: center;
    }
}

.link-container {
    width: 200px;
}

.project-info h3 {
    color: var(--primary-blue);
    font-weight: bold;
}

.link {
    text-decoration: underline;
}

.article-content {
    font-size: 16px;
    margin-bottom: 60px;

    @media only screen and (min-width: 1024px) {
        font-size: 18px;
        width: 70%;
    }
}

.title-container {
    width: 90%;
    font-size: 25px;
    margin: 0 auto;
    color: var(--primary-blue);
    background: transparent;
    text-align: start;
    border-top: 1px solid var(--primary-black);

    @media only screen and (min-width: 1024px) {
        font-size: 35px;
    }
}
</style>