<template>
    <!-- Titulo -->
    <div class="mt-10">
        <div class="mb-10 text-center">
            <h2 class="text-h5 font-weight-bold text-md-h4 mb-2">Categorias</h2>
            <p>Descubre todo tipo de artículos relacionados a la Programación, <br> Ingeniería de Software y Startups!
            </p>
            <v-btn variant="tonal" class="mt-5" color="#0801ff">
                Ver todos los articulos
                <v-icon right>mdi-chevron-right</v-icon>
            </v-btn>
        </div>

        <div class="d-flex flex-column flex-md-row justify-space-between align-md-center ga-6">
            <v-card width="100%" href="/">
                <v-img src="/assets/categoria-programacion.jpg" class="align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" cover>
                    <v-card-title class="text-white">Programación</v-card-title>
                </v-img>

            </v-card>
            <v-card width="100%" href="/">
                <v-img src="/assets/categoria-isc.jpg" class="align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" cover>
                    <v-card-title class="text-white">Ingeniería de Software</v-card-title>
                </v-img>

            </v-card>
            <v-card width="100%" href="/">
                <v-img src="/assets/categoria-startups.jpg" class="align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" cover>
                    <v-card-title class="text-white">Startups</v-card-title>
                </v-img>

            </v-card>
        </div>
    </div>

</template>