<template>
  <v-container class="mt-5 mr-0 ml-0">

    <v-row class="align-md-center w-100">
      
      <v-col cols="12" md="6">
        <h1 class="text-primary-color font-weight-bold mb-1">Axel Cruz Space - Blog de Programación</h1>
        <p class="text-h4 text-md-h3 font-weight-bold">
          Todo sobre programación e Ingeniería de Software
        </p>
      </v-col>

      <v-col cols="12" md="6">
        <div>
          <p class="text-h6 font-weight-bold text-md-h5 mb-2">Explora por:</p>
        </div>
        <div class="d-flex ga-3 flex-wrap">
          <v-chip href="/programacion" size="large" color="#0801ff">
            <svg-icon type="mdi" :path="mdiCodeBraces"></svg-icon>Programación
          </v-chip>
          <v-chip href="/ingenieria-de-software" size="large" color="#0801ff">
            <svg-icon type="mdi" :path="mdiBrightness5"></svg-icon>Ingeniería
          </v-chip>
          <v-chip href="/startups-sideprojects" size="large" color="#0801ff">
            <svg-icon type="mdi" :path="mdiCashMultiple"></svg-icon>Startups
          </v-chip>
        </div>
      </v-col>

    </v-row>

  </v-container>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCodeBraces, mdiBrightness5, mdiCashMultiple  } from '@mdi/js';

</script>