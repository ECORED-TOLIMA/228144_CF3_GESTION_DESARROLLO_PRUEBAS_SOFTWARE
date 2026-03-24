<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Análisis de sistemas de información y gestión de requisitos.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> reconocer los conceptos fundamentales de sistemas, procesos, requisitos y análisis de datos, a partir de contextos de software y gestión de información.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'Según la Teoría General de Sistemas (TGS), ¿qué significa la premisa "el todo es más que la suma de sus partes"?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que un sistema se entiende mejor al dividirlo en partes aisladas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que las propiedades emergen de las relaciones entre las partes, no de las partes en sí mismas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Que un sistema informático solo se compone de hardware y software.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que la suma aritmética de los componentes determina el éxito del sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que el pensamiento sistémico se enfoca en las interacciones y propiedades emergentes del conjunto.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el mecanismo de autorregulación que permite verificar y mejorar el funcionamiento de un sistema?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Homeostasis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entorno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Retroalimentación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Emergencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Exacto! La retroalimentación es clave para ajustar el sistema a las necesidades requeridas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'En el contexto de sistemas de información, ¿qué es un "dato"?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un conjunto de cifras organizadas con un propósito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Información procesada que otorga significado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un hecho, cifra o símbolo sin interpretar que carece de significado contextual.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un hecho, cifra o símbolo sin interpretar que carece de significado contextual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El dato es la materia prima bruta sin interpretar.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué actividad del procesamiento de datos consiste en agrupar información en categorías para facilitar su análisis?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Validación y verificación. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Captura y recolección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Clasificación y organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cálculo y transformación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! La clasificación permite estructurar la información mediante taxonomías y jerarquías.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'De los seis elementos de un Sistema de Información (SI), ¿cuál se considera el más crítico?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Hardware.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Software.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Personas (usuarios, operadores, directivos).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Redes y Comunicaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Así es! El SI existe fundamentalmente para apoyar los procesos y decisiones de las personas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de sistema de información provee tendencias y resúmenes para decisiones de largo plazo a la alta dirección?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'TPS (Procesamiento de transacciones).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'KWS (Trabajo de conocimiento).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'MIS (Sistemas de información gerencial).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'ESS/EIS (Soporte a ejecutivos).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los ESS atienden el nivel estratégico de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué define el ciclo de vida del software (SDLC)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo las herramientas que se usan para programar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las prácticas, roles y ceremonias de un equipo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El conjunto de fases y entregables desde la concepción hasta el retiro del software.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Únicamente la fase de mantenimiento del software.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! El SDLC establece qué fases componen el proceso y su secuencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿En qué fase del SDLC se realiza la elicitación y documentación de las necesidades funcionales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Análisis de requisitos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Planificación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseño del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Implementación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! En esta fase se genera el SRS (especificación de requisitos).',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            ' ¿Qué modelo de ciclo de vida es ideal para sistemas críticos con requisitos estables donde cada fase debe aprobarse antes de la siguiente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modelo ágil.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Modelo en cascada (Waterfall).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Modelo DevOps.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modelo iterativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! El modelo en cascada es secuencial y estricto.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Cuál es el principio fundamental del modelo en V?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que las pruebas se hacen exclusivamente al final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que el cliente no participa en el diseño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que no requiere documentación formal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que cada fase de desarrollo tiene asociada una fase de prueba correspondiente planificada en paralelo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Exacto! Se busca la detección temprana de defectos asociando cada nivel de desarrollo con uno de verificación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'En Scrum, ¿quién es el responsable de priorizar las tareas pendientes en el product backlog?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Scrum master.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Product owner.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Development team.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Auditor de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El product owner gestiona el backlog como fuente única de verdad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué metodología ágil se enfoca en visualizar el trabajo en un tablero y limitar el trabajo en curso (WIP)?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Scrum.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Extreme Programming (XP).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Kanban.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cascada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Kanban busca un flujo de trabajo continuo y sin sobrecargas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es la diferencia técnica entre un proceso y un procedimiento?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No hay diferencia, son sinónimos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El proceso define "qué hace" y el procedimiento describe el paso a paso detallado de "cómo ejecutarlo".',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El proceso es manual y el procedimiento es automático.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El procedimiento tiene entradas y el proceso no.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Así es! El procedimiento es el detalle operativo de una actividad dentro de un proceso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué técnica de elicitación de requisitos se usa para capturar el conocimiento tácito mediante la observación directa del flujo de trabajo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Técnicas de creatividad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Técnicas de prospección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Técnicas de observación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Técnicas centradas en la documentación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! La observación identifica inconsistencias que los usuarios suelen omitir por costumbre.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué define a un "requisito funcional"?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La velocidad y capacidad de respuesta del sistema. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El cifrado de los datos y el control de acceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las tareas específicas y el "qué" debe hacer el sistema para satisfacer al negocio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La facilidad de aprendizaje por parte del usuario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Se centran en las operaciones y acciones lógicas del software.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'El requisito: "El sistema deberá responder en menos de 2 segundos bajo carga", ¿a qué categoría pertenece? ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Requisito no funcional de rendimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Requisito funcional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Requisito de gestión de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Requisito de notificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Exacto! Los requisitos no funcionales definen el "cómo" rinde el sistema.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es el objetivo de la estadística descriptiva en el desarrollo de software?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Predecir fallos futuros sin datos previos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar, resumir y presentar métricas de calidad (defectos, tiempos) mediante tablas y gráficas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Programar la lógica del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elicitar requisitos con el cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Permite transformar métricas crudas en información comprensible para el análisis.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál de las siguientes es una medida de tendencia central que representa el valor con mayor frecuencia en un conjunto de datos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Media.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mediana.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Moda.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Media geométrica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Correcto! La moda es el valor más repetido.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué gráfica es más adecuada para mostrar la distribución de defectos por categoría (lógica, interfaz, seguridad)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gráfico de líneas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Histograma.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gráfico de pastel o barras.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diagrama de carriles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Estas gráficas son ideales para comparar categorías cualitativas nominales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Qué se considera "deuda técnica"?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El dinero que se le debe a los proveedores de hardware.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un listado de tareas priorizadas del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La versión final del software lista para despliegue.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El costo futuro por elegir soluciones rápidas o "atajos" en lugar de enfoques de mejor calidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Identifica un concepto clave para la sostenibilidad del software.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
