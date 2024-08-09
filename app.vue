<template>
  <v-app id="app" class="general-bg">

      <NuxtPage />

      <ClientOnly fallback-tag="span" fallback="Loading comments...">

        <div class="text-center">
          <v-bottom-sheet v-model="sheet" v-if="!cookiesAccepted">
            <v-card class="text-center">
              <v-card-text>
                <div class="text-caption">
                  Utilizamos cookies para darte la mejor experiencia de usuario y entrega de publicidad. Al navegar por el sitio aceptas nuestra Política de Cookies. Puedes cambiar la configuración en tu navegador en cualquier momento.
                </div>
              </v-card-text>
              <v-card-actions class="mx-auto">
                <v-btn size="small" variant="text" color="#0801ff" href="/politica-cookies">
                  Quiero saber más
                </v-btn>
                <v-btn size="x-small" variant="elevated" color="#0801ff" @click="acceptCookies">
                  Aceptar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-bottom-sheet>
        </div>
      </ClientOnly>
   
  </v-app>
</template>

<script setup>
const sheet = ref(true);
const cookiesAccepted = ref(false);

const acceptCookies = () => {
  cookiesAccepted.value = true;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('cookiesAccepted', 'true');
  }
};

onMounted(() => {
  
  if (typeof localStorage !== 'undefined') {
    cookiesAccepted.value = localStorage.getItem('cookiesAccepted') === 'true';
    sheet.value = !cookiesAccepted.value;
  }
});


</script>

<style scoped>
.general-bg{
  background-color: var(--primary-background);
}
</style>
