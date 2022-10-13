<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Matriz de riesgos


    p.mb-4 En la siguiente matriz de riesgos, se describen las amenazas por medidas de riesgos de acuerdo con la ISO 27005, allí se evidencia un procedimiento donde diferentes amenazas pueden tener diferentes consecuencias y niveles de probabilidad.


    .titulo-sexto.color-acento-contenido.my-4(data-aos="zoom-in")
      h5 Tabla 3.
      span Amenazas por medidas de riesgos de acuerdo con la ISO 27005

    .tabla-a.mb-5(data-aos="zoom-in")
      table
        thead
          tr
            th A - Descripción de la amenaza
            th B - Valor de la consecuencia
            th C - Probabilidad de la ocurrencia de la amenaza
            th D - Medidas de riesgos
            th E - <em>Ranking</em> de amenaza
        tbody
          tr
            th.bg_rojo_claro_light Amenaza 1
            td.text-center 5
            td.text-center 2
            td.text-center 10
            td.text-center 1
          tr
            th.bg_rojo_claro_light Amenaza 2
            td.text-center 2
            td.text-center 4
            td.text-center 8
            td.text-center 3
          tr
            th.bg_rojo_claro_light Amenaza 3
            td.text-center 3
            td.text-center 3
            td.text-center 9
            td.text-center 2
          tr
            th.bg_rojo_claro_light Amenaza 4
            td.text-center 1
            td.text-center 5
            td.text-center 5
            td.text-center 4
          tr
            th.bg_rojo_claro_light Amenaza 5
            td.text-center 4
            td.text-center 1
            td.text-center 4
            td.text-center 5
          tr
            th.bg_rojo_claro_light Amenaza 6
            td.text-center 2
            td.text-center 4
            td.text-center 8
            td.text-center 3

    p.my-4 Para completar la tabla anterior, se debe tener en cuenta:

    .row
      .col-lg.col-6.mb-4
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-11
              figure
                img(src='@/assets/curso/temas/t3/img1.svg', alt='Imagen decorativa')

          h4.text-center Columna A
          p.text-small Tiene la descripción de cada amenaza.

      .col-lg.col-6.mb-4
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-11
              figure
                img(src='@/assets/curso/temas/t3/img2.svg', alt='Imagen decorativa')

          h4.text-center Columna B
          p.text-small Tiene el valor del activo de la organización con consecuencia; esa consecuencia se define en un valor de 1 a 5.

      .col-lg.col-6.mb-4
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-11
              figure
                img(src='@/assets/curso/temas/t3/img3.svg', alt='Imagen decorativa')

          h4.text-center Columna C
          p.text-small Establece una escala de 1 a 5 para el valor de la probabilidad.

      .col-lg.col-6.mb-4
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-11
              figure
                img(src='@/assets/curso/temas/t3/img4.svg', alt='Imagen decorativa')

          h4.text-center Columna D
          p.text-small Tiene el valor de las medidas de riesgos que se obtiene de la multiplicación del valor de la consecuencia (columna B) x la probabilidad de la ocurrencia (columna C).

      .col-lg.col-6.mb-4
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-11
              figure
                img(src='@/assets/curso/temas/t3/img5.svg', alt='Imagen decorativa')

          h4.text-center Columna E
          p.text-small Al finalizar, dependiendo del nivel de riesgo o vulnerabilidad de los resultados, el auditor decide si dejar el ranking de las amenazas dentro de la matriz.


    p.my-4 Con el fin de complementar lo descrito con anterioridad, a continuación, se muestra un ejemplo práctico para la realización de una matriz de riesgos:


    .tarjeta.bg-gradient-cus.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.align-items-start.justify-content-center
          .col-lg-10
            .row.justify-content-center.align-items-center
              .col-auto.d-none.d-m-block
                figure
                  img(src='@/assets/curso/temas/t3/img6.svg', alt='')

              .col
                p.mb-0 Después de hacer el análisis de los riesgos de una empresa, se detectaron los siguientes riesgos, a cada uno se le asignó una probabilidad y un impacto, como se muestra a continuación.


            p.my-4 #[strong Riesgos detectados en la organización]

            .table-responsive
              table.table(style="border: 2px solid #000; background: #fff")
                thead
                  tr
                    th.text-center Ítem
                    th.text-center Riesgo
                    th.text-center Probabilidad
                    th.text-center Impacto

                tbody
                  tr
                    th.text-center 1
                    td Extralimitación en el uso de un superusuario en una plataforma.
                    td.text-center 3
                    td.text-center 5
                  tr
                    th.text-center 2
                    td Continuar con accesos vigentes de las personas que se encuentran en vacaciones, licencias largas o que ya no laboran en la empresa.
                    td.text-center 4
                    td.text-center 3


        .row.align-items-start.justify-content-center
          .col-lg-10
            .row.justify-content-center.align-items-center
              .col-auto.d-none.d-m-block
                figure
                  img(src='@/assets/curso/temas/t3/img7.svg', alt='')

              .col
                p.mb-0 La siguiente tabla muestra la clasificación de probabilidad vs. impacto.


            p.my-4 #[strong Clasificación de probabilidad vs. impacto.]

            .table-responsive

              table.table(style="border: 2px solid #000; background: #fff")
                thead
                  tr
                    th.text-center(colspan="2") Probabilidad
                    th.text-center(colspan="2") Impacto

                tbody
                  tr
                    th.text-center 1
                    td.text-center Muy bajo
                    td.text-center 1
                    td.text-center Muy bajo
                  tr
                    th.text-center 2
                    td.text-center Bajo
                    td.text-center 2
                    td.text-center Bajo
                  tr
                    th.text-center 3
                    td.text-center Moderado
                    td.text-center 3
                    td.text-center Moderado
                  tr
                    th.text-center 4
                    td.text-center Alto
                    td.text-center 4
                    td.text-center Alto
                  tr
                    th.text-center 5
                    td.text-center Muy alto
                    td.text-center 5
                    td.text-center Muy alto


        .row.align-items-start.justify-content-center
          .col-lg-10
            .row.justify-content-center.align-items-center
              .col-auto.d-none.d-m-block
                figure
                  img(src='@/assets/curso/temas/t3/img7.svg', alt='')

              .col
                p.mb-0 Con base en las probabilidades e impactos establecidos en la tabla “Riesgos detectados en la organización” para cada uno de los ítems y la clasificación de probabilidad vs. impacto de la tabla “Clasificación de probabilidad vs. impacto”, se puede definir dónde se encuentra cada uno de los riesgos, y así realizar una matriz de riesgo de la siguiente manera:


            p.mt-4 #[strong Matriz de riesgos]

            figure
              img(src='@/assets/curso/temas/t3/img8.svg', alt='')

        .row.justify-content-center
          .col-md-7

            p.mb-4 En la matriz, se puede observar en qué nivel se encuentran los dos riesgos planteados.

            p En tal sentido, el plan de mejora podría ser crear una política y directriz de un solo superusuario, en este caso, el DBA (Administrador de la Base de Datos) asignado por la entidad y la política de desactivar usuarios en receso de funciones, lo cual sería un trabajo coordinado entre talento humano y el departamento TI de la organización.


          .col-md-5
            figure
              img(src='@/assets/curso/temas/t3/img9.png', alt='')

    .row.justify-content-center.align-items-center
      .col-auto.d-none.d-m-block
        figure
          img(src='@/assets/curso/temas/t3/img10.svg', alt='')

      .col
        p.mb-0 Frente al análisis realizado de las matrices, se consolida la información en planes de mejora y recomendaciones.  El auditor debe generar informes sobre los hallazgos y vulnerabilidades detectadas. Este mismo informe debe tener el aval y compromiso de la alta dirección y debe llevar los siguientes ítems (en caso de una observación adicional, se puede plasmar en el informe del auditor):

    .titulo-sexto.color-acento-contenido.my-5(data-aos="zoom-in")
      h5 Tabla 4.
      span Contenido del informe

    .row.justify-content-center
      .col-lg-10
        figure.d-md-none.d-block
          img(src='@/assets/curso/temas/t3/tabla_informe.svg', alt='')
        .table-responsive.d-none.d-md-block
          table.table(style="border: 2px solid #000; background: #fff")
            tbody
              tr.bg-purple-dark.border-y-2px
                td(colspan="7") #[strong 1. Objetivo]
              tr
                td(colspan="7") #[br]

              tr.bg-purple-dark.border-y-2px
                td(colspan="7") #[strong 2. Alcance]
              tr
                td(colspan="7") #[br]

              tr.bg-purple-dark.border-y-2px
                td(colspan="7") #[strong 3. Responsable]
              tr
                td(colspan="7") #[br]

              tr.bg-purple-dark.border-y-2px
                td(colspan="7") #[strong 4. Definiciones]
              tr
                td(colspan="7") #[br]

              tr.bg-purple-dark.border-y-2px
                td(colspan="7") #[strong 5. Normatividad]
              tr
                td(colspan="7") #[br]

              tr.bg-purple-dark.border-y-2px
                td(colspan="7") #[strong 6. Actividades]
              tr.border-y-2px.bg-purple
                th.text-center.border-x-2px Paso
                th.text-center.border-x-2px Actividad
                th.text-center.border-x-2px(colspan="3") Descripción de la actividad
                th.text-center.border-x-2px(colspan="2") Responsable
              tr.border-y-2px
                th.text-center.border-x-2px #[br]
                th.text-center.border-x-2px #[br]
                th.text-center.border-x-2px(colspan="3") #[br]
                th.text-center.border-x-2px(colspan="2") #[br]


              tr.bg-purple-dark.border-y-2px
                td(colspan="7") #[strong 7. Registros]

              tr.border-y-2px.bg-purple
                th.text-center.border-x-2px Código
                th.text-center.border-x-2px Nombre
                th.text-center.border-x-2px(width="140px") Responsable de diligenciarlo
                th.text-center.border-x-2px Lugar de archivo
                th.text-center.border-x-2px Criterio de archivo
                th.text-center.border-x-2px Tiempo de retención
                th.text-center.border-x-2px Disposición

              tr.border-y-2px
                th.text-center.border-x-2px #[br]
                th.text-center.border-x-2px #[br]
                th.text-center.border-x-2px #[br]
                th.text-center.border-x-2px #[br]
                th.text-center.border-x-2px #[br]
                td.text-center.border-x-2px #[small Ver tabla de retención documental.]
                td.text-center.border-x-2px #[small Ver tabla de retención documental.]

              tr.bg-purple-dark.border-y-2px
                td(colspan="7") #[strong 8. Documentos asociados]
              tr
                td(colspan="7") #[br]

              tr.bg-purple-dark.border-y-2px
                td(colspan="7") #[strong 9. Anexos]
              tr
                td(colspan="7") #[br]

              tr.bg-purple-dark.border-y-2px
                td(colspan="7") #[strong 10. Control de cambios]
              tr
                td(colspan="7") #[br]

</template>

<script>
export default {
  name: 'Tema3',
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
.tarjeta--boton
  height: 100%

.tarjeta--boton:hover
  background-color: #E8DDFC

@media screen and (max-width: 600px)
  th
    width: 130px

  td
    font-size: 0.8rem
</style>
