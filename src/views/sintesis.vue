<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo integra conceptos fundamentales para comprender cómo se estructuran, analizan y gestionan los sistemas de información en contextos organizacionales y tecnológicos. Se abordan principios del enfoque sistémico, la relación entre datos e información y el papel de los sistemas de información como soporte para la gestión y la toma de decisiones.
    p.mb-4 Asimismo, se analizan elementos clave del desarrollo de #[i software], la definición y gestión de procesos, así como la identificación y tratamiento de requisitos mediante enfoques estructurados y prácticas ágiles. Complementariamente, se incorporan nociones de estadística descriptiva que permiten organizar, interpretar y representar datos mediante medidas e indicadores, fortaleciendo el análisis de información y el apoyo a la evaluación de procesos y soluciones tecnológicas.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis del componente formativo Análisis de sistemas y requisitos en el desarrollo de software, aborda los fundamentos para comprender el funcionamiento y la gestión de los sistemas de información en contextos organizacionales. Se integran conceptos del enfoque sistémico, la relación entre datos e información y los elementos que conforman los sistemas de información. Asimismo, se consideran aspectos del desarrollo de software, la gestión de procesos y la identificación de requisitos mediante diferentes técnicas y prácticas ágiles. El componente se complementa con nociones de estadística descriptiva que permiten organizar, analizar y representar datos, fortaleciendo la interpretación de información y el apoyo a la toma de decisiones.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
