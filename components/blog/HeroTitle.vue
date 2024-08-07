<template>
  <v-container class="mt-5 mr-0 ml-0">

    <v-row class="align-md-center w-100">
      
      <v-col cols="12" md="6">
        <h1 class="text-h4 text-md-h3 font-weight-bold">
          Todo sobre programación e Ingeniería de Software
        </h1>
      </v-col>

      <v-col cols="12" md="6">
        <div>
          <p class="text-h6 font-weight-bold text-md-h5 mb-2">Explora por:</p>
        </div>
        <div class="d-flex ga-3 flex-wrap">
          <v-chip prepend-icon="mdi-code-braces" href="/programacion" size="large" color="#0801ff">
            Programación
          </v-chip>
          <v-chip prepend-icon="mdi-brightness-5" href="/ingenieria-de-software" size="large" color="#0801ff">
            Ingeniería
          </v-chip>
          <v-chip prepend-icon="mdi-cash-multiple" href="/startups-sideprojects" size="large" color="#0801ff">
            Startups
          </v-chip>
        </div>
      </v-col>

    </v-row>

  </v-container>
</template>