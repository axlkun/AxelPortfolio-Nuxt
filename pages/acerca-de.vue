<template>
    <myBlogHeader></myBlogHeader>

    <div class="acerca-de-container">
        <v-sheet class="heading">
            <p>Acerca de</p>
            <h1>AxelCruz.space</h1>
            <p>AxelCruz.space ayuda a los desarrolladores y estudiantes de programación a ser mejores. Ofrecemos guías y fragmentos de código para diversos lenguajes de programación, además de artículos útiles para estudiantes de Ingeniería y consejos sobre SideProjects y Startups.</p>
        </v-sheet>

        <v-sheet class="mt-10">
            <v-parallax
            height="500"
            src="/assets/acerca-de.webp"
          ></v-parallax>
        </v-sheet>

        <div class="acerca-de-texto">
            <h2 class="text-h5 font-weight-black">Lo que publicamos</h2>
            <p>AxelCruz.space es un blog que ofrece artículos relacionados a la programación. Los cuales van desde guías para desarrolladores, ejemplos para estudiantes de Ingeniería de Software y experiencias para solopreneurs que se encuentran desarrollando SideProjects</p>

            <p>Puedes encontrar artículos sobre las siguientes tecnologías principalmente:</p>

            <ul class="pl-5">
                <li><h3>PHP</h3></li>
                <li><h3>Laravel</h3></li>
                <li><h3>Java</h3></li>
                <li><h3>Spring Boot</h3></li>
                <li><h3>Vue.js</h3></li>
                <li><h3>Nuxt</h3></li>
                <li><h3>Vuetify</h3></li>
                <li><h3>MySQL</h3></li>
                <li><h3>PostgreSQL</h3></li>
            </ul>
        </div>

    </div>

    <myBlogFooter></myBlogFooter>
</template>

<script setup>
import myBlogHeader from '../components/blog/BlogHeader.vue';
import myBlogFooter from '../components/blog/BlogFooter.vue';

useSeoMeta({
  robots: 'index, follow',
  title: 'Axel Cruz | Acerca de',
  author: 'Axel Cruz',
  description: 'Hola! bienvenido a AxelCruz.space, un blog en el que puedes aprender sobre programación, encontrar guías sobre la Ingeniería de Software y experiencias sobre el desarrollo de SideProjects.',
  keywords: 'programación, fullstack developer, axel cruz, php, laravel, nuxt, vue, vuetify, mysql, sqlserver, startp, sideproject, solopreneur',
  
  ogTitle: 'Axel Cruz | Acerca de',
  ogDescription: 'Hola! bienvenido a AxelCruz.space, un blog en el que puedes aprender sobre programación, encontrar guías sobre la Ingeniería de Software y experiencias sobre el desarrollo de SideProjects.',
  ogImage: 'https://www.axelcruz.space/og-image.png',
  ogUrl: 'https://www.axelcruz.space/acerca-de',
  ogType: 'website',
  ogLocale: 'es_ES',

  twitterCreator: '@Axlkun',
  twitterImage: 'https://www.axelcruz.space/og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Axel Cruz | Acerca de',
  twitterDescription: 'Hola! bienvenido a AxelCruz.space, un blog en el que puedes aprender sobre programación, encontrar guías sobre la Ingeniería de Software y experiencias sobre el desarrollo de SideProjects.',
  
});

</script>

<style scoped>
.acerca-de-container{
     
    width: 120rem;
    max-width: 90%;
    margin: 15px auto;
    background-color: var(--primary-background);

}

.heading {
    background: transparent;
    max-width: 90%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-top: 30px;

    @media only screen and (min-width: 1024px) {
        padding-top: 60px;
        max-width: 50%;
    }
}

.heading p {
    font-size: 14px;
    line-height: 1.5;
    color: var(--secondary-blue);

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
}

.heading p:first-of-type {
    font-size: 14px;
    line-height: 1.5;
    color: var(--secondary-gold);
    font-weight: bold;

    @media only screen and (min-width: 1024px) {

        font-size: 16px;
    }
}

.heading h1 {
    font-size: 30px;
    font-weight: bold;
    color: var(--secondary-blue);
    line-height: 1.2;

    @media only screen and (min-width: 1024px) {
        font-size: 45px;
    }
}

.acerca-de-texto{
    background: transparent;
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 30px 0;

    @media only screen and (min-width: 1024px) {
        padding-top: 60px;
        max-width: 50%;
    }
}

ul,
ol {
    list-style: disc; 
}
</style>