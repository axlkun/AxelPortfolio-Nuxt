<template>
    <v-sheet class="works" id="projects">
        <v-sheet class="title-container">
            <h2>Proyectos</h2>
        </v-sheet>

        <projectList :projectsList="projects"></projectList>

        <v-sheet class="button-container">
            <v-btn variant="elevated" class="mt-5" color="#0801ff" href="/proyectos">
                Ver todos los articulos
                <svg-icon type="mdi" :path="mdiChevronRight"></svg-icon>
            </v-btn>
        </v-sheet>
    </v-sheet>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../api';
import ProjectList from './ProjectsList.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiChevronRight  } from '@mdi/js';

// Define la referencia para los proyectos
const projects = ref([]);

// Función para obtener los proyectos
const getProjects = async () => {
  try {
    const response = await api.get('/api/projects?limit=4');
    projects.value = response.data.data;
  } catch (error) {
    console.error('Error al hacer la solicitud GET:', error);
  }
};

// Llama a getProjects cuando el componente se monta
onMounted(() => {
  getProjects();
});
</script>

<style scoped>
.works {
    background-color: var(--primary-background);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title-container {
    font-size: 35px;
    width: 90%;
    margin: 0 auto;
    color: var(--primary-blue);
    background: transparent;
    font-weight: bold;
    text-align: center;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;
        text-align: start;
    }
}

.button-container {
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    background: transparent;

    @media only screen and (min-width: 1024px) {
        width: 90%;
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