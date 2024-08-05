<template>
    <div class="d-flex flex-column flex-md-row justify-space-between align-md-center ga-6 mt-15">
        <div>
            <h2 class="text-h5 font-weight-bold text-md-h4 mb-2">
                Programación
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
    <div class="programacion-articles-container">
        <ArticleCardSecondary imgBlog="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" date="18 Junio 2024"
        title="Toppsr western road trips" description="1,000 miles of wonder 1,000 miles of wonder"
        category="Programación" />

        <ArticleCardSecondary imgBlog="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" date="18 Junio 2024"
        title="Toppsr western road trips" description="1,000 miles of wonder 1,000 miles of wonder"
        category="Programación" />

        <ArticleCardSecondary imgBlog="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" date="18 Junio 2024"
        title="Toppsr western road trips" description="1,000 miles of wonder 1,000 miles of wonder"
        category="Programación" />

        <ArticleCardSecondary imgBlog="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" date="18 Junio 2024"
        title="Toppsr western road trips" description="1,000 miles of wonder 1,000 miles of wonder"
        category="Programación" />
    </div>
</template>

<script setup>
import ArticleCardSecondary from './ArticleCardSecondary.vue';
</script>

<style scoped>
.programacion-articles-container {

    margin-top: 30px;
    display: grid;
    gap: 2rem;
    background: transparent;
    grid-template-columns: 1fr;

    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 4rem;
        grid-column-gap: 2rem;
    }
}

</style>