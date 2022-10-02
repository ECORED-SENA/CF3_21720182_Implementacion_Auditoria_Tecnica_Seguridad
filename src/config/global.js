export default {
  global: {
    componenteFormativo:
      'Fundamentos normativos y estándares de las políticas de un SGSI',
    descripcionCurso:
      'La implementación de un modelo adecuado de políticas de seguridad de la información debe ir acorde con la normatividad nacional y los estándares de la organización; por lo tanto, es relevante tener en cuenta las normas y protocolos internacionales importantes para su implementación, ya que estos modelos ayudan a blindar la empresa frente a ataques cibernéticos o vulnerabilidades informáticas.',
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
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tipos de vulnerabilidades',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tratamiento de riesgos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Matriz de riesgos',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  complementario: [
    {
      tema: 'Tipos de vulnerabilidades',
      referencia:
        'Russell, J. (s. f.). ISO 27001:2013 Guía de implantación para la seguridad de la información. NQA.',
      tipo: 'PDF',
      link:
        'https://www.nqa.com/medialibraries/NQA/NQA-Media-Library/PDFs/Spanish%20QRFs%20and%20PDFs/NQA-ISO-27001-Guia-de-implantacion.pdf',
    },
    {
      tema: 'Tipos de vulnerabilidades',
      referencia:
        'Oficina de Seguridad para las Redes Informáticas. (s. f.). Metodología para la gestión de la seguridad informática (Proyecto).',
      tipo: 'PDF',
      descarga:
        'https://instituciones.sld.cu/dnspminsap/files/2013/08/Metodologia-PSI-NUEVAProyecto.pdf',
    },
    {
      tema: 'Tipos de vulnerabilidades',
      referencia:
        'OWASP Top 10 team. (2021). Welcome to the OWASP Top 10 – 2021. OWASP Top 10:2021',
      tipo: 'Página web',
      link: 'https://owasp.org/Top10/',
    },
    {
      tema: 'Tipos de vulnerabilidades',
      referencia:
        'Departamento Nacional de Planeación [DNP]. (2011, 14 de julio). Lineamientos de política para ciberseguridad y ciberdefensa (Documento Conpes 3701).',
      tipo: 'PDF',
      descarga:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3701.pdf',
    },
    {
      tema: 'Tipos de vulnerabilidades',
      referencia:
        'Departamento Nacional de Planeación [DNP]. (2016, 11 de abril). Política Nacional de Seguridad Digital (Documento Conpes 3854).',
      tipo: 'PDF',
      descarga:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3854.pdf',
    },
    {
      tema: 'Tipos de vulnerabilidades',
      referencia:
        'Consejo de Europa. (2001). Serie de Tratados Europeos nº 185. Convenio sobre la ciberdelincuencia.',
      tipo: 'PDF',
      descarga: 'https://www.oas.org/juridico/english/cyb_pry_convenio.pdf',
    },
    {
      tema: 'Tratamiento de riesgos',
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones [MinTIC]. (2016a). Guía de gestión de riesgos. Seguridad y privacidad de la información.',
      tipo: 'PDF',
      descarga:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G7_Gestion_Riesgos.pdf',
    },
    {
      tema: 'Tratamiento de riesgos',
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones [MinTIC]. (2016b). Modelo de Seguridad y Privacidad de la Información.',
      tipo: 'PDF',
      descarga:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_Modelo_de_Seguridad_Privacidad.pdf',
    },
    {
      tema: 'Tratamiento de riesgos',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (2009). Tecnología de la Información. Técnicas de seguridad. Gestión del riesgo en la seguridad de la información (NTC-ISO/IEC 27005).',
      tipo: 'PDF',
      descarga:
        'https://gmas2.envigado.gov.co/gmas/downloadFile.public?repositorioArchivo=000000001071&ruta=/documentacion/0000001359/0000000107',
    },
    {
      tema: 'Tratamiento de riesgos',
      referencia:
        'Microsoft. (s. f.). Cómo crear una contraseña segura para tu cuenta de Microsoft.',
      tipo: 'Página web',
      descarga:
        'https://support.microsoft.com/es-es/account-billing/c%C3%B3mo-crear-una-contrase%C3%B1a-segura-para-tu-cuenta-de-microsoft-f67e4ddd-0dbe-cd75-cebe-0cfda3cf7386',
    },
  ],
  glosario: [
    {
      termino: 'Autenticación',
      significado:
        'acto de establecimiento o confirmación de algo como auténtico. La autenticación de un objeto puede significar la confirmación de su procedencia, mientras que la autenticación de una persona a menudo consiste en verificar su identidad. La autenticación depende de uno o varios factores. Desde el punto digital, existen varios tipos de autenticación, como las contraseñas, biométricos, token y otros. (Educalingo, s. f.)',
    },
    {
      termino: 'Base de datos',
      significado:
        'es una recopilación organizada de información o datos estructurados, que normalmente se almacena de forma electrónica en un sistema informático. Normalmente, una base de datos está controlada por un sistema de gestión de base de datos (DBMS). En un conjunto, los datos y el DBMS, junto con las aplicaciones asociadas a ellos, reciben el nombre de sistema de base de datos, abreviado normalmente a simplemente base de datos.',
    },
    {
      termino: 'Cobit',
      significado:
        'por sus siglas en inglés Control Objectives for Information and related Technology y, en español, Objetivos de Control para las Tecnologías de Información relacionadas.',
    },
    {
      termino: 'Evidencia digital',
      significado:
        'dentro de la guía de subproceso de policía judicial en Colombia, se encuentran definiciones de la unidad de delitos informáticos de la Fiscalía General de la Nación (FGN, 2009). <br>También conocida como evidencia computacional, se trata de registros o archivos generados por computador u otro medio equivalente, registros o archivos no generados sino simplemente almacenados por o en computadores o medios equivalentes y registros o archivos híbridos que incluyen tanto registros generados por computador o medio equivalente como almacenados en los mismos.',
    },
    {
      termino: 'Log',
      significado:
        'dentro de la guía de subproceso de policía judicial en Colombia, se encuentran definiciones de la unidad de delitos informáticos de la Fiscalía General de la Nación (FGN, 2009). <br>Un log es un registro oficial de eventos durante un periodo de tiempo en particular. Para los profesionales en seguridad informática un log es usado para registrar datos o información sobre quién, qué, cuándo, dónde y por qué (who, what, when, where y why, W5) un evento ocurre para un dispositivo en particular o aplicación. La mayoría de los logs son almacenados o desplegados en el formato estándar, el cual es un conjunto de caracteres para dispositivos comunes y aplicaciones. De esta forma, cada log generado por un dispositivo en particular puede ser leído y desplegado en otro diferente. A su vez, la palabra log se relaciona con el término evidencia digital, un tipo de evidencia física construida de campos magnéticos y pulsos electrónicos que pueden ser recolectados y analizados con herramientas y técnicas especiales, lo que implica la lectura del log y deja al descubierto la actividad registrada en el mismo.',
    },
    {
      termino: 'MinTIC',
      significado:
        'Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia.',
    },
    {
      termino: 'SGSI',
      significado: 'Sistema de Gestión de Seguridad de la Información.',
    },
    {
      termino: 'Seguridad informática',
      significado:
        'Gómez (2006) define la seguridad informática como cualquier medida que impida la ejecución de operaciones no autorizadas sobre un sistema o red informática cuyos efectos puedan conllevar daños sobre la información, equipo o software. Por su parte, Kissel (2012) la define como la protección de información y sistemas de información de acceso no autorizado.',
    },
    {
      termino: 'Sistema de información',
      significado:
        'dentro de la guía de subproceso policía judicial en Colombia, se encuentran definiciones de la unidad de delitos informáticos de la Fiscalía General de la Nación (FGN, 2009).<br>Es el conjunto de procesos que, operando sobre una colección de datos estructurada de acuerdo con una empresa o entidad, recopila, elabora y distribuye (parte de) la información necesaria para el buen funcionamiento de ella. Además, apoya actividades de dirección y control correspondientes, apoyando al menos en parte, la toma de decisiones necesarias de acuerdo con su estrategia.',
    },
    {
      termino: 'Transmisión de datos',
      significado:
        'movimiento de información codificada de un punto a otro/s punto/s. Estos datos se transmitirán mediante señales eléctricas, ópticas, radio o electromagnéticas (FGN, 2009)',
    },
    {
      termino: 'Riesgo',
      significado:
        'en el ámbito informático, la definición de riesgo son las amenazas digitales a las que se está expuesto día a día cuando se hace uso de la tecnología.',
    },
  ],
  referencias: [
    {
      referencia:
        'Consejo de Europa. (2001). Serie de Tratados Europeos nº 185. Convenio sobre la ciberdelincuencia. ',
      link: 'https://www.oas.org/juridico/english/cyb_pry_convenio.pdf',
    },
    {
      referencia:
        'Departamento Nacional de Planeación [DNP]. (2011, 14 de julio). Lineamientos de política para ciberseguridad y ciberdefensa (Documento Conpes 3701).',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3701.pdf',
    },
    {
      referencia:
        'Departamento Nacional de Planeación [DNP]. (2016, 11 de abril). Política Nacional de Seguridad Digital (Documento Conpes 3854). ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3854.pdf',
    },
    {
      referencia:
        'Erb, M. (2009). 6. Amenazas y Vulnerabilidades. Gestión de riesgo en la seguridad informática. ',
      link:
        'https://protejete.wordpress.com/gdr_principal/amenazas_vulnerabilidades/',
    },
    {
      referencia:
        'Fiscalía General de la Nación [FGN]. (2009). Procedimientos Forenses de Policía Judicial.',
      link: '',
    },
    {
      referencia:
        'Gómez, A. (2006). Enciclopedia de la Seguridad Informática. RA-Ma .',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (2009). Tecnología de la Información. Técnicas de seguridad. Gestión del riesgo en la seguridad de la información (NTC-ISO/IEC 27005). ',
      link:
        'https://gmas2.envigado.gov.co/gmas/downloadFile.public?repositorioArchivo=000000001071&ruta=/documentacion/0000001359/0000000107',
    },
    {
      referencia:
        'ICONTEC internacional. (2017). Tecnología de la información. Técnicas de seguridad. Sistemas de Gestión de Seguridad de la Información (SGSI). Visión general y vocabulario (NTC-ISO/IEC 27000). ',
      link: 'https://www.academia.edu/9369554/ISO_27000',
    },
    {
      referencia:
        'Ley 527 de 1999. Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones. Agosto 21 de 1999. D.O. No. 51.990. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0527_1999.html',
    },
    {
      referencia:
        'Ley 1273 de 2009. Por medio de la cual se modifica el Código Penal, se crea un nuevo bien jurídico tutelado - denominado "de la protección de la información y de los datos" y se preservan integralmente los sistemas que utilicen las tecnologías de la información y las comunicaciones, entre otras disposiciones. Enero 5 de 2009.',
      link:
        'https://www.sic.gov.co/recursos_user/documentos/normatividad/Ley_1273_2009.pdf',
    },
    {
      referencia:
        'Ley Estatutaria 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Octubre 17 de 2012. D.O. No. 48587. ',
      link:
        'https://www.defensoria.gov.co/public/Normograma%202013_html/Normas/Ley_1581_2012.pdf',
    },
    {
      referencia:
        'Mifsud, E. (2012). Monográfico: Introducción a la seguridad informática. Observatorio Tecnológico. ',
      link:
        'http://recursostic.educacion.es/observatorio/web/es/software/software-general/1040-introduccion-a-la-seguridad-informatica',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones [MinTIC]. (2016a). Guía de gestión de riesgos. Seguridad y privacidad de la información. ',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G7_Gestion_Riesgos.pdf',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones [MinTIC]. (2016b). Modelo de Seguridad y Privacidad de la Información. ',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_Modelo_de_Seguridad_Privacidad.pdf',
    },
    {
      referencia:
        'Oficina de Seguridad para las Redes Informáticas. (s. f.). Metodología para la gestión de la seguridad informática (Proyecto). ',
      link:
        'https://instituciones.sld.cu/dnspminsap/files/2013/08/Metodologia-PSI-NUEVAProyecto.pdf',
    },
    {
      referencia: 'ORACLE. (s. f.). Base de datos definida. ',
      link: 'https://www.oracle.com/co/database/what-is-database/',
    },
    {
      referencia:
        'OWASP Top 10 team. (2021). Welcome to the OWASP Top 10 – 2021. OWASP Top 10:2021 ',
      link: 'https://owasp.org/Top10',
    },
    {
      referencia:
        'Russell, J. (s. f.). ISO 27001:2013 Guía de implantación para la seguridad de la información. NQA. ',
      link:
        'https://www.nqa.com/medialibraries/NQA/NQA-Media-Library/PDFs/Spanish%20QRFs%20and%20PDFs/NQA-ISO-27001-Guia-de-implantacion.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuly Rey',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Polanco',
        cargo: 'Revisión diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lizeth Karina Manchego',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Mary Jeans Palacio Camacho',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Veimar Celis',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
