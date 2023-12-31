<template>
    <v-sheet class="container">

        <v-sheet class="work-container">

            <a v-for="project in projectsList" :key="project.name" :href="'/proyectos/' + project.slug">
                <v-card color="#232325" variant="text" class="custom-card">

                    <v-img :src="`${dominio}${project.imageUrl}`" cover :aspect-ratio="16 / 8">
                    </v-img>

                    <v-card-title class="flex-column align-start">
                        <div class="project-name">
                            {{ project.title }}
                        </div>
                        <div class="mt-1 mb-1 project-description text-visible">
                            {{ project.summary }}
                        </div>
                        <div class="d-flex align-center">
                            <v-icon class="mdi mdi-domain" contain></v-icon>

                            <span class="ml-1 project-type">{{ project.company }}</span>
                        </div>
                    </v-card-title>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-text class="d-flex flex-wrap justify-start">
                        <v-chip v-for="stack in project.technologies" class="mr-2 mb-2">
                            {{ stack }}
                        </v-chip>
                    </v-card-text>

                </v-card>
            </a>
        </v-sheet>
    </v-sheet>
</template>

<script>
import api from '../api';

export default {

    props: ['projectsList'],

    data: () => ({
        dominio: api.defaults.baseURL,
        loading: true
    })
}

</script>

<style scoped>
.container {
    max-width: 90%;
    background: transparent;
    margin: 0 auto;
}

.work-container {
    margin-top: 30px;
    display: grid;
    gap: 2rem;
    background: transparent;
    grid-template-columns: 1fr;

    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 4rem;
        grid-column-gap: 2rem;
    }
}


.custom-card {
    transition: transform 0.3s, filter 0.3s;

    &:hover {

        cursor: pointer;
        transform: scale(1.01);

    }

}

.project-name {
    font-size: 16px;
    font-weight: bold;
    color: var(--primary-blue);
    white-space: nowrap;
    overflow: hidden;
    white-space: initial;
    line-height: 1.2;
    margin-bottom: 10px;

    @media only screen and (min-width: 1024px) {
        font-size: 20px;
    }
}

.project-description {
    font-size: 16px;
    line-height: 1.2;
    color: grey;

    @media only screen and (min-width: 1024px) {
        font-size: 20px;
    }
}

.project-type {
    font-size: 14px;
    line-height: 1.2;
    color: grey;

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
}

.text-visible {
    white-space: nowrap;
    overflow: hidden;
    white-space: initial;
    line-height: 1.2;
}
</style>