<template>

    <div>
        <myBlogHeader></myBlogHeader>

        <div class="main-container">

            <myHeroTitle></myHeroTitle>

            <myHeroArticles></myHeroArticles>

            <myAcercaDe></myAcercaDe>

            <myCategories></myCategories>

            <ProgramacionSection></ProgramacionSection>

            <IngenieriaSection></IngenieriaSection>

            <StartupSection></StartupSection>

            <myContact></myContact>
            
        </div>

        <myBlogFooter></myBlogFooter>
    </div>
</template>

<script setup>

import myBlogHeader from '../components/blog/BlogHeader.vue';
import myHeroTitle from '../components/blog/HeroTitle.vue';
import myHeroArticles from '../components/blog/HeroArticles.vue';
import myAcercaDe from '../components/blog/AcercaDe.vue';
import myCategories from '../components/blog/Categories.vue';
import ProgramacionSection from '../components/blog/ProgramacionSection.vue';
import IngenieriaSection from '../components/blog/IngenieriaSection.vue';
import StartupSection from '../components/blog/StartupSection.vue';
import myContact from '../components/blog/Contact.vue';
import myBlogFooter from '../components/blog/BlogFooter.vue';

useSeoMeta({

robots: 'index, follow',

title: 'AxelCruz Space | Blog para Programadores',
author: 'Axel Cruz',
description: 'Artículos sobre Programación, la carrera de Ingeniería de Software y desarrollo de SideProjects.',
keywords: 'programación, fullstack developer, Axel Cruz, php, laravel, nuxt, vue, vuetify, mysql, sqlserver, startp, sideproject, solopreneur',

ogTitle: 'AxelCruz Space AxelCruz Space | Blog para Programadores',
ogDescription: 'Artículos sobre Programación, la carrera de Ingeniería de Software y desarrollo de SideProjects.',
ogImage: 'https://www.axelcruz.space/og-image.png',
ogUrl: 'https://www.axelcruz.space/',
ogType: 'website',

twitterCreator: '@Axlkun',
twitterImage: 'https://www.axelcruz.space/og-image.png',
twitterCard: 'summary_large_image',
twitterTitle: 'AxelCruz Space',
twitterDescription: 'Artículos sobre Programación, la carrera de Ingeniería de Software y desarrollo de SideProjects.'
})

</script>

<style scoped>
.main-container {
    
    width: 120rem;
    max-width: 90%;
    margin: 15px auto;
    background-color: var(--primary-background);
}


</style>
