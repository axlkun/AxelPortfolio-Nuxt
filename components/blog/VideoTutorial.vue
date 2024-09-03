<template>

    <v-sheet class="d-flex flex-column align-center justify-center background-custom" id="steps" style="min-height: 100vh;">
        <v-sheet class="pa-5 text-center bg-transparent custom-sheet">
            <h2 class="text-h5 text-md-h4 ma-1 font-weight-black">Último Video Tutorial de Programación</h2>
            <p class="text-h7 text-md-h6 ma-5 font-weight-bold text-grey-darken-1">Mira nuestro último video de programación en el canal. Videos nuevos todas las semanas. Tutoriales de: PHP, Laravel, Spring Boot, Vue.js, Nuxt, MySQL y más!</p>
        </v-sheet>

        <v-sheet class="video-container bg-transparent">
    
                <iframe class="video" src="https://www.youtube.com/embed/YWOjQhi6MXA" title="Como crear una API REST en Laravel con MySQL y pruebas en Postman | Tutorial paso a paso" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                
        </v-sheet>

    </v-sheet>

</template>
        
<style scoped>
.background-custom {
    background: radial-gradient(circle, rgb(205, 207, 250) 27%, rgba(236, 239, 241, 1) 50%);
}
.video-container{
    width: 90%;
    margin: 0 auto 15px auto;

    @media only screen and (min-width: 1024px) {
        width: 50%;
        
    }
}
.video {
    aspect-ratio: 16 / 9;
    width: 100%;
}

.custom-sheet {
    @media only screen and (min-width: 960px) {
        width: 70%;
    }
}

h2{
    color: #0801ff;
}
</style>