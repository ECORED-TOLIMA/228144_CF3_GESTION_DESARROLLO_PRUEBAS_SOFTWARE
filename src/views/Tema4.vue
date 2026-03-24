<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Ciclo de vida del <em>software</em> (SDLC)

    p.mb-4 Es el conjunto estructurado de fases, actividades, tareas y entregables que describen el proceso completo de creación, despliegue, mantenimiento y eventual retiro de un sistema de <em>software</em>, desde la concepción de la idea hasta su descontinuación.

    .row.justify-content-center
      .col-lg-12
        .cajon.cajon.C01.px-4.py-4(style="border-radius:15px")
          .row
            .col-lg-3.col-12.text-center.order-lg-2.order-1.mb-lg-0.mb-3.ms-lg-auto.d-none.d-lg-block
              figure(data-aos="fade-down")
                img(src='@/assets/curso/tema4/img-01.svg', alt='' style="max-width: 250px;")
            .col-lg-9.col-12.order-lg-1.order-2
              p El SDLC no es un proceso único y universal, existen múltiples modelos que organizan estas fases de formas distintas según la naturaleza del proyecto, el nivel de incertidumbre en los requisitos, el tamaño del equipo y las restricciones de tiempo y presupuesto. Lo que todos comparten es la misma finalidad: producir <em>software</em> de calidad de forma controlada, predecible y repetible.
              p La importancia del SDLC para los equipos de pruebas y calidad (QA) es fundamental: el modelo de ciclo de vida adoptado determina cuándo, cómo y en qué profundidad se integrará la actividad de <em>testing</em> en el proyecto. Un <em>tester</em> que comprende el SDLC puede anticipar sus intervenciones, diseñar mejor los artefactos de prueba y comunicarse efectivamente con el equipo de desarrollo.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 SDLC vs. Metodología de desarrollo

    .row.mb-4
      .col-1.d-none.d-lg-block
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img-02.svg', alt='Imagen decorativa')
      .col-11
        p.mb-0(data-aos="fade-right") El ciclo de vida del desarrollo de <em>software</em> (SDLC) establece qué fases componen el proceso y en qué secuencia se desarrollan, mientras que la metodología define cómo se ejecutan dichas fases; es decir, qué prácticas, roles, ceremonias y herramientas se emplean en su implementación. Por ejemplo, Scrum es una metodología que aplica un enfoque iterativo e incremental del SDLC. 

    p.mb-4 Cada fase del ciclo constituye un período con un propósito específico, actividades claramente definidas y criterios de entrada y salida que determinan su inicio y cierre. Dentro de estas fases se realizan actividades o tareas concretas como el análisis de requisitos, el diseño de arquitectura, la codificación, la ejecución de pruebas y el despliegue, las cuales generan entregables tangibles —como el documento de requisitos (SRS), diseños técnicos, código fuente, planes y reportes de pruebas o manuales de usuario— que sirven de insumo para la siguiente etapa.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#19538D !important")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img-03.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p El proceso se sustenta, además, en criterios de calidad que permiten aprobar cada fase y garantizar que se cumplan los estándares establecidos antes de avanzar, así como en la definición clara de roles y responsabilidades denominados <em>product owner</em>, arquitecto, desarrollador, <em>tester</em>, líder de proyecto, usuario final o auditor de calidad que aseguran una adecuada distribución del trabajo. Complementariamente, se incorporan mecanismos de control como revisiones, auditorías, métricas e indicadores para monitorear el avance, identificar desviaciones y aplicar acciones correctivas. Aunque cada modelo organiza el proceso de manera particular, la mayoría coincide en un conjunto de fases fundamentales que constituyen el núcleo del desarrollo formal de <em>software</em>.

    p.mb-4 A continuación, se presenta una síntesis de las fases fundamentales, describiendo el objetivo principal de cada etapa, sus entregables clave y el rol específico de aseguramiento de la calidad (QA). Esta visión permite comprender cómo la calidad se integra de manera transversal a lo largo de todo el proceso de desarrollo:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 3.
          span Fases SDLC
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 10%; background-color: #FFEBBE;") #
                th(style="width: 10%; background-color: #FFEBBE;") Fase
                th(style="width: 20%; background-color: #FFEBBE;") Objetivo principal
                th(style="width: 20%; background-color: #FFEBBE;") Entregable clave
                th(style="width: 20%; background-color: #FFEBBE;") Rol de QA
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") 1
                td(style="background-color: #F6F6F6;") Planificación
                td(style="background-color: #F6F6F6;") Definir el alcance, viabilidad, cronograma, recursos y riesgos del proyecto antes de iniciar el desarrollo.
                td(style="background-color: #F6F6F6;") Plan de proyecto, análisis de viabilidad.
                td(style="background-color: #F6F6F6;") Revisión de riesgos de calidad; estimación del esfuerzo de pruebas.
              tr(data-aos="fade-right")
                td.text-center 2
                td Análisis de requisitos
                td Elicitar, documentar y validar las necesidades funcionales y no funcionales del sistema con los stakeholders.
                td SRS (especificación de requisitos).
                td Revisión de requisitos para detectar ambigüedades; preparar casos de prueba de aceptación.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") 3
                td(style="background-color: #F6F6F6;") Diseño del sistema
                td(style="background-color: #F6F6F6;") Definir la arquitectura, los componentes, las interfaces, los datos y la infraestructura del sistema.
                td(style="background-color: #F6F6F6;") Documento de diseño, diagramas UML.
                td(style="background-color: #F6F6F6;") Revisión del diseño; diseño de pruebas de integración y de sistema.
              tr(data-aos="fade-right")
                td.text-center 4
                td Implementación
                td Codificar los componentes del sistema siguiendo los estándares y el diseño aprobado.
                td Código fuente, componentes integrados.
                td Pruebas unitarias; code <em>review</em>; análisis estático de código.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") 5
                td.text-center(style="background-color: #F6F6F6;") Pruebas
                td.text-center(style="background-color: #F6F6F6;") Verificar que el sistema cumple los requisitos funcionales y no funcionales; detectar y reportar defectos.
                td.text-center(style="background-color: #F6F6F6;") Reporte de pruebas, registro de defectos.
                td.text-center(style="background-color: #F6F6F6;") Ejecución de pruebas funcionales, de rendimiento, seguridad e integración.
              tr(data-aos="fade-right")
                td.text-center 6
                td Despliegue
                td Instalar, configurar y poner en operación el sistema en el entorno de producción para los usuarios finales.
                td Sistema en producción, manual de usuario.
                td Pruebas de aceptación del usuario (UAT); <em>smoke testing</em> en producción.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") 7
                td.text-center(style="background-color: #F6F6F6;") Mantenimiento
                td.text-center(style="background-color: #F6F6F6;") Corregir defectos post-producción, adaptar el sistema a cambios del entorno y agregar nuevas funcionalidades.
                td.text-center(style="background-color: #F6F6F6;") Parches, actualizaciones, <em>releases</em>.
                td.text-center(style="background-color: #F6F6F6;") Pruebas de regresión; pruebas de impacto de cambio.

    .row.justify-content-center
      .col-lg-10(data-aos="fade-right")
        .bloque-texto-c.color-primario.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema3/img-05.svg', alt='', style='width: 80px; height: 80px').m-auto
            .col-lg
              h4 El rol de QA no comienza en la fase de pruebas
              p.mb-0 Un error frecuente es pensar que el trabajo del tester inicia en la fase 5. En realidad, el aseguramiento de calidad interviene desde la fase Planificación: revisar requisitos, inspeccionar el diseño y realizar pruebas unitarias durante la implementación reduce drásticamente el costo de corrección de defectos (principio de detección temprana del IEEE 730).

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Modelos de ciclo de vida

    p.mb-4 Un modelo de ciclo de vida es una representación abstracta del proceso de desarrollo que describe cómo se organizan, secuencian y relacionan las fases del SDLC. La elección del modelo adecuado es una decisión estratégica que impacta directamente la calidad, el costo y el tiempo del proyecto. Por tal motivo, se detallan cada uno de ellos:

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Modelo en cascada (Waterfall)

    .row.justify-content-center.mb-4
      .col-lg-12
        .titulo-sexto.color-primario(data-aos="fade-right")
          h5 Figura 3.
          span Modelo en cascada
        figure.d-lg-flex.d-none(data-aos="zoom-in")
          img(src='@/assets/curso/tema4/figura-1-1v.svg' alt="Figura 3 que representa el modelo de cascada el cual tiene las fases de Planificación – Requisitos – Diseño – Implementación – Pruebas – Despliegue – Mantenimiento.")
        figure.d-lg-none.d-flex(data-aos="zoom-in")
          img(src='@/assets/curso/tema4/figura-1-2v.svg' alt="Figura 3 que representa el modelo de cascada el cual tiene las fases de Planificación – Requisitos – Diseño – Implementación – Pruebas – Despliegue – Mantenimiento.")

    p Es el modelo más antiguo y conocido, propuesto por Royce en 1970. Las fases se ejecutan de forma estrictamente secuencial: cada una debe completarse y aprobarse formalmente antes de iniciar la siguiente. No hay solapamiento ni retroceso planificado entre fases.
    p.mb-4 Se usa en proyectos con requisitos muy estables y bien definidos desde el inicio, contratos de precio fijo, sistemas críticos con alta necesidad de documentación formal (defensa, aeronáutica, sector bancario). Si los requisitos cambian a mitad del proyecto, el costo de retroceder es muy alto; por ello, si las pruebas ocurren tarde en el ciclo, se eleva el costo de corrección de defectos.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10
        .cajon.cajon.C01.color-primario.p-4
          .row
            .col-lg-4.col-12.text-center.order-lg-2.order-1.mb-lg-0.mb-3.ms-lg-auto.d-none.d-lg-block
              figure(data-aos="fade-down")
                img(src='@/assets/curso/tema4/img-04.svg', alt='' style="max-width: 250px;")
            .col-lg-8.col-12.order-lg-1.order-2
              p.mb-0 Entre sus principales ventajas se encuentran la facilidad para gestionar y documentar el proyecto, gracias a una estructura clara y ordenada, así como la definición precisa de entregables en cada etapa, lo que facilita el control y seguimiento. Además, resulta especialmente adecuado para equipos grandes, donde la planificación detallada y la formalización de procesos favorecen la coordinación. Sin embargo, presenta desventajas importantes, como su rigidez frente a cambios en los requisitos, la realización tardía de pruebas, lo que puede generar defectos más costosos de corregir y el hecho de que el cliente solo visualiza el producto final al término del proceso, limitando la retroalimentación temprana.

    .BMG3.px-md-5.px-4
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-10
          .row.align-items-center.mb-4(data-aos="zoom-in")
            .col-auto.pe-0(style="z-index:2")
              figure
                img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
            .col-lg-auto.col-9.titulo01(style="z-index:1")
              .p-1
                h3.mb-0.ms-3 Modelo en V <em>(V-Model)</em> verificación

        .row.justify-content-center.mb-4(data-aos="fade-left")
          .col-lg-10.col-12
            .titulo-sexto.color-primario
              h5 Figura 4.
              span Modelo en cascada

          .row.justify-content-center
            .col-10
              figure.desktop
                img(src='@/assets/curso/tema4/figura-2-1v.svg', alt='Figura 4 que representa el modelo en V el cual aplica una correspondencia de verificación por medio de las fases de Planificación – Requisitos – Diseño – Implementación – Pruebas unitarias – Pruebas integradas – Pruebas aceptadas.', style="width: 1043px").m-auto
          .col-12
            figure.movil
              img(src='@/assets/curso/tema4/figura-2-2v.svg', alt='Figura 4 que representa el modelo en V el cual aplica una correspondencia de verificación por medio de las fases de Planificación – Requisitos – Diseño – Implementación – Pruebas unitarias – Pruebas integradas – Pruebas aceptadas.', style="width: 1043px").m-auto

        p.mb-4 Este modelo es una extensión del modelo en cascada en la que cada fase del desarrollo tiene asociada una fase de prueba correspondiente. Gráficamente, la rama izquierda de la “V” representa las etapas de análisis y diseño, mientras que la rama derecha corresponde a los niveles de verificación y validación; en la base se encuentra la codificación, que conecta ambas dimensiones. Su principio fundamental es que las pruebas no se dejan para el final, sino que se planifican en paralelo al desarrollo: al definir los requisitos se diseñan las pruebas de aceptación, y al estructurar la arquitectura del sistema se preparan las pruebas de integración y sistema. Es especialmente recomendable en contextos donde la verificación formal es crítica —como en los sectores médico, financiero o aeronáutico— y suele emplearse junto con estándares como el IEEE 829.

        .row.justify-content-center(data-aos="fade-right")
          .col-lg-12
            .cajon.cajon.C04.color-secundario.p-4
              p.mb-0 Entre sus principales ventajas se encuentran la planificación temprana de pruebas, la alta trazabilidad entre requisitos y casos de prueba, así como la posibilidad de detectar defectos en fases iniciales. No obstante, mantiene una estructura relativamente rígida frente a cambios en los requisitos, no favorece el prototipado temprano y exige una amplia producción documental, lo que puede aumentar tiempos y costos en entornos dinámicos.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Modelo iterativo e incremental

    .row.justify-content-center.mb-4
      .col-lg-12
        .titulo-sexto.color-primario(data-aos="fade-right")
          h5 Figura 5.
          span Modelo iterativo
        figure.d-lg-flex.d-none(data-aos="zoom-in")
          img(src='@/assets/curso/tema4/figura-3-1v.svg' alt="Figura 5 que representa el modelo iterativo, donde ciclos cortos integran actividades de requisitos, diseño, desarrollo y aseguramiento de la calidad para generar incrementos sucesivos del producto, los cuales se consolidan en un release final listo para su entrega.")
        figure.d-lg-none.d-flex(data-aos="zoom-in")
          img(src='@/assets/curso/tema4/figura-3-2v.svg' alt="Figura 5 que representa el modelo iterativo, donde ciclos cortos integran actividades de requisitos, diseño, desarrollo y aseguramiento de la calidad para generar incrementos sucesivos del producto, los cuales se consolidan en un release final listo para su entrega.")

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10
        p El sistema se construye en ciclos cortos (iteraciones), cada uno produciendo un incremento funcional del producto. Al final de cada iteración hay un entregable parcial que puede ser evaluado por el cliente, permitiendo incorporar retroalimentación antes de la siguiente iteración.
        .bloque-texto-c.color-secundario.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema4/img-05.svg', alt='', style='width: 80px; height: 80px').m-auto
            .col-lg
              p.mb-0 Base de metodologías ágiles: Scrum, XP y Kanban son implementaciones del modelo iterativo. La diferencia entre iterativo e incremental está en el énfasis: el iterativo refina el producto completo; el incremental añade módulos nuevos en cada ciclo. 

    p Entre sus principales ventajas se destacan la posibilidad de obtener retroalimentación temprana del cliente, lo que permite validar el producto desde etapas iniciales; su alta adaptabilidad a cambios en los requisitos, facilitando ajustes conforme evoluciona el proyecto; y la integración del aseguramiento de la calidad (QA) en cada iteración, lo que contribuye a detectar y corregir errores de manera continua. No obstante, también presenta desventajas importantes: puede generarse #[b scope creep] (crecimiento descontrolado del alcance) si no existe una adecuada gestión de cambios; requiere una participación activa y constante del cliente, lo cual no siempre es viable; y puede resultar complejo estimar el costo total del proyecto desde el inicio debido a la naturaleza evolutiva del desarrollo. Además, existen otros modelos relevantes que ofrecen enfoques alternativos según las características y necesidades del proyecto.
    p.mb-4 De igual manera y no menos importantes, existen los siguientes modelos:

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.color-primario.p-5(data-aos="fade-right")(style="background-color: #DFEFFF !important")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema4/img-06.svg', alt="Imagen decorativa")
        h4.text-center Modelo espiral
        p Combina el enfoque iterativo con el énfasis en gestión de riesgos. En cada vuelta de la espiral se evalúan los riesgos antes de avanzar. Boehm (1986).
        p.mb-0 Ideal para proyectos grandes con alta incertidumbre técnica.
      .col-md.tarjeta.color-primario.p-5(data-aos="flip-up")(style="background-color: #FFEBBE !important")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema4/img-07.svg', alt="Imagen decorativa")
        h4.text-center Metodologías ágiles
        p Grupo de enfoques (Scrum, XP, Kanban) basados en el Manifiesto Ágil (2001): individuos sobre procesos, #[i software] funcional sobre documentación extensa, colaboración sobre contratos.
        p.mb-0 Ideal para #[i startups] y productos digitales con requisitos cambiantes.
      .col-md.tarjeta.color-primario.p-5(data-aos="fade-left")(style="background-color: #F1E2FF !important")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema4/img-08.svg', alt="Imagen decorativa")
        h4.text-center Modelo DevOps
        p Integra desarrollo, pruebas y operaciones en un ciclo continuo (CI/CD). El despliegue puede ser diario o incluso por horas y las pruebas automatizadas son su pilar fundamental.
        p.mb-0 Ideal para plataformas SaaS o servicios en la nube.

    .row.mb-4.ms-0
      .col-auto.bg-c1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/ico2.svg', alt='', style='width: 9.5px')
          .col
            h3.mb-0 ¿Qué modelo elegir? 

    p.mb-4 Para tener mayores bases sobre esta importante respuesta, se presenta la siguiente tabla orientadora:

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 4.
          span Guía de decisión del modelo a elegir
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 10%; background-color: #FFEBBE;") Modelo
                th(style="width: 15%; background-color: #FFEBBE;") Requisitos			
                th(style="width: 15%; background-color: #FFEBBE;") Cambios
                th(style="width: 15%; background-color: #FFEBBE;") Pruebas
                th(style="width: 20%; background-color: #FFEBBE;") Mejor para
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Cascada
                td(style="background-color: #F6F6F6;") Estables y completos.
                td(style="background-color: #F6F6F6;") Muy difícil.
                td(style="background-color: #F6F6F6;") Fase tardía.
                td(style="background-color: #F6F6F6;") Contratos fijos, sistemas críticos documentados.
              tr(data-aos="fade-right")
                td.text-center Modelo V
                td Estables.
                td Difícil.
                td Planificada desde el inicio.
                td Sistemas médicos, financieros, aeronáuticos.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Iterativo
                td(style="background-color: #F6F6F6;") Parcialmente conocidos.
                td(style="background-color: #F6F6F6;") Posible entre iteraciones.
                td(style="background-color: #F6F6F6;") Integrada en cada #[i sprint].
                td(style="background-color: #F6F6F6;") Productos con cliente disponible y requisitos evolutivos.
              tr(data-aos="fade-right")
                td.text-center Espiral
                td Inciertos o complejos.
                td Gestionado por riesgos.
                td En cada ciclo con análisis de riesgos.
                td Proyectos grandes con alta incertidumbre técnica.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Ágil
                td.text-center(style="background-color: #F6F6F6;") Cambiantes.
                td.text-center(style="background-color: #F6F6F6;") Bienvenidos.
                td.text-center(style="background-color: #F6F6F6;") Continua — TDD / BDD.
                td.text-center(style="background-color: #F6F6F6;") Startups, apps digitales, equipos pequeños y medianos.
              tr(data-aos="fade-right")
                td.text-center DevOps
                td Muy cambiantes.
                td Continuos.
                td Automatizada — CI/CD.
                td Plataformas SaaS, microservicios, entrega continua.

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3 Metodologías de desarrollo de <em>software</em>

    p Esta metodología es un marco estructurado de principios, prácticas, procesos y herramientas que orientan la forma en que un equipo organiza y ejecuta su trabajo para construir soluciones tecnológicas de manera sistemática, repetible y predecible.

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-10
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-c2(data-aos="fade-right")             
              .col-lg.p-4
                p A diferencia del modelo de ciclo de vida como se mencionó previamente que establece qué fases componen el proceso (análisis, diseño, desarrollo, pruebas, implementación, etc.), la metodología define cómo se desarrollan esas fases en la práctica: qué roles intervienen, cómo fluye la comunicación, qué artefactos se generan, con qué frecuencia se realizan entregas y bajo qué criterios se toman decisiones técnicas y de gestión. 
                p.mb-0 La selección de una metodología adecuada no es arbitraria, sino que depende de variables estratégicas como el tamaño y la distribución del equipo, el nivel de claridad y estabilidad de los requisitos, la complejidad y naturaleza del producto, la cultura organizacional y las expectativas del cliente. En este sentido, no existe una metodología universalmente superior, sino enfoques más o menos pertinentes según el contexto del proyecto.
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema4/img-09.png', alt='', class="w-100 h-100 object-fit-cover")

    p.text-center.mb-4 Existen metodologías tradicionales predictivas como son:

    .row.mb-4
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-right")(style="background-color:#DFEFFF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema4/img-10.svg' alt="")
        h4.text-center RUP
        p.text-center.mb-0 Iterativa, centrada en arquitectura, casos de uso y cuatro fases (inicio, elaboración, construcción, transición), su mejor uso es en proyectos medianos-grandes con requisitos parcialmente definidos.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-right")(style="background-color:#F1E2FF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema4/img-11.svg' alt="")
        h4.text-center MSF - Microsoft Solutions Framework
        p.text-center.mb-0 Marco ágil con roles definidos, orientado al desarrollo de soluciones tecnológicas, especialmente en entornos corporativos con tecnologías Microsoft.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-left")(style="background-color:#DFEFFF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema4/img-12.svg' alt="")
        h4.text-center CMMI - Modelo de madurez
        p.text-center.mb-0 No es una metodología sino un marco de mejora de procesos en cinco niveles, su mejor uso es en organizaciones que buscan certificación y mejora continua de procesos.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-left")(style="background-color:#F1E2FF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema4/img-13.svg' alt="")
        h4.text-center Cascada -Secuencial estricta
        p.text-center.mb-0 Cada fase es aprobada formalmente antes de avanzar, su mejor uso es en contratos de precio fijo, requisitos estables y sistemas críticos

    p.text-center.mb-4 Igualmente, existen metodologías ágiles adaptativas:

    .cajon.tabs-a__tab.p-5.mb-4
      SlyderB(:datos="datosSlyder")


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    datosSlyder: [
      {
        texto:
          '<b>Scrum</b> <br><br>Organiza el trabajo en <em>sprints</em> de 1–4 semanas. Define 3 roles (<em>product owner</em>, <em>scrum master</em>, <em>development team</em>), 3 artefactos (<em>product backlog</em>, <em>sprint backlog</em>, incremento) y 4 ceremonias (<em>planning</em>, <em>daily</em>, <em>review</em>, <em>retrospective</em>). Es el más usado a nivel mundial.',
        imagen: require('@/assets/curso/tema4/img-14.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Extreme Programming (XP)</b> <br><br>Enfatiza las prácticas técnicas de excelencia: TDD (Test-Driven Development), programación en parejas, integración continua, <em>refactoring</em> y <em>releases</em> frecuentes. Diseñada para proyectos con requisitos muy cambiantes y complementa perfectamente a Scrum en la parte técnica.',
        imagen: require('@/assets/curso/tema4/img-15.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Kanban</b> <br><br>Visualiza el trabajo en un tablero de columnas (por hacer / en progreso / hecho) y limita el trabajo en curso (WIP) para evitar sobrecarga. No tiene iteraciones fijas: el flujo es continuo, convirtiéndose en deal para equipos de soporte, mantenimiento y operaciones.',
        imagen: require('@/assets/curso/tema4/img-16.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Crystal, SAFe, LeSS y DevOps: Crystal</b> <br><br>Familia de metodologías adaptadas al tamaño del equipo.<br><br> - <b>SAFe:</b> Scrum escalado para grandes organizaciones (100+ personas).<br> - <b>LeSS:</b> Scrum para múltiples equipos.<br> - <b>DevOps:</b> integra desarrollo, pruebas y operaciones en un pipeline CI/CD continuo.',
        imagen: require('@/assets/curso/tema4/img-17.png'),
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
