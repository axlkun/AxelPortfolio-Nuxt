<template>
  <v-footer class="text-center d-flex flex-column" color="#0801ff">

    <div class="d-flex flex-sm-row flex-column justify-space-between footer-section">

      <div class="section">
        <p>Navegación</p>

        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/blog">Articulos</a></li>
          <li><a href="/acerca-de">Acerca de</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </div>

      <!-- <div class="section">
        <p>Últimos artículos</p>

        <ul>
          <li v-for="article in blogEntry"><a :href="'/blog/' + article.slug">{{ article.title }}</a></li>
        </ul>
      </div> -->

      <div class="section">
        <p>Legal</p>

        <ul>
          <li><a href="/aviso-legal">Aviso Legal</a></li>
          <li><a href="/politica-privacidad">Política de Privacidad</a></li>
          <li><a href="/politica-cookies">Política de Cookies</a></li>
        </ul>
      </div>

      <div class="section">
        <p>Tienes preguntas?</p>

        <v-btn variant="elevated"
          href="mailto:axel.17cruz@gmail.com" class="ma-5" color="#f5f1f1">
          Contacto
          <svg-icon type="mdi" :path="mdiEmailArrowRightOutline"></svg-icon>
        </v-btn>
      </div>

    </div>

    <div class="d-flex flex-row justify-center w-100">
      <p class="ma-1">
        {{ new Date().getFullYear() }} — Unfollowers
        <a class="reset-style text-white" href="https://www.instagram.com/axlkun/" target="_blank">
          By <strong>@axlkun</strong>&#129489;
        </a>
      </p>

    </div>

  </v-footer>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import {  mdiEmailArrowRightOutline } from '@mdi/js';
</script>

<style scoped>
.footer-section {
  width: 120rem;
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
  border-bottom: 1px solid #f5f1f1;
  font-size: 15px
}

.footer-section {
  line-height: 2.2;
}

.footer-section li:hover {
  color: #f5f1f1;
  cursor: pointer;
}

.footer-section p {
  font-weight: 600;
}

.section a {
  color: white;

  &:hover {
    color: #f5f1f1;
  }
}
</style>