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
import BackButton from 'Components/BackButton';
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
              <BackButton/>
            </SubChapter>
          </main>
        </body>
    </div>
  )
}

export default Analisis;