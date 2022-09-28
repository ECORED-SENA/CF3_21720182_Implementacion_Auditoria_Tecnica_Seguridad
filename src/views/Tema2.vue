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


    .bg_img_01.my-5(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8
          p.mb-4 Dentro de las fases de implementación de un SGSI, están:

          ul.lista-ul--color
            li.mb-2
              i.fas.fa-database
              | Comunicación interna.

            li.mb-2
              i.fas.fa-database
              | Establecimiento del equipo de implementación.

            li.mb-2
              i.fas.fa-database
              | Estado actual de la organización.

            li.mb-2
              i.fas.fa-database
              | Plan de acción.

            li.mb-2
              i.fas.fa-database
              | Implementación y operación.

            li.mb-2
              i.fas.fa-database
              | Evaluación.

            li.mb-2
              i.fas.fa-database
              | Mejora continua.

            li.mb-2
              i.fas.fa-database
              | Certificación.

            li.mb-2
              i.fas.fa-database
              | Liderazgo.

            li
              i.fas.fa-database
              | Riesgos.



        .col-lg-5.col.md-4.d-none.d-lg-block
          figure.px-lg-5.mx-lg-5
            img(src="@/assets/curso/temas/t2/img3.png", alt="Imagen decorativa")

    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t2/img4.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.texto-blanco.text-small.mb-4 Para mayor ilustración, se solicita al aprendiz consultar la guía del MinTIC (Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia).

              p.texto-blanco.text-small #[strong Modelo de Seguridad y Privacidad de la Información – Seguridad y Privacidad de la Información (2016).]

            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.mintic.gov.co/gestionti/615/articles-5482_Modelo_de_Seguridad_Privacidad.pdf" target="_blank")
                span Ir a sitio web
                i.fas.fa-link
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

<style lang="sass">
.bg-gradiente-2
  background: linear-gradient(to bottom, #7433EE, #3C1B7B);
</style>
