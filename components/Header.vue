<template>
    <header class="header" :class="{ 'stick': menuOpen }">
        <nav>

            <div class="container-bar">
                <a class="logo" href="/home">
                    <div>
                        <img :src="logo" alt="Icono" />
                    </div>
                    <div>
                        <p><span>Axel</span>Cruz</p>
                    </div>

                </a>

                <button class="hide-icon" @click="toggleMenu" aria-label="Toggle Menu">
                    <svg-icon type="mdi" :path="menuOpen ? mdiCloseBox : mdiMenu" ></svg-icon>
                </button>

            </div>

            <div class="container-menu" :class="{ 'hide': !menuOpen }">
                <ul class="menu desktop-menu">
                    <li><a href="/home">Inicio</a></li>
                    <li><a @click="redirectSection('aboutme')">Sobre mi</a></li>
                    <li><a @click="redirectSection('services')">Servicios</a></li>
                    <li><a href="/proyectos">Proyectos</a></li>
                    <li><a href="/blog?ref=home">Blog</a></li>
                    <li><a @click="redirectSection('contact')" class="button">Contacto</a></li>
                </ul>

            </div>

        </nav>
    </header>
</template>
  
<script setup>
import { ref, computed } from 'vue';
import { scrollToSection } from '../utils/utils';
import logo from '../assets/logo.svg';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCloseBox, mdiMenu  } from '@mdi/js';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;

  if (!menuOpen.value) {
    window.scrollTo(0, 0);
  }
};

const redirectSection = (sectionName) => {
  const windowWidth = window.innerWidth;

  if (windowWidth <= 1024) {
    menuOpen.value = !menuOpen.value;
  }

  scrollToSection(sectionName);
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
    width: 90%;
    margin: 0 auto;
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

.menu a {
    font-size: 43px;
    line-height: 1.2;
    cursor: pointer;

    @media only screen and (min-width: 1024px) {
        font-size: 18px;
    }

    &:hover {
        color: var(--primary-blue);
    }
}

a:visited {
    color: black;
  }

ul.menu li a.button {
    background-color: var(--primary-blue);
    color: white;
    padding: 2px 8px;
    border-radius: 8px;
}

ul.menu li a.button:hover {
    opacity: 0.9;
    text-decoration: none;
    color: var(--primary-background);
}

/* */
.hide {
    display: none;

    @media only screen and (min-width: 1024px) {
        display: block;
    }
}
</style>