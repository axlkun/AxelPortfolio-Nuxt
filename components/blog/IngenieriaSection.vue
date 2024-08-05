<template>
    <div class="d-flex flex-column flex-md-row justify-space-between align-md-center ga-6 mt-15">
        <div>
            <h2 class="text-h5 font-weight-bold text-md-h4 mb-2">
                Ingeniería de Software
            </h2>
            <p>Artículos recientes</p>
        </div>
        <div>
            <v-btn variant="tonal" class="mt-5" color="#0801ff">
                Ver todos los articulos
                <v-icon right>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
    </div>
    <div class="d-flex flex-column flex-md-row justify-space-between ga-6 mt-10">
        <ArticleCard imgBlog="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" date="18 Junio 2024"
        title="Toppsr western road trips" description="1,000 miles of wonder 1,000 miles of wonder"
        category="Programación" />
        
        <ArticleCard imgBlog="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" date="18 Junio 2024"
        title="Toppsr western road trips" description="1,000 miles of wonder 1,000 miles of wonder"
        category="Programación" />

        <ArticleCard imgBlog="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" date="18 Junio 2024"
        title="Toppsr western road trips" description="1,000 miles of wonder 1,000 miles of wonder"
        category="Programación" />
    </div>
</template>

<script setup>
import ArticleCard from './ArticleCard.vue';
</script>