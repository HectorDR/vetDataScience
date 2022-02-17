import React from 'react'
import BarraDeNavegacion from 'Components/BarraDeNavegacion';
import ChapterHead from 'Components/ChapterHead';
import caballos from "Media/images/caballos.jpg"
import ContentsTable from 'Components/ContentsTable';
import SubChapter from 'Components/SubChapter';
import Paragraph from 'Components/Paragraph';
import SubTitle from 'Components/SubTitle';
import categoricos from "Media/analisis/categoricos.png"
import categoricos2 from "Media/analisis/categoricos2.png"
import barras from "Media/analisis/barras.png"
import torta from "Media/analisis/torta.png"
import pareto from "Media/analisis/pareto.png"
import ImageCorousel from 'Components/ImageCorousel';
import Video from 'Components/Video';
import Image from 'Components/Image';
import formulatest from "Media/images/formula_test.png"
import intervalo2 from "Media/analisis/intervalo2.png"
import intervalo3 from "Media/analisis/intervalo3.png"
import histograma from "Media/analisis/histograma.png"
import histograma2 from "Media/analisis/histogram2.png"
import histograma3 from "Media/analisis/histogram3.png"
import dispersion from "Media/analisis/dispersion.png"
import dinamica from "Media/analisis/dinamica.png"
import dinamica2 from "Media/analisis/dinamica2.png"
import ImagePlus from 'Components/ImagePlus';
import media from "Media/analisis/media.png"
import mediana from "Media/images/formula_mediana.png"
const Analisis = () => {
  return (
    <div>
        <body id="home">
        <header className="hero blog">
          <BarraDeNavegacion/>
          <ChapterHead titulo="5- Estadística descriptiva y análisis inicial de los datos" background={caballos}/>
        </header>
          <main>
            <ContentsTable
            contenidos={[{titulo: "5.1- Presentación de datos categóricos nominales", link: "#categoricos"},
            {titulo: "5.2- Presentación de datos cuantitativos", link: "#cuantitativos"},
            {titulo: "5.3- Visualización de variables cuantitativas y categóricas", link: "#visualizacion"},
            {titulo: "5.4- Estadística descriptiva", link: "#descriptiva"},
            {titulo: "5.4.1- Medidas de tendencia central", link: "#central"},
            {titulo: "5.4.2- Medidas de dispersión", link: "#dispersion"},
            {titulo: "5.5- Relaciones entre variables", link: "#covarianza"},
          ]}
            />
            <SubChapter>
              <Paragraph texto="Tal como se ha hablado anteriormente los datos que se recogen en la finca o en cualquier otro tipo de actividad que los genere, tienen diferente naturaleza. En esta sección vamos a revisar como tratar visualizar esos datos para poder entenderlos mejor y saber que nos dicen y también veremos como podemos realizar una aproximación a la estadística descriptiva utilizando herramientas sencillas en la hoja de cálculo Excel"/> 
              <SubTitle title="5.1 Datos categóricos nominales"/> 
              <Paragraph texto="Los datos categóricos son dantos que se dividen en grupos como por ejemplo sexo, raza, tamaño etc. Veamos rápidamente como podemos mostrar y resumir los datos categóricos con un ejemplo práctico. De una clínica veterinaria obtenemos una lista de historias clínicas de perros (n= 89). Queremos clasificar los animales por su tamaño, para ellos los hemos dividimos en tres categorias; grande, mediano y pequeño (datos nominales). De esta manera ya podremos cuantificar cuantos animales pertenecen a cada categoría y comenzar a entender por ejemplo que tipo de paciente es el que mas viene a la clínica y como debemos preparanos mejor."/>
              <Paragraph texto="Para cuantificar en Excel podemos utilizar varias alternativas, una son las tablas pivotantes (pivot tables) estas tablas son una herramienta muy practica y flexible para resumir información y nos dan la opción de contar elementos. Otro recurso del que vamos a hablar aquí es utilizar la función =CONTAR.SI o =COUNTIF en inglés. Para ello nos ubicamos en la celda donde queremos la información, llamamos la función, seleccionamos el rango donde están nuestros datos y finalmente el criterio por el cual deseamos clasficiar en este caso G de grande como muestra el cuadro inferior."/>
              <ImageCorousel images={[{image: categoricos, texto: "Ejemplo 1"}]}/>
              <Paragraph texto ="Completamos la información para cada una de las categorias y de esta manera obtenemos la tabla que resume el numero de animales por categoría"/>
              <ImageCorousel images={[{image: categoricos2, texto: "Ejemplo 1"}]}/>
              <SubTitle title="Diagrama de Barras"/> 
              <Paragraph texto="Es uno de las mas comunes para la visualización de datos categóricos ya que permite visualizar la información de manera  sencilla. Como se observa en el diagrama inferior este gráfico es una representación  de la tabla presentada en el cuadro superior.  Cada barra representa una categoría y en el eje vertical se presenta la distribución absoluta (conteo).  Para hacerlo en Excel simplemente seleccione sus datos, ubíquese en el menú Insertar y de ahí seleccione las gráficas de la opción (columnas), el menú de opciones es amplio por lo que hay mucha flexibilidad en el diseño."/>
              <ImageCorousel images={[{image: barras, texto: "Ejemplo 1"}]}/>
              <SubTitle title="Gráfico de torta"/>
              <Paragraph texto ="Se utiliza para mostrar que porcentaje del total (100%) ocupan las diferentes categorias.  De la totalidad de animales de la muestra en que porcentaje están representados los grandes (G), los medianos (M) y los pequeños (M).  En Excel la forma de obtener este gráfico es similar al anterior. Seleccione los datos, insertar, gráficos y finalmente escoja la torta que mas se ajuste a sus necesidades pues hay en 2D o en 3D y la puede ajustar a su gusto."/>
              <ImageCorousel images={[{image: torta, texto: "Ejemplo 1"}]}/>
              <SubTitle title="Diagrama de Pareto"/>
              <Paragraph texto="Los datos nominales también se pueden presentar con un diagrama de Pareto. Este presenta las barras verticales que muestran la frecuencia absoluta de unidades por valor que toma la variable (cantidad de perros G, M o S) y simultáneamente en un eje vertical secundario (a la derecha va indicando la frecuencia acumulada relativa (porcentaje) con que cada valor contribuye hasta lograr el 100% (línea naranja). De igual manera es posible realizar el diagrama de Pareto en Excel seleccionando la opción en el menú de gráficos."/>
              <ImageCorousel images={[{image: pareto, texto: "Ejemplo 1"}]}/>
              <SubTitle title="Video Ilustrativo"/>
              <Video id="kdhWB_Px2oI" title="Información Categórica"/>
            </SubChapter>
            <SubChapter>
              <SubTitle title="5.2 Datos cuantitativos"/>
              <Paragraph texto="Los datos cuantitavos o sea aquellos que podemos expresar de forma númerica hay mas diversidad en la manera como podemos entender estos datos tal como vimos anteriormente . Una manera frecuente de presentar los datos cuando trabajamos con este tipo de variables es la utilización de tablas de distribución de frecuencias o histogramas. A diferencia de los nominales donde para crear el diagrama de barras básicamente cada valor que toma la variable (Caso anterior G, M, S) representa una columna, cuando trabajamos con información cuantitativa creamos intervalos del mismo tamaño que agrupan los datos. Esto nos permite presentar de manera resumida la información. En la tabla se aconseja no solo presentar la frecuencia total sino también la frecuencia relativa. Por ejemplo, vamos a presentar una tabla que resuma la producción de leche ajustada a 305 días por lactancia de una finca lechera. Lo primero que debemos hacer es decidir el número de intervalos y calcular la amplitud del intervalo con la siguiente fórmula:"/>
              <Image image={formulatest} alt="Formula amplitud de intervalos"/>
              <Paragraph texto="Si estamos trabajando con una tabla con muchos datos, encontrar los valores máximo y mínimo puede ser asunto complicado. Afortunadamente Excel lo hace fácil para ello en Excel utilizamos las funciones =MIN() y =MAX(), entre paréntesis seleccionamos el rango de valores de la variable, para este caso producción de leche. Reemplazando la fórmula tenemos:"/>
              <Image image={intervalo2} alt="Formula de amplitud de intervalo resuelta"/>
              <Paragraph texto="Esto quiere decir que vamos a construir una tabla con 10 intervalos con una amplitud de 3567 libras cada uno, comenzando con el inferior que será de 12150 + 3567, así que el primer el primer intervalo será desde 12150 hasta 15717 y así sucesivamente hasta el último mayor a 44253 hasta 47820. Excel tiene una herramienta muy práctica para la construcción del histograma de frecuencias. Para ello asegúrese de tener instalado la herramienta de análisis de datos en el menú Datos."/>
              <Image image={intervalo3} alt="captura de opciones excel"/>
              <Paragraph texto="Una vez que hemos definido los intervalos y sabemos la amplitud de estos hacemos una columna con ellos como se muestra en el gráfico, teniendo presente que incluimos los valores máximos de cada intervalo. Es decir, para el primero que sería de 12150 a 15717, solo digitamos el 15717, sigue 19284 y así hasta el último. Posteriomente vamos al menu datos, seleccionamos data analysis y finalmente histogram."/>
              <Image image={histograma} alt="opcion de histogrma de excel"/>
              <Paragraph texto="Inmediatamente se abre una hoja de diálogo y lo primero que se pide es seleccionar el rango de celdas donde están nuestros datos (Input Range). Posteriormente seleccionamos los intervalos que acabamos de construir (Bin Range). También tenemos la opción de seleccionar si queremos los datos en una nueva hoja o podemos asignar una hoja específica y finalmente podemos escoger si queremos un diagrama de Pareto, una secuencia acumulativa o simplemente el gráfico con el histograma. Damos ok y podemos ver el reporte de frecuencias y la gráfica como se muestra en el diagrama y la tabla. Existen otras alternativas en Excel de crear histogramas por ejemplo utilizando la opción CONTAR.SI y FRECUENCIA de manera que esta no es la única pero tal vez la mas rápida."/>
              <Image image={histograma2} alt="resultados de histograma"/>
              <Paragraph texto="Como se observa el reporte obtenido nos devuelve los invervalos con la cantidad de lactancias en cada intervalo y el porcentaje que representa cada una del total. De igual manera nos entrega el siguiente histograma de frecuencias:"/>
              <Image image={histograma3} alt="resultados de histograma en grafica"/>
              <SubTitle title="Video Ilustrativo"/>
              <Video id="fxoOgwp_mFQ" title="Construcción de un histograma"/>
            </SubChapter>
            <SubChapter>
              <SubTitle title="5.3 Visualización de variables cuantitativas y categóricas"/>
              <SubTitle minititle="5.3.1- Variables cuantitativas gráficos de dispersión"/>
              <Paragraph texto="Para entender como se relacionan dos variables cuantitativas un primer paso es la visualización y para ello podemos utilizar los gráficos de dispersión, posteriormente veremos la manera de medir que tan estrechas son estas relaciones. Este tipo de gráfico es muy útil para entender si dos variables tienen algún tipo de relación. Como ejemplo, el siguiente gráfico presenta la cantidad de grasa producida (eje horizontal) y la producción de leche (eje vertical) para un grupo de vacas de 1ª lactación."/>
              <Image image={dispersion} alt="grafico de dispersion"/>
              <Paragraph texto='Como se observa en el gráfico parece que existe una tendencia lineal entre la producción de grasa en leche y el volumen total de leche (a mayor leche mayor cantidad de grasa), sin embargo este es solo un primer ejercicio para tratar de entender los datos de que disponemos. Luego tendremos que confirmar con fórmulas de asociación como correlaciones o covarianzas. Para realizar el gráfico en Excel, necesitamos seleccionar los rangos donde se encuentran los datos y luego del menú insertar gráficos seleccionar "scatter" o dispersión.'/>
              <SubTitle minititle="5.3.2- Variables Categóricas"/>
              <Paragraph texto="Las tablas cruzadas o tablas de contingencia se utilizan para resumir y visualizar los datos de las variables categóricas. En la tabla cruzada un grupo de categorías va en el eje horizontal (X) y otro grupo en el eje vertical (Y). Un ejemplo lo podemos tomar por ejemplo si utilizamos una base de datos de un albergue de datos (fuente: Kaggle) y utilizamos las variables categóricas disponibles Esterilizados (Si, No) en el eje vertical y Sexo (Macho, Hembra) en el eje vertical. También es importante incluir los totales. Para este tipo de tabla es muy útil utilizar las tablas dinámicas de Excel que nos permiten no solo realizar la tabla, sino también visualizar el gráfico."/>
              <Image image={dinamica} alt="Tabla cruzada"/>
              <Paragraph texto="Siguiendo la metodología descrita en el enlace de como crear una tabla dinámica cruzamos los datos de sexo y esterilización. En este caso decidimos mostrar la información por totales sin embargo podemos mostrar tambien sus valores relativos. Es una de las ventajas de Excel que es muy flexible para la creación de estas tablas, ajustándolas a las necesidades del analista. De igual manera podemos seleccionar la opción de visualizar los datos en una gráfica dinámica."/>
              <ImagePlus image={dinamica2} alt="Grafica de tabla dinamica" texto="Total de animales recibidos en el albergue clasificados por sexo (macho o hembra) y esterilización (si o no). Fuente: www.kaggle.com"/>
              <Video id="bp5nrBUBQPI" title="Visualización de dos variables"/>
            </SubChapter>
            <SubChapter>
              <SubTitle title="5.4.1 Medidas de tendencia central"/>
              <SubTitle minititle="Media"/>
              <Paragraph texto="La Media es la mas común de todas las medidas de tendencia central. Simplemente es el promedio de los datos. La media representa el centro físico del conjunto de datos y se define como la suma de los valores observados, dividido por el total de observaciones (Chao,1978). En Excel =AVERAGE( ) o PROMEDIO( )"/>
              <ImagePlus image={media} alt="Formula Media" texto="Formula matematica para la media de datos"/>
              <SubTitle minititle="Mediana"/>
              <Paragraph texto="La Mediana es el valor que divide un conjunto de observaciones ordenadas respecto de la magnitud de los valores, de tal manera que el numero de datos por encima de la mediana sea igual al numero de datos por debajo de la misma (Chao, 1978). Si esta posición no es un número entero entonces la mediana es el promedio simple de los dos números mas cercanos a la posición calculada. Excel = MEDIAN()"/>
              <ImagePlus image={mediana} alt="Formula Mediana" texto="Formula matematica para la mediana de datos" width="30%"/>
            </SubChapter>
          </main>
        </body>
    </div>
  )
}

export default Analisis;