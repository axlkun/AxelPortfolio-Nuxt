<template>
    <!-- Titulo -->
    <div class="mt-10">
        <div class="mb-10 text-center">
            <svg-icon type="mdi" :path="mdiTagOutline" style="color: #0801ff"></svg-icon>
            <h2 class="text-h4 text-md-h5 font-weight-bold mb-3 text-primary-color">Categorias</h2>
            <p class="text-h5 font-weight-bold text-md-h4 mb-3">Programación, Ingeniería de Software y Startups</p>
            <p>Explora artículos sobre Programación, Ingeniería de Software y Startups - SideProjects.  <br> Encuentra guías, tutoriales y estrategias para mejorar como programador y estar al día con las últimas tendencias.</p>
            <v-btn variant="tonal" class="mt-5" color="#0801ff" href="/blog">
                Ver todos los articulos
                <svg-icon type="mdi" :path="mdiChevronRight" color="#0801ff"></svg-icon>
            </v-btn>
        </div>

        <div class="d-flex flex-column flex-md-row justify-space-between align-md-center ga-6">
            <v-card width="100%" href="/programacion">
                <v-img src="/assets/categoria-programacion.jpg" class="align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" cover>
                    <v-card-title class="text-white">Programación</v-card-title>
                </v-img>

            </v-card>
            <v-card width="100%" href="/ingenieria-de-software">
                <v-img src="/assets/categoria-isc.jpg" class="align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" cover>
                    <v-card-title class="text-white">Ingeniería de Software</v-card-title>
                </v-img>

            </v-card>
            <v-card width="100%" href="/startups-sideprojects">
                <v-img src="/assets/categoria-startups.jpg" class="align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" cover>
                    <v-card-title class="text-white">Startups y SideProjects</v-card-title>
                </v-img>

            </v-card>
        </div>
    </div>

</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiTagOutline, mdiChevronRight  } from '@mdi/js';

</script>