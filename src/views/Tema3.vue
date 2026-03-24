<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Sistemas de Información (SI)

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#19538D !important")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img-01.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p Un Sistema de Información (SI) es un conjunto organizado e integrado de personas, procesos, tecnología y datos que trabajan conjuntamente para recopilar, almacenar, procesar y distribuir información que apoye la toma de decisiones, la coordinación, el control y el análisis dentro de una organización. A diferencia de un simple sistema informático, un SI no se reduce a <em>hardware</em> y <em>software</em>: incluye también los procedimientos, las personas que lo operan y el contexto organizacional en el que opera. Es la articulación entre la dimensión técnica y la dimensión humana de la gestión de información.

    p.mb-4 Desde la Teoría General de Sistemas, un SI es un sistema abierto que recibe datos del entorno (entradas), los transforma mediante procesos y reglas (proceso) y produce información útil (salidas), retroalimentándose continuamente para ajustar su funcionamiento a las necesidades de la organización.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Elementos constitutivos de los sistemas de información

        p.mb-4 A continuación, se presenta un pódcast que profundiza en los conceptos abordados sobre los sistemas de información y sus elementos esenciales. Este recurso permite reforzar la comprensión del tema mediante una explicación clara y contextualizada, facilitando su consulta como apoyo al aprendizaje:

        .row.justify-content-center.mb-4
          .col.col-lg-8.col-12
            .row.justify-content-center.align-items-center.g-0
              .col-lg-12.order-lg-2.order-2
                .cajon.cajon.C02.p-2
                  .col-lg-12
                    .tarjeta.clr--pink.p-4.rounded-0.h-100
                      .tarjeta.bg-white.p-4
                        //- #t_1_4.titulo-segundo.color-acento-contenido.mb-4(data-aos="flip-up")
                        //-   h2 Pódcast
                        TarjetaAudio.color-acento-botones.mb-3(
                        texto="Pódcast"
                        :audio="require('@/assets/curso/podcast/podcast.wav')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-lg-12.col-12.order-lg-1.order-1
                figure
                  img(src='@/assets/curso/tema3/img-02.svg', alt='')

    .BMG2.px-md-5.px-4
      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-10
          .row.align-items-center.mb-4(data-aos="zoom-in")
            .col-auto.pe-0(style="z-index:2")
              figure
                img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
            .col-lg-auto.col-9.titulo01(style="z-index:1")
              .p-1
                h3.mb-0.ms-3 Apoyo a la toma de decisiones
        
          p Un Sistema de Información (SI) tiene como propósito fundamental proveer a directivos y gerentes información oportuna, relevante y precisa que sirva de base para la toma de decisiones estratégicas, tácticas y operativas, reduciendo la incertidumbre y el riesgo asociados a la gestión organizacional. Además, contribuye a la automatización y eficiencia operacional al disminuir tiempos, costos y errores humanos en procesos rutinarios, lo que permite que el talento humano se concentre en actividades de mayor valor agregado y aumente la productividad global.

          .cajon.cajon.C03.px-4.py-4.mb-4
            .row.justify-content-center
              .col-lg-4.col-4.mb-lg-0.mb-4.d-none.d-lg-block
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema3/img-03.png', alt='')
              .col-lg-8.col-12
                p De igual manera, un SI fortalece la coordinación y comunicación organizacional al facilitar el flujo de información entre departamentos, niveles jerárquicos y actores externos, eliminando silos informativos y promoviendo la alineación institucional. También posibilita el control y seguimiento del desempeño mediante indicadores clave (KPI), alertas tempranas y monitoreo del cumplimiento de metas. Finalmente, cuando se gestiona estratégicamente, se convierte en una fuente de ventaja competitiva y creación de valor, al permitir la personalización de servicios, la optimización de procesos, la innovación continua y la toma de decisiones basada en datos.

          .row.align-items-center.mb-4(data-aos="zoom-in")
            .col-auto.pe-0(style="z-index:2")
              figure
                img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
            .col-lg-auto.col-9.titulo01(style="z-index:1")
              .p-1
                h3.mb-0.ms-3 Clasificación de los sistemas de información

          p Los sistemas de información se clasifican según el nivel organizacional al que sirven, el tipo de decisiones que apoyan y la naturaleza de su función en la organización. Se clasifican principalmente según el nivel organizacional al que sirven y el tipo de soporte que brindan. Esta clasificación, propuesta por Laudon & Laudon (2020) y complementada por otros autores, es la más utilizada en la academia y en la industria.

      .row.justify-content-center.mb-4
        .col-10(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/tema3/img-04.png', alt='')
          .tarjeta.p-4(style="background-color:#9ECFFF; border-radius:0px; margin-top:-15px;")
            p(style="color:#000 !important") 
              b Pirámide organizacional: 
              | cada tipo de SI atiende un nivel diferente de la organización: desde los trabajadores operativos hasta la alta dirección. Cuanto más alto el nivel, más sintética y estratégica es la información que se produce.
            p.mb-0 La siguiente tabla, relaciona cada uno de estos niveles de dicha pirámide y sus respectivos procesos:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 2.
          span Niveles pirámide organizacional
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 15%; background-color: #FFEBBE;") Nivel
                th(style="width: 15%; background-color: #FFEBBE;") Sistema
                th(style="width: 15%; background-color: #FFEBBE;") Sigla
                th(style="width: 15%; background-color: #FFEBBE;") Función principal
                th(style="width: 15%; background-color: #FFEBBE;") Usuarios típicos
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Estratégico
                td(style="background-color: #F6F6F6;") Sistema de soporte a ejecutivos.
                td(style="background-color: #F6F6F6;") ESS/EIS
                td(style="background-color: #F6F6F6;") Proveer información resumida y tendencias para decisiones de largo plazo.
                td(style="background-color: #F6F6F6;") Alta dirección, CEO, junta directiva.
              tr(data-aos="fade-right")
                td.text-center Directivo
                td Sistema de información gerencial.
                td MIS.
                td Generar reportes periódicos de gestión para control y planificación táctica.
                td Gerentes de área, directores funcionales.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Directivo
                td(style="background-color: #F6F6F6;") Sistema de soporte a decisiones.
                td(style="background-color: #F6F6F6;") DDS
                td(style="background-color: #F6F6F6;") Modelar escenarios, analizar datos y evaluar alternativas de decisión.
                td(style="background-color: #F6F6F6;") Analistas, gerentes de nivel medio.
              tr(data-aos="fade-right")
                td.text-center Conocimiento
                td Sistema de trabajo de conocimiento.
                td KWS
                td Apoyar la creación y aplicación de conocimiento especializado.
                td Ingenieros, arquitectos, científicos, abogados.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Conocimiento
                td.text-center(style="background-color: #F6F6F6;") Sistema de automatización de oficinas.
                td.text-center(style="background-color: #F6F6F6;") OAS
                td.text-center(style="background-color: #F6F6F6;") Gestionar documentos, comunicaciones y colaboración del conocimiento.
                td.text-center(style="background-color: #F6F6F6;") Trabajadores de oficina, secretarias, asistentes.
              tr(data-aos="fade-right")
                td.text-center Operativo
                td Sistema de procesamiento de transacciones.
                td TPS
                td Registrar y procesar las transacciones diarias del negocio en tiempo real.
                td Cajeros, operadores, vendedores, personal operativo.

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .bloque-texto-c.color-primario.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema3/img-05.svg', alt='', style='width: 80px; height: 80px').m-auto
            .col-lg
              h4 Aplicación en el SENA
              p.mb-0 El SENA utiliza varios SI integrados: el sistema de gestión académica (tipo TPS/MIS) para matrículas y notas, la plataforma SOFIA Plus (KWS/OAS) para contenidos de aprendizaje, y sistemas administrativos para presupuesto y contratación (ERP).


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

<style lang="sass"></style>
