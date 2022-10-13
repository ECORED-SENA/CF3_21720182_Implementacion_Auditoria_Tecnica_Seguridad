<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Tipos de vulnerabilidades


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t1/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Al realizar y evaluar los procesos, el auditor podrá implementar las políticas de seguridad de la información, determinar la efectividad y evaluar los objetivos de seguridad en la operatividad. También deberá realizar el análisis de riesgos, donde el primer paso es detectar el tratamiento de cada uno de los riesgos, de tal manera que se puedan clasificar como preventivo, detectivo y correctivo, dependiendo de las diferentes vulnerabilidades informáticas, lo que determinará la efectividad sobre los diferentes riesgos informáticos en los sistemas de información.


    p.mb-5(data-aos="fade-right") Entre las principales amenazas computacionales, se encuentra el ser humano (agente determinador), por medio de ataques informáticos creados, como:


    .row.justify-content-center.align-items-end.position-relative.bloque-1(data-aos="zoom-in")
      .col-lg-4
        .ps-lg-5.py-4.pt-lg-0
          ul.lista-ul--color.mb-0
            li.mb-2
              i.fas.fa-database
              | <em>Ransomware</em> (secuestro de datos).
            li.mb-2
              i.fas.fa-database
              | <em>Malware</em>.
            li.mb-2
              i.fas.fa-database
              | Gusanos.
            li.mb-0
              i.fas.fa-database
              | Troyanos.

      .col-lg-4
        figure.d-flex.justify-content-center
          img(src='@/assets/curso/temas/t1/img2.svg', alt='', style="max-width: 256px;")



    p.my-5(data-aos="fade-right") Al planificar cómo lograr los objetivos de seguridad de la información, la entidad debe determinar:


    .row.justify-content-center(data-aos="zoom-in")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img3.svg' alt='AvatarTop', style="min-width: 136px")
          //- .tarjeta debe ir acompañado de una de una de estas clases =>
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-gradiente
            .p-4
              h4.text-center.mt-4 ¿Qué se hará?

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img4.svg' alt='AvatarTop', style="min-width: 136px")
          //- .tarjeta debe ir acompañado de una de una de estas clases =>
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-gradiente
            .p-4
              h4.text-center.mt-4 ¿Qué recursos se necesitarán?

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img5.svg' alt='AvatarTop', style="min-width: 136px")
          //- .tarjeta debe ir acompañado de una de una de estas clases =>
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-gradiente
            .p-4
              h4.text-center.mt-4 ¿Quién será el responsable?

    .row.justify-content-center.mt-5(data-aos="zoom-in")
      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img4.svg' alt='AvatarTop', style="min-width: 136px")
          //- .tarjeta debe ir acompañado de una de una de estas clases =>
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-gradiente
            .p-4
              h4.text-center.mt-4 ¿Cuándo se darán por alcanzados los objetivos?

      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img5.svg' alt='AvatarTop', style="min-width: 136px")
          //- .tarjeta debe ir acompañado de una de una de estas clases =>
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-gradiente
            .p-4
              h4.text-center.mt-4 ¿Cómo se evaluarán los resultados?

    p.my-4 Para hacer el análisis de riesgo, es necesario determinar las amenazas y vulnerabilidades a las cuales un sistema de información se ve expuesto. En el siguiente análisis gráfico, se muestran los diferentes tipos de riesgos dentro de una organización.

    .titulo-sexto.color-acento-contenido.my-4(data-aos="zoom-in")
      h5 Figura 1.
      span Amenazas y vulnerabilidades

    .bg_img_02(data-aos="fade-right")
      .row(data-aos="zoom-in").mb-5.justify-content-center
        .col-lg-8.col

          figure.mb-4.px-lg-5.mx-lg-5
            img(src="@/assets/curso/temas/t1/img6.svg", alt="alt")



    p.my4(data-aos="fade-left") Esta consideración nace del hecho de que el activo más importante de las organizaciones son sus datos e información; si la organización cuenta con planes de actualización frecuentes programados, será siempre segura y su plataforma tecnológica estará menos expuesta; para ello, los procesos de auditoría deben ser prioritarios, asegurando la correcta adaptación tecnológica y planes de mejora, sin alterar los sistemas actuales y optimizando procesos informáticos.

    p.mb-5(data-aos="fade-right") Dentro de las principales categorías de amenazas en la organización, se encuentran:

    .row.mb-5(data-aos="zoom-in")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2.text-white 1
          figure.mb-4
            img(src="@/assets/curso/temas/t1/img7.svg", alt="alt", style="width: 37px; margin: auto;")
          p.text-center
            b Robo de <br>información

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 2
          figure.mb-4
            img(src="@/assets/curso/temas/t1/img8.svg", alt="alt", style="width: 37px; margin: auto;")
          p.text-center
            b Pérdida de información

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2.text-white 3
          figure.mb-4
            img(src="@/assets/curso/temas/t1/img9.svg", alt="alt", style="width: 37px; margin: auto;")
          p.text-center
            b Robo de <br>identidad

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 4
          figure.mb-4
            img(src="@/assets/curso/temas/t1/img10.svg", alt="alt", style="width: 37px; margin: auto;")
          p.text-center
            b Interrupción del <br>servicio


    p.mb-4(data-aos="fade-right") Es importante indicar que, dentro del organigrama y manual de funciones, siempre se verifiquen las políticas de seguridad de la información con las líneas de negocio de la organización; si bien las amenazas son de manera general para todas las organizaciones del mundo, los planes de mejora y la implementación de políticas van acordes con los servicios de cada organización.

    p.mb-4(data-aos="fade-left") A continuación, se describen los diferentes tipos de codificaciones:

    .tarjeta.bg-gradient-cus.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-4
            h4.mb-4 Crítica

            p Cuando la vulnerabilidad realiza una rápida propagación por toda la organización. Ejemplo: #[i Ransomware].


          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/img11.jpg', alt='')

        .row.justify-content-center
          .col-md-4
            h4.mb-4 Importante

            p Cuando la vulnerabilidad pone en peligro la confidencialidad, integridad o disponibilidad de todos los datos de la organización.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/img12.jpg', alt='')

        .row.justify-content-center
          .col-md-4
            h4.mb-4 Moderada

            p Cuando la vulnerabilidad se puede reducir en la organización a partir de controles o configuraciones predeterminadas.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/img13.jpg', alt='')


        .row.justify-content-center
          .col-md-3
            h4.mb-4 Baja
            p Cuando el impacto de la vulnerabilidad es mínimo.

          .col-md-8
            figure
              img(src='@/assets/curso/temas/t1/img14.jpg', alt='')


    p.mb-4(data-aos="fade-right") Como ejemplo guía, en la siguiente tabla se catalogarán como riesgo las contraseñas de acceso a los sistemas de información dentro de la organización, que, para el ejemplo, recae sobre los directivos, empleados, contratistas y clientes.

    .titulo-sexto.color-acento-contenido.my-4(data-aos="zoom-in")
      h5 Tabla 1.
      span Explicación contraseñas seguras

    .tabla-a.mb-5(data-aos="zoom-in")
      table
        thead
          tr
            th Número de caracteres
            th Solo números
            th Letras minúsculas
            th Letras mayúsculas
            th Letras mayúsculas, minúsculas y número
            th Letras mayúsculas, minúsculas, números y símbolos
        tbody
          tr
            th 4
            td.bg_rojo Inmediatamente
            td.bg_rojo Inmediatamente
            td.bg_rojo Inmediatamente
            td.bg_rojo Inmediatamente
            td.bg_rojo Inmediatamente
          tr
            th 5
            td.bg_rojo Inmediatamente
            td.bg_rojo Inmediatamente
            td.bg_rojo Inmediatamente
            td.bg_rojo Inmediatamente
            td.bg_rojo Inmediatamente
          tr
            th 6
            td.bg_rojo Inmediatamente
            td.bg_rojo Inmediatamente
            td.bg_rojo Inmediatamente
            td.bg_rojo_claro 1 segundo
            td.bg_rojo_claro 5 segundos
          tr
            th 7
            td.bg_rojo Inmediatamente
            td.bg_rojo Inmediatamente
            td.bg_rojo_claro 25 segundos
            td.bg_rojo_claro 1 minuto
            td.bg_rojo_claro 6 minutos
          tr
            th 8
            td.bg_rojo Inmediatamente
            td.bg_rojo_claro 5 segundos
            td.bg_rojo_claro 22 minutos
            td.bg_rojo_claro 1 hora
            td.bg_rojo_claro 8 horas
          tr
            th 9
            td.bg_rojo Inmediatamente
            td.bg_rojo_claro 2 minutos
            td.bg_rojo_claro 19 horas
            td.bg_rojo_claro_light 3 días
            td.bg_rojo_claro_light 3 semanas
          tr
            th 10
            td.bg_rojo Inmediatamente
            td.bg_rojo_claro 58 minutos
            td.bg_rojo_claro_light 1 día
            td.bg_rojo_claro_light 7 meses
            td.bg_rojo_claro_light 5 años
          tr
            th 11
            td.bg_rojo_claro 2 segundos
            td.bg_rojo_claro_light 1 día
            td.bg_rojo_claro_light 5 años
            td.bg_amarillo 41 años
            td.bg_amarillo 400 años
          tr
            th 12
            td.bg_rojo_claro 25 segundos
            td.bg_rojo_claro_light 3 semanas
            td.bg_amarillo 300 años
            td.bg_amarillo 2 mil años
            td.bg_amarillo 34 mil años

          tr
            th 13
            td.bg_rojo_claro 4 minutos
            td.bg_rojo_claro_light 1 año
            td.bg_amarillo 16 mil años
            td.bg_amarillo 100 mil años
            td.bg_verde 2 mil años

          tr
            th 14
            td.bg_rojo_claro 41 minutos
            td.bg_amarillo 51 años
            td.bg_amarillo 800 mil años
            td.bg_verde 9 mil años
            td.bg_verde 200 millones de años

          tr
            th 15
            td.bg_rojo_claro 6 horas
            td.bg_amarillo 1000 años
            td.bg_verde 43 millones de años
            td.bg_verde 600 millones de años
            td.bg_verde 15 billones de años

          tr
            th 16
            td.bg_rojo_claro_light 2 días
            td.bg_amarillo 34 mil años
            td.bg_verde 2 billones de años
            td.bg_verde 37 billones de años
            td.bg_verde 1 trillón de años

          tr
            th 17
            td.bg_rojo_claro_light 4 semanas
            td.bg_amarillo 800 mil años
            td.bg_verde 100 billones de años
            td.bg_verde 2 trillones de años
            td.bg_verde 93 trillones de años

          tr
            th 18
            td.bg_rojo_claro_light 9 meses
            td.bg_verde 23 millones de años
            td.bg_verde 6 trillones de años
            td.bg_verde 100 trillones de años
            td.bg_verde 7 cuatrillones de años


    .bg_img_01.my-5(data-aos="zoom-in")
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/img15.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Mediante la técnica de pesca o los ataques #[em phishing], se roba o suplanta la identidad de las personas. Las contraseñas de bajo nivel o fáciles son las primeras en ser vulneradas, por ello, una oportunidad identificada dentro de la política del SGSI es la adecuada creación de contraseñas y controles para su uso seguro; toda política debe ir de la mano con una transferencia de conocimiento donde se explique la misma junto a la normatividad legal, es importante tanto para la entidad como para el personal de la empresa, porque protegen a futuro la posible pérdida de información.

      p.mb-4 Al realizar un análisis de riesgos, se puede utilizar una herramienta #[strong matriz tipo de gravedad * vulnerabilidades], asignando, en cada caso, algunas de las siguientes alternativas:

      .row.mb-5.justify-content-center(data-aos="zoom-in")
        .col-lg-6.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/img16.svg' alt='AvatarTop')
            //- .tarjeta debe ir acompañado de una de una de estas clases =>
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta.bg-purple
              .p-4
                h4.text-center.mt-5 Tipo de gravedad
                p.text-center Baja, media, de gran importancia, crítica.

        .col-lg-6.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/img17.svg' alt='AvatarTop')
            //- .tarjeta debe ir acompañado de una de una de estas clases =>
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta.bg-purple
              .p-4
                h4.text-center.mt-5 Vulnerabilidades
                p.text-center Conocidas en recursos instalados, conocidas en recursos no instalados, no conocidas.
                p.text-center #[strong Ejemplo: un #[i malware].]

      p.my-5 Como ejemplo de lo indicado previamente, se tomará el hallazgo de un #[em malware], donde dicha vulnerabilidad podría categorizarse de acuerdo con:


      .row.mb-5.justify-content-center(data-aos="zoom-in")
        .col-lg-4.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/img18.svg' alt='AvatarTop')
            //- .tarjeta debe ir acompañado de una de una de estas clases =>
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta.bg-purple
              .p-4
                h4.text-center.mt-5 Conocidas en recursos instalados
                p.text-center La vulnerabilidad está en el equipo, es decir, el virus se encontraba al momento de activar y pasar el antivirus en el ordenador.

        .col-lg-4.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/img19.svg' alt='AvatarTop')
            //- .tarjeta debe ir acompañado de una de una de estas clases =>
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta.bg-purple
              .p-4
                h4.text-center.mt-5 Conocidas en recursos no instalados
                p.text-center El virus aparece por alerta de antivirus del mismo.

        .col-lg-4.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/img20.svg' alt='AvatarTop')
            //- .tarjeta debe ir acompañado de una de una de estas clases =>
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta.bg-purple
              .p-4
                h4.text-center.mt-5 No conocida
                p.text-center El virus es nuevo (recién creado) y causa un daño pasando por alto el antivirus.

      p.my-5 Continuando con el ejemplo previo y con base en la categorización descrita, el auditor podría, según su criterio, usar la siguiente tabla (matriz) para catalogar la gravedad del incidente, dependiendo de la fecha de ocurrencia y daño causado por el #[em malware]:

      .titulo-sexto.color-acento-contenido.my-4(data-aos="zoom-in")
        h5 Tabla 2.
        span Matriz Gravedad x Vulnerabilidades

      .tabla-a.mb-5(data-aos="zoom-in")
        table
          thead
            tr
              th Gravedad \ Vulnerabilidades
              th Baja
              th Media
              th De gran importancia
              th Crítica

          tbody
            tr
              th Conocidas en recursos instalados
              td.bg_amarillo
              td.bg_rojo_claro_light
              td.bg_rojo_claro
              td.bg_rojo
            tr
              th Conocidas en recursos no instalados
              td.bg_amarillo
              td.bg_rojo_claro_light
              td.bg_rojo_claro
              td.bg_rojo
            tr
              th No conocidas
              td.bg_amarillo
              td.bg_rojo_claro_light
              td.bg_rojo_claro
              td.bg_rojo


    p.mb-4 Asimismo, cuando aparecen o se detectan vulnerabilidades nuevas, se pueden clasificar con base en la matriz anterior.

    p.mb-4 Para evitar ataques informáticos en la organización debido a las diferentes vulnerabilidades informáticas que aparecen día a día, se debe evaluar su estado de seguridad, y para ello, se deben tener en cuenta los mecanismos de control indicados a continuación, los cuales ayudan a mitigar y evitar la pérdida de información. Por ejemplo, la no actualización de las aplicaciones o los errores humanos son un gran agujero de vulnerabilidades del que se aprovechan los ciberdelincuentes:


    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t1/img21.svg', alt='Políticas de seguridad.', style='max-width: 184px;')

        h4.text-center Políticas de seguridad.

      .col-md.tarjeta.color-2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t1/img22.svg', alt='Normatividad.', style='max-width: 184px;')

        h4.text-center Normatividad.

      .col-md.tarjeta.color-3.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t1/img23.svg', alt='Implementación.', style='max-width: 184px;')

        h4.text-center Implementación.

      .col-md.tarjeta.color-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t1/img24.svg', alt='Mecanismos de seguridad informática.', style='max-width: 184px;')

        h4.text-center Mecanismos de seguridad informática.

    p.mb-4 Los objetivos de seguridad de la información se pueden validar mediante OWASP Top 10, una lista de las vulnerabilidades mayormente conocidas, que muestra los diferentes tipos de riesgos de seguridad que son peligrosos para las aplicaciones web de una organización. Dicha lista se renueva periódicamente para mantenerse a la vanguardia con la evolución de las amenazas cibernéticas que están en constante crecimiento, las cuales son:

    .bg_img_01.my-5
      #Tarjetas2
        .row.mb-5.justify-content-center(data-aos="zoom-in")
          .col-6.col-md-3.col-xl.mb-5.mb-lg-3
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t1/img25.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases =>
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-purple
                .px-4
                  h4 A01
                  p Control de acceso roto

          .col-6.col-md-3.col-xl.mb-5.mb-lg-3
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t1/img26.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases =>
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-purple
                .px-4
                  h4 A02
                  p Fallos criptográficos


          .col-6.col-md-3.col-xl.mb-5.mb-lg-3
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t1/img27.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases =>
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-purple
                .px-4
                  h4 A03
                  p Inyección

          .col-6.col-md-3.col-xl.mb-5.mb-lg-3
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t1/img28.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases =>
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-purple
                .px-4
                  h4 A04
                  p Diseño inseguro

          .col-6.col-md-3.col-xl.mb-5.mb-lg-3
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t1/img29.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases =>
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-purple
                .px-4
                  h4 A05
                  p Configuración incorrecta de seguridad

        .row.mb-5.justify-content-center(data-aos="zoom-in")
          .col-6.col-md-3.col-xl.mb-5.mb-lg-3
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t1/img30.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases =>
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-purple
                .px-4
                  h4 A06
                  p Componentes vulnerables y obsoletos

          .col-6.col-md-3.col-xl.mb-5.mb-lg-3
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t1/img31.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases =>
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-purple
                .px-4
                  h4 A07
                  p Fallos de identificación y autenticación


          .col-6.col-md-3.col-xl.mb-5.mb-lg-3
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t1/img32.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases =>
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-purple
                .px-4
                  h4 A08
                  p Fallas de integridad de <em>software</em> y datos

          .col-6.col-md-3.col-xl.mb-5.mb-lg-3
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t1/img33.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases =>
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-purple
                .px-4
                  h4 A09
                  p Registro de seguridad y fallas de monitoreo

          .col-6.col-md-3.col-xl.mb-5.mb-lg-3
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t1/img34.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases =>
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-purple
                .px-4
                  h4 A10
                  p Falsificación de solicitud del lado del servidor (SSRF)



        .row.mb-5(data-aos="zoom-in").align-items-center
          .col-lg-8
            p.mb-4 Para reducir las brechas de seguridad, se puede diseñar una política de seguridad en las actividades de adquisición o desarrollo de #[em software] de la organización, en la que se incorpore la guía de OWASP Top 10. Con ella, se pueden identificar a tiempo las falencias en seguridad y cualquier vulnerabilidad en las aplicaciones, protegiendo la información de la organización.

            p Después de realizar el análisis de vulnerabilidades o hacking ético e implementar las políticas de SGSI, se puede realizar, ante una entidad internacional, la declaración de Aplicabilidad en ISO 27001 (Statement of Applicability SoA), que es un documento previo a la auditoría de certificación.

          .col-lg-4
            figure.p-4
              img(src='@/assets/curso/temas/t1/img35.svg' alt='AvatarTop')
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass">

.tarjeta-avatar > img
  width: 140px;

#Tarjetas2
  .tarjeta
    border-radius: 0
  .tarjeta-avatar > img
    position: absolute
    width: 85px
    left: 30%
    top: 0
    /*transform: translateX(-50%);*/
    display: block
    margin: 0 auto

.bloque-1
  position: relative

  & > *
    position: relative

  &::before
    content: ""
    position: absolute
    width: 68%
    padding: 16px
    height: 78%
    border-radius: 10px
    background: #DBEEFB

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px)
  .bloque-1
    figure
      display: none !important
    &::before
      content: ""
      position: absolute
      width: 100%
      padding: 16px
      height: 100%
      border-radius: 10px
      background: #DBEEFB
</style>
