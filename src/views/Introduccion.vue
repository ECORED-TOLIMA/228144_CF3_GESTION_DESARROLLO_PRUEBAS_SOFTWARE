<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 Este componente formativo invita a comprender el desarrollo y la calidad del <em>software</em> desde el pensamiento sistémico, reconociendo que el <em>software</em> es un sistema abierto en el que interactúan personas, procesos, datos y tecnología. Desde esta perspectiva, un error en el código no se interpreta como un hecho aislado, sino como el resultado de decisiones y procesos interrelacionados que deben analizarse y gestionarse de manera integral.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          .row
            .col-lg-3.col-12.text-center.order-lg-2.order-1.mb-lg-0.mb-3.ms-lg-auto.d-none.d-lg-block
              figure(data-aos="fade-down")
                img(src='@/assets/curso/introduccion/img-01.svg', alt='' style="max-width: 200px;")
            .col-lg-9.col-12.order-lg-1.order-2
              p Es por ello, que, a lo largo del componente, el aprendiz fortalecerá competencias en ingeniería de requisitos, ciclos de vida y metodologías de desarrollo, gestión por procesos y técnicas de elicitación, así como en análisis cuantitativo mediante estadística descriptiva, orientado a la toma de decisiones informadas.
              p.mb-0 El objetivo es ir más allá de la simple detección de fallas, promoviendo una cultura de mejora continua y gestión del conocimiento que contribuya a la calidad, sostenibilidad y excelencia del servicio de <em>software</em>.

    p.mb-4 Partiendo de lo anterior, se invita a acceder al siguiente video, el cual contextualiza y articula la temática que se abordará durante este componente formativo:

    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/zBlljhKiTys" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video



</template>

<script>
export default {
  name: 'Introduccion',
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
