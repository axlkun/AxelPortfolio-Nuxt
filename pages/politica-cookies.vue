<template>
    <myBlogHeader></myBlogHeader>

    <div class="politica-container" style="line-height: 2;">

        <div class="privacy">

            <div class="section mb-10 mt-5">
                <h1 class="text-h3 text-center">Política de Cookies</h1>

                <p class="fecha text-subtitle-1 text-center mt-5 mb-5">Última actualización 05/08/2024</p>

                <p>Esta Política de Cookies tiene como objetivo informarte sobre el uso de cookies en nuestro sitio web. Utilizamos cookies proporcionadas por Google, específicamente Google Analytics y Google Search Console, para recopilar información sobre la navegación y el comportamiento del usuario en nuestro sitio. Estas cookies nos ayudan a mejorar la calidad de nuestros servicios y ofrecerte una experiencia de usuario más personalizada.</p>
            </div>

            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">¿Qué son las cookies?</h2>

                <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tableta, smartphone, etc.) cuando visitas un sitio web. Estos archivos contienen información utilizada para identificar tu dispositivo y registrar ciertos detalles sobre tu navegación en línea.</p>
            </div>

            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">¿Por qué utilizamos cookies?</h2>
            
                <p>Utilizamos cookies para los siguientes fines:</p>
            
                <ul class="pl-5">
                    <li>
                        <h3 class="text-h6">Google Analytics:</h3>
                        <p>Utilizamos Google Analytics para obtener información sobre cómo los visitantes utilizan nuestro sitio web. Estas cookies nos ayudan a entender qué páginas son las más populares, cuánto tiempo pasan los usuarios en nuestro sitio y cómo llegaron aquí. Esta información es anónima y nos ayuda a mejorar la calidad de nuestro sitio web.</p>
                    </li>
                    <li>
                        <h3 class="text-h6">Google Search Console:</h3>
                        <p>Google Search Console nos proporciona datos cruciales sobre cómo se indexa nuestro sitio web en los resultados de búsqueda de Google. Las cookies de Google Search Console nos permiten monitorear la visibilidad y el rendimiento de nuestro sitio en los resultados de búsqueda.</p>
                    </li>
                </ul>
            </div>

            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">¿Cómo puedes controlar las cookies?</h2>

                <p>Puedes gestionar las cookies en tu dispositivo a través de la configuración de tu navegador. Tienes la opción de aceptar o rechazar cookies, así como eliminarlas en cualquier momento. Ten en cuenta que desactivar algunas cookies puede afectar tu experiencia de navegación en nuestro sitio web.</p>
            </div>

            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">¿Cómo obtenemos tu consentimiento?</h2>

                <p>Al utilizar nuestro sitio web, consientes el uso de cookies según se describe en esta Política de Cookies. Si no estás de acuerdo con el uso de cookies, te recomendamos ajustar la configuración de tu navegador.</p>
            </div>

            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">Cambios en la Política de Cookies</h2>

                <p>Nos reservamos el derecho de modificar esta Política de Cookies en cualquier momento. Cualquier cambio significativo será comunicado a través de nuestro sitio web. Te recomendamos revisar esta Política de Cookies periódicamente para estar informado sobre cualquier actualización.</p>

                <p>Si tienes alguna pregunta o inquietud acerca de nuestra Política de Cookies, no dudes en contactarnos a través de los métodos de contacto proporcionados en nuestro sitio web.</p>
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