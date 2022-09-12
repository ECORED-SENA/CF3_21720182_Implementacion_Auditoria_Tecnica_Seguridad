<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Tipos de vulnerabilidades


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t1/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Al realizar y evaluar los procesos, el auditor podrá implementar las políticas de seguridad de la información, determinar la efectividad y evaluar los objetivos de seguridad en la operatividad. También deberá realizar el análisis de riesgos, donde el primer paso es detectar el tratamiento de cada uno de los riesgos, de tal manera que se puedan clasificar como preventivo, detectivo y correctivo, dependiendo de las diferentes vulnerabilidades informáticas, lo que determinará la efectividad sobre los diferentes riesgos informáticos en los sistemas de información.


    p.mb-5(data-aos="fade-right") Entre las principales amenazas computacionales, se encuentra el ser humano (agente determinador), por medio de ataques informáticos creados, como:


    .row.justify-content-center.align-items-end.position-relative.bloque-1
      .col-lg-4
        .ps-lg-5.py-4.pt-lg-0
          ul.lista-ul--color.mb-0
            li.mb-2
              i.fas.fa-database
              | Ransomware (secuestro de datos).
            li.mb-2
              i.fas.fa-database
              | Malware.
            li.mb-2
              i.fas.fa-database
              | Gusanos.
            li.mb-0
              i.fas.fa-database
              | Troyanos.

      .col-lg-4
        figure.d-flex.justify-content-center
          img(src='@/assets/curso/temas/t1/img2.svg', alt='', style="max-width: 256px;")



    p.my-5 Al planificar cómo lograr los objetivos de seguridad de la información, la entidad debe determinar:


    .row.justify-content-center
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img3.svg' alt='AvatarTop', style="min-width: 136px")
          //- .tarjeta debe ir acompañado de una de una de estas clases =>
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-gradiente
            .p-4
              h4.text-center.mt-4 ¿Qué se hará?

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img4.svg' alt='AvatarTop', style="min-width: 136px")
          //- .tarjeta debe ir acompañado de una de una de estas clases =>
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-gradiente
            .p-4
              h4.text-center.mt-4 ¿Qué recursos se necesitarán?

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img5.svg' alt='AvatarTop', style="min-width: 136px")
          //- .tarjeta debe ir acompañado de una de una de estas clases =>
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-gradiente
            .p-4
              h4.text-center.mt-4 ¿Quién será el responsable?

    .row.justify-content-center.mt-5
      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img4.svg' alt='AvatarTop', style="min-width: 136px")
          //- .tarjeta debe ir acompañado de una de una de estas clases =>
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-gradiente
            .p-4
              h4.text-center.mt-4 ¿Cuándo se darán por alcanzados los objetivos?

      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img5.svg' alt='AvatarTop', style="min-width: 136px")
          //- .tarjeta debe ir acompañado de una de una de estas clases =>
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-gradiente
            .p-4
              h4.text-center.mt-4 ¿Cómo se evaluarán los resultados?

    p.my-4 Para hacer el análisis de riesgo, es necesario determinar las amenazas y vulnerabilidades a las cuales un sistema de información se ve expuesto. En el siguiente análisis gráfico, se muestran los diferentes tipos de riesgos dentro de una organización.

    .titulo-sexto.color-acento-contenido.my-4
      h5 Figura 1
      span Amenazas y vulnerabilidades

    .bg_img_02
      .row(data-aos="zoom-in").mb-5.justify-content-center
        .col-lg-8.col

          figure.mb-4.px-lg-5.mx-lg-5
            img(src="@/assets/curso/temas/t1/img6.svg", alt="alt")



    p.my4 Esta consideración nace del hecho de que el activo más importante de las organizaciones son sus datos e información; si la organización cuenta con planes de actualización frecuentes programados, será siempre segura y su plataforma tecnológica estará menos expuesta; para ello, los procesos de auditoría deben ser prioritarios, asegurando la correcta adaptación tecnológica y planes de mejora, sin alterar los sistemas actuales y optimizando procesos informáticos.

    p.mb-5 Dentro de las principales categorías de amenazas en la organización, se encuentran:

    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2.text-white 1
          figure.mb-4
            img(src="@/assets/curso/temas/t1/img7.svg", alt="alt", style="width: 37px; margin: auto;")
          p.text-center
            b Robo de <br>información

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 2
          figure.mb-4
            img(src="@/assets/curso/temas/t1/img8.svg", alt="alt", style="width: 37px; margin: auto;")
          p.text-center
            b Pérdida de información

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2.text-white 3
          figure.mb-4
            img(src="@/assets/curso/temas/t1/img9.svg", alt="alt", style="width: 37px; margin: auto;")
          p.text-center
            b Robo de <br>identidad

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 4
          figure.mb-4
            img(src="@/assets/curso/temas/t1/img10.svg", alt="alt", style="width: 37px; margin: auto;")
          p.text-center
            b Interrupción del <br>servicio


    p.mb-4 Es importante indicar que, dentro del organigrama y manual de funciones, siempre se verifiquen las políticas de seguridad de la información con las líneas de negocio de la organización; si bien las amenazas son de manera general para todas las organizaciones del mundo, los planes de mejora y la implementación de políticas van acordes con los servicios de cada organización.

    p.mb-4 A continuación, se describen los diferentes tipos de codificaciones:

    .tarjeta.bg-gradient-cus.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-4
            h4.mb-4 Crítica

            p Cuando la vulnerabilidad realiza una rápida propagación por toda la organización. Ejemplo: #[i Ransomware].


          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/img11.jpg', alt='')

        .row.justify-content-center
          .col-md-4
            h4.mb-4 Importante

            p Cuando la vulnerabilidad pone en peligro la confidencialidad, integridad o disponibilidad de todos los datos de la organización.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/img12.jpg', alt='')

        .row.justify-content-center
          .col-md-4
            h4.mb-4 Moderada

            p Cuando la vulnerabilidad se puede reducir en la organización a partir de controles o configuraciones predeterminadas.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/img13.jpg', alt='')


        .row.justify-content-center
          .col-md-3
            h4.mb-4 Baja
            p Cuando el impacto de la vulnerabilidad es mínimo.

          .col-md-8
            figure
              img(src='@/assets/curso/temas/t1/img14.jpg', alt='')



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.bloque-1
  position: relative

  & > *
    position: relative

  &::before
    content: ""
    position: absolute
    width: 68%
    padding: 16px
    height: 78%
    border-radius: 10px
    background: #DBEEFB

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px)
  .bloque-1
    figure
      display: none !important
    &::before
      content: ""
      position: absolute
      width: 100%
      padding: 16px
      height: 100%
      border-radius: 10px
      background: #DBEEFB
</style>
