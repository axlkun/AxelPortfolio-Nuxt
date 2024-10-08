<template>
    <myHeader></myHeader>
    <v-sheet class="projects">
        <v-sheet class="container">
            <v-sheet class="title">
                <h1>Proyectos</h1>
            </v-sheet>
        </v-sheet>

        <v-sheet class="skeleton d-flex flex-column-reverse flex-md-column" v-if="loading" color="#f5f1f1">
            <template v-for="rowIndex in 2">
                <v-row :class="rowIndex === 1 ? 'pt-md-6' : ''" class="pb-md-6">
                    <template v-for="colIndex in 2">
                        <v-col cols="12" md="6">
                            <v-skeleton-loader :height="rowIndex == 1 ? 510 : 350" type="image, article, chip"
                                color="#f5f1f1"></v-skeleton-loader>
                        </v-col>
                    </template>
                </v-row>
            </template>
        </v-sheet>

        <project-list :projectsList="projects" v-else></project-list>

        <contactSection></contactSection>
    </v-sheet>

    <myFooter></myFooter>
</template>

<script setup>
import api from '../api';
import projectList from '../components/ProjectsList.vue';
import contactSection from '../components/ContactSection.vue';
import myHeader from '../components/Header.vue';
import myFooter from '../components/Footer.vue';

const projects = ref([]);
const loading = ref(true);

const getProjects = async () => {
    try {
        const response = await api.get('/api/projects');

        if (response.status === 200) {
            projects.value = response.data.data;
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
    getProjects();
})

useSeoMeta({

    robots: 'index, follow',

    title: 'Axel Cruz | Proyectos',
    author: 'Axel Cruz',
    description: 'Hola! soy Axel Cruz, Ingeniero en Sistemas Computacionales y Programador en México. Aquí puedes explorar los diferentes proyectos de software que he realizado, así como el stack de tecnologías con el que los desarrollé, donde destacan PHP, Laravel, Vuejs, Nuxt, MySQL, SQLServer, entre otras.',
    keywords: 'programación, fullstack developer, axel cruz, php, laravel, nuxt, vue, vuetify, mysql, sqlserver, startp, sideproject, solopreneur',

    ogTitle: 'Axel Cruz | Fullstack Developer',
    ogDescription: 'Hola! soy Axel Cruz, Ingeniero en Sistemas Computacionales y Programador en México. Aquí puedes explorar los diferentes proyectos de software que he realizado, así como el stack de tecnologías con el que los desarrollé, donde destacan PHP, Laravel, Vuejs, Nuxt, MySQL, SQLServer, entre otras.',
    keywords: 'programación, fullstack developer, axel cruz, php, laravel, nuxt, vue, vuetify, mysql, sqlserver, startp, sideproject, solopreneur',
    ogImage: 'https://www.axelcruz.space/og-image.png',
    ogUrl: 'https://www.axelcruz.space/proyectos',
    ogType: 'website',

    twitterCreator: '@Axlkun',
    twitterImage: 'https://www.axelcruz.space/og-image.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Axel Cruz | Proyectos',
    twitterDescription: 'Hola! soy Axel Cruz, Ingeniero en Sistemas Computacionales y Programador en México. Aquí puedes explorar los diferentes proyectos de software que he realizado, así como el stack de tecnologías con el que los desarrollé, donde destacan PHP, Laravel, Vuejs, Nuxt, MySQL, SQLServer, entre otras.',
    keywords: 'programación, fullstack developer, axel cruz, php, laravel, nuxt, vue, vuetify, mysql, sqlserver, startp, sideproject, solopreneur',
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