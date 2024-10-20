<template>
    <v-sheet class="d-flex flex-column align-center justify-center bg-grey-lighten-4 mt-10">
        <v-sheet class="d-flex flex-column justify-center custom-sizing mx-auto pb-5 bg-grey-lighten-4" id="faqs">

            <v-sheet class="pa-5 text-center bg-grey-lighten-4">
                <h2 class="text-h5 text-md-h4 ma-1 font-weight-black">Preguntas Frecuentes</h2>
            </v-sheet>

            <v-expansion-panels v-model="panels" multiple>
                <v-expansion-panel v-for="item in stepsItems" class="ma-2 mb-4 bg-grey-lighten-3">
                    <v-expansion-panel-title
                        class="text-h7 text-md-h6 text-grey-darken-4" style="min-height: 80px">
                        <h3>{{ item.title }}</h3>
                        <svg-icon class="ml-2" style="color: grey;" type="mdi" :path="mdiPlusCircleOutline"></svg-icon>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text style="line-height: 2;">
                        <div v-html="item.description"></div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>

        </v-sheet>
    </v-sheet>

</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiPlusCircleOutline } from '@mdi/js';

const stepsItems = [
    {
        title: '¿Qué puedo aprender en Axel Cruz Space?',
        description: 'En Axel Cruz Space, encontrarás artículos, guías y tutoriales sobre programación e Ingeniería de Software. Puedes encontrar información relevante para el desarrollo frontend y backend, patrones de diseño, frameworks populares como Spring Boot, Laravel, Vue.js y Nuxt, así como consejos para el desarrollo de SideProjects.'
    },
    {
        title: '¿Qué lenguajes de programación se cubren en el blog?',
        description: 'En el blog se abordan diferentes lenguajes y frameworks, destacando: Java, PHP, JavaScript, HTML, CSS y frameworks como Laravel, Spring Boot, React, y Vue.js. Además, regularmente se añaden nuevos artículos para mantenerte al día con las últimas tecnologías y herramientas.'
    },
    {
        title: '¿Cómo puedo empezar a aprender programación si soy principiante?',
        description: 'Si eres principiante, en este blog puedes encontrar una gran variedad de artículos para introducirte en el mundo de la programación. Una vez entendiendo las bases, si te interesa el desarrollo backend te recomiendo revisar: "Cómo crear una API REST con Laravel" y si prefieres el desarrollo frontend puedes empezar con "Implementar React desde cero'
    },
    {
        title: '¿Es necesario tener una carrera en Ingeniería de Software para aprender a programar?',
        description: 'No es necesario tener una carrera de Ingeniería de Software o relacionada para aprender a programar. Muchas personas aprenden de forma autodidacta mediante recursos en línea como tutoriales, cursos y blogs. Sin embargo, una carrera en informática puede proporcionarte una base sólida en teoría de la programación, estructuras de datos y algoritmos.'
    },
    {
        title: '¿Qué herramientas necesito para aprender a programar?',
        description: 'Para empezar a programar solo necesitas un editor de texto (como Visual Studio Code o Sublime Text) y el software necesario para el lenguaje que quieras aprender, como Node.js para JavaScript o Python para proyectos en ese lenguaje. Además, tener una cuenta en GitHub te ayudará a gestionar tus proyectos y colaborar con otros desarrolladores.'
    },
    {
        title: '¿Cuánto tiempo toma aprender a programar?',
        description: 'El tiempo que toma aprender a programar varía según el compromiso y el ritmo de cada persona. Si estudias de manera constante y practicas, puedes aprender los fundamentos de programación en unos pocos meses. Sin embargo, convertirse en un buen programador puede llevar más tiempo, ya que siempre hay nuevas tecnologías y herramientas por descubrir.'
    },
    {
        title: '¿Cuál es el mejor lenguaje de programación para empezar?',
        description: 'El mejor lenguaje para empezar depende de tus objetivos. Si te interesa el desarrollo web, puedes comenzar con HTML, CSS y JavaScript. Si prefieres el desarrollo backend, PHP o Java son excelentes opciones por su simplicidad y uso en múltiples aplicaciones. Lo importante es empezar con un lenguaje que te permita ver resultados rápidos y motivarte a seguir aprendiendo.'
    },
    {
        title: '¿Cómo puedo mejorar mis habilidades de programación?',
        description: 'Para mejorar tus habilidades de programación, es importante practicar de forma constante, resolver problemas y aprender de proyectos reales. Participar en hackathons, contribuir a proyectos de código abierto y seguir tutoriales avanzados también te ayudará a mejorar.'
    },
    {
        title: '¿Cómo saber si la programación es para mí?',
        description: 'La mejor manera de saber si la programación es para ti es programando. Comienza con proyectos sencillos, sigue algunos tutoriales básicos y evalúa si disfrutas resolviendo problemas y construyendo soluciones. Si te gusta el desafío intelectual y la creatividad que implica el código, la programación podría ser una excelente opción para ti.'
    },
    {
        title: '¿Qué son las mejores prácticas en Ingeniería de Software?',
        description: 'Las mejores prácticas en Ingeniería de Software incluyen el diseño de código limpio, la adopción de patrones de diseño, la gestión adecuada de requerimientos, el uso de control de versiones, y la implementación de pruebas automatizadas. En Axel Cruz Space, publicamos artículos sobre cómo aplicar estas prácticas en proyectos reales.'
    }
]

const panels = ref([]);

onMounted(() => {
    panels.value = stepsItems.map((_, index) => index); // Inicializar todos los panels abiertos solo en el cliente
});

</script>

<style scoped>
.custom-sizing{
    width: 90%;
    margin: 0 auto;

  @media only screen and (min-width: 960px) {
    width: 75%;
  }
}
</style>