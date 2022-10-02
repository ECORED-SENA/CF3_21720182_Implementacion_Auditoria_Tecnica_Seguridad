<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    p.mb-4 A continuación, encontrará un video ilustrativo sobre las temáticas a tratar en este componente formativo.


    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/V5Pq2Isuu3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Fundamentos y aplicaciones de políticas de SGSI

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
