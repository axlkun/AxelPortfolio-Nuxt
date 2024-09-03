<template>
    <header class="header" :class="{ 'stick': menuOpen }">
        <nav>

            <div class="container-bar">
                <a class="logo" href="/">
                    <div>
                        <img :src="logo" alt="Icono" />
                    </div>
                    <div>
                        <p><span>Axel</span>Cruz</p>
                    </div>
                </a>

                <button class="hide-icon" @click="toggleMenu" aria-label="Toggle Menu">
                    <svg-icon type="mdi" :path="menuOpen ? mdiCloseBox : mdiMenu"></svg-icon>
                </button>

            </div>

            <div class="container-menu" :class="{ 'hide': !menuOpen }">
                <ul class="menu desktop-menu">
                    <v-btn color="black" variant="text" href="/">
                        Inicio
                    </v-btn>
                    
                    <v-btn color="black" variant="text" href="/acerca-de">
                        Acerca de
                    </v-btn>

                    <v-btn color="black" variant="text" href="/blog">
                        Blog
                    </v-btn>

                    
                        <v-menu>
                            <template v-slot:activator="{ props }">
                                <v-btn color="black" variant="text" v-bind="props">
                                    Categorias
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item>
                                    <v-list-item-title class="mt-2">
                                        <li><a href="/programacion">Programación</a></li>
                                    </v-list-item-title>
                                    <v-list-item-title class="mt-2">
                                        <li><a href="/ingenieria-de-software">Ingeniería de Software</a></li>
                                    </v-list-item-title>
                                    <v-list-item-title class="mt-2">
                                        <li><a href="/startups-sideprojects">Startups y Sideprojects</a></li>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    

                    
                        <v-menu>
                            <template v-slot:activator="{ props }">
                                <v-btn color="black" variant="text" v-bind="props">
                                    Legal
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item>
                                    <v-list-item-title class="mt-2">
                                        <li><a href="/aviso-legal">Aviso Legal</a></li>
                                    </v-list-item-title>
                                    <v-list-item-title class="mt-2">
                                        <li><a href="/politica-privacidad">Política Privacidad</a></li>
                                    </v-list-item-title>
                                    <v-list-item-title class="mt-2">
                                        <li><a href="/politica-cookies">Política Cookies</a></li>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    
                        <v-btn color="#0801ff" size="small" href="/contacto">
                            Contacto
                        </v-btn>
                </ul>

            </div>

        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import logo from '../../assets/logo.svg';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCloseBox, mdiMenu } from '@mdi/js';

const menuOpen = ref(false);

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;

    if (!menuOpen.value) {
        window.scrollTo(0, 0);
    }
};

</script>

<style scoped>
.header {
    width: 100%;
    max-height: 100vh;
    background-color: var(--primary-background);
}

.stick {
    position: fixed;
    z-index: 100;
    height: 100vh;
}

nav {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 120rem;
    max-width: 90%;
    padding: 10px 0;

    @media only screen and (min-width: 1024px) {

        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}

.logo {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.logo img {
    width: 48px;
    height: 48px;
}

.logo p {
    font-size: 18px;
    font-weight: bold;
    color: var(--primary-blue);
}

.logo p span {
    color: var(--primary-black);
}

.hide-icon {
    @media only screen and (min-width: 1024px) {
        display: none;
    }
}

.container-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.container-menu {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 90%;

    @media only screen and (min-width: 1024px) {
        height: auto;
    }
}

.menu {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        height: auto;
        gap: 15px;
    }
}

a:visited {
    color: black;
  }

.hide {
    display: none;

    @media only screen and (min-width: 1024px) {
        display: block;
    }
}
</style>