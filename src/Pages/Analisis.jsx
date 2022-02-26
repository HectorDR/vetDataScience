import React from "react";
import caballos from "Media/images/caballos.jpg";
import ContentsTable from "Components/ContentsTable";
import SubChapter from "Components/SubChapter";
import Paragraph from "Components/Paragraph";
import SubTitle from "Components/SubTitle";
import categoricos from "Media/analisis/categoricos.png";
import categoricos2 from "Media/analisis/categoricos2.png";
import barras from "Media/analisis/barras.png";
import torta from "Media/analisis/torta.png";
import pareto from "Media/analisis/pareto.png";
import ImageCorousel from "Components/ImageCorousel";
import Video from "Components/Video";
import formulatest from "Media/images/formula_test.png";
import intervalo2 from "Media/analisis/intervalo2.png";
import intervalo3 from "Media/analisis/intervalo3.png";
import histograma from "Media/analisis/histograma.png";
import histograma2 from "Media/analisis/histogram2.png";
import histograma3 from "Media/analisis/histogram3.png";
import dispersion from "Media/analisis/dispersion.png";
import dinamica from "Media/analisis/dinamica.png";
import dinamica2 from "Media/analisis/dinamica2.png";
import ImagePlus from "Components/ImagePlus";
import media from "Media/analisis/media.png";
import mediana from "Media/images/formula_mediana.png";
import varianza_muestral from "Media/analisis/varianza.png";
import varianza_poblacional from "Media/analisis/varianza2.png";
import conversion from "Media/ejemcerdos/conversion.png";
import tabla_c from "Media/ejemcerdos/tabla_c.png";
import media_c from "Media/ejemcerdos/media_c.png";
import desc_c from "Media/ejemcerdos/desc_c.png";
import summary from "Media/ejemcerdos/summary.png";
import summary2 from "Media/ejemcerdos/summary2.png";
import covarianza from "Media/analisis/covarianza.png";
import covarianza2 from "Media/analisis/covarianza2.png";
import corre1 from "Media/analisis/correl.png";
import corre2 from "Media/analisis/correl2.png";
import cerdas from "Media/analisis/cerdas.png";
import cerdas2 from "Media/analisis/cerdas2.png";
import ReferencesBlock from "Components/ReferencesBlock";
import ChapterLayout from "Layouts/ChapterLayout";
const Analisis = () => {
  return (
    <ChapterLayout
      chapter_title="5- Estadística descriptiva y análisis inicial de los datos"
      chapter_image={caballos}
    >
    <div id = "tabla">
    <ContentsTable
            contenidos={[
              {
                titulo: "5.1- Presentación de datos categóricos nominales",
                link: "#categoricos",
              },
              {
                titulo: "5.2- Presentación de datos cuantitativos",
                link: "#cuantitativos",
              },
              {
                titulo:
                  "5.3- Visualización de variables cuantitativas y categóricas",
                link: "#visualizacion",
              },
              { titulo: "5.4- Estadística descriptiva", link: "#descriptiva" },
              {
                titulo: "5.4.1- Medidas de tendencia central",
                link: "#central",
              },
              { titulo: "5.4.2- Medidas de dispersión", link: "#dispersion" },
              {
                titulo: "5.5- Ejemplo de estadística descriptiva",
                link: "#ejemplo",
              },
              
              
              {
                titulo: "5.6- Relaciones entre variables",
                link: "#covarianza",
              },
            ]}
          />
</div>
      {/* //5.1 Datos categóricos nominales */}
      <SubChapter id="categoricos">
        <Paragraph texto="Tal como se ha hablado anteriormente los datos que se recogen en la finca o en cualquier otro tipo de actividad que los genere, tienen diferente naturaleza. En esta sección vamos a revisar como tratar visualizar esos datos para poder entenderlos mejor y saber que nos dicen y también veremos como podemos realizar una aproximación a la estadística descriptiva utilizando herramientas sencillas en la hoja de cálculo Excel" />
        <SubTitle title="5.1 Datos categóricos nominales" />
        <Paragraph texto="Los datos categóricos son dantos que se dividen en grupos como por ejemplo sexo, raza, tamaño etc. Veamos rápidamente como podemos mostrar y resumir los datos categóricos con un ejemplo práctico. De una clínica veterinaria obtenemos una lista de historias clínicas de perros (n= 89). Queremos clasificar los animales por su tamaño, para ellos los hemos dividimos en tres categorias; grande, mediano y pequeño (datos nominales). De esta manera ya podremos cuantificar cuantos animales pertenecen a cada categoría y comenzar a entender por ejemplo que tipo de paciente es el que mas viene a la clínica y como debemos preparanos mejor." />
        <Paragraph texto="Para cuantificar en Excel podemos utilizar varias alternativas, una son las tablas pivotantes (pivot tables) estas tablas son una herramienta muy practica y flexible para resumir información y nos dan la opción de contar elementos. Otro recurso del que vamos a hablar aquí es utilizar la función =CONTAR.SI o =COUNTIF en inglés. Para ello nos ubicamos en la celda donde queremos la información, llamamos la función, seleccionamos el rango donde están nuestros datos y finalmente el criterio por el cual deseamos clasficiar en este caso G de grande como muestra el cuadro inferior." />
        <ImagePlus
          image={categoricos}
          texto="Uso de la función =CONTAR.SI"
          max_zoom="80%"
        />
        <Paragraph texto="Completamos la información para cada una de las categorias y de esta manera obtenemos la tabla que resume el numero de animales por categoría" />
        <ImagePlus image={categoricos2} texto="Tabla Completa" />
        <SubTitle title="Diagrama de Barras" />
        <Paragraph texto="Es uno de las mas comunes para la visualización de datos categóricos ya que permite visualizar la información de manera  sencilla. Como se observa en el diagrama inferior este gráfico es una representación  de la tabla presentada en el cuadro superior.  Cada barra representa una categoría y en el eje vertical se presenta la distribución absoluta (conteo).  Para hacerlo en Excel simplemente seleccione sus datos, ubíquese en el menú Insertar y de ahí seleccione las gráficas de la opción (columnas), el menú de opciones es amplio por lo que hay mucha flexibilidad en el diseño." />
        <ImagePlus image={barras} texto="Gráfica de Columnas" max_zoom="70%" />
        <SubTitle title="Gráfico de torta" />
        <Paragraph texto="Se utiliza para mostrar que porcentaje del total (100%) ocupan las diferentes categorias.  De la totalidad de animales de la muestra en que porcentaje están representados los grandes (G), los medianos (M) y los pequeños (M).  En Excel la forma de obtener este gráfico es similar al anterior. Seleccione los datos, insertar, gráficos y finalmente escoja la torta que mas se ajuste a sus necesidades pues hay en 2D o en 3D y la puede ajustar a su gusto." />
        <ImagePlus image={torta} texto="Gráfica de Torta" max_zoom="60%" />
        <SubTitle title="Diagrama de Pareto" />
        <Paragraph texto="Los datos nominales también se pueden presentar con un diagrama de Pareto. Este presenta las barras verticales que muestran la frecuencia absoluta de unidades por valor que toma la variable (cantidad de perros G, M o S) y simultáneamente en un eje vertical secundario (a la derecha va indicando la frecuencia acumulada relativa (porcentaje) con que cada valor contribuye hasta lograr el 100% (línea naranja). De igual manera es posible realizar el diagrama de Pareto en Excel seleccionando la opción en el menú de gráficos." />
        <ImagePlus image={pareto} texto="Gráfica de Pareto" max_zoom="70%" />
        <SubTitle title="Video Ilustrativo" />
        <Video id="kdhWB_Px2oI" title="Información Categórica" />
      </SubChapter>

      {/* 5.2 Datos cuantitativos */}
      <SubChapter id="cuantitativos">
        <SubTitle title="5.2 Datos cuantitativos" />
        <Paragraph texto="Los datos cuantitavos o sea aquellos que podemos expresar de forma númerica hay mas diversidad en la manera como podemos entender estos datos tal como vimos anteriormente . Una manera frecuente de presentar los datos cuando trabajamos con este tipo de variables es la utilización de tablas de distribución de frecuencias o histogramas. A diferencia de los nominales donde para crear el diagrama de barras básicamente cada valor que toma la variable (Caso anterior G, M, S) representa una columna, cuando trabajamos con información cuantitativa creamos intervalos del mismo tamaño que agrupan los datos. Esto nos permite presentar de manera resumida la información. En la tabla se aconseja no solo presentar la frecuencia total sino también la frecuencia relativa. Por ejemplo, vamos a presentar una tabla que resuma la producción de leche ajustada a 305 días por lactancia de una finca lechera. Lo primero que debemos hacer es decidir el número de intervalos y calcular la amplitud del intervalo con la siguiente fórmula:" />
        <ImagePlus
          image={formulatest}
          texto="Formula amplitud de intervalos"
          width="70%"
        />
        <Paragraph texto="Si estamos trabajando con una tabla con muchos datos, encontrar los valores máximo y mínimo puede ser asunto complicado. Afortunadamente Excel lo hace fácil para ello en Excel utilizamos las funciones =MIN() y =MAX(), entre paréntesis seleccionamos el rango de valores de la variable, para este caso producción de leche. Reemplazando la fórmula tenemos:" />
        <ImagePlus
          image={intervalo2}
          texto="Formula de amplitud de intervalo resuelta"
          width="70%"
        />
        <Paragraph texto="Esto quiere decir que vamos a construir una tabla con 10 intervalos con una amplitud de 3567 libras cada uno, comenzando con el inferior que será de 12150 + 3567, así que el primer el primer intervalo será desde 12150 hasta 15717 y así sucesivamente hasta el último mayor a 44253 hasta 47820. Excel tiene una herramienta muy práctica para la construcción del histograma de frecuencias. Para ello asegúrese de tener instalado la herramienta de análisis de datos en el menú Datos." />
        <ImagePlus
          image={intervalo3}
          texto="Opción de analisis de datos"
          width="70%"
        />
        <Paragraph texto="Una vez que hemos definido los intervalos y sabemos la amplitud de estos hacemos una columna con ellos como se muestra en el gráfico, teniendo presente que incluimos los valores máximos de cada intervalo. Es decir, para el primero que sería de 12150 a 15717, solo digitamos el 15717, sigue 19284 y así hasta el último. Posteriomente vamos al menu datos, seleccionamos data analysis y finalmente histogram." />
        <ImagePlus
          image={histograma}
          texto="Opción de histograma"
          width="50%"
        />
        <Paragraph texto="Inmediatamente se abre una hoja de diálogo y lo primero que se pide es seleccionar el rango de celdas donde están nuestros datos (Input Range). Posteriormente seleccionamos los intervalos que acabamos de construir (Bin Range). También tenemos la opción de seleccionar si queremos los datos en una nueva hoja o podemos asignar una hoja específica y finalmente podemos escoger si queremos un diagrama de Pareto, una secuencia acumulativa o simplemente el gráfico con el histograma. Damos ok y podemos ver el reporte de frecuencias y la gráfica como se muestra en el diagrama y la tabla. Existen otras alternativas en Excel de crear histogramas por ejemplo utilizando la opción CONTAR.SI y FRECUENCIA de manera que esta no es la única pero tal vez la mas rápida." />
        <ImagePlus
          image={histograma2}
          texto="Resultados de histograma"
          width="30%"
        />
        <Paragraph texto="Como se observa el reporte obtenido nos devuelve los invervalos con la cantidad de lactancias en cada intervalo y el porcentaje que representa cada una del total. De igual manera nos entrega el siguiente histograma de frecuencias:" />
        <ImagePlus image={histograma3} texto="Gráfica histograma" width="50%" />
        <SubTitle title="Video Ilustrativo" />
        <Video id="fxoOgwp_mFQ" title="Construcción de un histograma" />
      </SubChapter>

      {/* 5.3 Visualización de variables cuantitativas y categóricas */}
      <SubChapter id="visualizacion">
        <SubTitle title="5.3 Visualización de variables cuantitativas y categóricas" />
        <SubTitle minititle="5.3.1- Variables cuantitativas gráficos de dispersión" />
        <Paragraph texto="Para entender como se relacionan dos variables cuantitativas un primer paso es la visualización y para ello podemos utilizar los gráficos de dispersión, posteriormente veremos la manera de medir que tan estrechas son estas relaciones. Este tipo de gráfico es muy útil para entender si dos variables tienen algún tipo de relación. Como ejemplo, el siguiente gráfico presenta la cantidad de grasa producida (eje horizontal) y la producción de leche (eje vertical) para un grupo de vacas de 1ª lactación." />
        <ImagePlus
          image={dispersion}
          texto="Gráfica de dispersión"
          width="60%"
        />
        <Paragraph texto='Como se observa en el gráfico parece que existe una tendencia lineal entre la producción de grasa en leche y el volumen total de leche (a mayor leche mayor cantidad de grasa), sin embargo este es solo un primer ejercicio para tratar de entender los datos de que disponemos. Luego tendremos que confirmar con fórmulas de asociación como correlaciones o covarianzas. Para realizar el gráfico en Excel, necesitamos seleccionar los rangos donde se encuentran los datos y luego del menú insertar gráficos seleccionar "scatter" o dispersión.' />
        <SubTitle minititle="5.3.2- Variables Categóricas" />
        <Paragraph texto="Las tablas cruzadas o tablas de contingencia se utilizan para resumir y visualizar los datos de las variables categóricas. En la tabla cruzada un grupo de categorías va en el eje horizontal (X) y otro grupo en el eje vertical (Y). Un ejemplo lo podemos tomar por ejemplo si utilizamos una base de datos de un albergue de datos (fuente: Kaggle) y utilizamos las variables categóricas disponibles Esterilizados (Si, No) en el eje vertical y Sexo (Macho, Hembra) en el eje vertical. También es importante incluir los totales. Para este tipo de tabla es muy útil utilizar las tablas dinámicas de Excel que nos permiten no solo realizar la tabla, sino también visualizar el gráfico." />
        <ImagePlus image={dinamica} texto="Tabla cruzada" width="50%" />
        <Paragraph texto="Siguiendo la metodología descrita en el enlace de como crear una tabla dinámica cruzamos los datos de sexo y esterilización. En este caso decidimos mostrar la información por totales sin embargo podemos mostrar tambien sus valores relativos. Es una de las ventajas de Excel que es muy flexible para la creación de estas tablas, ajustándolas a las necesidades del analista. De igual manera podemos seleccionar la opción de visualizar los datos en una gráfica dinámica." />
        <ImagePlus
          image={dinamica2}
          width="50%"
          alt="Grafica de tabla dinamica"
          texto="Total de animales recibidos en el albergue clasificados por sexo (macho o hembra) y esterilización (si o no). Fuente: www.kaggle.com"
        />
        <SubTitle title="Video Ilustrativo" />
        <Video id="bp5nrBUBQPI" title="Visualización de dos variables" />
      </SubChapter>
      
      {/*5.4- Estadística descriptiva*/}
            <SubChapter id="descriptiva">
            <SubTitle title = "5.4- Estadística descriptiva " />
            <Paragraph texto="Cuando se obtiene una colección de datos de cualquier naturaleza, al inicio, el estado original de los datos pueden no mostrar mucho sobre lo que nos interesa buscar o lo que podemos encontrar. Es por ello que es necesario organizar y simplificar los datos de una manera en que ya sea a manera de tablas, gráficos u otros medio (promedios, porcentajes, totales),  de estas compilaciones podamos comenzar a realizar una adecuado análisis e interpretación (Pfaffenberger, R.C. and Patterson, J.H., 1977). " />
            <Paragraph texto="Entonces, podemos decir que la estadística descriptiva se encarga del resumen y descripción de los datos.   El análisis descriptivo se limita únicamente a los datos coleccionados (muestra) y no realiza inferencia o generalización acerca de la totalidad de donde provienen las observaciones seleccionadas (población) (Chao, 1977). Como hemos venido insistiendo, antes de embarcarnos en cualquier análisis, debemos primero comprender la naturaleza de los datos y de acuerdo con ello que tipo de medición hacemos como vimos anteriormente en la 'clasificación de los datos según su naturaleza'. Revisemos a continuación algunos conceptos básicos de estadística descriptiva que nos serviran para entender de manera mas clara los datos la naturaleza de los datos con los cuales estaremos trabajando"/>
            </SubChapter>

      {/* 5.4.1 Medidas de tendencia central */}
      <SubChapter id="central">
        <SubTitle title="5.4.1 Medidas de tendencia central" />
        <SubTitle minititle="Media" />
        <Paragraph texto="La Media es la mas común de todas las medidas de tendencia central. Simplemente es el promedio de los datos. La media representa el centro físico del conjunto de datos y se define como la suma de los valores observados, dividido por el total de observaciones (Chao,1978). En Excel =AVERAGE( ) o PROMEDIO( )" />
        <ImagePlus
          image={media}
          alt="Formula Media"
          texto="Formula matematica para la media de datos"
        />
        <SubTitle minititle="Mediana" />
        <Paragraph texto="La Mediana es el valor que divide un conjunto de observaciones ordenadas respecto de la magnitud de los valores, de tal manera que el numero de datos por encima de la mediana sea igual al numero de datos por debajo de la misma (Chao, 1978). Si esta posición no es un número entero entonces la mediana es el promedio simple de los dos números mas cercanos a la posición calculada. Excel = MEDIAN()" />
        <ImagePlus
          image={mediana}
          width="15%"
          alt="Formula Mediana"
          texto="Formula matematica para la mediana de datos"
        />
        <SubTitle minititle="Moda" />
        <Paragraph texto="Moda es el dato que mas se repite o se da con mayor frecuencia dentro de una sucesión de datos. La moda se halla buscando el dato que tenga la frecuencia mas alta. Excel = MODE.SNGL( ) entrega una sola moda, =MODE.MULT( ) entrega una colección de modas." />
        <SubTitle minititle="Sesgo" />
        <Paragraph texto="Sesgo es una medida de asimetría que indica si las observaciones del conjunto de datos se concentran en un lado de la distribución de los datos. Sesgo derecho indica que los datos se concentran hacia la derecha de la curva (la cola larga se ve hacia la derecha). Izquierda, indica que los datos se concentran hacia la izquierda de la curva. Cuando los resultados del sesgo son negativos, los resultados están desviados hacia la derecha. Al contrario, con son positivos los resultados están desviados hacia la izquierda. Excel = SKEW()" />
      </SubChapter>

      {/* 5.4.2 Medidas de dispersión o variabilidad */}
      <SubChapter id="dispersion">
        <SubTitle title="5.4.2 Medidas de dispersión o variabilidad" />
        <Paragraph
          texto="Para el análisis de datos no basta con encontrar las medidas de posición central, ya que varias muestras pueden presentar las mismas medias, sin embargo, la dispersión de los datos puede darnos claros ejemplos de el comportamiento de los mismos. Las medidas de variabilidad nos indican el grado de dispersión en un conjunto de datos. Si este valor es pequeño entonces hay uniformidad en los datos. Por el contrario habrá poca uniformidad. Si es cero entonces todos los datos son iguales. Por ejemplo, no es igual tener un lote de pollos 
        de engorde con una media de 2.2 kgs y una desviación estándar 0.3 kgs que un lote de pollos de engorde con una media de 2.2. kgs y una desviación estándar de 0.6kgs. A pesar de que las medias son iguales los datos del segundo lote estan mucho mas dispersos, por tanto la uniformidad estaria mas comprometida. Las medidas de dispersión de mas frecuente uso son:"
        />
        <SubTitle minititle="Varianza y desviación estándar" />
        <Paragraph
          texto="La razón fundamental por la que no se toma el promedio de las desviaciones como medida de variabilidad es que la suma de las desviaciones siempre arroja 0. Esto se soluciona con la varianza elevando al cuadrado las diferencias entre los datos y la media y dividiendo por la cantidad de datos (N)si es varianza poblacional o (n-1) si es varianza 
        muestral. En Excel usamos =VAR.S() para varianza muestral y =VAR.P() para la varianza poblacional."
        />
        <ImageCorousel
          images={[
            {
              image: varianza_muestral,
              texto: "Varianza muestral  Excel = STDEV.S()",
            },
            {
              image: varianza_poblacional,
              texto: "Varianza poblacional  Excel =STDEV.P()",
            },
          ]}
        />
        <Paragraph
          texto={[
            "La varianza es el promedio de los cuadrados de las desviaciones.  Al tomar el cuadrado de las desviaciones para el calculo de la varianza, las unidades en estén dados los datos también se expresarán en unidades al cuadrado.  Esto puede no tener sentido, es por ello por lo que se modificó para obtener las unidades reales y se llegó al concepto de la ",
            <a href="https://www.google.com"><b>Desviación Estándar</b></a>,
            ". La desviación estándar, o sea la raíz cuadrada de la varianza es ",
            <u>
              la medida de variabilidad de mayor uso para calcular la dispersión
              de los datos.
            </u>,
          ]}
        />
      </SubChapter>

      {/* 5.5 Ejemplo de estadística descriptiva */}
      <SubChapter id="ejemplo">
        <SubTitle title="5.5 Ejemplo de estadística descriptiva" />
        <Paragraph texto="En una producción porcícola se obtienen los resultados de peso y consumo de alimento de los últimos 100 cerdos vendidos. Los datos se encuentran en una tabla de Excel y queremos ver que podemos obtener de ellos. La tabla que se presenta muestra un fragmento de los 10 primeros animales. Recordemos que la conversión es un dato calculado y la fórmula es:" />
        <ImageCorousel
          images={[
            { image: conversion, texto: "Formula de conversion" },
            {
              image: tabla_c,
              texto:
                "Fragmento de la tabla de pesos y consumos finales para un lote de 100 cerdos (n=100)",
            },
          ]}
        />
        <Paragraph
          texto="Lo primero que vamos a hacer es el cálculo de las medias. Podemos utilizar la función =PROMEDIO o =AVERAGE y seleccionar el grupo de datos como se muestra en la tabla. La misma operación para para la mediana =MEDIAN o =MEDIANA y la moda =MODE o =MODA. Es importante anotar que MODE es considerado por Excel como una variable en modo compatibilidad. Por ello se recomienda utilizar =MODE.SNGL para el número que ocurre con mayor frecuencia o =MODE.MULT que muestra la serie de números que ocurren con mayor frecuencia. 
        Ojo si no hay duplicados dentro de la serie de datos el resultado será “N/A”."
        />
        <ImagePlus image={media_c} texto="Funcion promedio de Excel" />
        <Paragraph
          texto="Los valores máximos y mínimos los calculamos con las funciones =MAX() y =MIN(). Para el sesgo utilizamos la función =SKEW o en español =COEFICIENTE.ASIMETRIA.P. La función de la varianza es =VAR.P o =VAR.S ya sea para una población o para una muestra respectivamente. Para Excel en español =VAR para una muestra y =VARP para la población. La desviación estándar de igual manera =STDEV.P o STDEV.S para población o muestra respectivamente, si Excel ha sido configrado en inglés (como en mi caso) o si es en español =DESVESTP para población y DESVEST para la muestra. 
        Con todas estas variables podemos crear nuestro reporte en una tabla:"
        />
        <ImagePlus image={desc_c} texto="Reporte" />
        <Paragraph
          texto="Excel tiene incorporada una herramienta para hacer análisis descriptivo de manera rápida, para ello debemos instalar la herramienta de análisis de datos. Una vez instalada seleccionamos la opción estadística descriptiva o “descriptive statistics”, inmediatamente se abre una hoja de dialogo donde debemos seleccionar el rango de datos que deseamos incluir y aclarar si los datos están por columnas como en este caso y si las columnas tienen etiquetas (labels). Seleccionamos además la ubicación del informe
         y finalmente que tipo de análisis estadístico deseamos ver, en este caso nos quedamos con el resumen estadístico (summary statistics)."
        />
        <ImagePlus
          image={summary}
          texto="Recuadro de Estadistica descriptiva"
        />
        <Paragraph texto="Finalmente La tabla siguiente muestra los resultados del informe generado por Excel." />
        <ImagePlus image={summary2} texto="Tabla de resultados" />
        <Paragraph texto="Como se observa es un informe bastante completo que se puede generar rápidamente y permite hacer una aproximación rápida a los datos que estamos comenzando a analizar. El informe presenta en una tabla las medidas de tendencia central, las medidas de dispersión, los valores mínimos y máximos asi como la cantidad de datos para cada una de las variables seleccionadas." />
        <SubTitle title="Video Ilustrativo" />
        <Video
          id="KICATP9ceMY"
          title="Explicación de las medidas de tendencia central"
        />
      </SubChapter>

      {/* 5.6 Relaciones entre variables */}
      <SubChapter id="covarianza">
        <SubTitle title="5.6 Relaciones entre variables" />
        <Paragraph texto="En la sección 5.3 vimos algunas maneras como podemos visualizar si existe alguna relación entre dos variables. Ahora veamos como se puede medir el grado de relación entre dos variables" />
        <SubTitle minititle="5.5.1 Covarianza" />
        <Paragraph
          texto="La covarianza es una medida de variabilidad conjunta de dos variables. Si la covarianza es positiva esto indica que las dos variables se mueven juntas en la misma dirección. Si la covarianza es negativa entonces las dos variables se mueven en direcciones opuestas. Si la covarianza es 0 las dos variables son independientes la una de la otra.
        La covarianza puede tomar valores hasta el infinito tanto positivos como negativos. Esto es un problema porque dificulta entender que tan ligadas están las dos variables."
        />
        <Paragraph texto="En Excel: Sample covariance = COVARIANCE.S() Population covariance =COVARIANCE.P()" />
        <ImageCorousel
          images={[
            {
              image: covarianza,
              texto: "Fórmula de la covarianza muestral",
            },
            {
              image: covarianza2,
              texto: "Fórmula de la covarianza poblacional",
            },
          ]}
        />
        <SubTitle minititle="5.5.2 Correlación" />
        <Paragraph
          texto="La correlación es una medida de variación conjunta de dos variables. La correlación busca estudiar el grado de asociación entre variables. También se conoce como correlación lineal de Pearson, es una medida de regresión lineal que pretende cuantificar el grado de variación conjunta entre dos variables. Es importante aclarar que dos variables
        que están altamente correlacionadas no necesariamente implican que una es causal de la otra (correlación no implica causalidad)."
        />
        <Paragraph
          texto="A diferencia de la covarianza, es una medida estandarizada que toma medidas entre -1 y +1 de manera que es mas fácil de interpretar los resultados. Donde valores positivos indican que, si el valor de x sube, el de y sube. Al contrario, si el valor es negativo indica que si x aumenta,
         y disminuye y un valor 0 es que no hay correlación."
        />
        <ImageCorousel
          images={[
            { image: corre1, texto: "Fórmula de la correlación muestral" },
            {
              image: corre2,
              texto: "Formula de la correlación poblacional",
            },
          ]}
        />
        <SubTitle minititle="Ejemplo en Excel" />
        <Paragraph
          texto="Tenemos los promedios de los registros de producción de 10 granjas de cerdas de cría de una región de Caldas (Colombia) como lo muestra el registro 
        a continuación."
        />
        <ImagePlus
          image={cerdas}
          texto="Promedios"
          alt="promedios de los registros de producción de 10 granjas"
        />
        <Paragraph
          texto="Queremos calcular la covarianza entre lechones nacidos muertos o mortinatos por parto (columna verde) y el número de partos por cerdas por año (columna naranja).
         Podemos seguir la fórmula de la covarianza muestral y hacer los cálculos en Excel, o bien podemos utilizar la función =COVARIANCE.S (). El resultado va a ser igual como se observa."
        />
        <ImagePlus
          image={cerdas2}
          texto="Covarianza entre lechones nacidos muertos o mortinatos"
          alt="Formula para covarianza de una muestra"
        />
        <Paragraph
          texto="El resultado de la covarianza es positivo 0.0067 lo que nos indica que si hay mas animales por camada tambien hay mas mortinatos por camada. Para cuantificar que tan cercana es la relación
         entonces acudimos a la correlación, para ello tambien podemos correr la formula o simplemente utilizar la función = CORREL de Excel como se muestra en la tabla superior."
        />
        <SubTitle title="Video Ilustrativo" />
        <Video id="1OqX5A-1Pgo" title="Medidas de asociación en Excel" />
      </SubChapter>
      <ReferencesBlock
        references={[
          "* Chao, L.L., 1978. Estadística para las ciencias administrativas. McGraw-Hill Interamericana.",
          "* Pfaffenberger, R.C. and Patterson, J.H., 1977. Statistical methods for business and economics. Homewood, IL: Richard D. Irwin.",
        ]}
      />
    </ChapterLayout>
  );
};

export default Analisis;
