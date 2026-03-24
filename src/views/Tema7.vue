<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Estadística descriptiva

    .row.justify-content-center.mb-4
      .col-lg-3.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema7/img-01.svg' alt="Imagen decorativa")
      .col-lg-9     
        p Es la rama de la estadística que reúne, organiza, resume y presenta un conjunto de datos mediante tablas, gráficas y medidas numéricas, sin extraer conclusiones más allá de los datos observados. Además, permite transformar un conjunto de datos crudos en información comprensible. Es la base del análisis cuantitativo en #[i software] (métricas de defectos, cobertura, tiempos de respuesta).
        p.mb-0 Para aplicar correctamente la estadística descriptiva, es necesario comprender algunos conceptos fundamentales que definen el origen y la naturaleza de los datos analizados. Estos elementos permiten delimitar el alcance del estudio, garantizar la representatividad de la información y asegurar una interpretación adecuada de los resultados:
      
    .row.mb-4
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-right")(style="background-color:#DFEFFF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema7/img-02.svg' alt="")
        h4.text-center Población
        p.text-center.mb-0 Conjunto total de individuos u objetos que comparten una característica de interés.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-right")(style="background-color:#F1E2FF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema7/img-03.svg' alt="")
        h4.text-center Muestra
        p.text-center.mb-0 Subconjunto representativo seleccionado de la población para su estudio.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-left")(style="background-color:#DFEFFF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema7/img-04.svg' alt="")
        h4.text-center Elemento
        p.text-center.mb-0 Cada unidad individual que forma parte de la población o muestra.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-left")(style="background-color:#F1E2FF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema7/img-05.svg' alt="")
        h4.text-center Característica
        p.text-center.mb-0 Propiedad o atributo medido u observado en cada elemento.

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        p Una vez definidos los elementos básicos del análisis estadístico, el siguiente paso consiste en identificar las variables, ya que son ellas las que representan las características que se miden u observan en cada elemento de la población o muestra. Las variables permiten transformar los datos en información útil, facilitando su organización, clasificación y análisis mediante las herramientas propias de la estadística descriptiva. 
        p.mb-4 Basado en lo anterior, a continuación, se presentan los principales tipos de variables que se emplean en el estudio y análisis de datos:

    .row.justify-content-center
      .col-lg-9.order-lg-1.order-2.mb-lg-0.mb-4(data-aos="fade-right")
        AcordionA.color-secundario(tipo="b" clase-tarjeta="tarjeta tarjeta--C01" data-aos="zoom-in")
          .row(titulo="Variables cualitativas y cuantitativas" style="padding-bottom:0 !important; margin-bottom:0 !important;")
            p Las variables pueden clasificarse según el tipo de información que representan y la forma en que se miden, lo cual orienta el análisis estadístico a realizar. Estas son:
              .tarjeta.tarjeta--blanca.p-4(style="margin-bottom:-10px;")
                .row 
                  .col-lg-12.col-12
                    ul.lista-ul.mb-0 
                      li  
                        i.fas.fa-circle(style="top: 8px;")
                        p.mb-0 #[b Variables cualitativas:] describen cualidades, categorías o atributos que no se expresan numéricamente. Ejemplo: tipo de defecto (funcional, usabilidad, seguridad), nivel de satisfacción del usuario (bajo, medio, alto), estado de una incidencia (abierta, en proceso, cerrada).
                      li  
                        i.fas.fa-circle(style="top: 8px;")
                        p.mb-0 #[b Variables cuantitativas:] representan cantidades o valores numéricos que pueden medirse y analizarse matemáticamente. Ejemplo: número de defectos detectados, tiempo de respuesta del sistema (en segundos), cantidad de usuarios activos, porcentaje de cobertura de pruebas.

          .row(titulo="Variable cualitativa no numérica" style="padding-bottom:0 !important; margin-bottom:0 !important;")
            p Representa categorías, atributos o cualidades que no se expresan mediante números y no permiten operaciones matemáticas. Se clasifica en:
              .tarjeta.tarjeta--blanca.p-4(style="margin-bottom:-10px;")
                .row 
                  .col-lg-10.col-12
                    ul.lista-ul.mb-0 
                      li  
                        i.fas.fa-circle(style="top: 8px;")
                        p.mb-0 Nominal: no presenta un orden entre sus categorías. Ejemplos: lógica, interfaz, seguridad, datos.
                      li  
                        i.fas.fa-circle(style="top: 8px;")
                        p.mb-0 Ordinal: presenta un orden o jerarquía entre las categorías. Ejemplo: niveles de madurez: inicial, gestionado, definido, cuantitativamente gestionado y optimizado.

          .row(titulo="Variable cuantitativa numérica" style="padding-bottom:0 !important; margin-bottom:0 !important;")
            p Expresa cantidades medibles. Se pueden realizar operaciones matemáticas con sus valores.
            p Ejemplo: tiempo de respuesta del sistema medido en segundos, número de errores encontrados en una prueba, cantidad de usuarios registrados o porcentaje de casos de prueba ejecutados.
          
          .row(titulo="Variables discretas y continuas" style="padding-bottom:0 !important; margin-bottom:0 !important;")
            p Cada una de ellas representa:
              .tarjeta.tarjeta--blanca.p-4(style="margin-bottom:-10px;")
                .row 
                  .col-lg-10.col-12
                    ul.lista-ul.mb-0 
                      li  
                        i.fas.fa-circle(style="top: 8px;")
                        p.mb-0 #[b Discreta:] valores enteros contables. Ejemplo: n.º de defectos: 3, 7, 12.
                      li  
                        i.fas.fa-circle(style="top: 8px;")
                        p.mb-0 #[b Continua:] valores en intervalos. Ejemplo: tiempo de respuesta: 1.24 s.

      .col-lg-3.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/tema7/img-06.svg' alt="")

    Separador

    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.1 Medidas de tendencia central

    p.mb-4 Para resumir y analizar un conjunto de datos, la estadística descriptiva utiliza indicadores que permiten identificar un valor representativo del comportamiento general de la información. Estas medidas facilitan la interpretación de los datos y apoyan la toma de decisiones al mostrar el punto central o más típico del conjunto analizado. Se invita a analizar este breve ejemplo:

    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-primario(data-aos="fade-right")
          h5 Figura 9.
          span Ejemplo dataset
        figure.d-lg-flex.d-none(data-aos="zoom-in")
          img(src='@/assets/curso/tema7/figura-1-1v.svg' alt="Figura 9 que muestra un conjunto de datos de ejemplo correspondiente al número de defectos por sprint, compuesto por ocho observaciones, el cual sirve como base para ilustrar el cálculo de las medidas de tendencia central.")
        figure.d-lg-none.d-flex(data-aos="zoom-in")
          img(src='@/assets/curso/tema7/figura-1-2v.svg' alt="Figura 9 que muestra un conjunto de datos de ejemplo correspondiente al número de defectos por sprint, compuesto por ocho observaciones, el cual sirve como base para ilustrar el cálculo de las medidas de tendencia central.")

    p.text-center.mb-4 A continuación, se presentan las principales medidas de tendencia central:

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10
        .bloque-texto-c.color-secundario.tarjeta.p-3(style="border-radius:0px !important")
          .row.align-items-center
            .col-lg
              p.text-center.mb-0 #[b Media: Σxᵢ / n:] suma de todos los valores dividida entre el número de datos. Es la más usada. 
              p.text-center Ejemplo:
              .row.justify-content-center.align-items-center.mb-3
                .col-lg-6
                  .tarjeta.p-2.divgeome
                    span 4+7+3+7+5+7+9+5 = 47
                    br
                    span(style="color:#62249E !important") #[b x̄ = 47/8 = 5.875]

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10
        .bloque-texto-c.color-secundario.tarjeta.p-3(style="border-radius:0px !important")
          .row.align-items-center
            .col-lg
              p.text-center.mb-0 #[b Media geométrica:] ⁿ√(x₁·x₂·…·xₙ): Raíz n-ésima del producto de todos los valores. Útil para tasas de crecimiento.
              p.text-center Ejemplo:
              .row.justify-content-center.align-items-center.mb-3
                .col-lg-6
                  .tarjeta.p-2.divgeome
                    span ⁸√(4·7·3·7·5·7·9·5)
                    br
                    span(style="color:#62249E !important") #[b G ≈ 5.45]

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10
        .bloque-texto-c.color-secundario.tarjeta.p-3(style="border-radius:0px !important")
          .row.align-items-center
            .col-lg
              p.text-center #[b Mediana:] valor central (ordenado). Valor que divide el conjunto ordenado en dos mitades iguales. Robusta ante valores extremos.
              .row.justify-content-center.align-items-center.mb-3
                .col-lg-6
                  .tarjeta.p-2.divgeome
                    span Ordenado: 3,4,5,5,7,7,7,9
                    br
                    span(style="color:#62249E !important") #[b Md = (5+7)/2 = 6]
    
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10
        .bloque-texto-c.color-secundario.tarjeta.p-3(style="border-radius:0px !important")
          .row.align-items-center
            .col-lg
              p.text-center.mb-0 #[b Moda:] el valor que aparece con mayor frecuencia. Puede haber más de una moda (bimodal, multimodal).
              p.text-center Ejemplo:
              .row.justify-content-center.align-items-center.mb-3
                .col-lg-6
                  .tarjeta.p-2.divgeome
                    span El 7 aparece 3 veces
                    br
                    span(style="color:#62249E !important") #[b Mo = 7]

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .bloque-texto-c.color-primario.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema3/img-05.svg', alt='', style='width: 100px; height: 100px').m-auto
            .col-lg
              p.mb-0 Las variables cualitativas se analizan con gráficas de barra o pastel (ejemplo: distribución de defectos por tipo); mientras que las cuantitativas permiten calcular medias, medianas y representarse en histogramas (ejemplo: tiempos de ejecución de pruebas).

    p.text-center.mb-4 Para finalizar, es importante conocer lo que significa cada gráfica de datos y manera de representarse:

    .tarjeta--BG04.bg-fix-bleed.p-4.px-md-5.mb-4
      .tarjeta.tarjeta--FBG01.p-4.p-lg-5.slider-fix-bleed
        SlyderA(tipo="b" data-aos="zoom-in")
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4(style="color:#000 !important") Gráfico de barras
              p(style="color:#000 !important") Se utiliza para comparar valores entre diferentes categorías de forma clara y directa. Cada barra representa una categoría específica, y su altura o longitud es proporcional al valor que se desea analizar, lo que facilita la identificación de diferencias y similitudes.
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4 
              figure
                img(src='@/assets/curso/tema7/img-07.svg', style="width: 500px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4(style="color:#000 !important") Gráfico pastel (o circular)
              p(style="color:#000 !important") Permite visualizar la distribución porcentual de un conjunto de datos. Cada sector del círculo representa una categoría y muestra qué proporción del total le corresponde, siendo útil para análisis de participación o composición.
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4   
              figure
                img(src='@/assets/curso/tema7/img-08.svg', style="width: 500px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4(style="color:#000 !important") Histograma
              p(style="color:#000 !important") Se emplea para analizar la distribución de datos cuantitativos continuos. Los valores se agrupan en intervalos o clases, y las barras muestran la frecuencia de datos en cada rango, lo que ayuda a identificar patrones, dispersión y concentración.
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4 
              figure
                img(src='@/assets/curso/tema7/img-09.svg', style="width: 500px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4(style="color:#000 !important") Gráfico de líneas
              p(style="color:#000 !important") Representa la variación de los datos a lo largo del tiempo o de una secuencia ordenada. Los puntos se conectan mediante líneas, lo que facilita la observación de tendencias, cambios y comportamientos a lo largo del periodo analizado.
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4 
              figure
                img(src='@/assets/curso/tema7/img-10.svg', style="width: 500px" ,alt='').m-auto

    .row.justify-content-center.mb-4
        .col-10(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/tema7/img-11.svg', alt='')
          .tarjeta.p-4(style="background-color:#9ECFFF; border-radius:0px; margin-top:-15px;")
            p.text-center(style="color:#000 !important") #[b ¿Cuándo usar cada gráfica?]
            p(style="color:#000 !important") Cada tipo de gráfica se utiliza según el objetivo del análisis: el gráfico de barras es adecuado para comparar categorías, el gráfico pastel para representar proporciones del total, el histograma para analizar la distribución de valores continuos y el gráfico de líneas para observar tendencias a lo largo del tiempo. En pruebas de #[i software], estas gráficas permiten analizar métricas de QA como la densidad de defectos, los tiempos de ejecución, la cobertura de pruebas y la evolución de la calidad por #[i sprint].

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    datosSlyder: [
      {
        texto:
          '<b>Registro de pruebas.</b> <br><br>Es el documento que consigna la ejecución real de las pruebas realizadas. Incluye los casos ejecutados, la fecha y el responsable, el resultado obtenido (aprobado, fallido o bloqueado), las incidencias detectadas y las evidencias asociadas, como capturas o <em>logs</em>. Sirve como historial del proceso y facilita auditorías y revisiones posteriores.',
        imagen: require('@/assets/curso/tema6/img-07.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Reporte de incidentes.</b> <br><br>Describe los defectos o comportamientos inesperados encontrados durante la ejecución, generalmente debe incluir identificador del incidente, descripción detallada del problema, resultado esperado versus el obtenido, niveles de severidad y prioridad y el estado del incidente (abierto, en análisis, corregido, cerrado).',
        imagen: require('@/assets/curso/tema6/img-08.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Reporte de resumen.</b> <br><br>Se elabora al finalizar un ciclo de pruebas y consolida los resultados globales del proceso. En él se presenta el alcance cubierto, el total de casos ejecutados, el porcentaje de éxito y de fallos, los incidentes pendientes y la evaluación de los riesgos residuales. Además, incluye una recomendación sobre la liberación del sistema, con el fin de apoyar la toma de decisiones por parte de la gerencia o los <em>stakeholders.</em>',
        imagen: require('@/assets/curso/tema6/img-09.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Reporte de resumen.</b> <br><br>Se elabora al finalizar un ciclo de pruebas y consolida los resultados globales del proceso. En él se presenta el alcance cubierto, el total de casos ejecutados, el porcentaje de éxito y de fallos, los incidentes pendientes y la evaluación de los riesgos residuales. Además, incluye una recomendación sobre la liberación del sistema, con el fin de apoyar la toma de decisiones por parte de la gerencia o los <em>stakeholders.</em>',
        imagen: require('@/assets/curso/tema6/img-10.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Reporte de resumen.</b> <br><br>Se elabora al finalizar un ciclo de pruebas y consolida los resultados globales del proceso. En él se presenta el alcance cubierto, el total de casos ejecutados, el porcentaje de éxito y de fallos, los incidentes pendientes y la evaluación de los riesgos residuales. Además, incluye una recomendación sobre la liberación del sistema, con el fin de apoyar la toma de decisiones por parte de la gerencia o los <em>stakeholders.</em>',
        imagen: require('@/assets/curso/tema6/img-11.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Reporte de resumen.</b> <br><br>Se elabora al finalizar un ciclo de pruebas y consolida los resultados globales del proceso. En él se presenta el alcance cubierto, el total de casos ejecutados, el porcentaje de éxito y de fallos, los incidentes pendientes y la evaluación de los riesgos residuales. Además, incluye una recomendación sobre la liberación del sistema, con el fin de apoyar la toma de decisiones por parte de la gerencia o los <em>stakeholders.</em>',
        imagen: require('@/assets/curso/tema6/img-12.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Reporte de resumen.</b> <br><br>Se elabora al finalizar un ciclo de pruebas y consolida los resultados globales del proceso. En él se presenta el alcance cubierto, el total de casos ejecutados, el porcentaje de éxito y de fallos, los incidentes pendientes y la evaluación de los riesgos residuales. Además, incluye una recomendación sobre la liberación del sistema, con el fin de apoyar la toma de decisiones por parte de la gerencia o los <em>stakeholders.</em>',
        imagen: require('@/assets/curso/tema6/img-13.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Reporte de resumen.</b> <br><br>Se elabora al finalizar un ciclo de pruebas y consolida los resultados globales del proceso. En él se presenta el alcance cubierto, el total de casos ejecutados, el porcentaje de éxito y de fallos, los incidentes pendientes y la evaluación de los riesgos residuales. Además, incluye una recomendación sobre la liberación del sistema, con el fin de apoyar la toma de decisiones por parte de la gerencia o los <em>stakeholders.</em>',
        imagen: require('@/assets/curso/tema6/img-14.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
    ],
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
