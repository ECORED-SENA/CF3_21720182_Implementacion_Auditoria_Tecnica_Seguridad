<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tratamiento de riesgos


    p.mb-5 Al realizar el tratamiento de información, se activa el sistema de gestión de seguridad de la información, este es importante para prevenir y controlar los diferentes tipos de riesgos y vulnerabilidades, como se muestra en la siguiente figura:

    .titulo-sexto.color-acento-contenido.my-5(data-aos="zoom-in")
      h5 Figura 2
      span Tipos de riesgos y vulnerabilidades


    .row(data-aos="zoom-in").mb-5.justify-content-center
      .col-lg-11.col

        figure.mb-4.px-lg-5.mx-lg-5
          img(src="@/assets/curso/temas/t2/img1.svg", alt="alt")


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/img2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Al realizar la auditoría y detectar los diferentes tipos de riesgos y vulnerabilidades a los que las organizaciones están expuestas, inicia el funcionamiento de las fases de implementación de las políticas de seguridad de la información. Toda política que se diseñe debe salir en consenso entre los auditores y directivas de la organización y debe cumplirse y monitorearse, con el fin de controlar y mejorar día a día. Las políticas dan garantías a la organización, sus trabajadores y, sobre todo, confianza a sus clientes.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
