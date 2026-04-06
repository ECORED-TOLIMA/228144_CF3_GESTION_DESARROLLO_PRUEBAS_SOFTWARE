<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 La Teoría General de Sistemas (TGS) y enfoque sistémico

    p.mb-4 La comprensión de fenómenos complejos exige miradas que vayan más allá del análisis fragmentado de sus partes. En este sentido, la Teoría General de Sistemas (TGS) y el enfoque sistémico ofrecen una perspectiva integradora que permite entender la realidad como un conjunto de elementos interrelacionados que interactúan de manera dinámica con su entorno. Ambos planteamientos coinciden en que el comportamiento de un sistema no puede explicarse únicamente desde sus componentes aislados, sino desde las relaciones, procesos y propósitos que los articulan.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(style="background-color:#19538D !important")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img-01.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Estos enfoques han demostrado su utilidad en múltiples campos del conocimiento, al proporcionar principios y herramientas para analizar, interpretar y gestionar la complejidad. En contextos organizacionales, educativos y tecnológicos —como el desarrollo de <em>software</em>—, permiten identificar patrones, anticipar efectos y tomar decisiones más coherentes y sostenibles. Con esta base conceptual, se abordan a continuación cada uno de ellos, profundizando en sus fundamentos, características y aplicaciones.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Teoría General de Sistemas (TGS)

    p Surgió como una respuesta crítica al reduccionismo científico dominante en la primera mitad del siglo XX, el cual buscaba explicar los fenómenos complejos, mediante el estudio aislado de sus partes. Este enfoque resultaba limitado para comprender realidades dinámicas e interrelacionadas.

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-10
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-c2(data-aos="fade-right")             
              .col-lg.p-4
                p El biólogo austriaco Ludwig Von Bertalanffy advirtió que, en los organismos vivos y en otros sistemas complejos, las propiedades esenciales emergen de las interacciones entre sus componentes y no de los elementos considerados de manera independiente. A partir de esta observación, propuso una visión integradora orientada al estudio de los sistemas como totalidades organizadas.
                p.mb-0 La TGS se concibió como un marco teórico interdisciplinario, con el propósito de identificar principios comunes aplicables a distintas áreas del conocimiento, sentando las bases del pensamiento sistémico como una nueva forma de comprensión científica.
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/img-02.png', alt='', class="w-100 h-100 object-fit-cover")

    p.mb-4 Para tener mayor claridad en sus procesos evolutivos, a continuación, se presenta una cronología ampliada de la Teoría General de Sistemas (TGS), integrando las acciones previamente descritas y extendiéndola hasta desarrollos más actuales del pensamiento sistémico:
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-11.col-10
        .tarjeta.tarjeta--gris.p-4
          LineaTiempoC.color-acento-contenido(text-small)
            .row.justify-content-center(titulo="1990")
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema1/img-03.png', alt="")
              .col-lg-6.order-lg-2.order-2
                h4 1990-1930
                p Predomina el reduccionismo científico, que explica los fenómenos complejos a partir del análisis aislado de sus partes, especialmente en ciencias naturales y sociales.
                h4 1937
                p El biólogo austriaco Ludwig Von Bertalanffy formula los primeros planteamientos de la TGS, cuestionando el enfoque reduccionista y proponiendo estudiar los sistemas como totalidades organizadas.
            .row.justify-content-center(titulo="1937")
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema1/img-04.png', alt="")
              .col-lg-6.order-lg-2.order-2
                h4 1937-1945
                p Bertalanffy desarrolla los fundamentos teóricos iniciales de la TGS, aplicables a múltiples disciplinas como biología, física, psicología, economía e ingeniería.
                h4 Década de 1940
                p La TGS se fortalece con aportes de la cibernética (Norbert Wiener), introduciendo conceptos como retroalimentación, control y comunicación en sistemas.
            .row.justify-content-center(titulo="1950")
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema1/img-05.png', alt="")
              .col-lg-6.order-lg-2.order-2
                h4 1950-1960
                p La teoría se difunde en ciencias sociales y administración. Surgen aplicaciones en organizaciones, educación y gestión, consolidando el enfoque interdisciplinario.
                h4 1968
                p Publicación de General System Theory, obra cumbre de Bertalanffy, que formaliza la TGS y consolida el pensamiento sistémico como nuevo paradigma científico.
            .row.justify-content-center(titulo="1970")
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema1/img-06.png', alt="")
              .col-lg-6.order-lg-2.order-2
                h4 Décadas de 1970-1980
                p La TGS influye en la teoría de sistemas abiertos, la dinámica de sistemas (Jay Forrester) y el análisis organizacional.
                h4 Décadas de 1990-2000
                p Evoluciona hacia enfoques de complejidad, autoorganización y sistemas adaptativos complejos, aplicados a tecnología, ecología y economía. 
            .row.justify-content-center(titulo="2010")
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema1/img-07.png', alt="")
              .col-lg-6.order-lg-2.order-2
                h4 2010-actualidad
                p El pensamiento sistémico se integra con la transformación digital, la ingeniería de <em>software</em>, la gestión del conocimiento y el análisis de sistemas socio-técnicos, manteniendo plena vigencia en contextos complejos e interconectados.

    p.text-center.mb-4 Complementando la anterior información, se presenta la siguiente imagen representativa:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-primario
          h5 Figura 1.
          span Estructura básica de la TGS

      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema1/figura-1-1v.svg', alt='Figura 1 que presenta el esquema del enfoque sistémico que muestra cómo un sistema, a partir de la interacción entre sus elementos y relaciones, transforma entradas mediante un proceso para generar salidas, sintetizando los principios de la Teoría General de Sistemas.', style="width: 1043px").m-auto
      .col-12
        figure.movil
          img(src='@/assets/curso/tema1/figura-1-2v.svg', alt='Figura 1 que presenta el esquema del enfoque sistémico que muestra cómo un sistema, a partir de la interacción entre sus elementos y relaciones, transforma entradas mediante un proceso para generar salidas, sintetizando los principios de la Teoría General de Sistemas.', style="width: 1043px").m-auto

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-6.col-12
        .bloque-texto-c.color-secundario.p-4(style="background-color:#DFEFFF !important")
          .bloque-texto-c__contenido
            i.fas.fa-quote-left
            h2.mb-2 “El todo es más que la suma de sus partes”
            span.autor — Aristóteles, retomado por Bertalanffy como principio fundacional de la TGS.
            i.fas.fa-quote-right.cierre-comilla

    p.mb-4.text-center Para complementar lo visto, es importante conocer la siguiente cronología de los orígenes de la Teoría General de Sistemas:

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img-08.svg' alt="")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#F1E2FF;")
            h4.text-center.mt-5(style="color:#12263F") Antecedentes filosóficos
            p.text-center.mb-0(style="color:#12263F") El holismo de Smuts y la Gestalt Psychology sientan las bases del pensamiento sistémico.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img-09.svg' alt="")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#F1E2FF;")
            h4.text-center.mt-5(style="color:#12263F") Primera formulación
            p.text-center.mb-0(style="color:#12263F") Bertalanffy presenta la “Teoría de los sistemas abiertos” en la Universidad de Chicago.
      .col-lg-4.col-8.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img-10.svg' alt="")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#F1E2FF;")
            h4.text-center.mt-5(style="color:#12263F") Cibernética de Wiener
            p.text-center.mb-0(style="color:#12263F") Wiener publica “Cybernetics” introduciendo la retroalimentación y el control en sistemas.
    .row.justify-content-center.mb-4  
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img-10.svg' alt="")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#F1E2FF;")
            h4.text-center.mt-5(style="color:#12263F") Sociedad para la investigación de sistemas generales
            p.text-center.mb-0(style="color:#12263F") Bertalanffy y otros fundan la primera sociedad dedicada al estudio de sistemas.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img-10.svg' alt="")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#F1E2FF;")
            h4.text-center.mt-5(style="color:#12263F") Obra cumbre publicada
            p.text-center.mb-0(style="color:#12263F") General System Theory consolida la TGS como disciplina científica independiente.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Conceptos esenciales de la TGS

    p La TGS establece un vocabulario común para describir cualquier sistema, independientemente de su naturaleza. Estos conceptos son la base del análisis sistémico y se aplican directamente al diseño, desarrollo y prueba de <em>software</em>.
    p.mb-4 Por lo anterior, a continuación, se presenta de manera conceptual los componentes o propiedades de un sistema:

    .tarjeta--BG01.px-md-5.p-lg-0.p-4.slyderF-wrapper.slyderF-wrapper--niveles
      .slyderF-container
        .row.justify-content-center.align-items-center.my-lg-5.my-4
          .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4.desktop
            figure
              img(src='@/assets/curso/tema1/img-13.png', alt='alt' style='margin-bottom: -25px;')
          .col-lg-8
            SlyderF.custom.color-acento-botones.slyderF-fix-ipad(columnas="col-lg-4 col-xl-4")
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src="@/assets/curso/tema1/img-14.svg", alt="alt")
                p.text-center #[b Emergencia] 
                p.text-center Propiedades que surgen de las interacciones del sistema.
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src="@/assets/curso/tema1/img-15.svg", alt="alt")
                p.text-center #[b Entorno]
                p.text-center Factores externos que influyen en el sistema.
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src="@/assets/curso/tema1/img-16.svg", alt="alt")
                p.text-center #[b Subsistemas]
                p.text-center Componentes del sistema que pueden analizarse individualmente.
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src="@/assets/curso/tema1/img-17.svg", alt="alt")
                p.text-center #[b Retroalimentación] 
                p.text-center Mecanismo de autorregulación del sistema.
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src="@/assets/curso/tema1/img-18.svg", alt="alt")
                p.text-center #[b Homeostasis] 
                p.text-center Capacidad del sistema para mantener el equilibrio.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Enfoque sistémico

    p Es una manera de pensar y analizar la realidad que concibe cualquier fenómeno una organización, un proceso de <em>software</em> y un ecosistema como un sistema integrado, no como una suma de partes independientes. Surge directamente de la Teoría General de Sistemas (TGS) de Bertalanffy y se convirtió en el paradigma dominante para gestionar complejidad en el siglo XX y XXI.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.cajon.C01.px-4.py-4(style="border-radius:15px")
          .row
            .col-lg-4.col-12.text-center.order-lg-2.order-1.mb-lg-0.mb-3.ms-lg-auto.d-none.d-lg-block
              figure(data-aos="fade-down")
                img(src='@/assets/curso/tema1/img-19.png', alt='' style="max-width: 310px;")
            .col-lg-8.col-12.order-lg-1.order-2
              p A diferencia del pensamiento analítico clásico, que descompone los problemas en partes aisladas para estudiarlas por separado, el enfoque sistémico preserva las relaciones y las interacciones como objeto central de estudio. Su premisa fundamental es que la comprensión del todo requiere observar cómo sus partes se conectan, se influyen mutuamente y producen comportamientos emergentes que ninguna parte podría generar por sí sola.
              p.mb-0 En el ámbito del desarrollo de <em>software</em>, el enfoque sistémico permite comprender que un defecto detectado en producción no es un problema aislado de una función: es el síntoma de un sistema de procesos, decisiones y comunicación que falló en múltiples puntos interrelacionados.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Características 

    p El enfoque sistémico proporciona un marco conceptual para analizar y comprender realidades complejas desde una perspectiva integral. En lugar de fragmentar los problemas en partes aisladas, propone entender cómo interactúan los elementos dentro de un conjunto organizado, identificando patrones, relaciones y dinámicas que influyen en su comportamiento. A partir de esta base, se describen a continuación las principales características que orientan el pensamiento y la intervención sistémica:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-20.svg' alt='AvatarTop')
          h4.text-center Visión holística
          p.mb-0 Examina el sistema completo antes de analizar sus partes. El comportamiento global no se puede deducir de los componentes individuales.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-21.svg' alt='AvatarTop')
          h4.text-center Pensamiento circular
          p.mb-0 Las relaciones causa-efecto son cíclicas, no lineales. Las causas retroalimentan sus propios efectos, creando bucles de refuerzo o equilibrio.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-22.svg' alt='AvatarTop')
          h4.text-center Interdependencia
          p.mb-0 Cada elemento del sistema afecta y es afectado por los demás. Un cambio en una parte repercute en todo el sistema, a veces de forma inesperada.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-23.svg' alt='AvatarTop')
          h4.text-center Dinámica temporal
          p.mb-0 Incorpora el tiempo como variable esencial. Los efectos de las decisiones pueden manifestarse con demoras que dificultan identificar las causas reales.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-24.svg' alt='AvatarTop')
          h4.text-center Modelado y simulación
          p.mb-0 Utiliza modelos (diagramas causales, arquetipos sistémicos) para representar, comunicar y simular el comportamiento del sistema antes de intervenir.
        .tarjeta.tarjeta--BGC01.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-25.svg' alt='AvatarTop')
          h4.text-center Orientación al propósito
          p.mb-0 Todo análisis sistémico parte de la función u objetivo del sistema. Las intervenciones buscan alinear la estructura interna con ese propósito.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Aplicación

    p.mb-4 Aplicar el enfoque sistémico comprende un proceso metodológico con pasos concretos que guían desde la observación inicial hasta la intervención y el monitoreo de resultados:

    .BMG1.px-md-5.px-4
      .row.justify-content-center
        .col-lg-10
          LineaTiempoE.color-acento-contenido
            .row.justify-content-center(titulo="A")
              .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
                img(src='@/assets/curso/tema1/img-26.svg' alt="")
              .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
                h4 Definir el sistema y sus límites
                p Identificar qué está dentro del sistema de análisis y qué pertenece al entorno. Delimitar los actores, procesos y recursos que interactúan. Por ejemplo: en <em>software</em>: ¿qué módulos, equipos y procesos forman parte del sistema de desarrollo?
            .row.justify-content-center(titulo="B")
              .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
                img(src='@/assets/curso/tema1/img-27.svg' alt="")
              .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
                h4 Mapear las interrelaciones
                p Construir un diagrama causal que muestre cómo los elementos del sistema se influyen mutuamente. Identificar los bucles de retroalimentación: ¿cuáles amplifican el cambio (refuerzo) y cuáles lo amortiguan (equilibrio)?
            .row.justify-content-center(titulo="C")
              .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
                img(src='@/assets/curso/tema1/img-28.svg' alt="")
              .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
                h4 Identificar patrones de comportamiento
                p Analizar el comportamiento del sistema a lo largo del tiempo: ¿crece linealmente, oscila, colapsa? Los arquetipos sistémicos (límites del crecimiento, transferencia de carga, escalada) permiten reconocer patrones recurrentes.
            .row.justify-content-center(titulo="D")
              .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
                img(src='@/assets/curso/tema1/img-29.svg' alt="")
              .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
                h4 Encontrar los puntos de apalancamiento
                p Determinar dónde una intervención pequeña puede producir un cambio grande y sostenido. Generalmente no están donde parece obvio: cambiar reglas del sistema, flujos de información o paradigmas suele ser más poderoso que cambiar parámetros.
            .row.justify-content-center(titulo="E")
              .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
                img(src='@/assets/curso/tema1/img-30.svg' alt="")
              .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
                h4 Intervenir, aprender y ajustar
                p Implementar los cambios de forma incremental, observar los efectos sistémicos (incluyendo las consecuencias no intencionadas) y retroalimentar el modelo con lo aprendido. El enfoque sistémico es iterativo por naturaleza.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Organizaciones inteligentes

    p El concepto de organización inteligente (<em>learning organization</em>) fue desarrollado por Peter Senge en su obra “La Quinta Disciplina (1990)”, como la máxima expresión práctica del enfoque sistémico en el ámbito empresarial. Una organización inteligente es aquella que ha desarrollado la capacidad continua de aprender, adaptarse y transformarse frente a un entorno cambiante.
    p Senge argumenta que la mayoría de las organizaciones padecen discapacidades de aprendizaje — patrones mentales y estructurales que les impiden ver la realidad sistémica y aprender de ella. La solución no es contratar personas más inteligentes: es construir sistemas organizacionales que favorezcan el aprendizaje colectivo.
    p.mb-4 Las características de las organizaciones inteligentes son:

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .cajon.cajon.C01.px-4.py-4.mb-4
          .row.justify-content-center
            .col-lg-2.col-4.mb-lg-0.mb-4.d-none.d-lg-block
              figure(data-aos="fade-down")
                img(src='@/assets/curso/tema1/img-31.svg', alt='')
            .col-lg-9.col-12
              ul.lista-ul.mb-0
                li
                  <i class="fa-solid fa-computer bg-color-1"></i>
                  span #[b Aprendizaje continuo:] aprende de sus errores y aciertos de forma sistemática y colectiva.
                li 
                  <i class="fa-solid fa-computer bg-color-1"></i>
                  span #[b Visión compartida:] todos los miembros comprenden y comparten el propósito y metas del sistema.
                li 
                  <i class="fa-solid fa-computer bg-color-1"></i>
                  span #[b Trabajo en equipo:] el aprendizaje colectivo supera la suma del aprendizaje individual.
                li 
                  <i class="fa-solid fa-computer bg-color-1"></i>
                  span #[b Modelos mentales:] cuestiona activamente los supuestos y creencias que guían las decisiones.
                li 
                  <i class="fa-solid fa-computer bg-color-1"></i>
                  span #[b Dominio personal:] cada persona se compromete con su propio crecimiento y aprendizaje.
                li 
                  <i class="fa-solid fa-computer bg-color-1"></i>
                  span #[b Pensamiento sistémico:] comprende las interrelaciones en lugar de reaccionar a eventos aislados.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
