<template>
    <v-parallax src="/assets/contacto-bg.webp" height="400" color="grey" class="mb-10 mt-10">
        <div class="d-flex flex-column fill-height justify-center align-center text-white text-center">
            <h2 class="text-h4 font-weight-thin mb-4">
                Contacto
            </h2>
            <h4 class="subheading">
                ¿Tienes alguna pregunta, inquietud o simplemente
                quieres decir hola? No dudes en ponerte en contacto.
            </h4>
            <v-btn variant="elevated" href="mailto:axel.17cruz@gmail.com"
                class="ma-5" color="#f5f1f1">
                Escribir un correo
                <svg-icon type="mdi" :path="mdiEmailArrowRightOutline"></svg-icon>
            </v-btn>
        </div>
    </v-parallax>
</template>
    
<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import {  mdiEmailArrowRightOutline } from '@mdi/js';
</script>
    
<style scoped>

.custom-sheet-size {
    /* adapta la sección de contacto*/
    /* vista movil */
    width: 100%;
    height: auto;

    @media only screen and (min-width: 960px) {
        width: 40%;
    }
}


</style>