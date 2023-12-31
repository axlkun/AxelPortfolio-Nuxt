<template>
    <v-sheet class="home" id="home">

        <v-sheet class="home-container">
            <v-sheet class="hook-container">
                <v-sheet class="home-encabezado">

                    <v-sheet class="hook">
                        <p>Desarrollo productos de software <span>sólidos</span> y <span>escalables</span> con una
                            excepcional <span>experiencia de usuario</span> <img :src="imgHappyFace" width="45" height="45"
                                alt="Hayppy Face SVG" /></p>
                    </v-sheet>

                    <v-sheet class="home-description">
                        <h1>Ingeniero en Sistemas Computacionales ⋅ Programador</h1>
                    </v-sheet>

                </v-sheet>
                <v-sheet class="buttons-container">
                    <a class="button" href="mailto:axelcruz.dev@gmail.com">Contacto</a>
                    <a class="button" href="/Axel Andres Cruz Cordova - CV.pdf" target="_blank">Resume / CV</a>
                </v-sheet>
            </v-sheet>

            <v-sheet class="img-container">
                <img fetchpriority="high" :src="imgHome" alt="Imagen Home" />
            </v-sheet>
        </v-sheet>
    </v-sheet>
</template>

<script>
import imgHome from '../assets/img-home2.svg';
import imgHappyFace from '../assets/happyface.svg';

export default {

    name: 'homeSection',

    data: () => ({
        imgHome,
        imgHappyFace
    }),

}
</script>

<style scoped>
.home {
    display: flex;
    background-color: var(--primary-background);
    
    @media only screen and (min-width: 1024px) {
        max-height: 80vh;
    }
}

.home-container {
    display: flex;
    flex-direction: column-reverse;
    width: 90%;
    max-width: 120rem;
    background: transparent;
    margin: 0 auto;
    text-align: center;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: start;
    }
}

.home-encabezado {
    background: transparent;
    display: flex;
    flex-direction: column;
}

.hook-container,
.img-container {
    flex-grow: 1;
    flex-basis: 50%;
    background: transparent;

    @media only screen and (min-width: 1024px) {
        overflow: hidden;
    }

}

.hook {
    color: var(--secondary-grey);
    font-size: 25px;
    font-weight: 700;
    line-height: 1.2;
    background: transparent;
    max-width: 90%;
    margin: 0 auto;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;
        line-height: 1;
        max-width: none;
    }
}

.hook img {
    margin-bottom: -10px;
}

.hook span {
    color: var(--primary-blue);
}

.home-description {
    background: transparent;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 16px;
    line-height: 1.5;
    margin: 15px 0;
    color: var(--primary-blue);

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: start;
        font-size: 20px;
        gap: 20px;
    }
}

.home-description p {
    color: var(--primary-black);

}

.buttons-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    background: transparent;
    margin: 15px 0 30px;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: start;
        gap: 20px;

    }
}

.button {
    background-color: var(--primary-blue);
    color: white;
    padding: 10px 35px;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    width: 85%;

    @media only screen and (min-width: 1024px) {
        width: auto;

    }
}

.buttons-container a:nth-child(2) {
    background-color: var(--primary-background);
    color: var(--primary-black);
    border: 1px solid var(--primary-black);
}

.button:hover {
    opacity: 0.9;
}

/*
.img-container img {
    margin: -15px auto;
    max-width: 80%;
    height: auto;
    display: block;

    @media only screen and (min-width: 1024px) {
        max-width: 100%;
        max-height: 100%;
        display: inline;
    }
} */

.img-container img {
    aspect-ratio: 1 / 1;
    width: 80%;
    object-fit: contain;
    margin: -15px auto;

    @media only screen and (min-width: 1024px) {
        width: 100%;
        
    }
}
</style>