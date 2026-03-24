<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Requisitos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(style="background-color:#19538D !important")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img-01.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p Un requisito es una condición o capacidad que el sistema de #[i software] debe cumplir para satisfacer una necesidad del usuario o alcanzar un objetivo definido por las partes interesadas. Los requisitos son la base contractual entre el cliente y el equipo de desarrollo.

    Separador

    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.1 Requisitos funcionales y no funcionales

    p.mb-4 Los requisitos funcionales “el qué hace el sistema” constituyen la esencia operativa del #[i software]; definen las tareas específicas que el sistema debe realizar para satisfacer las necesidades del negocio. Se centran en el "qué" hace la solución, abarcando desde el procesamiento de cálculos automáticos y la generación de informes hasta la validación de entradas de datos para evitar errores de tipeo. En el contexto de la calidad del producto, un requisito funcional se considera exitoso cuando el sistema responde con exactitud a los requerimientos gerenciales en el tiempo estipulado, transformando datos desorganizados en información útil y veraz.

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .bloque-texto-c.color-primario.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema3/img-05.svg', alt='', style='width: 100px; height: 100px').m-auto
            .col-lg
              p.mb-0 Se expresan típicamente como: "El sistema debe permitir…" / "El sistema deberá…" / "Como [rol], se quiere [acción] para [beneficio]". Son la base directa de los casos de prueba funcionales.

    p.text-center.mb-4 Las siguientes, son las categorías de requisitos funcionales

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema6/img-02.svg' alt='AvatarTop')
          h4.text-center RF1. Autenticación y control de acceso

          p.mb-0 El sistema debe permitir el inicio de sesión mediante usuario y contraseña, y bloquear la cuenta tras tres intentos fallidos consecutivos.

        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema6/img-03.svg' alt='AvatarTop')
          h4.text-center RF2. Gestión de datos (CRUD)
          p.mb-0 El sistema debe permitir crear, consultar, actualizar y eliminar registros de usuarios con validación de datos en cada operación.

        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema6/img-04.svg' alt='AvatarTop')
          h4.text-center RF3. Procesamiento y cálculo
          p.mb-0 El módulo de facturación deberá calcular automáticamente el IVA, descuentos y total de cada pedido según las reglas de negocio vigentes.

        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema6/img-05.svg' alt='AvatarTop')
          h4.text-center RF4. Reportes y exportación
          p.mb-0 El sistema debe generar reportes de ventas en formato PDF y Excel, filtrables por fecha, producto y vendedor.

        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema6/img-06.svg' alt='AvatarTop')
          h4.text-center RF5. Notificaciones y alertas
          p.mb-0 El sistema deberá enviar una notificación por correo electrónico al usuario cuando su solicitud cambie de estado en el flujo de aprobación.

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        p Por otro lado, los requisitos no funcionales definen el "cómo lo hace" y opera el sistema, estableciendo los criterios de calidad que determinan su robustez y sostenibilidad. No se limitan a una función específica, sino que abarcan la arquitectura que soporta la información, incluyendo atributos como la seguridad para proteger los datos contra alteraciones accidentales y la confiabilidad para asegurar que la automatización genere siempre resultados consistentes. Estos requisitos evalúan la eficiencia del desempeño, garantizando que el #[i software] sea escalable ante grandes volúmenes de datos y mantenga tiempos de respuesta mínimos que optimicen la productividad operativa.
        p.mb-4 Dentro de los requisitos no funcionales se encuentran: 
    
    .cajon.tabs-a__tab.p-5.mb-4
      SlyderB(:datos="datosSlyder")

    p La evaluación integral de ambos tipos de requisitos permite que el analista no solo detecte fallas funcionales, sino que también identifique hallazgos críticos en la usabilidad o la accesibilidad. Al documentar estas necesidades, se construye una visión de calidad orientada a la excelencia del servicio, donde la simplicidad de la interfaz de usuario permite obtener respuestas clave del negocio sin requerir conocimientos técnicos profundos, asegurando así que el producto final sea fiable, consistente y genere un valor estratégico real para la organización.
    p.mb-4 La siguiente imagen resume un poco indicado en ambos requisitos:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-primario(data-aos="fade-right")
          h5 Figura 8.
          span Comparativa requisitos funcionales y no funcionales
        figure.d-lg-flex.d-none(data-aos="zoom-in")
          img(src='@/assets/curso/tema6/figura-1-1v.svg' alt="Figura 8 que presenta un comparativo didáctico entre los requisitos funcionales y no funcionales del software. El esquema contrasta el “Qué” debe hacer el sistema —operaciones, validaciones, cálculos, generación de reportes y funciones de búsqueda— con el “Cómo” debe comportarse, destacando criterios de calidad como desempeño, seguridad, usabilidad, confiabilidad y adaptabilidad, junto con sus métricas de éxito asociadas.")
        figure.d-lg-none.d-flex(data-aos="zoom-in")
          img(src='@/assets/curso/tema6/figura-1-2v.svg' alt="Figura 8 que presenta un comparativo didáctico entre los requisitos funcionales y no funcionales del software. El esquema contrasta el “Qué” debe hacer el sistema —operaciones, validaciones, cálculos, generación de reportes y funciones de búsqueda— con el “Cómo” debe comportarse, destacando criterios de calidad como desempeño, seguridad, usabilidad, confiabilidad y adaptabilidad, junto con sus métricas de éxito asociadas.")

    Separador

    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.2 Ingeniería de requisitos

    p.mb-4 Es la disciplina que transforma las necesidades de los interesados en especificaciones técnicas claras para asegurar la calidad del producto final. Este proceso se divide en dos grandes ejes: 

    .row.justify-content-center.mb-4
      .col-lg-5.mb-lg-0.mb-4
        .tarjeta.tarjeta--BG02.h-100(data-aos="fade-left")(style="background-color:#9ECFFF !important; border-radius: 0px !important;")
          figure
            img(src='@/assets/curso/tema6/img-15.png', alt='')
          .p-5
            h4.text-center El análisis de requisitos
            p.mb-0 Estudia y valida las funciones que el sistema debe cumplir para responder exactamente a los requerimientos gerenciales.

      .col-lg-5
        .tarjeta.tarjeta--BG03.h-100(data-aos="fade-right")(style="background-color:#9ECFFF !important; border-radius: 0px !important;")
          figure
            img(src='@/assets/curso/tema6/img-16.png', alt='')         
          .p-5
            h4.text-center La gestión de requisitos
            p.mb-0 Garantiza la trazabilidad bidireccional entre las historias de usuario y el código final para controlar cambios y evitar ambigüedades durante el desarrollo.

    .row.justify-content-center
      .col-lg-10
        .cajon.cajon.C04.px-4.py-4.mb-4(style="border-radius:15px")
          .row
            .col-lg-2.col-12.text-center.order-lg-2.order-1.mb-lg-0.mb-3.ms-lg-auto.d-none.d-lg-block
              figure(data-aos="fade-down")
                img(src='@/assets/curso/tema6/img-17.svg', alt='' style="max-width: 100px;")
            .col-lg-10.col-12.order-lg-1.order-2
              p.mb-0 En entornos modernos, se adoptan prácticas ágiles para gestionar el flujo de trabajo de manera iterativa e incremental, utilizando el Product Backlog como la fuente única de verdad donde se priorizan las tareas pendientes. El equipo descompone estas necesidades en historias de usuario validadas con criterios de aceptación claros, las cuales se planifican en iteraciones o #[i sprints] cortos para entregar incrementos funcionales constantes. Además, herramientas como el #[i storyboard] o los prototipos visuales ayudan a capturar el conocimiento del usuario de forma intuitiva antes de iniciar la construcción técnica.

        p Para que estas prácticas sean efectivas, la estimación de esfuerzo debe basarse en datos históricos y técnicas colaborativas como el Planning Poker para evitar compromisos imposibles de cumplir. Este enfoque ágil permite medir la productividad y la velocidad real del equipo en cada ciclo, facilitando una mejora continua que reduce la deuda técnica y garantiza que el #[i software] sea robusto, seguro y confiable.

    Separador

    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.3 Técnicas de elicitación de requisitos

    p.mb-4 La correcta definición de requisitos es un paso crítico para el éxito de cualquier proyecto de #[i software], ya que permite comprender con precisión las necesidades reales del negocio y de los usuarios. Para lograrlo, el análisis no se apoya en una única fuente de información, sino en un conjunto de técnicas complementarias que facilitan la exploración, comprensión y validación de dichas necesidades. A continuación, se presentan las principales técnicas de elicitación de requisitos, organizadas según su enfoque y propósito, las cuales permiten capturar tanto información explícita como conocimiento tácito, garantizando soluciones alineadas con la calidad, la innovación y la sostenibilidad del sistema:

    .tarjeta--BG04.bg-fix-bleed.p-4.px-md-5
      .tarjeta.tarjeta--FBG01.p-4.p-lg-5.slider-fix-bleed
        SlyderA(tipo="b" data-aos="zoom-in")
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4(style="color:#000 !important") Técnicas de prospección 
              p(style="color:#000 !important") El viaje de la calidad comienza con las técnicas de prospección, que funcionan como una exploración directa del terreno operativo. En este escenario, el analista interactúa con los interesados mediante entrevistas o cuestionarios para identificar tanto los requisitos funcionales (el "qué" debe hacer el sistema) como los no funcionales (el "cómo" debe operar en términos de seguridad o desempeño). Esta fase de diagnóstico es vital, ya que permite establecer el estado de la calidad antes de cualquier intervención técnica, asegurando que la solución final responda fielmente a las necesidades reales del negocio.
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4 
              figure
                img(src='@/assets/curso/tema6/img-18.png', style="width: 500px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4(style="color:#000 !important") Técnicas de creatividad 
              p(style="color:#000 !important") Cuando las necesidades no son evidentes o se busca transformar radicalmente un servicio, entran en juego las técnicas de creatividad. Estas buscan elevar el estándar de desempeño más allá de los requisitos mínimos, aprovechando oportunidades de optimización que el usuario quizás no ha verbalizado de forma explícita. En lugar de limitarse a corregir fallos del pasado, estas técnicas fomentan un enfoque de mejoramiento continuo e innovación, permitiendo que el equipo visualice soluciones que garanticen la sostenibilidad del #[i software] en producción.
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4   
              figure
                img(src='@/assets/curso/tema6/img-19.png', style="width: 500px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4(style="color:#000 !important") Técnicas centradas en la documentación 
              p(style="color:#000 !important") Por otro lado, las técnicas centradas en la documentación ofrecen una base de conocimiento explícito que es fundamental para la estabilidad y fiabilidad del proyecto. Aquí, el analista se sumerge en manuales, procedimientos previos, registros de lecciones aprendidas y bases de datos existentes para capturar el saber que ya ha sido formalizado por la organización. Esta revisión documental permite construir una trazabilidad sólida, conectando los requisitos históricos con las nuevas especificaciones técnicas para asegurar que la arquitectura resultante sea robusta y consistente.
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4 
              figure
                img(src='@/assets/curso/tema6/img-20.png', style="width: 500px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4(style="color:#000 !important") Técnicas de observación 
              p(style="color:#000 !important") Finalmente, las técnicas de observación son la herramienta clave para capturar el valioso conocimiento tácito, aquel que reside en las personas y se manifiesta a través de sus habilidades prácticas y hábitos cotidianos. Mediante la observación directa del flujo de trabajo, el analista puede identificar inconsistencias o cuellos de botella que los usuarios suelen omitir en las entrevistas por pura costumbre. Al ver cómo interactúan realmente con las herramientas, se pueden documentar hallazgos críticos de usabilidad o tiempos de respuesta, garantizando que cualquier plan de mejora posterior ataque las causas raíz sistémicas y no simples síntomas superficiales.
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4 
              figure
                img(src='@/assets/curso/tema6/img-21.png', style="width: 500px" ,alt='').m-auto

    Separador

    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.4 Fuentes de requisitos

    .BMG3.px-md-5.px-4.mb-4
      p El descubrimiento de requisitos comienza con los implicados o interesados (#[i stakeholders]). Estas personas son la fuente primaria de información, pues representan las necesidades reales del negocio y las expectativas que el #[i software] debe satisfacer. En esta categoría se encuentra desde la gerencia, que busca indicadores estratégicos en #[i dashboards] interactivos, hasta los usuarios operativos que requieren herramientas funcionales y fáciles de usar. Interactuar con ellos permite capturar tanto los requisitos funcionales como el valioso conocimiento tácito experiencias e intuiciones que es fundamental para que la solución sea verdaderamente efectiva en su contexto real de trabajo.
      .row.align-items-center.justify-content-center.mb-4
        .col-lg-10
          .row.justify-content-center.mt-4
            .col-lg-12(data-aos="fade-down")
              .row.d-flex.align-items-center.bg-c2(data-aos="fade-right")             
                .col-lg.p-4
                  p.mb-0 Por otro lado, la documentación existente constituye la fuente de conocimiento explícito por excelencia. Al sumergirse en manuales de usuario, procedimientos técnicos, registros de lecciones aprendidas de proyectos anteriores y reportes de hallazgos, el analista puede construir una trazabilidad sólida de la información. Esta fuente permite comprender la arquitectura que soporta la información actual y ayuda a evitar la repetición de errores pasados, facilitando una transición hacia formatos óptimos y procesos de mejora continua basados en evidencia objetiva.
                .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex
                    img(src='@/assets/curso/tema6/img-22.png', alt='', class="w-100 h-100 object-fit-cover")
      .row.justify-content-center.mb-4
        .col.col-lg-2.col-md-7.col-8.order-lg-1.order-1.mb-3
          figure
            img(src='@/assets/curso/tema6/img-23.svg', alt='')
        .col.col-lg-8.col-12.order-lg-2.order-2
          p Finalmente, los sistemas en operación actúan como una fuente viva de datos técnicos y operativos. Evaluar cómo funcionan las soluciones actuales —ya sean reportes automatizados, macros de Excel o bases de datos— permite realizar un diagnóstico inicial de la calidad del producto y del proceso. Mediante el análisis estático y dinámico de estos sistemas, el analista identifica deudas técnicas, cuellos de botella en los tiempos de respuesta y fallas de seguridad o confiabilidad. Esta observación técnica es la que habilita la formulación de planes de mejora con acciones correctivas y preventivas que garanticen la excelencia del servicio de #[i software] a largo plazo.


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
          '<b>Rendimiento</b> <br><br>Velocidad y capacidad de respuesta del sistema.<br><br> Ejemplo: "El sistema deberá responder en menos de 2 segundos bajo carga de 1.000 usuarios concurrentes".',
        imagen: require('@/assets/curso/tema6/img-07.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Seguridad</b> <br><br>Protección de datos y acceso no autorizado.<br><br> Ejemplo: "Todos los datos en tránsito deben cifrarse con TLS 1.2 o superior. Las contraseñas deben almacenarse con <em>bcrypt</em>”.',
        imagen: require('@/assets/curso/tema6/img-08.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Usabilidad</b> <br><br>Facilidad de aprendizaje y eficiencia de uso.<br><br> Ejemplo: "Un usuario nuevo debe poder completar el proceso de registro sin ayuda en menos de 3 minutos”.',
        imagen: require('@/assets/curso/tema6/img-09.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Disponibilidad / fiabilidad</b> <br><br>Tiempo de actividad y tolerancia a fallos.<br><br> Ejemplo: "El sistema tendrá una disponibilidad del 99,9 % mensual (máximo 8,7 h de <em>downtime</em>/año) — SLA".',
        imagen: require('@/assets/curso/tema6/img-10.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Mantenibilidad</b> <br><br>Facilidad para corregir, adaptar y mejorar.<br><br> Ejemplo: "La cobertura de pruebas unitarias debe ser ≥80 %. La complejidad ciclomática no debe superar 10".',
        imagen: require('@/assets/curso/tema6/img-11.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Portabilidad</b> <br><br>Capacidad de ejecutarse en distintos entornos.<br><br> Ejemplo: "La <em>app web</em> debe funcionar correctamente en Chrome, Firefox, Safari y Edge en versiones de los últimos 2 años".',
        imagen: require('@/assets/curso/tema6/img-12.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Escalabilidad</b> <br><br>Capacidad de crecer sin degradar el rendimiento.<br><br> Ejemplo: "La arquitectura debe soportar escalar horizontalmente hasta 10 instancias sin reconfiguración manual".',
        imagen: require('@/assets/curso/tema6/img-13.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        texto:
          '<b>Accesibilidad</b> <br><br>Usable por personas con discapacidades.<br><br> Ejemplo: "La interfaz deberá cumplir con el nivel AA de las pautas WCAG 2.1 para garantizar accesibilidad universal".',
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
