<template>
    <myHeader></myHeader>
    <v-sheet class="project">

        <v-sheet v-if="loading" class="skeleton">
            <!-- Contenedor principal -->
            <v-sheet color="#f5f1f1" class="d-flex flex-column-reverse flex-md-column">
                <v-sheet color="#f5f1f1">
                    <v-row justify-center>
                        <!-- Contenedor 70% -->
                        <v-col cols="12" md="9" class="pt-12">
                            <v-skeleton-loader type="heading" color="#f5f1f1"></v-skeleton-loader>
                            <v-skeleton-loader type="subtitle" color="#f5f1f1"></v-skeleton-loader>
                            <v-skeleton-loader type="chip" color="#f5f1f1"></v-skeleton-loader>
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

                <v-sheet color="#f5f1f1">
                    <!-- Skeleton de la imagen -->
                    <v-skeleton-loader type="image" color="#f5f1f1" class="pt-md-12 pb-md-12"></v-skeleton-loader>
                </v-sheet>
            </v-sheet>

        </v-sheet>

        <v-sheet class="container" v-else>

            <v-sheet class="img-container">
                <img :src="`${dominio}${project.imageUrl}`" alt="Imagen proyecto" />
            </v-sheet>

            <v-sheet class="description-container">

                <v-breadcrumbs class="pl-0" :items="items" divider=">" color="#0801ff"></v-breadcrumbs>
                <v-sheet class="project-data">
                    <v-sheet class="project-description">
                        <v-sheet class="title">
                            <h1> {{ project.title }}</h1>
                        </v-sheet>

                        <v-sheet class="d-flex flex-wrap justify-start mt-2 mb-2">
                            <v-chip v-for="technologie in project.technologies" class="mr-2 mb-2" color="#0801ff">
                                {{ technologie }}
                            </v-chip>
                        </v-sheet>

                        <v-sheet class="html-content" v-html="project.description"></v-sheet>
                    </v-sheet>
                    <v-sheet class="project-info">
                        <v-sheet class="link-container">
                            <h3>Compañía / Cliente</h3>
                            <p> {{ project.company }}</p>
                        </v-sheet>
                        <v-sheet class="link-container">
                            <h3>Rol</h3>
                            <p>Fullstack Developer</p>
                        </v-sheet>
                        <!-- <v-sheet class="link-container">
                            <h3>Ver código</h3>
                            <a :href="project.repo_link ? project.repo_link : null">
                                {{ project.repo_link ? project.repo_link : 'Repositorio privado' }}
                            </a>
                        </v-sheet> -->
                        <v-sheet class="link-container">
                            <h3>Visitar el sitio</h3>
                            <a :href="project.website_link ? project.website_link : null">
                                {{ project.website_link ? project.website_link : 'Despliegue no disponible' }}
                            </a>
                        </v-sheet>
                    </v-sheet>
                </v-sheet>
            </v-sheet>


        </v-sheet>

        <relatedProjects :projectsList="projects"></relatedProjects>

        <contactSection></contactSection>

    </v-sheet>
    <myFooter></myFooter>
</template>

<script setup>
import api from '../api';
import relatedProjects from '../components/RelatedProjects.vue';
import contactSection from '../components/ContactSection.vue';
import myHeader from '../components/Header.vue';
import myFooter from '../components/Footer.vue';
import { ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const items = ref([
    {
        title: 'Inicio',
        disabled: false,
        href: '/home',
    },
    {
        title: 'Proyectos',
        disabled: false,
        href: '/proyectos',
    },
    {
        title: 'Proyecto',
        disabled: true,
    },
])

const route = useRoute();
const router = useRouter();
const slug = ref(route.params.slug);
const dominio = api.defaults.baseURL;
const project = ref(null);
const projects = ref(null);
const loading = ref(true);


const loadData = async () => {
    loading.value = true;

    try {
        const projectResponse = await loadProject();
        if (projectResponse.status === 200) {
            project.value = projectResponse.data.data;

            useSeoMeta({

                robots: 'index, follow',
                title: () => "Axel Cruz | " + project.value.title,
                author: 'Axel Cruz',
                description: () => project.value.meta_description,
                keywords: () => project.value.keywords,

                ogTitle: () => "Axel Cruz | " + project.value.title,
                ogDescription: () => project.value.meta_description,
                ogImage: () => dominio + project.value.imageUrl,
                ogUrl: () => dominio + "/proyectos/" + project.value.slug,
                ogType: 'website',

                twitterCreator: '@Axlkun',
                twitterImage: () => dominio + project.value.imageUrl,
                twitterCard: 'summary_large_image',
                twitterTitle: () => 'Axel Cruz | ' + project.value.title,
                twitterDescription: () => project.value.summary
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
    }

    // Realiza la otra petición en segundo plano
    loadRelatedProjects();
}


const loadProject = async () => {
    return await api.get(`/api/projects/${slug.value}`);
}


const loadRelatedProjects = async () => {
    try {
        const relatedProjectResponse = await api.get(`/api/related-projects/${slug.value}`);
        projects.value = relatedProjectResponse.data.data;
    } catch (error) {
        console.error('Error al obtener proyectos relacionados:', error);
    }
}

const handleError = (error) => {
    console.error('Error al hacer la solicitud GET:', error);
    this.$router.push('/');
}



watch(() => route.params.slug, () => {
    slug.value = route.params.slug;
    loadData();
});

onMounted(() => {
    loadData();
});
</script>

<style scoped>
.project {
    background-color: var(--primary-background);
}

.container {
    width: 90%;
    max-width: 120rem;
    background: transparent;
    margin: 0 auto;
    display: flex;
    flex-direction: column;


    @media only screen and (min-width: 1024px) {
        max-width: 90%;
        flex-direction: column-reverse;
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
    line-height: 1.2;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;

    }

}

.img-container {

    width: 100%;
    background-color: var(--primary-grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        margin-bottom: 60px;
        min-height: 90vh;

    }
}

.img-container img {
    width: 100%;
    height: 100%;

    @media only screen and (min-width: 1024px) {
        width: 80%;
    }
}

.description-container {
    display: flex;
    flex-direction: column;

    justify-content: center;
    min-height: 70vh;

    @media only screen and (min-width: 1024px) {
        margin-top: 30px;
    }

}

.project-data {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    gap: 50px;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        font-size: 18px;
    }
}

.project-description {
    flex: 70%;
    /*flex-grow: 7;*/
}

.project-info {
    flex: 30%;
    /*flex-grow: 3;*/
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 30px;
    border-top: 1px solid grey;
    padding-top: 15px;

    @media only screen and (min-width: 1024px) {

        border-top: none;
        padding-top: 0;
    }
}

.link-container {
    width: 200px;
}

.project-info h3 {
    color: var(--primary-blue);
}
</style>