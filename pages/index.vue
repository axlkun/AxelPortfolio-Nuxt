<template>

    <div>
        <myBlogHeader></myBlogHeader>

        <div class="main-container">

            <myHeroTitle></myHeroTitle>

            <myHeroArticles></myHeroArticles>

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
import myCategories from '../components/blog/Categories.vue';
import ProgramacionSection from '../components/blog/ProgramacionSection.vue';
import IngenieriaSection from '../components/blog/IngenieriaSection.vue';
import StartupSection from '../components/blog/StartupSection.vue';
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


</style>
