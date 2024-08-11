<template>
    <v-sheet class="blog" id="blog">

        <v-sheet class="description">

            <v-sheet class="container-aboutme-title">
                <h2>Blog</h2>
            </v-sheet>

            <v-sheet class="container-aboutme-description">
                <p>Explora una amplia variedad de temas informativos en este espacio donde encontrarás una diversidad de
                    tópicos que te mantendrán actualizado en temas de programación, tecnología, startups y más.</p>
            </v-sheet>

        </v-sheet>
       
        <articlesList :blogEntry="blogEntry" :home="true"></articlesList>

        <v-sheet class="button-container">
            <v-btn variant="elevated" class="mt-5" color="#0801ff" href="/blog?ref=home">
                Ver todos los articulos
                <svg-icon type="mdi" :path="mdiChevronRight"></svg-icon>
            </v-btn>
        </v-sheet>

    </v-sheet>
</template>

<script setup>
import articlesList from './ArticlesList.vue';
import { ref, onMounted } from 'vue';
import api from '../api';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiChevronRight  } from '@mdi/js';

// Define la referencia para los proyectos
const blogEntry = ref([]);

// Función para obtener los proyectos
const getArticles = async () => {
  try {
    const response = await api.get('/api/articles?limit=6');
    blogEntry.value = response.data.data;
  } catch (error) {
    console.error('Error al hacer la solicitud GET:', error);
  }
};

// Llama a getProjects cuando el componente se monta
onMounted(() => {
  getArticles();
});

</script>

<style scoped>
.blog {
    display: flex;
    flex-direction: column;
    background-color: var(--primary-background);
}

.description {
    background-color: var(--primary-blue);
    padding: 15px 0 30px 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 0 auto;

    @media only screen and (min-width: 1024px) {
        width: 90%;
        margin-top: 60px;
    }

}

.container-aboutme-title {
    font-size: 35px;
    font-weight: bold;
    width: 90%;
    margin: 0 auto;
    background: transparent;
    color: var(--primary-background);
    text-align: center;


    @media only screen and (min-width: 1024px) {
        font-size: 55px;
        text-align: start;
        width: 93%;
    }
}

.container-aboutme-description {
    background: transparent;
    color: var(--primary-background);
    width: 90%;
    margin: 15px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 16px;
    line-height: 1.2;

    @media only screen and (min-width: 1024px) {

        font-size: 18px;
        width: 93%;
    }
}

.button-container {
    margin: 0 auto;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    background: transparent;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: flex-end;
    }
}

.button {
    background-color: var(--primary-blue);
    color: white;
    padding: 10px 35px;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    width: 85%;

    &:hover {
        opacity: 0.9;
    }

    @media only screen and (min-width: 1024px) {
        width: auto;
    }
}
</style>