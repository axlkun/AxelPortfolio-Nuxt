<template>
    <v-sheet>
        <homeSection></homeSection>
        <aboutMeSection></aboutMeSection>
        <servicesSection></servicesSection>
        <workSection v-if="blogEntry && blogEntry.length > 0"></workSection>
        <blogSection v-if="blogEntry && blogEntry.length > 0" :blogEntry="blogEntry"></blogSection>
        <contactSection></contactSection>
    </v-sheet>
</template>

<script setup>
import homeSection from '../components/HomeSection.vue';
import aboutMeSection from '../components/AboutMeSection.vue';
import servicesSection from '../components/ServicesSection.vue';
import workSection from '../components/WorkSection.vue';
import blogSection from '../components/BlogSection.vue';
import contactSection from '../components/ContactSection.vue';

const props = defineProps(['blogEntry']);

useSeoMeta({

robots: 'index, follow',

title: 'Axel Cruz | Fullstack Developer',
author: 'Axel Cruz',
description: 'Hola! soy Axel Cruz, Ingeniero en Sistemas Computacionales y Programador en México, apasionado por el desarrollo de software de alto performance y excelente experiencia de usuario.',
keywords: 'programación, fullstack developer, axel cruz, php, laravel, nuxt, vue, vuetify, mysql, sqlserver, startp, sideproject, solopreneur',

ogTitle: 'Axel Cruz | Fullstack Developer',
ogDescription: 'Hola! soy Axel Cruz, Ingeniero en Sistemas Computacionales y Programador en México, apasionado por el desarrollo de software de alto performance y excelente experiencia de usuario.',
ogImage: 'https://www.axelcruz.space/og-image.png',
ogUrl: 'https://www.axelcruz.space/',
ogType: 'website',

twitterCreator: '@Axlkun',
twitterImage: 'https://www.axelcruz.space/og-image.png',
twitterCard: 'summary_large_image',
twitterTitle: 'Axel Cruz | Fullstack Developer',
twitterDescription: 'Hola! soy Axel Cruz, Ingeniero en Sistemas Computacionales y Programador en México, apasionado por el desarrollo de software de alto performance y excelente experiencia de usuario.'
})

</script>

<style scoped></style>