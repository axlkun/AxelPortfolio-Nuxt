<template>
    <v-sheet class="services" id="services">
        <v-sheet class="container-service">
            <v-sheet class="title-container">
                <h2>Servicios</h2>
                <!-- <p>Descubre como una solución de software puede transformar tu negocio</p> -->
            </v-sheet>
    
                <v-sheet class="container-services">
                    <v-sheet class="service" v-for="service in services" :key="service.title">
                      <h3>{{ service.title }} <span :class="'mdi ' + service.icon"></span></h3>
                      <p>{{ service.description }}</p>
                      <ul>
                        <li v-for="example in service.examples" :key="example"><span class="mdi mdi-arrow-right-thin"></span>{{ example }}</li>
                      </ul>
                    </v-sheet>
                  </v-sheet>
        </v-sheet>     
    </v-sheet>
</template>

<script>

export default {

name: 'servicesSection',

data: () => ({
    services: [
      {
        title: 'Desarrollo Frontend',
        icon: 'mdi-palette',
        description: 'Creación de interfaces atractivas para sitios web y aplicaciones, asegurando una experiencia de usuario excepcional.',
        examples: ['Landing Page', 'Sitios web informativos', 'Portafolios', 'Catálogos', 'Menús']
      },
      {
        title: 'Desarrollo FullStack',
        icon: 'mdi-desktop-classic',
        description: 'Desarrollo integral de software, brindando soluciones tecnológicas completas y a la medida.',
        examples: ['Soluciones de software a la medida', 'Software empresarial', 'Sitio web con panel de administración', 'Blog']
      },
      {
        title: 'Actualización',
        icon: 'mdi-cog-refresh',
        description: 'Optimización y mejora de proyectos en línea existentes, priorizando el rendimiento y la visibilidad.',
        examples: ['Incorporación de nuevas funcionalidades', 'Rediseño del producto de software', 'Optimización de rendimiento', 'Implementación de estrategias SEO']
      }
    ]
})

}
</script>

<style scoped>
.services{
    min-height: 100vh;
    background-color: var(--primary-background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container-service{
    background: transparent;
}

.title-container {
   
    margin: 0 auto;
    color: var(--primary-blue);
    background: transparent;
    text-align: center;
    font-weight: bold;

    @media only screen and (min-width: 1024px) {
        max-width: 90%;
        text-align: start;
    }
}

.title-container h2 {
    font-size: 35px;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;
    }
}


.container-services{
    background: transparent;
    display: flex;
    flex-direction: column;
    max-width: 90%;
    margin: 30px auto 0 auto;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    gap: 30px;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
    }
}

.service{
    background: transparent;
    border: 1px solid var(--primary-blue);
    border-radius: 10px;
    padding: 15px;
    color: var(--primary-background);
    line-height: 2;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
    height: 500px;
    width: 100%;
}

.service:nth-child(1), .service:nth-child(3)  {
    
    background-color: var(--primary-blue);
    @media only screen and (min-width: 1024px) {
        margin-top: -60px;
    }
  }
.service:nth-child(2) {
    
    background-color: var(--primary-background);
    color: var(--primary-blue);

    @media only screen and (min-width: 1024px) {
        margin-top: 60px;
    }
  }

  .service:nth-child(3)  {
    margin-bottom: 30px;
    @media only screen and (min-width: 1024px) {
        margin-bottom: 0;
    }
  }

.service h3{
    font-size: 25px;
    text-align: center;

    @media only screen and (min-width: 1024px) {
       
        font-size: 35px;
       
    }
}

.service p, li{
    font-size: 16px;
    line-height: 1.5;

    @media only screen and (min-width: 1024px) {
       
        font-size: 20px;
       
    }
}

li{
    margin: 15px 0;
    display: flex;
    flex-direction: row;
}

span{
    margin-right: 15px;
    
}
</style>