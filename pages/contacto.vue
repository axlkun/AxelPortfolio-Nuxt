<template>

    <div>
        <myBlogHeader></myBlogHeader>

        <div class="main-container">

            <div class="title-container">
                <h1 class="text-center text-h3">¡Hola! ¿Hablamos?</h1>
                <p class="mt-5">AxelCruz.space es un blog sobre Programación, Ingeniería de software y Startups. Ofrecemos guías y fragmentos de código para diversos lenguajes de programación, además de artículos útiles para estudiantes de Ingeniería y consejos sobre SideProjects y Startups.</p>
            </div>

            <myContact></myContact>
            
        </div>

        <myBlogFooter></myBlogFooter>
    </div>
</template>

<script setup>

import myBlogHeader from '../components/blog/BlogHeader.vue';
import myContact from '../components/blog/Contact.vue';
import myBlogFooter from '../components/blog/BlogFooter.vue';

</script>

<style scoped>
.main-container {
    
    width: 120rem;
    max-width: 90%;
    margin: 15px auto;
    background-color: var(--primary-background);

}

.title-container {
    
    max-width: 90%;
    margin: 15px auto;
    background-color: var(--primary-background);
    line-height: 1.8;

    @media only screen and (min-width: 1024px) {

        max-width: 65%;
    }
}


</style>
