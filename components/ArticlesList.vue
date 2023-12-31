<template>
    <v-sheet class="articles">
        <a v-for="article in blogEntry" :href="'/blog/' + article.slug">
        <v-card  class="article-entry" :elevated="0"
            variant="text">
            <v-img :src="`${dominio}${article.imageUrl}`" cover :aspect-ratio="16 / 9">
            </v-img>

            <v-sheet class="img-container">
                <v-img class="img" :src="imgBlog"></v-img>
                <p>{{ article.created_date }}</p>
            </v-sheet>

            <v-sheet>
                <v-sheet class="article-title">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.summary }}</p>
                </v-sheet>

                <v-card-text class="d-flex flex-wrap pa-0">
                    <v-chip v-for="category in article.categories" class="mr-2 mb-2">
                        {{ category.name }}
                    </v-chip>
                </v-card-text>
            </v-sheet>

        </v-card>
    </a>
    </v-sheet>
</template>

<script>
import imgBlog from '../assets/logo-axel.svg';
import api from '../api';

export default {

    name: 'blogSection',

    props: ['blogEntry'],

    data: () => ({
        imgBlog,
        dominio: api.defaults.baseURL
    })

}
</script>

<style scoped>
.articles {
    /*background-color: var(--primary-background);*/
    padding: 30px 0;
    width: 90%;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    background: transparent;
    grid-template-columns: 1fr;
    /* Establece una columna por defecto */

    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        /* Cambia a dos columnas en pantallas más grandes */
        grid-row-gap: 2rem;
        grid-column-gap: 4rem;
    }
}

.article-entry {
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background: transparent;
    line-height: 1.2;
    transition: transform 0.3s, filter 0.3s;
    width: 100%;

    @media only screen and (min-width: 768px) {
        padding: 15px;
    }

    &:hover {
        transform: scale(1.01);
        cursor: pointer;
    }
}

.article-entry * {
    background: inherit;
}

.img-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.img {
    max-width: 50px;
}

.article-title {
    margin-bottom: 15px;
}

.article-title h3 {
    font-size: 16px;
    text-align: start;
    margin-bottom: 15px;
    font-weight: bold;
    color: var(--primary-blue);

    @media only screen and (min-width: 1024px) {
        font-size: 20px;
    }
}

.article-entry p {
    font-size: 16px;

    @media only screen and (min-width: 1024px) {
        font-size: 20px;
    }
}

.article-title p {
    color: grey;
}

.img-container p {
    font-size: 14px;

    @media only screen and (min-width: 1024px) {
        font-size: 16px;
    }
}
</style>