<template>
   
    <div class="d-flex flex-column flex-md-row mt-10">
        <div class="flex-grow-1">
            <ArticleCard imgBlog="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" date="18 Junio 2024"
                title="Toppsr western road trips" description="1,000 miles of wonder 1,000 miles of wonder"
                category="Programación" />
        </div>

        <div class="flex-grow-1">

            <ArticleCardSecondary imgBlog="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" date="18 Junio 2024"
                title="Toppsr western road trips" description="1,000 miles of wonder 1,000 miles of wonder"
                category="Programación" />

            <ArticleCardSecondary imgBlog="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" date="18 Junio 2024"
                title="Toppsr western road trips" description="1,000 miles of wonder 1,000 miles of wonder"
                category="Programación" />

        </div>
    </div>
</template>

<script setup>
import ArticleCard from './ArticleCard.vue';
import ArticleCardSecondary from './ArticleCardSecondary.vue';
</script>