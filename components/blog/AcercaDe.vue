<template>

    <div class="nuestraformula-container pa-md-5 mt-5 rounded rounded-xl">

        <div class="background-container d-flex flex-column flex-md-row align-center mx-auto ga-5">

            <div class="text-container pt-6">

                <p>El Objetivo</p>

                <h2>Sobre Axel Cruz Space</h2>

                <p>Axel Cruz Space es un blog dedicado a explorar el mundo de la Programación y la Ingeniería de Software. El objetivo es proporcionar recursos valiosos para desarrolladores y estudiantes.
                </p>

            </div>

                <v-expansion-panels class="expansion-container">
                    <v-expansion-panel v-for="item in elements" class="ma-5" bg-color="#1e2494">
                        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="text-h7 text-md-h6" >
                            <svg-icon class="mr-2" type="mdi" :path="item.icon"></svg-icon> {{ item.title }}
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            {{ item.description }}
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            

        </div>

    </div>

</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCodeBraces, mdiBrightness5, mdiCashMultiple, mdiSchoolOutline, mdiPaletteOutline   } from '@mdi/js';

const elements = [
    {
        title: 'Para Estudiantes de Ingeniería de Software',
        icon: mdiSchoolOutline,
        description: 'Recursos académicos que te ayudarán a comprender mejor los conceptos abordados en la carrera',

    },
    {
        title: 'Guías para Desarrollo Frontend',
        icon: mdiPaletteOutline,
        description: 'Guías para implementar diferentes funcionalidades del lado de Frontend, abordando tecnologías como Vue.js, React, Nuxt, Vuetify, Tailwaind, Bootstrap y muchas más.',

    },
    {
        title: 'Guías para Desarrollo Backend',
        icon: mdiCodeBraces,
        description: 'Tutoriales completos sobre como implementar funcionalidades en el backend en los frameworks más populares, como Laravel, Spring Boot, Django, .NET y muchos más.',

    },
    {
        title: 'Mejores Prácticas en la Ingeniería de Software',
        icon: mdiBrightness5,
        description: 'Artículos sobre las mejores prácticas en el ciclo completo del desarrollo de Software',

    },
    {
        title: 'Startups y SideProjects ',
        icon: mdiCashMultiple,
        description: 'Experiencias y tips en el desarrollo de SideProjects, desde encontrar ideas hasta su implementación',

    }
];

</script>

<style scoped>
.nuestraformula-container {
    background-color: var(--primary-blue);
}

.background-container {
    max-width: 90%; 
}

.text-container,
.expansion-container {
    flex-grow: 1;
    flex-basis: 50%;
}

.text-container {
    
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media only screen and (min-width: 1024px) {
        text-align: start;
    }
}

.text-container p {
    font-size: 14px;
    line-height: 1.5;
    color: white;

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
}

.text-container p:first-of-type {
    font-size: 14px;
    line-height: 1.5;
    color: white;
    font-weight: bold;

    @media only screen and (min-width: 1024px) {

        font-size: 16px;
    }
}

.text-container h2 {
    font-size: 25px;
    font-weight: bold;
    color: white;

    @media only screen and (min-width: 1024px) {
        font-size: 30px;
    }
}

h3 {
    font-weight: bold;
    color: var(--primary-gold);
}

.card p{
    font-size: 14px;
    line-height: 1.2;

    @media only screen and (min-width: 1024px) {

        font-size: 16px;

    }
}
</style>