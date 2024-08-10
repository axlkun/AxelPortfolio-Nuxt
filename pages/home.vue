<template>
    <div>
        <myHeader></myHeader>
        <homeSection></homeSection>
        <aboutMeSection></aboutMeSection>
        <servicesSection></servicesSection>
        <workSection></workSection>
        <blogSection></blogSection>
        <contactSection></contactSection>
        <myFooter></myFooter>
    </div>
</template>

<script setup>
import myHeader from '../components/Header.vue';
import myFooter from '../components/Footer.vue';
import homeSection from '../components/HomeSection.vue';
import aboutMeSection from '../components/AboutMeSection.vue';
import servicesSection from '../components/ServicesSection.vue';
import workSection from '../components/WorkSection.vue';
import blogSection from '../components/BlogSection.vue';
import contactSection from '../components/ContactSection.vue';

const props = defineProps(['blogEntry']);

useSeoMeta({

robots: 'index, follow',

title: 'Axel Cruz | Full Stack Developer',
author: 'Axel Cruz',
description: 'Hola! soy Axel Cruz, Ingeniero en Sistemas Computacionales y Programador en México, apasionado por el desarrollo de software de alto performance y excelente experiencia de usuario.',
keywords: 'programación, fullstack developer, axel cruz, php, laravel, nuxt, vue, vuetify, mysql, sqlserver, startp, sideproject, solopreneur',

ogTitle: 'Axel Cruz | Full Stack Developer',
ogDescription: 'Hola! soy Axel Cruz, Ingeniero en Sistemas Computacionales y Programador en México, apasionado por el desarrollo de software de alto performance y excelente experiencia de usuario.',
ogImage: 'https://www.axelcruz.space/og-image.png',
ogUrl: 'https://www.axelcruz.space/home',
ogType: 'website',

twitterCreator: '@Axlkun',
twitterImage: 'https://www.axelcruz.space/og-image.png',
twitterCard: 'summary_large_image',
twitterTitle: 'Axel Cruz | Full Stack Developer',
twitterDescription: 'Hola! soy Axel Cruz, Ingeniero en Sistemas Computacionales y Programador en México, apasionado por el desarrollo de software de alto performance y excelente experiencia de usuario.'
})

</script>

<style scoped></style>