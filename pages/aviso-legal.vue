<template>
    <myBlogHeader></myBlogHeader>

    <div class="politica-container" style="line-height: 2;">

        <div class="privacy">

            <div class="section mb-10 mt-5">
                <h1 class="text-h3 text-center">Aviso Legal</h1>

                <p class="fecha text-subtitle-1 text-center mt-5 mb-5">Última actualización 05/08/2024</p>

                <p>Este aviso legal regula el uso del sitio web axelcruz.space. Al utilizar nuestro Blog, aceptas los términos y condiciones descritos a continuación.</p>
            </div>

            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">Propiedad Intelectual</h2>

                <p>Todos los contenidos del Blog, incluyendo textos, imágenes, gráficos, logotipos, y demás materiales, están protegidos por derechos de propiedad intelectual y son propiedad exclusiva de axelcruz.space o de sus respectivos titulares. Queda prohibida la reproducción, distribución, modificación, o cualquier otro uso de los contenidos sin la autorización expresa y por escrito de axelcruz.space.</p>
            </div>

            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">Responsabilidad</h2>
            
                <p>El Blog se proporciona "tal cual" y "según disponibilidad". axelcruz.space no garantiza la disponibilidad continua del Blog ni se hace responsable de los posibles errores u omisiones en los contenidos. No garantizamos la exactitud, integridad o actualidad de la información publicada en el Blog y no asumimos ninguna responsabilidad por cualquier daño derivado del uso de la misma.</p>
            </div>

            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">Enlaces a Terceros</h2>

                <p>El Blog puede contener enlaces a otros sitios web que no están bajo nuestro control. axelcruz.space no se hace responsable del contenido, políticas de privacidad, ni prácticas de esos sitios web. La inclusión de estos enlaces no implica respaldo ni aprobación del contenido de los sitios enlazados.</p>
            </div>

            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">Uso del Blog</h2>

                <p>Al utilizar el Blog, te comprometes a no emplear el Blog para actividades ilegales o prohibidas por estos términos y condiciones. Nos reservamos el derecho de cancelar o suspender el acceso a cualquier usuario que infrinja estas condiciones.</p>
            </div>

            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">Enlaces a Otros Sitios Web</h2>

                <p>Nuestro blog puede contener enlaces a otros sitios web. No somos responsables de las prácticas de privacidad de esos sitios. Te recomendamos que leas las políticas de privacidad de cualquier sitio web al que accedas a través de nuestros enlaces.</p>

            </div>

            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">Modificaciones</h2>

                <p>axelcruz.space se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Cualquier cambio será publicado en esta página y entrará en vigor desde su publicación. Te recomendamos revisar regularmente este aviso legal para estar informado de las actualizaciones.</p>

            </div>
            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">Legislación Aplicable y Jurisdicción</h2>

                <p>Estos términos y condiciones se rigen por las leyes de México. Cualquier disputa relacionada con el uso del Blog se someterá a los tribunales competentes de México, renunciando expresamente a cualquier otro fuero que pudiera corresponderte.</p>

            </div>

        </div>

    </div>

    <myBlogFooter></myBlogFooter>
</template>

<script setup>
import myBlogHeader from '../components/blog/BlogHeader.vue';
import myBlogFooter from '../components/blog/BlogFooter.vue';
</script>

<style scoped>
.politica-container {
    
    max-width: 90%;
    margin: 15px auto;
    background-color: var(--primary-background);

    @media only screen and (min-width: 1024px) {
        width: 120rem;
        max-width: 70%;
    }
}

ul,
ol {
    list-style: disc; 
}
</style>