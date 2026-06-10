<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Procesos y gestión BMP

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema5/img-01.png', alt='')

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0 Un proceso es una secuencia estructurada de actividades interrelacionadas que transforman entradas (recursos, información, materiales) en salidas de valor (productos, servicios, información procesada), consumiendo recursos y siguiendo reglas definidas para alcanzar un objetivo específico.

    p.mb-4 En el contexto de la ingeniería de <em>software</em> y los sistemas de información, un proceso define el cómo se realiza el trabajo: qué actividades se ejecutan, en qué orden, quién las realiza, qué recursos consumen y qué resultados producen. Todo sistema organizacional se puede describir como un conjunto de procesos interconectados.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Características de un proceso

    p.mb-4 Antes de analizar los elementos que lo conforman, es clave entender que esta forma de trabajo permite ordenar las actividades, asegurar coherencia en las acciones y orientar los esfuerzos hacia resultados claros y medibles. Su correcta definición facilita el control, la mejora continua y la generación de valor tanto a nivel interno como externo. Por este motivo, se presentan las características esenciales que lo describen:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img-02.svg' alt='AvatarTop')
          h4.text-center Tiene un objetivo definido
          p.mb-0 Todo proceso existe para lograr un resultado específico y medible. Sin objetivo claro, no hay proceso, hay caos de actividades.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img-03.svg' alt='AvatarTop')
          h4.text-center Interrelaciona actividades
          p.mb-0 Las actividades del proceso están conectadas en una secuencia lógica donde la salida de una alimenta la entrada de la siguiente.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img-04.svg' alt='AvatarTop')
          h4.text-center Tiene entradas y salidas
          p.mb-0 Recibe insumos (datos, materiales, solicitudes) y produce resultados de valor para un cliente interno o externo.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img-05.svg' alt='AvatarTop')
          h4.text-center Es medible y controlable
          p.mb-0 Se pueden definir indicadores (KPI) para medir su eficiencia, calidad y tiempo. Lo que no se mide, no se puede mejorar.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img-06.svg' alt='AvatarTop')
          h4.text-center Es repetible y replicable
          p.mb-0 Un proceso bien definido produce resultados consistentes cada vez que se ejecuta, independientemente de quién lo realice.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img-07.svg' alt='AvatarTop')
          h4.text-center Tiene un responsable
          p.mb-0 Cada proceso tiene un dueño (<em>process owner</em>) que asegura su correcto funcionamiento, mejora continua y alineación con los objetivos organizacionales.

    p.text-center.mb-4 Las anteriores características, se representan de manera puntual en el siguiente esquema: 

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-primario(data-aos="fade-right")
          h5 Figura 6.
          span Características de un proceso
        figure.d-lg-flex.d-none(data-aos="zoom-in")
          img(src='@/assets/curso/tema5/figura-1-1v.svg' alt="Figura 6 resume las características de un proceso: la definición de un objetivo con resultados medibles, la interrelación de actividades en una secuencia lógica, la transformación de insumos en resultados de valor, el control mediante indicadores (KPI), la ejecución consistente y la asignación de un responsable que asegura su correcto funcionamiento y alineación organizacional.")
        figure.d-lg-none.d-flex(data-aos="zoom-in")
          img(src='@/assets/curso/tema5/figura-1-2v.svg' alt="Figura 6 resume las características de un proceso: la definición de un objetivo con resultados medibles, la interrelación de actividades en una secuencia lógica, la transformación de insumos en resultados de valor, el control mediante indicadores (KPI), la ejecución consistente y la asignación de un responsable que asegura su correcto funcionamiento y alineación organizacional.")

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Tipos de entradas (<em>inputs</em>)

    p.mb-4 Las entradas son todos los recursos, información y condiciones que el proceso necesita para poder ejecutarse. Sin entradas adecuadas, el proceso no puede producir salidas de calidad (principio GIGO). Dentro de ellas se encuentran:

    .row.mb-4
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-right")(style="background-color:#DFEFFF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema5/img-08.svg' alt="")
        h4.text-center Información y datos
        p.text-center.mb-0 Documentos y registros que guían la ejecución del proceso.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-right")(style="background-color:#F1E2FF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema5/img-09.svg' alt="")
        h4.text-center Materiales / recursos
        p.text-center.mb-0 <em>Software</em> y suministros físicos necesarios para el proceso.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-left")(style="background-color:#DFEFFF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema5/img-10.svg' alt="")
        h4.text-center Recursos humanos
        p.text-center.mb-0  Personas con habilidades y conocimientos que ejecutan el proceso.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-left")(style="background-color:#F1E2FF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema5/img-11.svg' alt="")
        h4.text-center Reglas y restricciones
        p.text-center.mb-0 Políticas y normativas que condicionan la ejecución del proceso.

    p.text-center.mb-4 Al respecto, el siguiente esquema detalla los componentes de un proceso:

    .row.justify-content-center.mb-4
      .col-lg-12
        .titulo-sexto.color-primario(data-aos="fade-right")
          h5 Figura 7.
          span Componentes de un proceso
        figure.d-lg-flex.d-none(data-aos="zoom-in")
          img(src='@/assets/curso/tema5/figura-2-1v.svg' alt="La figura 2 se presenta el ciclo PHVA, una metodología de mejora continua que incluye cuatro fases: planear, donde se establecen objetivos y procesos; hacer, que implica la implementación de lo planeado; verificar, para evaluar los resultados frente a los objetivos; y actuar, donde se toman acciones para corregir y mejorar continuamente.")
        figure.d-lg-none.d-flex(data-aos="zoom-in")
          img(src='@/assets/curso/tema5/figura-2-2v.svg' alt="La figura 2 se presenta el ciclo PHVA, una metodología de mejora continua que incluye cuatro fases: planear, donde se establecen objetivos y procesos; hacer, que implica la implementación de lo planeado; verificar, para evaluar los resultados frente a los objetivos; y actuar, donde se toman acciones para corregir y mejorar continuamente.")

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Procedimientos: el detalle operativo del proceso

    p Un procedimiento es la descripción detallada y paso a paso de cómo ejecutar una actividad específica dentro de un proceso. Si el proceso dice "validar los datos del usuario", el procedimiento describe exactamente cómo hacerlo: qué campos verificar, en qué orden, qué hacer ante cada tipo de error y quién aprueba el resultado.
    p.mb-4 La siguiente tabla, detalla los elementos presentes dentro de cada procedimiento:

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 5.
          span Elementos del procedimiento
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 15%; background-color: #FFEBBE;") Elemento del procedimiento
                th(style="width: 15%; background-color: #FFEBBE;") Descripción
                th(style="width: 15%; background-color: #FFEBBE;") Ejemplo en <em>software</em>
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Objetivo
                td(style="background-color: #F6F6F6;") Qué resultado específico se busca alcanzar con el procedimiento.
                td(style="background-color: #F6F6F6;") Verificar que un caso de prueba cumple todos los criterios de aceptación.
              tr(data-aos="fade-right")
                td Alcance
                td A qué actividades, sistemas o equipos aplica el procedimiento.
                td Aplica a todos los casos de prueba de regresión del módulo de autenticación.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Roles y responsabilidades
                td(style="background-color: #F6F6F6;") Quién ejecuta, quién aprueba, quién es notificado en cada paso.
                td(style="background-color: #F6F6F6;") Tester ejecuta; #[i QA lead] revisa; #[i product owner] aprueba resultado final.
              tr(data-aos="fade-right")
                td Pasos secuenciales
                td La descripción numerada de cada acción a realizar en orden.
                td 1) Abrir TestRail 2) Seleccionar ciclo 3) Ejecutar caso 4) Registrar resultado.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Criterios de aceptación
                td(style="background-color: #F6F6F6;") Las condiciones que determinan si el procedimiento fue exitoso.
                td(style="background-color: #F6F6F6;") El 100 % de los casos de alta prioridad deben pasar sin defectos críticos abiertos.
              tr(data-aos="fade-right")
                td Registros y evidencias
                td Qué documentos o capturas se generan como evidencia de la ejecución.
                td Capturas de pantalla, log de ejecución, reporte de defectos en Jira.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Formas de representar gráficamente un proceso

    p.mb-4 La representación gráfica transforma la descripción textual de un proceso en un diagrama visual que facilita su comprensión, análisis y comunicación entre diferentes actores (técnicos, gerentes, usuarios). Existen varios tipos de diagramas según el nivel de detalle y el propósito:

    .BMG3.BMG3--full.px-md-5.px-4.mb-4
      .row.justify-content-center(data-aos="fade-left")
        .col-lg-10
          .contenido-interno
            PasosA.color-primario.mb-5(tipo="n")
              .row.justify-content-center
                .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
                  h3 Diagrama de flujo
                  p.mb-0 Es el más tradicional. Usa formas geométricas estandarizadas (rectángulos, rombos, óvalos) para representar actividades, decisiones e inicio/fin. Ideal para procedimientos simples.
                .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/tema5/img-12.svg', alt="")
              .row.justify-content-center
                .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/tema5/img-13.svg', alt="")
                .col-lg-8(data-aos="fade-left")
                  h3 Diagrama BPMN - Business Process Model and Notation 
                  p.mb-0 Es el estándar internacional (OMG) para modelar procesos de negocio. Rica notación con eventos, actividades, compuertas y flujos. Compatible con herramientas de automatización
              .row.justify-content-center
                .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
                  h3 Diagrama de carril (#[i swimlane])
                  p.mb-0 Extiende el diagrama de flujo añadiendo carriles horizontales o verticales que representan los actores o departamentos responsables de cada actividad. Muestra claramente quién hace qué.
                .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/tema5/img-14.svg', alt="")

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-8
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0 Partiendo de lo anterior, se relacionan las partes que se implementan en los diferentes diagramas elegidos y su respectivo significado: 

    .row.justify-content-center.mb-4
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.cajon.C04.h-100(style="border-radius: 0px")
          figure
            img(src='@/assets/curso/tema5/img-15.svg' alt="")
          .p-4
            h4 Evento de inicio
            p.mb-0 Círculo delgado. Inicia el flujo del proceso. Puede ser disparado por tiempo, mensaje o condición.	
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta.cajon.C04.h-100(style="border-radius: 0px")
          figure
            img(src='@/assets/curso/tema5/img-16.svg' alt="")
          .p-4
            h4 Evento de fin
            p.mb-0 Círculo grueso. Marca la terminación del proceso o de un flujo. Puede ser final o intermedio.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta.cajon.C04.h-100(style="border-radius: 0px")
          figure
            img(src='@/assets/curso/tema5/img-17.svg' alt="")
          .p-4
            h4 Actividad / tarea
            p.mb-0 Rectángulo redondeado. Unidad de trabajo que realiza un actor. Puede ser manual, automática o de servicio.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.cajon.C04.h-100(style="border-radius: 0px")
          figure
            img(src='@/assets/curso/tema5/img-18.svg' alt="")
          .p-4
            h4 Compuerta exclusiva
            p.mb-0 Rombo con X. Punto de decisión donde solo un camino es válido según la condición evaluada (sí/no).

    .row.justify-content-center.mb-4
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.cajon.C04.h-100(style="border-radius: 0px")
          figure
            img(src='@/assets/curso/tema5/img-19.svg' alt="")
          .p-4
            h4 Compuerta paralela
            p.mb-0 Rombo con +. Divide el flujo en múltiples caminos que se ejecutan simultáneamente (#[i fork/join]).
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta.cajon.C04.h-100(style="border-radius: 0px")
          figure
            img(src='@/assets/curso/tema5/img-20.svg' alt="")
          .p-4
            h4 Flujo de secuencia
            p.mb-0 Flecha sólida. Conecta elementos y define el orden de ejecución del proceso.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta.cajon.C04.h-100(style="border-radius: 0px")
          figure
            img(src='@/assets/curso/tema5/img-21.svg' alt="")
          .p-4
            h4 Flujo de mensaje
            p.mb-0 Línea discontinua. Representa la comunicación entre participantes de diferentes #[i pools] o sistemas.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.cajon.C04.h-100(style="border-radius: 0px")
          figure
            img(src='@/assets/curso/tema5/img-22.svg' alt="")
          .p-4
            h4 #[i Pool / Lane]
            p.mb-0 Contenedor que agrupa actividades de un participante. Los #[i lanes] dividen el #[i pool] por roles o departamentos.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({}),
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
