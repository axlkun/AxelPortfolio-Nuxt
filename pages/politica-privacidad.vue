<template>
    <myBlogHeader></myBlogHeader>

    <div class="politica-container" style="line-height: 2;">

        <div class="privacy">

            <div class="section mb-10 mt-5">
                <h1 class="text-h3 text-center">Política de Privacidad</h1>

                <p class="fecha text-subtitle-1 text-center mt-5 mb-5">Última actualización 05/08/2024</p>

                <p>En axelcruz.space, valoramos tu privacidad y estamos comprometidos a proteger tus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos la información que recopilamos</p>
            </div>

            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">Información que recopilamos</h2>

                <p>La única información personal que recopilamos es tu dirección de correo electrónico cuando te suscribes a nuestro boletín informativo. No recopilamos ningún otro tipo de información personal a través de nuestro blog.</p>
            </div>

            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">Uso de la información</h2>
            
                <p>Utilizamos tu dirección de correo electrónico exclusivamente para enviarte nuestro boletín informativo, que incluye actualizaciones sobre nuevos artículos, recursos, y noticias relacionadas con programación. Puedes optar por no recibir más correos electrónicos en cualquier momento, siguiendo el enlace de cancelación de suscripción que se incluye en cada boletín.</p>
            </div>

            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">Protección de datos</h2>

                <p>Implementamos medidas de seguridad razonables para proteger tu dirección de correo electrónico contra el acceso no autorizado, la alteración, divulgación o destrucción. Sin embargo, debes tener en cuenta que ningún método de transmisión de datos por Internet o de almacenamiento electrónico es 100% seguro. No compartimos, vendemos ni alquilamos tu dirección de correo electrónico a terceros. La información que recopilamos se utiliza exclusivamente para los fines descritos en esta Política de Privacidad.</p>
            </div>

            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">Tus Derechos</h2>

                <p>Tienes el derecho de acceder, corregir o eliminar tu dirección de correo electrónico en cualquier momento. Si deseas actualizar tus preferencias de suscripción o eliminarte de nuestra lista de correos, puedes hacerlo a través del enlace de cancelación de suscripción en nuestros correos electrónicos o poniéndote en contacto con nosotros directamente.</p>
            </div>

            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">Enlaces a Otros Sitios Web</h2>

                <p>Nuestro blog puede contener enlaces a otros sitios web. No somos responsables de las prácticas de privacidad de esos sitios. Te recomendamos que leas las políticas de privacidad de cualquier sitio web al que accedas a través de nuestros enlaces.</p>

            </div>

            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">Cambios en la Política de Privacidad</h2>

                <p>Podemos actualizar esta Política de Privacidad de vez en cuando para reflejar cambios en nuestras prácticas o en la legislación aplicable. Te notificaremos sobre cualquier cambio importante publicando la nueva política en nuestro blog. Te recomendamos que revises esta política periódicamente para estar al tanto de cómo protegemos tu información.</p>

            </div>
            <div class="section mb-10">
                <h2 class="text-h5 font-weight-black">Contacto</h2>

                <p>Si tienes alguna pregunta o inquietud sobre esta Política de Privacidad o sobre cómo manejamos tu información personal, no dudes en ponerte en contacto con nosotros en axel.17cruz@gmail.com</p>

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