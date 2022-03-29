import React from "react";
import ContentsTable from "Components/ContentsTable";
import ChapterLayout from "Layouts/ChapterLayout";
import SubChapter from "Components/SubChapter";
import Paragraph from "Components/Paragraph";
import SubTitle from "Components/SubTitle";
import ImagePlus from "Components/ImagePlus";
import Video from "Components/Video";
import ReferencesBlock from "Components/ReferencesBlock";
import ovejas from "Media/photos_web/ovejas.JPG";
import single from "Media/anovas/single_factor1.png";
import single2 from "Media/anovas/single_factor2.png";
import single3 from "Media/anovas/single_factor3.png";
import twof from "Media/anovas/two_factor1.png";
import twof2 from "Media/anovas/two_factor2.png";
import twof3 from "Media/anovas/two_factor3.png";
import twof4 from "Media/anovas/two_factor4.png";
import rep from "Media/anovas/two_f_rep1.png";
import rep2 from "Media/anovas/two_f_rep2.png";
import rep3 from "Media/anovas/two_f_rep3.png";
import rep4 from "Media/anovas/two_f_rep4.png";
import linr from "Media/anovas/linreg.png";
import linr2 from "Media/anovas/linreg2.png";
import linr3 from "Media/anovas/linreg3.png";

const Anava = () => {
    return (
      <ChapterLayout
        chapter_title="7- El Análisis de Varianza (ANAVA)"
        chapter_image={ovejas}>

<div id = "tabla" className = "container bg-light">
    <ContentsTable
            contenidos={[
              {titulo: "7.1-Que es el análisis de varianza (ANAVA)",
                link: "#anava",  },
              {titulo: "7.2- El ANAVA de un solo factor",
                link: "#unianova",  },
              { titulo: "7.3- El ANAVA de dos factores sin replicación",
                link: "#twoanova", },
              { titulo: "7.4- El ANAVA de dos factores con replicación", link: "#twoanovarep" },
              { titulo: "7.5- La regresión lineal",
                link: "#linearreg", },
              { titulo: "7.6- La regresión lineal simple en Excel", link: "#AnavaII#reglinex" },
              {titulo: "7.7- La regresión múltiple en Excel ",
                link: "AnavaII#regmult",
              },
              { titulo: "7.8- La regresión cuadrática en Excel",
                link: "AnavaII#regquad",
              },
              { titulo: "7.9- La regresión con interacción de elementos independientes en Excel",
              link: "AnavaII#reginter",
            },
            { titulo: "7.10- Variables nominales y construcción de variables ficticias",
            link: "AnavaII#dummyvars",
          }
            ]}
          />
        </div>
        
      <SubChapter id = "anava">
      <SubTitle title = "7.1- El análisis de varianza"/>
      <Paragraph texto = {[
        "Cuando estamos interesados en identificar si existen diferencias que se puedan atribuir a variaciones en el comportamiento de una variable independiente o ", <b>variable predictiva categórica utilizamos el análisis de varianza o ANAVA </b> ,"(ANOVA por sus siglas en inglés). El ANAVA es una herramienta estadística que permite la comparación de los efectos de uno o múltiples factores independientes sobre un resultado. Por ejemplo, podemos estudiar si existen variaciones en la producción de leche de una región que se puedan atribuir al año de lactancia.  Cada uno de los factores a incluir en el análisis pueden contener varios niveles de la variable de interés (ejemplo: razas, regiones, año de producción). En síntesis el análisis de varianza nos sirve para conocer cuales son los efectos principales y las interacciones de una o mas ", <a href="Post#raw"> <u>variables categóricas</u> </a>," que sean independientes en un intervalo (rango de resultados) de una variable dependiente.", <br/>,<br/>,
        "En esta última sección, veremos como con una sencilla herramienta como Excel sin conocimientos previos de programación, podemos utilizar el analisis de varianza y algunas regresiones que son armas poderosas a la hora de tomar decisiones.  Podremos explorar y construir alternativas útiles que nos permitan analizar los datos que se generan en una empresa pecuaria de la manera mas sencilla y efectiva posible posible. Excel permite realizar varios tipos de ANAVAS, sin embargo, para realizarlo es necesario activar la aplicación ", <b>Data Analysis</b>, " que viene incorporada con el software. Esta aplicacion permite realizar análisis de varianza de un solo factor, de doble factor, sin replicación y dos factores con replicación. Para saber como activar la herramienta en su software Excel le recomiendo revisar el enlace  ", <a href="https://support.microsoft.com/es-es/office/cargar-herramientas-de-análisis-en-excel-6a63e598-cd6d-42e3-9317-6b40ba1a66b4"> <u>cargar herramienta de análisis en Excel</u></a>
      ]}/>
      

      </SubChapter>

      <SubChapter id = "unianova">
      <SubTitle title = "7.2- ANAVA de un solo factor"/>
      <Paragraph texto = {[
        "El ANAVA de un solo factor se realiza de manera similar a la ",<a href="AnalisisII#intervalo3"> <u>prueba T-student</u> </a>,
        "Sin embargo, La prueba de hipótesis del ANAVA permite comprobar la igualdad de tres o mas medias muéstrales a diferencia de la prueba T que solo permite dos. ", <br/>,"Por ejemplo: un zootecnista desea conocer si existen variaciones en la producción de leche entre las fincas que están a su cargo.  Para ello ha tomado los promedios de la producción ajustada de leche a 305 días de 39 animales en cada una de las 4 granjas. Se establecen entonces las hipótesis  de la siguiente manera:", <br/>,
        <ul>
          <li>- H<sub>0</sub>: No existe variación en la producción promedio  de leche para las granjas.</li>
         <li>- H<sub>1</sub>: Existe una variación significativa en la producción promedio de leche entre las granjas.</li>
        </ul>,
        <br />,
        "Entonces para saber si existen variaciones en la producción en este caso es una variable categórica (granja A,B,C,D), vamos en Excel a la opción Datos y seleccionamos del menú Data Análisis la opción ANOVA Single Factor (un solo factor), tal como lo muestra el recuadro inferior."
      ]}/>
        <ImagePlus
          image={single}
          texto="ANOVA unico factor"
          width="40%"
          max_zoom = "60%"
        />
      <Paragraph texto = {[
        <center> <h4>Seleccionar de Data Analysis la opcion Anova factor único o single factor</h4> </center>,<br/>,
        "Lo primero que se debe hacer tan pronto se abre la hoja de diálogo es seleccionar los datos de interés, para este caso los cuatro años durante los cuales se siguió el programa de mejoramiento genético, en este caso los datos están agrupados por columnas y tienen encabezados (headings) por lo tanto seleccionamos estas opciones.  Posteriormente seleccionar el 𝛼 para comparar con el p-value, en este caso es del 0.05. A diferencia de la prueba t donde se calcula un t estadístico para rechazo o aceptación de la Hipótesis nula, en el ANAVA se calcula un F estadístico y se compara con valor F critico. Por tanto tener en cuenta que a pesar de que la tabla estadística es diferente el procedimiento es similar.  Finalmente debemos seleccionar donde deseamos ubicar el reporte si en una celda especifica o en una hoja aparte. También podemos darle un nombre al reporte. ",
      ]}/>
     <ImagePlus
          image={single2}
          texto="Seleccionar el rango donde se encuentran los datos"
          width="40%"
          max_zoom = "60%"
        />

        <Paragraph texto = {[ <center> <h4>Seleccionar el rango donde se encuentran los datos, el nível de confianza y el espacio para generar el reporte</h4></center>, <br/>, <br />, "Una vez que damos OK en menú, se genera un reporte con dos tablas como el que se ve a continuacion: "]}/>

        <ImagePlus
          image={single3}
          texto="Seleccionar el rango donde se encuentran los datos"
          width="40%"
          max_zoom = "60%"
        />

      <Paragraph texto = {[
        "Como se observa, el reporte de Excel genera dos tablas, la tabla superior corresponde a la estadistica descriptiva para cada uno de los grupos y que incluye el promedio y la varianza.  En la segunda tabla  ubicanda en la parte inferior inferior se presenta el análisis de varianza como tal. En este caso hay dos cosas importantes que revisar, primero el F estadístico que se espera sea superior al F crítico, para este caso el F estadístico es 0.65 siendo inferior que el F critico (2.66). De igual manera el valor P 0.58 e es superior al 𝛼 escogido de 0.05, por tanto no hay razón para rechazar la Hipótesis nula y podemos decir con un 95% de confianza que no hubo variación en la producción de leche ajustada a 305 dias.", 
      ]}/>
      <center><SubTitle title = "ANAVA de un solo factor"/></center>
      
      <Video id="aIxkjIusJ3k" title="ANAVA de un solo factor" />
      </SubChapter>

      <SubChapter id = "twoanova">
      <SubTitle title = "7.3- El ANAVA de dos factores sin replicación "/>
      <Paragraph texto = {[
        "Podemos utilizar El ANAVA de dos factores cuando tenemos dos variables de tipo nominal y/o dicótomas (0,1) y una variable cuantitativa y cada valor de una de las variables nominales está en combinación con cada valor de la otra variable nominal (y/o dicótoma), es decir podemos cuantificar la variable cuantitativa en función de las variables nominales (Macdonald 2009).", <br/>,
        "Por ejemplo, en un una granja avícola existen dos sistemas de encasetamiento (jaula y piso) y se trabaja con tres líneas de ponedoras (Hy-line, Babcock y Lohman), entonces podemos comparar la producción de huevos por la raza de las aves y por el sistema de alojamiento en que se encuentran encasetadas.", <br/>,"Este ANAVA comprueba dos tipos de H",<sub>0</sub>," : 1- Que las medias de las variables medidas son iguales para los diferentes valores de la primera variable nominal; 2- que las medias son iguales para los diferentes valores de la segunda variable. Es decir, se busca comprobar que las medias de las observaciones agrupadas por el factor A son nulas, y que las medias agrupadas por el factor B son nulas.  No es imposible probar la interacción (AxB) la interacción pero  para ello son necesarias las repeticiones lo cual veremos mas adelante.", <br />,
        "En otro ejemplo,  deseamos conocer si los promedios de producción lechera en kg ajustada a 305 dias en 12 regiones obtenidos a partir de muestras de 12 hatos lecheros representativos en Canadá y discriminados por lactancias de la 1ª a la 5ª son diferentes entre ellos o no.", <br />, "Cuando tenemos dos factores entonces podremos calcular dos hipótesis nulas H", <sub>0</sub>, " :",
        <br />, <ul>
          <li>1- No existe diferencia entre hatos en el promedio de producción de leche por hato</li>
          <li>2- No existe diferencia en la producción de leche entre las lactancia</li>
        </ul>
      ]}/>
     <ImagePlus
          image={twof}
          texto="Promedios de producción de leche por región y por lactancia"
          width="40%"
          max_zoom = "60%"
        />
      <Paragraph texto = {[
         <center> <h4> Promedios de producción de leche por región y por lactancia</h4> </center>,
         <br />,"La tabla superior muestra la manera de insertar los datos en Excel donde se presentan los promedios de la leche por región (filas) y por lactancia (columnas). Es importante que cada celda de la tabla tenga su resultado. Para este tipo de análisis todos los datos deben estar presente es decir cada región debe tener un promedio de leche para cada lactancia, de lo contrario Excel no podra generar el reporte.  Una vez la tabla este lista del menu ", <b>Data Analysis</b> ," seleccionamos la opción ", <b>ANOVA two factor without replication</b>, " o ANAVA para dos factores sin replicación, como se observa en el cuadro inferior."

      ]}/>

      <ImagePlus
          image={twof2}
          texto="Seleccionar la opción ANAVA dos factores sin replicación"
          width="40%"
          max_zoom = "60%"
        />
      <Paragraph texto = {[
         <center> <h4> Seleccionar la opción ANAVA dos factores sin replicación</h4> </center>, <br />, <br />, "Una vez seleccionada la opción tenemos una hoja de diálogo que nos pregunta por la ubicación de la tabla, el nivel de significancia y la ubicación donde queremos el reporte tal como se obseva en la tabla inferior. "
      ]}/>
      <ImagePlus
          image={twof3}
          texto="Seleccionar el rango donde se ubica la tabla, el nivel de significancia y la ubicación del reporte"
          width="40%"
          max_zoom = "60%"
        />
        <Paragraph texto = {[
          <center> <h4> Seleccionar el rango donde se ubica la tabla, el nivel de significancia y la ubicación del reporte </h4></center>,
          <br />,
          "Finalmente, una vez seleccionamos OK, Excel generará un reporte que tiene dos tablas. En la primera nos presenta los valores descriptivos (sumatoria, media y varianza) para los valores tabublados tanto por filas (regiones), como por columnas (lactancias). La segunda tabla presenta el análisis de varianza."
        ]}/>
      <ImagePlus
          image={twof4}
          texto="Reporte generado por Excel"
          width="40%"
          max_zoom = "60%"
        />

        <Paragraph texto = {[
          <center> <h4>Reporte generado por Excel</h4>  </center>, <br />, <br />,
          " En el ANAVA del reporte generado por Excel se presentan primero los resultados para las filas (Rows) en este caso las regiones. El F de las filas es 15.52  y el F crítico es de 2.01 y El valor de P es inferior a 0.0001 por tanto no podemos aceptar la  H",<sub>0</sub>, " y debemos aceptar que la producción de leche no es igual para las regiones.  En cuanto a las columnas (Lactancias) de igual manera el F calculado (40.92) es superior al F critico (2.58) y el valor de p es muy inferior al 0.05 del 𝛼 seleccionado, por lo que también podemos decir que existen diferencias significativas entre las lactancias del 1 al 5 por tanto rechazamos la H",<sub>0</sub>,". En conclusión en ambos casos existen diferencias significativas tanto para las lactancias como para las regiones por lo cual se recharazon las dos H", <sub>0</sub>, "."
        ]}/>

     <center><SubTitle title = "ANAVA de dos factores"/></center>
      
      <Video id="75XDRGDV0qI" title="ANAVA de dos factores" />
      </SubChapter>

      <SubChapter id = "twoanovarep">
      
      <SubTitle title = "7.4- El ANAVA factorial o de dos factores con replicación"/>
      <Paragraph texto = {[
        "Este tipo de ANAVA es frecuente utilizarla en diseño experimental (bloques aleatorios) y también cuando se trabaja con mediciones repetidas, es decir, cuando una observación ha sido hecha en el mismo individuo mas de una vez (antes y después), por ejemplo, cuando estamos midiendo parámetros fisiológicos o de producción  en un individuo antes y después de algún tratamiento o al aplicar un estresor como cambios de temperatura o humedad en los galpones.", <br/>, "Al igual que el ANAVA sin replicación, el ANAVA factorial con replicación se utiliza cuando tenemos una variable medible (cuantitativa) y dos variables nominales (factores o efectos principales) que se hallan en todas las posibles combinaciones. En este caso tenemos tres H", <sub>0</sub>, "a considerar (Macdonald,2009):", <br />,
        <ul>
          <li>1- que las medias de las variables medidas son iguales para los diferentes valores de la primera variable nominal;</li>
          <li> 2- que las medias son iguales para los diferentes valores de la segunda variable; </li>
          <li>3- que no existe interacción (los efectos de una variable nominal no dependen de los valores de la otra variable nominal).</li>
        </ul>, <br />,
        "Se recomienda que los tamaños de las muestras de los subgrupos sean iguales ya que esto facilita el análisis. Si queremos realizar este tipo de prueba en  Excel  su herramienta “Data Analysis” lo permite siempre y cuando el diseño esté balanceado. ",
        <br />,
        "Por ejemplo, en una región de producción lechera en Colombia se ha establecido un plan de mejoramiento de calidad e higiene de hatos lecheros durante  cuatro años y nos interesa ver si los planes de control e higiene en establo han generado algún progreso entre los años 2013 al 2016 en el promedio logarítmico de células somáticas (SCC/ml) en cuatro subregiones lecheras. Para ello calculamos los promedios logarítmicos de SCC en 6 hatos representativos de cada una de las cuatro regiones en donde se realizaron las actividades de educación y control. Entonces, una vez construida nuestra tabla, procedemos al análisis con la ", <b>ANAVA doble factorial con replicación</b> ,". Para ello tenemos todos los resultados de los 6 hatos por cada región o sea 24 datos por año durante 4 años, para un total de 96 registros."
      ]}/>
      <ImagePlus
          image={rep}
          texto="Tabla con los recuentos logarítmicos de células somáticas para 4 regiones lecheras durante 4 años."
          width="40%"
          max_zoom = "60%"
        />
      <Paragraph texto = {[
        <center> <h4>Tabla con los recuentos logarítmicos de células somáticas para 4 regiones lecheras durante 4 años.</h4> </center>, <br/>,
        "La tabla superior presenta el promedio logarítmico de SCC para cada uno de los hatos distribuidos por región para cada año en cuestión.  La tabla debe estar ordenada y adecuadamente balanceada (las mismas observaciones por variable) en este caso 6 por región y 24 por año. Una vez tenemos nuestros datos limpios y organizados, del menú Data Analysis seleccionamos la opción ANOVA dos factores con replicación (ANOVA: two-factor with replication)."
      ]}/>
      <ImagePlus
          image={rep2}
          texto="En el menú de diálogo seleccionar la opción ANOVA: two-factor with replication o ANAVA dos factores con replicación"
          width="40%"
          max_zoom = "60%"
        />
      <Paragraph texto = {[
        <center> <h4> En el menú de diálogo seleccionar la opción "ANOVA: two-factor with replication" ANAVA dos factores con replicación </h4> </center>, <br />,"Inmediatamente se abre una hoja de diálogo que nos pide seleccionar el rango de las celdas donde se encuentra la tabla (incluir los encabezados), y posteriormente se debe escribir el número de filas por cada muestra, para este caso son 6 por región (las regiones están en las filas) se debe tener en cuenta que son las mismas observaciones para cada muestra (región). Luego seleccionamos el 𝛼 (0.05) y finalmente el lugar donde se desea generar el reporte, como siempre las opciones pueden ser dentro del página actual, en una nueva página o un archivo diferente. "
      ]}/>
       <ImagePlus
          image={rep3}
          texto="Selección de opciones para generar el ANAVA"
          width="40%"
          max_zoom = "60%"
        />

      <Paragraph texto = {[
        <center> <h4> Selección de opciones para generar el ANAVA </h4> </center>, <br />,"Una vez presionamos OK, Excel genera un reporte con toda la información (ver tabla inferior). El reporte esta dividido en dos tablas, la primera  presenta el resumen descriptivo (numero de fincas, sumas, promedio y varianza) para cada región por año, así como para la totalidad, y la segunda tabla presenta el ANAVA para las regiones (Sample), para los años (Columns) y para la interacción de las dos variables. "
      ]}/>
      <ImagePlus
          image={rep4}
          texto="Reporte generado por Excel"
          width="40%"
          max_zoom = "60%"
        />
        <Paragraph texto = {[
        <center> <h4> Reporte generado por Excel listo para su interpretación </h4> </center>, <br />,"Enfocandonos en los resultados del ANAVA, la primera fila (Sample) muestra los resultados de las filas  que para nuestro ejemplo serian las regiones. Para este caso el valor de F (8.27) es mayor que el F crítico (2.71) y el P-value es inferior a 0.0001  (inferior al valor de 𝛼 = 0.05) por tanto no podemos aceptar la H",<sub>0</sub>, " y podemos confirmar con un 95% de confianza que las medias del SCC logarítmico son diferentes entre regiones. En la siguiente fila tenemos el análisis de las columnas, en este caso el valor de F (0.89) es inferior al F crítico (2.71) y el P-Value (0.44) es superior al 𝛼 por tanto no podemos rechazar la H",<sub>0</sub>," y podemos afirmar con 95% de confianza que las medias del conteo SCC logarítmico no son diferentes a través de los años, por tanto las medidas sanitarias que se tomaron no se han reflejado en una mejora en los valores de las células somáticas de los hatos de cada una de las regiones. Finalmente la última fila nos muestra el efecto de la interacción (Año x Región) donde al igual que para los resultados por año tampoco hay un efecto significativo.  "
      ]}/>

      <center><SubTitle title = "ANAVA de dos factores con replicación"/></center>
      <Video id="10M2gSQi5ac" title="ANAVA de dos factores" />


      </SubChapter>
     
      <SubChapter id = "linearreg">
      <SubTitle title = "7.5- La regresión lineal"/>
      <Paragraph texto= {[
        "La regresión lineal es una de las multiples pruebas que se utilizan para identificar si una variable independiente afecta una variable dependiente y poder medir la fuerza de esa asociación utilizamos el R",<sup>2</sup>,". R",<sup>2</sup>,"representa la proporción de la ", <a href="Analisis#dispersion"><u>varianza</u></a>   ," que es explicada por el modelo, en este caso la variable independiente y sus valores oscilan entre 0 y 1, siendo 1 el valor dado a un ajusto perfecto, es decir no habría residuales, es decir, la diferencia entre Y y los valores predichos de Y seria 0 (Macdonald, 2009) es decir un modelo perfecto (un unicornio).", <br />, "A pesar de que la regresión lineal ha sido múltiplemente explicada y todo estudiante que haya pasado por estadística I la conoce, es importante revisarla pues muchas veces contituye la base fundamental de cualquier análisis y teniendo los datos como recurso principal vale la pena explorar, sin embargo no vamos a entrar en detalles de como se construye, lo que estamos buscando es su aplicabilidad en nuestra profesión.", <br />, "En general la regresión lineal es una aproximación que describe un respuesta cuantitativa de Y (variable dependiente) basada en los valores un solo predictor X (variable independiente).  Asume que hay una relación lineal entre X y Y y describe una función de una línea diagonal (James et al., 2013).  Matemáticamente se describe como:"

      ]}/>

        <ImagePlus
          image={linr}
          texto="Función de la regresión lineal"
          width="40%"
          max_zoom = "60%"
        />
        <Paragraph texto  = {[
          "Donde el valor de Y esta dado por 𝛃",<sub>0</sub>," que es el intercepto o el valor de Y cuando X vale 0,  𝛃",<sub>1</sub>," es la constante de la pendiente de X", <sub>1</sub>, "que es la variable independiente o predictor y 𝛆 es el error. Este representa las diferencias entre el Y real y el y estimado pues muy seguramente la relación no es una diagonal perfecta, sino que hay variaciones. Típicamente se asume que el error es independiente de X.", <br/>,
          "Usos la regresión lineal:  Como decíamos anteriormente este modelo es el mas sencillo de todos, sin embargo no por eso debe ser menospreciado ya que ha mostrado ser de amplia utilidad. Entre ellos tenemos la relación entre algunos fármacos y las constantes fisiológicas como la presión arterial o la frecuencia cardiaca y respiratoria.  También en el sector agrícola para medir impactos de fertilizantes y nutrientes sobre un cultivo (aunque estos tambien pueden obdecer a relaciones cuadráticas como veremos posteriormente (James et al.,2013; Macdonald, 2009). ", <br/>,
          "Tambien pueden ser de utilidad en en los rendimientos de un cultivo. Para ilustrar la regresión lineal simple, veamos el gráfico adaptado de la tabla tomada  de V. Sellam and E. Poovammal (1996) que muestra la relación entre el regimen de lluvias anual y el volumen de cosecha de arroz en la India"
        ]}/>

        <ImagePlus
          image={linr2}
          texto="Regimen de lluvias y cosecha de arroz obtenida"
          width="40%"
          max_zoom = "60%"
        />
        <Paragraph texto = {[ 
          <center> <h4> En la gráfica podemos visualizar el regimen de lluvias anuales (X) por la producción de arroz en millones de toneladas (Y) </h4></center>, <br/>, "Como se puede observar existe una tendencia decreciente clara donde a mayor cantidad de lluvias hay una disminución en la producción de arroz anual.  Según Macdonald (2009) existen tres cosas que se pueden hacer con este tipo de datos.  La primera es una prueba de hipótesis para ver si hay una asociación entre las dos variables. En este caso nos gustaría entender cuanto disminuye la cosecha por unidad de lluvia que cae.  La segunda es describir que tan íntimamente están relacionadas las dos variables. Esto usualmente se expresa con el R", <sup>2</sup>, ".  Y la última cosa que se puede hacer es determinar la ecuación de la línea que pasa a través de la nube de puntos (como se ve en el gráfico) calculando el intercepto y el coeficiente de inclinación (no lo hacemos nosotros lo hace Excel).  ",
          <br/>,<br/>,<h3>La Hipótesis Nula (H<sub>0</sub>)</h3>, <br />, "La hipótesis nula (H", <sub>0</sub>, ") de la regresión lineal es que la diagonal de la línea de mejor ajuste es igual a cero. Es decir, en la medida en que X aumenta de tamaño la variable asociada Y no aumenta o disminuye. ", <br/>, "La regresión lineal busca la línea que mejor ajusta a los puntos de los datos (ver línea roja del gráfico de la dispersión de la producción de arroz vs régimen de lluvias). El método mas común es la regresión de cuadrados mínimos ordinarios.  En este método el mejor ajuste está definido como la línea que minimiza las distancias verticales  entre los puntos de los datos y la línea elevadas al cuadrado (Ver gráfico inferior).  Para un punto de X con un valor X1 y un valor de Y con un valor de Y1, la diferencia entre Y1 y el calculado (el valor predicho de Y a X1) y luego elevado al cuadrado. Esta diferencia cuadrada es calculada para cada punto y la suma de estas diferencias al cuadrado indican que tan bien ajustan los datos. La línea de regresión es aquella para la que la suma de estos cuadrados es la mas pequeña (Macdonald 2009)"
        ]}/>
        <ImagePlus
          image={linr3}
          texto="Diferencia entre las coordenadas de X y Y y la diágonal de la función lineal"
          width="40%"
          max_zoom = "60%"
        />

        <Paragraph texto = {[
          <center> <h4>Diferencia entre las coordenadas de X y Y y la diágonal de la función lineal </h4></center>, <br/>,
          <h1>Reglas para el uso de la regresión lineal (James et al., 2013, Macdonald 2009): </h1>, <br/>, 
          <ul>
            <li>1-	Linealidad: es lineal porque la ecuación genera una línea. La forma de identificar la linealidad es por medio de un  <a href="Analisis#visualizacion"><u>gráfico de dispersión</u></a>. Si se ve una tendencia lineal entre las variables, entonces se puede proceder. Si el patrón de los datos muestra una relación no lineal, no se debe utilizar esta ecuación.  Como alternativa se puede utilizar una relación no lineal, también se pueden adaptar los datos con funciones exponenciales o logarítmicas.</li>
            <li>2-	No endogeneidad: se dice que hay endogeneidad cuando hay una correlación entre la variable dependiente y el error.  Se conoce como sesgo de la variable omitida que se da cuando no se incluye una variable independiente importante.</li>
            <li>3-	Normalidad y homocedasticidad: el Error debe ser normal, de media 0 y homocedasticidad se refiere a que debe tener igual varianza. Una forma de prevenir heterocedasticidad es buscar variables que estén siendo omitidas.  Otra manera es remover los valores extremos. Otra manera es hacer una transformación logarítmica</li>
            <li>4-	No auto correlación: también conocida como no debe haber correlación serial. Es un error muy común en datos de series de tiempo. Una forma común de detectarlo es graficar los residuales y parámetros. Otro es la prueba de Durbin Watson. Cuando el valor es cercano a 2 indica no autocorrelacion, mientras que valores inferior a 1  y superior a 3 deben encender las alarmas. No use regresión lineal cuando se presente este problema.  Busque modelos de autoregresion, o modelos de de media móvil.  </li>
            <li>5-	No Multicolinearidad: cuando dos variables independientes están altamente correlacionadas o una se representa en función de la otra. En estos casos solo se debe utilizar una de las dos, no tiene sentido incluir las dos variables en el modelo. Otra solución es transformar las dos variables en una sola. O finalmente si se deciden mantener las dos hay que proceder con precaución. </li>
</ul>
        ]}/>
        </SubChapter>

<ReferencesBlock references = {[
          
          "* Chao, L.L., 1978. Estadística para las ciencias administrativas. McGraw-Hill Interamericana.",
          "* Guerrero, H., 2010. Excel data analysis: modeling and simulation. Springer Science & Business Media.",
          "* James, G., Witten, D., Hastie, T. and Tibshirani, R., 2013. An introduction to statistical learning (Vol. 112, p. 18). New York: springer",
          "* McDonald, J.H., 2009. Handbook of biological statistics (Vol. 2, pp. 6-59). Baltimore, MD: sparky house publishing.",
          "* Pfaffenberger, R.C. and Patterson, J.H., 1977. Statistical methods for business and economics. Homewood, IL: Richard D. Irwin.",
          "* Sellam, V. and Poovammal, E., 2016. Prediction of crop yield using regression analysis. Indian Journal of Science and Technology, 9(38), pp.1-5.",
           <a href="https://www.statology.org/linear-regression-real-life-examples/)"><u>* Examples of using linear regression in linear life May 2020.</u></a> 
      
        ]}/>



      

     </ChapterLayout>
    );};

    export default Anava
