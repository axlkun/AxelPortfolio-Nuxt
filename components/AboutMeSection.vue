<template>
    <v-sheet class="aboutme" id="aboutme">
        <v-sheet class="description">

            <v-sheet class="container-aboutme-title">
                <h2>Sobre mi</h2>
            </v-sheet>

            <v-sheet class="container-aboutme-description">
                <p>
                    Estoy en el mundo de la programación porque me fascina el proceso de materializar todas mis ideas
                    mediante código y mucha creatividad.
                </p>

                <p>
                    Me encargo de realizar proyectos con buenas prácticas para construir productos con un alto performance
                    acompañado de un excelente diseño de interfaz de usuario.
                </p>

                <p>
                    He desarrollado soluciones para empresas y dependencias de gobierno, que van desde sitios web
                    informativos hasta aplicaciones mas complejas que ayudan a agilizar procesos.
                </p>
            </v-sheet>

            <v-sheet class="img-container">
                <img class="myImg" :src="imgAboutMe" alt="Imagen About Me" />
            </v-sheet>

        </v-sheet>
        <v-sheet class="technologies">

            <v-sheet class="container-tecnologies-title">
                <h3>He trabajado con estas tecnologías recientemente</h3>
            </v-sheet>

            <v-sheet class="container-tecnologies">
                <v-sheet v-for="item in tecnologiesContent" :key="item.id" class="tecnologie">
                    <v-icon class="custom-size">
                        <img :src="item.icon" :alt="item.alt" width="59" height="50" class="w-100" />
                    </v-icon>
                    <p>{{ item.name }}</p>
                </v-sheet>
            </v-sheet>


        </v-sheet>
    </v-sheet>
</template>

<script>

import imgAboutMe from '../assets/img-home-light.svg';

import iconLaravel from '../assets/laravel-icon.svg';
import iconVue from '../assets/vue-icon.svg';
import iconVuetify from '../assets/vuetify-icon.svg';
import iconPhp from '../assets/php-icon.svg';
import iconMySQL from '../assets/mysql-icon.svg';
import iconSqlServer from '../assets/sqlserver-icon.svg';
import iconBigQuery from '../assets/bigquery-icon.svg';
import iconStorage from '../assets/storage-icon.svg';
import iconPython from '../assets/python-icon.svg';
import iconJs from '../assets/js-icon.svg';
import iconFigma from '../assets/figma-icon.svg';
import iconGit from '../assets/git-icon.svg';
import iconGithub from '../assets/github-icon.svg';
import iconGitlab from '../assets/gitlab-icon.svg';
import iconRailway from '../assets/railway-icon.svg';
import iconNetlify from '../assets/netlify-icon.svg';
import iconNuxt from '../assets/nuxt.svg';

export default {

    name: 'aboutMeSection',


    data: () => ({
        imgAboutMe,
        iconNuxt,
        iconLaravel,
        iconVue,
        iconVuetify,
        iconPhp,
        iconMySQL,
        iconSqlServer,
        iconBigQuery,
        iconStorage,
        iconPython,
        iconJs,
        iconFigma,
        iconGit,
        iconGithub,
        iconGitlab,
        iconRailway,
        iconNetlify,

        tecnologiesContent: [
            {
                id: 1,
                icon: iconLaravel,
                name: "Laravel",
                alt: "Icono Laravel SVG",
            },
            {
                id: 2,
                icon: iconPhp,
                name: "PHP",
                alt: "Icono PHP SVG",
            },
            {
                id: 3,
                icon: iconVue,
                name: "Vue.js",
                alt: "Icono Vue.js SVG",
            },
            {
                id: 4,
                icon: iconNuxt,
                name: "Nuxt",
                alt: "Icono Nuxt SVG",
            },
            {
                id: 5,
                icon: iconVuetify,
                name: "Vuetify",
                alt: "Icono Vuetify SVG",
            },
            {
                id: 6,
                icon: iconMySQL,
                name: "MySQL",
                alt: "Icono MySQL SVG",
            },
            {
                id: 7,
                icon: iconSqlServer,
                name: "SQLServer",
                alt: "Icono SQLServer SVG",
            },
            {
                id: 8,
                icon: iconBigQuery,
                name: "BigQuery",
                alt: "Icono BigQuery SVG",
            },
            {
                id: 9,
                icon: iconStorage,
                name: "CloudStorage",
                alt: "Icono Cloud Storage SVG",
            },
            {
                id: 10,
                icon: iconPython,
                name: "Python",
                alt: "Icono Python SVG",
            },
            {
                id: 11,
                icon: iconJs,
                name: "JavaScript",
                alt: "Icono JavaScript SVG",
            },
            {
                id: 12,
                icon: iconFigma,
                name: "Figma",
                alt: "Icono Figma SVG",
            },
            {
                id: 13,
                icon: iconGit,
                name: "Git",
                alt: "Icono Git SVG",
            },
            {
                id: 14,
                icon: iconGithub,
                name: "Github",
                alt: "Icono Github SVG",
            },
            {
                id: 15,
                icon: iconGitlab,
                name: "GitLab",
                alt: "Icono GitLab SVG",
            },
        ]


    }),

}
</script>

<style scoped>
.aboutme {
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
    }
}

.description,
.technologies {
    flex-grow: 1;
    flex-basis: 50%;
}

.description {
    background-color: var(--primary-blue);
    padding: 15px 0 30px 0;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
        padding: 0;
    }
}

.container-aboutme-title {
    font-size: 35px;
    font-weight: bold;
    min-width: 90%;
    margin: 0 auto;
    background: transparent;
    color: var(--primary-background);
    text-align: center;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;
        text-align: start;
        min-width: 80%;
    }
}

.container-aboutme-description {
    background: transparent;
    color: var(--primary-background);
    width: 90%;
    margin: 15px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 16px;
    line-height: 1.5;

    @media only screen and (min-width: 1024px) {
        width: 80%;
        font-size: 20px;
    }
}

.technologies {
    background-color: var(--primary-background);
    padding: 15px 0;

    @media only screen and (min-width: 768px) {
        padding: 0;
    }
}

.container-tecnologies-title {
    font-size: 25px;
    max-width: 90%;
    margin: 0 auto;
    margin-bottom: 15px;
    background: transparent;
    color: var(--primary-blue);
    text-align: center;
    line-height: 1.1;

    @media only screen and (min-width: 1024px) {
        font-size: 35px;
        text-align: start;
        max-width: 80%;
    }
}

.container-tecnologies {
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    background: transparent;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    max-width: 90%;

    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-row-gap: 2.5rem;
        grid-column-gap: 1rem;
    }
}

.tecnologie {
    padding: 1rem;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.tecnologie p {
    color: var(--primary-black);
    font-size: 16px;

    @media only screen and (min-width: 768px) {
        font-size: 20px;
    }
}

.custom-size {
    width: 40px;
    height: 40px;

    @media only screen and (min-width: 768px) {
        width: 60px;
        height: 60px;
    }
}

.img-container {

    background: transparent;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 15px;
}

.img-container .myImg {

    width: 100%;
    height: 100%;

    @media only screen and (min-width: 1024px) {
        min-width: 400px;
    }
}
</style>