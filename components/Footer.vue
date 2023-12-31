<template>
  <v-footer class="d-flex flex-column" color="#232325">

    <div class="d-flex flex-sm-row flex-column justify-space-between footer-section">

      <div class="section">
        <p>Navegación</p>

        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/#aboutme">Sobre mi</a></li>
          <li><a href="/#services">Servicios</a></li>
          <li><a href="/proyectos">Proyectos</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/#contact">Contacto</a></li>
        </ul>
      </div>

      <div class="section">
        <p>Últimos artículos</p>

        <ul>
          <!-- <li v-for="article in blogEntry"><a @click="redirectTo('articleDetail', { slug: article.slug })">{{article.title}}</a></li> -->
          <li v-for="article in blogEntry"><a :href="'/blog/' + article.slug">{{ article.title }}</a></li>
        </ul>
      </div>

      <div class="section">
        <p>Contacto</p>

        <ul>
          <li><a href="https://www.linkedin.com/in/axel-andres-cruz-cordova/" target="_blank">Linkdln</a></li>
          <li><a href="https://github.com/axlkun" target="_blank">GitHub</a></li>
          <li><a href="https://twitter.com/Axlkun" target="_blank">Twitter</a></li>
          <li><a href="https://www.instagram.com/axlkun" target="_blank">Instagram</a></li>
          <li><a href="mailto:axelcruz.dev@gmail.com">Email</a></li>
        </ul>
      </div>

    </div>

    <div class="d-flex flex-row justify-center pt-5 pb-5 w-100 section">
      <p class="ma-1">
        {{ new Date().getFullYear() }} — Todos los derechos reservados © Portafolio By
        <a href="https://www.instagram.com/axlkun/" target="_blank">
          <strong>@axlkun</strong>
        </a>

      </p>

    </div>

  </v-footer>
</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps(['blogEntry']);

</script>

<style scoped>
.footer-section {
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid var(--primary-background);

  @media only screen and (min-width: 1024px) {
    width: 90%;
  }
}

.section {
  margin-top: 15px;
}

.footer-section {
  line-height: 2;
}

.footer-section p {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-background);
}

ul,
ol {
  list-style: none;
}

.section a {
  color: var(--primary-background);

  &:hover {
    color: var(--primary-blue);
    cursor: pointer;
  }
}
</style>