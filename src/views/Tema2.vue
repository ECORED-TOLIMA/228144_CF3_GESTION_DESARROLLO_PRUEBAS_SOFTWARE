<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Datos e información
    
    p.mb-4 En el campo de los sistemas de información y el desarrollo de <em>software</em>, los términos dato e información suelen usarse indistintamente en el lenguaje cotidiano, pero representan conceptos técnicamente distintos y complementarios. Comprender su diferencia es la base de todo procesamiento computacional. Antes de entrar en detalle en cada concepto es importante analizar el siguiente esquema:

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-primario(data-aos="fade-right")
          h5 Figura 2.
          span Proceso de la información
        figure.d-lg-flex.d-none(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/figura-1-1v.svg' alt="Figura 2 que representa por medio de un esquema la transformación de los datos, entendidos como hechos brutos sin contexto, en información con valor, mediante procesos de clasificación, cálculo y organización que les otorgan significado.")
        figure.d-lg-none.d-flex(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/figura-1-2v.svg' alt="Figura 2 que representa por medio de un esquema la transformación de los datos, entendidos como hechos brutos sin contexto, en información con valor, mediante procesos de clasificación, cálculo y organización que les otorgan significado.")

    p.text-center.mb-4 A continuación, la explicación de cada uno y una ejemplificación para tener mayor claridad al respecto:

    .row.mb-4
      .col-lg-6.mb-lg-0.mb-4
        .tarjeta.tarjeta--BG02.h-100(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema2/img-01.png', alt='Texto que describa la imagen')
          .p-4
            h4.text-center Dato
            p Es un hecho, cifra, símbolo o señal sin interpretar, que describe un objeto, evento o condición. Por sí solo carece de significado contextual. Es la materia prima del procesamiento.
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-12
                .tarjeta.p-3.divgeome
                  span Ejemplo: 37.5 · Bogotá · TRUE · 11:42 · 0x3A

      .col-lg-6
        .tarjeta.tarjeta--BG03.h-100(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema2/img-02.png', alt='Texto que describa la imagen')         
          .p-4
            h4.text-center Información
            p Es un conjunto de datos procesados, organizados e interpretados dentro de un contexto que les otorga significado, relevancia y propósito para quien la recibe.
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-12
                .tarjeta.p-3.divgeome
                  span Ejemplo: 37.5 °C = temperatura corporal con fiebre registrada en paciente a las 11:42 a.m. en Bogotá.

    p.text-center.mb-4 Igualmente, se detallan las siguientes características de cada acción:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1.
          span Comparativo dato e información
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 15%; background-color: #FFEBBE;") Característica
                th(style="width: 15%; background-color: #FFEBBE;") Dato
                th(style="width: 15%; background-color: #FFEBBE;") Información
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Naturaleza
                td(style="background-color: #F6F6F6;") Bruto, sin interpretar, fragmentado.
                td(style="background-color: #F6F6F6;") Procesada, organizada, contextualizada.
              tr(data-aos="fade-right")
                td Significado
                td Ninguno de manera aislada.
                td Tiene sentido para el receptor.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Dependencia
                td(style="background-color: #F6F6F6;") Independiente del contexto.
                td(style="background-color: #F6F6F6;") Depende del contexto y del propósito.
              tr(data-aos="fade-right")
                td Ejemplo en <em>software</em>
                td <em>status</em>=0 en un <em>log</em>.
                td "El módulo de autenticación finalizó correctamente".
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Forma
                td(style="background-color: #F6F6F6;") Números, letras, señales, <em>bits</em>.
                td(style="background-color: #F6F6F6;") Reportes, gráficas, mensajes, alertas.

    p.text-center.mb-4 Existen tipos de datos según su naturaleza como son: 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(style="background-color:#19538D !important")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img-03.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        ul.lista-ul.mb-0 
          li  
            i.fas.fa-circle(style="top: 8px;")
            p.mb-0 Numéricos (enteros, decimales).
          li  
            i.fas.fa-circle(style="top: 8px;")
            p.mb-0 Alfanuméricos (texto).
          li  
            i.fas.fa-circle(style="top: 8px;")
            p.mb-0 Lógicos (booleanos).
          li  
            i.fas.fa-circle(style="top: 8px;")
            p.mb-0 Temporales (fecha, hora).
          li  
            i.fas.fa-circle(style="top: 8px;")
            p.mb-0 Multimedia (imagen, audio, video).
          li  
            i.fas.fa-circle(style="top: 8px;")
            p.mb-0 Geoespaciales (coordenadas).

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Procesamiento de datos: concepto y modelo

    p El procesamiento de datos es el conjunto de operaciones sistemáticas que transforman datos brutos en información útil para la toma de decisiones. Es el núcleo funcional de cualquier sistema de información y el proceso que da sentido a los datos recolectados.
    p.mb-4 Desde una perspectiva sistémica, el procesamiento de datos opera bajo el modelo IPO (Input – Process – Output): los datos ingresan al sistema (entrada), son transformados mediante operaciones específicas (proceso) y se producen resultados con valor informativo (salida). A este ciclo se suma la retroalimentación, que permite verificar y mejorar el proceso. Dicho proceso, se realiza de manera completa de la siguiente manera:

    .tarjeta--BG01.px-md-5.p-lg-0.p-4.mb-4.slyderF-wrapper.slyderF-wrapper--niveles
      .slyderF-container
        .row.justify-content-center.align-items-center.my-lg-5.my-4
          .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4.desktop
            figure
              img(src='@/assets/curso/tema2/img-04.png', alt='alt' style='margin-bottom: -25px;')
          .col-lg-8
            SlyderF.custom.color-acento-botones(columnas="col-lg-4 col-xl-4")
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src="@/assets/curso/tema2/img-05.svg", alt="alt")
                p.text-center #[b Entrada] 
                p.text-center Captura y recolección de datos crudos desde fuentes internas o externas.
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src="@/assets/curso/tema2/img-06.svg", alt="alt")
                p.text-center #[b Validación]
                p.text-center Verificación de integridad, formato y completitud de los datos recibidos.
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src="@/assets/curso/tema2/img-07.svg", alt="alt")
                p.text-center #[b Procesamiento]
                p.text-center Clasificación, cálculo, ordenación y transformación de los datos.
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src="@/assets/curso/tema2/img-08.svg", alt="alt")
                p.text-center #[b Almacenamiento] 
                p.text-center Persistencia del resultado en bases de datos, archivos o repositorios.
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src="@/assets/curso/tema2/img-09.svg", alt="alt")
                p.text-center #[b Salida] 
                p.text-center Presentación de la información procesada: reportes, <em>dashboards</em>, alertas.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Actividades del procesamiento de datos

    p.mb-4 El procesamiento de datos no es una operación única, es un conjunto de actividades especializadas que pueden ejecutarse de forma secuencial o combinada, dependiendo del sistema de información y el propósito del procesamiento. Cada actividad agrega valor transformando los datos progresivamente de la siguiente manera:

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-11.col-10
        .tarjeta.tarjeta--gris.p-4
          LineaTiempoC.color-acento-contenido(text-small)
            .row.justify-content-center(titulo="A")
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema2/img-10.png', alt="")
              .col-lg-6.order-lg-2.order-2
                h4 A. Captura y recolección
                p.mb-4 Obtención de datos desde fuentes primarias (sensores, formularios, teclado, APIs, archivos) o secundarias (bases de datos externas, <em>web scraping</em>). Es el punto de entrada al ciclo de procesamiento.
                .tarjeta.p-4(style="background-color:#ffff; border-radius:0px; margin-top:-15px;")
                  p.mb-0(style="color:#000 !important") 
                    b Ejemplo:
                    |  formulario de registro de usuarios, lectura de sensores IoT, importación de CSV.
            
            .row.justify-content-center(titulo="B")
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema2/img-11.png', alt="")
              .col-lg-6.order-lg-2.order-2
                h4 B. Validación y verificación
                p.mb-4 Comprobación de que los datos cumplen reglas de integridad: formato correcto, valores dentro de rangos permitidos, campos obligatorios presentes, consistencia entre campos relacionados. Detecta errores antes de procesar.
                .tarjeta.p-4(style="background-color:#ffff; border-radius:0px; margin-top:-15px;")
                  p.mb-0(style="color:#000 !important") 
                    b Ejemplo:
                    |  verificar que un <em>email</em> tiene formato válido, que la edad sea un número positivo menor a 150.
            
            .row.justify-content-center(titulo="C")
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema2/img-12.png', alt="")
              .col-lg-6.order-lg-2.order-2
                h4 C. Clasificación y organización
                p.mb-4 Agrupación de datos en categorías predefinidas según atributos comunes. Permite estructurar la información para facilitar su recuperación, análisis y comparación posterior. Incluye la creación de taxonomías y jerarquías.
                .tarjeta.p-4(style="background-color:#ffff; border-radius:0px; margin-top:-15px;")
                  p.mb-0(style="color:#000 !important") 
                    b Ejemplo:
                    |  clasificar transacciones por tipo (ingreso/egreso/transferencia) o clientes por segmento.
              
            .row.justify-content-center(titulo="D")
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema2/img-13.png', alt="")
              .col-lg-6.order-lg-2.order-2
                h4 D. Cálculo y transformación
                p.mb-4 Aplicación de operaciones matemáticas, lógicas o algorítmicas para derivar nuevos valores a partir de los datos existentes. Es la actividad más computacionalmente intensiva y el corazón del procesamiento cuantitativa.
                .tarjeta.p-4(style="background-color:#ffff; border-radius:0px; margin-top:-15px;")
                  p.mb-0(style="color:#000 !important") 
                    b Ejemplo:
                    |  calcular promedio de ventas, aplicar descuentos, convertir monedas, calcular métricas de cobertura.
              
            .row.justify-content-center(titulo="E")
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema2/img-14.png', alt="")
              .col-lg-6.order-lg-2.order-2
                h4 E. Ordenamiento
                p.mb-4 Disposición de los datos en una secuencia específica (ascendente, descendente, cronológica, alfabética) según uno o múltiples criterios. Facilita la búsqueda, presentación y análisis comparativo de la información.
                .tarjeta.p-4(style="background-color:#ffff; border-radius:0px; margin-top:-15px;")
                  p.mb-0(style="color:#000 !important") 
                    b Ejemplo:
                    |  ordenar defectos por severidad, listar usuarios por fecha de registro, <em>ranking</em> de ventas.
              
            .row.justify-content-center(titulo="F")
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema2/img-15.png', alt="")
              .col-lg-6.order-lg-2.order-2
                h4 F. Fusión e integración
                p.mb-4 Combinación de datos provenientes de múltiples fuentes en una estructura unificada y coherente. Fundamental en entornos con múltiples sistemas y requiere resolver conflictos de formato, duplicados y contradicciones.
                .tarjeta.p-4(style="background-color:#ffff; border-radius:0px; margin-top:-15px;")
                  p.mb-0(style="color:#000 !important") 
                    b Ejemplo:
                    |  cruzar datos de ventas con inventario y CRM para producir un reporte consolidado.
              
            .row.justify-content-center(titulo="G")
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema2/img-16.png', alt="")
              .col-lg-6.order-lg-2.order-2
                h4 G. Almacenamiento y recuperación
                p.mb-4 Persistencia estructurada de los datos procesados en un medio de almacenamiento (base de datos relacional, NoSQL, <em>data warehouse</em>, archivos) y posterior recuperación eficiente mediante índices, claves y consultas.
                .tarjeta.p-4(style="background-color:#ffff; border-radius:0px; margin-top:-15px;")
                  p.mb-0(style="color:#000 !important") 
                    b Ejemplo:
                    |  guardar resultados de pruebas en BD, indexar <em>logs</em> para consulta rápida por rango de fechas.
              
            .row.justify-content-center(titulo="H")
              .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema2/img-17.png', alt="")
              .col-lg-6.order-lg-2.order-2
                h4 H. Resumen y presentación
                p.mb-4 Síntesis y visualización de los datos procesados en formatos comprensibles para el usuario final: tablas, gráficas, <em>dashboards</em>, reportes o alertas. Es la actividad que materializa la información y la hace accionable.
                .tarjeta.p-4(style="background-color:#ffff; border-radius:0px; margin-top:-15px;")
                  p.mb-0(style="color:#000 !important") 
                    b Ejemplo:
                    |  <em>dashboard</em> de métricas de calidad, reporte ejecutivo de defectos, alertas automáticas por umbrales.
          


</template>

<script>
export default {
  name: 'Tema2',
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
