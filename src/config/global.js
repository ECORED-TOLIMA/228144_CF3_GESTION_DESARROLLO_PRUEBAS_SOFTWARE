export default {
  global: {
    Name:
      'Análisis de sistemas y requisitos en el desarrollo de <em>software</em>',
    Description:
      'Este componente integra el pensamiento sistémico para entender el software como un conjunto interrelacionado de personas, procesos y tecnología. Mediante la gestión de procesos y modelos como BPMN, se transforman entradas en soluciones de valor. Esto asegura el cumplimiento de requisitos funcionales (operación) y no funcionales (seguridad, desempeño) para garantizar la calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La Teoría General de Sistemas (TGS) y enfoque sistémico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Teoría General de Sistemas (TGS)',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Enfoque sistémico',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Datos e información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Procesamiento de datos: concepto y modelo',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistemas de Información (SI)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ciclo de vida del <em>software</em> (SDLC)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'SDLC vs. Metodología de desarrollo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Modelos de ciclo de vida',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Metodologías de desarrollo de <em>software</em>',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Procesos y gestión BMP',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Requisitos funcionales y no funcionales',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Ingeniería de requisitos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Técnicas de elicitación de requisitos',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Fuentes de requisitos',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Estadística descriptiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Medidas de tendencia central',
            hash: 't_7_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA3_228144_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Ambiente de <em>staging</em>',
      significado:
        'escenario de pruebas que replica exactamente las condiciones del entorno de producción, utilizado para realizar las validaciones finales antes del despliegue real.',
    },
    {
      termino: '<em>Backlog</em>',
      significado:
        'listado priorizado de tareas, requisitos o errores que el equipo de desarrollo debe abordar durante el ciclo de vida del proyecto.',
    },
    {
      termino: '<em>Benchmarking</em>',
      significado:
        'técnica de gestión que consiste en comparar los procesos o métricas de calidad de la propia organización con las mejores prácticas de la industria para identificar oportunidades de mejora.',
    },
    {
      termino: '<em>Build</em>',
      significado:
        'versión específica del <em>software</em> que se genera tras compilar el código fuente y que está lista para ser sometida a procesos de prueba o ejecución.',
    },
    {
      termino: '<em>Commit</em>',
      significado:
        'acción de registrar y confirmar un conjunto de cambios en el código fuente dentro de un sistema de control de versiones.',
    },
    {
      termino: 'Deuda técnica',
      significado:
        'costo futuro derivado de elegir soluciones rápidas o "atajos" en el desarrollo en lugar de usar enfoques de mejor calidad que requieren más tiempo.',
    },
    {
      termino: 'LMS (Learning Management System)',
      significado:
        'plataforma tecnológica diseñada para la gestión, distribución y control de actividades de formación no presencial o virtual.',
    },
    {
      termino: '<em>Pipeline</em>',
      significado:
        'conjunto de procesos automatizados que permiten que el código sea probado, integrado y desplegado de manera continua y eficiente',
    },
    {
      termino: 'Pruebas de regresión',
      significado:
        'verificaciones que se realizan tras un cambio o corrección en el <em>software</em> para asegurar que las funcionalidades existentes no se hayan visto afectadas negativamente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Beck, K., et al. (2001). <em>Manifiesto por el Desarrollo Ágil de Software</em> (versión en español). Agile Alliance.',
    },
    {
      referencia:
        'Boehm, B. W. (1988). A Spiral Model of Software Development and Enhancement. <em>IEEE Computer</em>, 21(5), 61–72.',
    },
    {
      referencia:
        'Laudon, K. C. & Laudon, J. P. (2020). <em>Sistemas de información gerencial: Administración de la empresa digital</em> (16.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Royce, W. W. (1970). <em>Managing the Development of Large Software Systems.</em> Proceedings of IEEE WESCON.',
    },
    {
      referencia:
        'Senge, P. M. (1990). <em>La quinta disciplina: El arte y la práctica de la organización abierta al aprendizaje.</em> Nueva York: Doubleday.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Solanlly Sánchez Melo',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
