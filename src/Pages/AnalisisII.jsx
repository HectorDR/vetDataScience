import React from "react";
import ContentsTable from "Components/ContentsTable";
import ChapterLayout from "Layouts/ChapterLayout";
import SubChapter from "Components/SubChapter";
import Paragraph from "Components/Paragraph";
import SubTitle from "Components/SubTitle";
import ImagePlus from "Components/ImagePlus";
import Video from "Components/Video";
import ReferencesBlock from "Components/ReferencesBlock";
import pollas from "Media/photos_web/pollasII.JPG";
import error from "Media/analisis/error.png";
import normal from "Media/analisis/normal_curve.png";
import normal2 from "Media/analisis/normal_curve2.png";
import inter from "Media/analisis/inter_conf.png";
import int from "Media/analisis/int_form.png";
import eggs from "Media/analisis/eggs_int.png";
import tail from "Media/analisis/int2tail.png";
import tail2 from "Media/analisis/int2tail2.png";
import desc from "Media/analisis/var_desc.png";
import desc2 from "Media/analisis/var_desc2.png";
import conf from "Media/analisis/conf_t.png";
import conf2 from "Media/analisis/conf_t2.png";
import conf3 from "Media/analisis/conf_t3.png";
import conf4 from "Media/analisis/conf_t4.png";
import novar from "Media/analisis/medias_novar.png";
import novar2 from "Media/analisis/medias_novar2.png";
import novar3 from "Media/analisis/medias_novar3.png";
import novar4 from "Media/analisis/medias_novar4.png";
import novar5 from "Media/analisis/medias_novar5.png";
import dosmed from "Media/analisis/dos_medias2.png";
import dosmed2 from "Media/analisis/dos_medias3.png";
import depen from "Media/analisis/dependientes.png";
import depen2 from "Media/analisis/dependientes2.png";
import depen3 from "Media/analisis/dependientes3.png";
import { HashLink } from "@xzar90/react-router-hash-link";

const Analisis = () => {
    return (
      <ChapterLayout
        chapter_title="6- Pruebas de hipótesis e intervalos"
        chapter_image={pollas}>

        <div id = "tabla" className = "container bg-light">
    <ContentsTable
            contenidos={[
              {titulo: "6.1- Pruebas de hipótesis",
                link: "#hipotesis",  },
              {titulo: "6.2- Tipos de pruebas- una o dos colas ",
                link: "#tests",  },
              { titulo: "6.3- Intervalos de confianza - varianza conocida",
                link: "#intervalo", },
              { titulo: "6.3.1- Intervalos de confianza - varianza conocida", link: "#intervalo" },
              { titulo: "6.3.2- Intervalos de confianza - varianza desconocida",
                link: "#intervalo2", },
              { titulo: "6.3.2- Intervalos de confianza - varianza desconocida", link: "#intervalo2" },
              {titulo: "6.4- Intervalo de confianza para la diferencia de dos medias en poblaciones normales independientes",
                link: "#intervalo3",
              },
              { titulo: "6.5- Intervalo de confianza para la diferencia de dos medias dependientes",
                link: "#intervalo4",
              },
            ]}
          />
        </div>

        <SubChapter id = "hipotesis">
        <SubTitle title = "6.1- Pruebas de hipótesis" />
        <Paragraph texto = {<><p>Cuando ya sabemos que nuestros datos están limpios y listos para ser explorados, el principal objetivo es transformarlos en información útil, pero para ellos debemos formularnos preguntas que nos den las pautas de acción. Entonces es conveniente recordar algunos términos estadísticos. Lo primero es que entonces formular una <b>hipótesis</b>. Esta es la idea que buscamos comprobar. Es una suposición o una 
          explicación propuesta hecha sobre la base de evidencia limitada como punto de partida para posterior investigación 
          (Pfaffenberger, R.C. and Patterson, J.H., 1977). Es decir, no sabemos aún el resultado final. Para poder hablar de las hipótesis primero 
          debemos recordar el método científico que consiste en la observación sistemática, medición, experimentación y la formulación, prueba y 
          modificación de una Hipótesis. En este caso vamos a utilizar los datos recogidos dentro y fuera de la finca para poder comprobar hipótesis y 
          tomar decisiones<br/><br/>
          Pasos en el proceso de comprobación de una Hipótesis (<a href="https://support.minitab.com/es-mx/minitab/20/help-and-how-to/statistics/basic-statistics/supporting-topics/basics/example-of-a-hypothesis-test/" target = "_blank"><u>Minitab® software estadístico</u></a>):</p><br/>
          <ul>
            <li>1.	Formulación de una Hipótesis</li>
            <li>2. Elegir el nivel de significancia</li>
            <li>3.	Encontrar la prueba adecuada </li>
            <li>4.	Ejecutar la prueba</li>
            <li>5. Comparar el valor de <b>P</b> con el nivel de significancia</li>
            <li>6.	Tomar la decisión de aceptar o rechazar la hipótesis nula</li>
          </ul> <br/>
          <p>Cuando se formula una hipótesis siempre tenemos dos postulados:<br/><br/>
    <b>Hipótesis Nula (H<sub>0</sub>):</b> es la hipótesis para comprobar. Es el estato-quo. Es todo lo que ha sido creído hasta ahora y lo que 
    estamos desafiando con nuestra prueba. Básicamente es lo que se ha creído y así se mantendrá hasta que no tengamos las sufientes pruebas para 
    demostrar lo contrario.<br/>
    <b>Hipótesis Alterna (H<sub>1</sub>):</b> es el cambio o el desafío al estato-quo. Si la H<sub>0</sub> es la creencia general, el desarrollar
     una prueba muestra que existen dudas acerca de la veracidad de la H<sub>0</sub>. A menudo la norma es que la opinión de los investigadores
     esta contenida dentro de la H<sub>1</sub>.</p>
    </>}/>
    <SubTitle minititle = "Ejemplos de Hipótesis:"/>
    <Paragraph texto = {<><p>En una granja avícola (pollo de engorde), el nutricionista nos propone la utilización de un probiótico en la dieta de inicio
      y levante de los animales asegurándonos que los pollos tendrán una conversión superior frente a los que no usan probiótico. Si decidimos hacer un 
      ensayo nuestra hipótesis nula será:<br/>
     H<sub>0</sub>: La conversión alimenticia durante las primeras tres semanas de vida no varía por el uso de los probióticos en pollos de engorde.<br/>
     H<sub>1</sub>: El suministro de probioticos en pollo de engorde generan una variacion positiva en la conversión alimenticia  durante las primeras tres semanas de vida.<br/></p></>}/>
  
  <SubTitle minititle = "Decisiones para tomar: "/>

  <Paragraph texto = {<><p>- Aceptar la hipótesis nula, significa que no existe suficiente evidencia para aceptar el cambio propuesto por la hipótesis
     alterna.<br/>- Rechazar la hipótesis nula significa lo contrario existe suficiente evidencia estadística para entender que la hipótesis nula
    no soporta la verdad.</p></>}/>
  <SubTitle minititle = "Errores en que se incurre al tomar las decisiones (Alterman,2020):"/>
  <Paragraph texto = {<><p><b>Tipo I</b>: Sucede cuando se rechaza la hipótesis nula y no se debería haber hecho. Eje: Una prueba de embarazo positiva
   en un hombre. Una persona inocente que ha sido declarada culpable. También el error tipo I puede ser un falso positivo. 
   Es determinar que existe diferencia significativa entre variables cuando en realidad no la hay. La probabilidad de cometer un error tipo I 
   (falso positivo) se conoce como nivel de significancia del nivel 𝛼.<br/>
  <b>Tipo II</b>: Sucede cuando no se rechaza la hipótesis nula y esta debería haber sido rechazada. Por ejemplo una mujer embarazada de 7 meses 
  con una prueba de embarazo negativa. O en el caso del acusado un error tipo II es cuando se le ha declarado inocente cuando ha debido ser declarado
   culpable. También se le conoce como un falso negativo ya que se determina que no hay diferencia significativa entre las variables cuando de hecho
    si la hay.  La probabilidad de cometer un error tipo II (falso negativo) es igual a beta (𝛽).</p></>}/>
  <SubTitle minititle = "Nivel de significancia: "/>
  <Paragraph  texto = {<><p>
<b>Nivel de significancia (𝛼)</b>: es la probabilidad de rechazar una hipótesis nula que es verdad; la probabilidad de cometer este error. 
Los niveles de significancia mas comunes son: 0.10, 0.05, 0.01. Por ejemplo se elige un nivel de significancia del 0.05 ó 5% al diseñar un ensayo de 
hipótesis, entonces hay aproximadamente 5 ocasiones en 100 en que se rechazaría la hipótesis nula cuando debería ser aceptada, es decir, se está con un 95%
de confianza de que se toma la decisión adecuada. En tal caso se dice que la hipótesis ha sido rechazada al nivel de significación del 0.05,lo que
significa que se puede cometer error con una probabilidad de 0.05.
<a href="http://cidecame.uaeh.edu.mx/lcc/mapa/PROYECTO/libro19/71de_una_o_dos_colas.html" target = "_blank">(<u>Benitez Morales A</u>)</a>.
<br/>
Valores de significancia notables <b>(P-Values)</b>: cuando estamos comprobando una hipótesis y el valor de P es inferior a 0.000
 esto nos indica que podemos rechazar la H<sub>0</sub> en todos los niveles de significancia. Sin embargo, 0.05 a menudo es el punto de corte.
 En resumen, si nuestro valor <b>P es mas alto que 0.05 entonces aceptamos la H<sub>0</sub></b>, pero  si el valor de <b> P 
 es inferior de 0.05 rechazamos la H<sub>0</sub></b>. Esto cuando hemos asumido un 𝛼 del 5%.
 </p></>}/>
<SubTitle minititle = "Estimadores "/>
<Paragraph texto ={<><p>Un estimador es una función matemática que aproxima un parámetro poblacional a partir de una población muestral 
  (estadística inferencial). Según Chao (1978) es probable que el resultado obtenido a partir de la muestra por ejemplo la media difiera del resultado
  de la población total, la diferencia entre estos resultados es lo que se llama el error de estimación o error muestral.<br/>
  Si a partir de las observaciones de una muestra se calcula un solo valor como estimación de un parámetro de la población desconocido, estamos hablando
  de una <b>estimación puntual</b>. Si por el contrario queremos determinar dos números dentro de los cuales se halla el parámetro objetivo,
  estamos hablando de la <b>estimación por intervalos</b>. El intervalo de confianza es mucho mas preciso que los estimados únicos. Por eso se
  prefieren al hacer inferencias.</p></>}/>
<SubTitle minititle = "Error Estándar de la Media: "/>
<Paragraph texto = {<><p>Cuantifica las oscilaciones de la media muestral alrededor de la media poblacional, es decir cuando tomamos varias muestras de
  la misma población, seguramente tendremos diferentes resultados para el estimador que estamos tratando de calcular. El error estándar cuantifica la
  variabilidad del estimador frente al parámetro que se trata de estimar. El error estándar se mide en términos de la desviación estándar del estimador.
  <br/>
  La formula del error estándar para la media muestral es:</p></>}/>
 <ImagePlus
          image={error}
          texto="Formula del error muestral"
          width="15%"
          max_zoom = "30%"
        />
          
  <Paragraph texto = " Donde S representa la desviación estándar de la muestra y el denominador de la fórmula representa la raíz cuadrada del tamaño de la muestra n"/>
  </SubChapter>
  <SubChapter id = "tests">
    <SubTitle title ="6.2- Tipos de pruebas"/>
    <SubTitle title = "6.2.1- Ensayo de dos colas "/>
    <Paragraph texto = {<><p>Para una hipótesis dada la distribución muestral de un estadístico s con distribución normal y media 𝛍 y desviación 𝛔 
      entonces estos valores podemos<HashLink smooth to={"/DistribucionesII#normal-estandar"}><u>normalizarlos</u></HashLink> como vimos anteriormente y obtener una
      normal con media 0 y varianza 1. Basados en la curva de distribución normal estandarizada podemos asegurar con el 95% de confianza si la hipótesis
      es cierta que el valor normalizado (z) obtenido de una muestra real se encontrara entre +1.96 y -1.96 desviaciones estandar ya que el área bajo la curva normal entre
      estos valores es 0.95. Si estandarizamos los valores con los cuales obtuvimos la<HashLink smooth to="/DistribucionesII#normal"><u>curva normal para la
      producción de leche ajustada a 305 días</u></HashLink>, vamos a poder entender mejor cuál es el área de confianza (Benitez Morales) como se observa en el siguiente gráfico.</p></>}/>
    <ImagePlus
          image={normal}
          texto="Curva distribución"
          width="40%"
          max_zoom = "60%"
        />

    <Paragraph texto = {"Si el valor z (valor normal estandarizado) elegido aleatoriamente de la muestra está por fuera del rango -1.96 a1.96 significa que esta z difiere significativamente de la que cabría esperar bajo esta hipótesis y se estaría inclinado a rechazar la hipótesis.  Entonces el conjunto de las z que se encuentran entre -1.96 y 1.96 desviaciones se conoce como el área de aceptación de la hipótesis o región de no significación.  Si por el contrario la z obtenida para el estadístico s es mayor a 1.96 o menor - 1.96 entonces el estadístico muestral observado es significativo al nivel del 0.05, entonces se rechaza la hipótesis al nivel de significación del 0.05.  Gráficamente las colas de la distribución muestran cuando se rechaza la hipótesis nula.  Todo lo que permanece en la región de la mitad es tomado como la región de aceptación. "
    }/>

    <SubTitle title = "6.2.2- Ensayo de una cola"/>
    <Paragraph texto = {<><p>A diferencia de la prueba de dos colas que busca probar si un valor se ubica dentro de la distribución (igualdad), 
    la prueba de una cola es usada cuando la hipótesis nula no contiene signos de igualdad o desigualdad sino busca identificar si el dato en cuestion es
    mayor o menor. El test de una sola cola se usa cuando solo se necesita conocer los resultados de un solo extremo (desigualdad es decir, en una cola
    de la distribución).<br/>
    Ejemplos para los cuales este test es útil son, saber la probabilidad de que la producción de leche sea mayor o igual a 30000 lbs por lactancia,
    o para ver una  conversión alimenticia mayor o igual a 2 kg de peso por kg de alimento en cerdos de ceba. Estos ensayos se llaman ensayos de una 
    cola o ensayos unilaterales. En tales casos, la región crítica es una región a un lado de la distribución, con área igual al nivel de significancia.
    </p></>}/>
    <ImagePlus
          image={normal2}
          texto="Curva distribución"
          width="40%"
          max_zoom = "60%"
        />
  <Paragraph texto = "Como se ve en la gráfica a diferencia del test de dos colas, el test de una cola se enfoca solo en un extremo en este caso la zona de corte para el 95% de confianza no es 1.96 en ambos lados sino 1.65 desviaciones en un solo extremo de la curva estandarizada, en este caso -1.65. Este significa que cualquier número por debajo de este valor esta por fuera de la zona de confianza del 95% y por lo tanto es sujeto a rechazo."/>

  <center><SubTitle title="Pruebas de una o dos colas" /></center>
        

 
  </SubChapter>

<SubChapter id = "intervalo">
  <SubTitle title ="6.3- Intervalos de confianza"/>
<Paragraph texto = {<><p>
  El intervalo de confianza es un rango de valores que toma la variable en el cual se tiene confianza con un determinado porcentaje (usualmente el 95%)
  que el parámetro poblacional se encuentre ubicado.  El intervalo de confianza es una representación mas certera de la realidad que solo dar el valor
  de una media, especialmente cuando se trabaja con una muestra y no con una población. El intervalo de confianza se debe construir alrededor de un
  punto estimado.<br/>
  Para obtener el intervalo de confianza de un parámetro por ejemplo estimar la media, se van a determinar los números a y b de manera que:
  </p></>}/>

<ImagePlus
          image={inter}
          texto="Intervalo de confianza, puntos a y b"
          width="30%"
          max_zoom = "50%"
        />

<Paragraph texto = {<><p>Esto significa que con un 95% de confianza la media se encuentra entre el punto a y el punto b. El nivel de confianza de un
  intervalo es una probabilidad que representa la seguridad de que el intervalo encierra el verdadero valor del parámetro que estamos buscando
  determinar. Para cada nivel de confianza existe un valor de tabla <b>(z, t, x<sup>2</sup>,F)</b> asociado al nivel de confianza dado. Este es
  el coeficiente de confiabilidad.  El nivel de confianza se denota como <b>100(1 – 𝛼)%.</b></p></>}

/>
<SubTitle minititle = "6.3.1- Intervalo con varianza poblacional conocida "/>

<Paragraph texto = {<><p>
  Para este tipo de intervalo muestral debemos tener en cuenta
  <a href="https://www.greelane.com/es/ciencia-tecnolog%c3%ada-matem%c3%a1ticas/mates/hypothesis-tests-z-test-function-excel-3126622/" target = "_blank">(<u>greelane.com,2018</u>)</a>:</p>
  <ul>
    <li>- La muestra es pequeña en relación con la población. Normalmente el tamaño de la población es veinte veces mayor que el tamaño de la muestra.</li>
<li>- La variable en estudio tiene una distribución normal.</li>
<li>- Se conoce la desviación estándar de la población.</li>
<li>- La muestra es aleatoria simple. </li>
<li> - Se desconoce la media de la población. </li>
  </ul><br/>
  <p>Para este intervalo podemos fijar de antemano el grado de confianza de que el verdadero valor de la media 𝛍x quede incluido en él. 
  La formula simplificada es:</p>
  </>}/>
 <ImagePlus
          image={int}
          texto="Determinación del intervalo"
          width="30%"
          max_zoom = "60%"
        />

<center><p>Donde: z (1-α/2) = valor de la variable normal estándar que determina una cola superior de medida 𝛂/2</p></center> 
<br />
<Paragraph texto = {<><p>
  Es importante recordar que el valor de confianza de 100(1 – 𝛼)% en la tabla respectiva, debe buscarse un valor de variable para el cual el área de la
  cola superior e inferior sea del 100(𝛼/2)%.  Esto porque la porción de área que no será cubierta por el intervalo se reparte en partes iguales tanto
  en la cola superior como la inferior. Entonces si es 5% las areas se repartirían 2.5% hacia la izquierda y 2.5% hacia la derecha.<br/><br/>
  Ejemplo: en una granja avícola (huevos) en Santander Colombia, se hace un muestreo aleatorio de las producciones de 30 lotes de ponedoras y se obtuvo
  una media de 339 huevos por ave por por postura.  El promedio de la producción por ave por postura sigue una distribución normal y tiene una
  desviación estándar 𝛔 = 35. El administrador de la finca no está de acuerdo con este resultado ya que según sus cuentas, el promedio no puede
  bajar de 360 huevos por ave por lote. Para determinar si lo que dice el administrador es cierto, necesitamos comprobar si existe diferencia
  significativa entre la media encontrada en el muestreo y la media anecdotimente suministrada por el administrador.<br/><br/>Entonces en
  Excel calculamos la media de las 30 muestras <b>(=AVERAGE o =PROMEDIO)</b> el dato de la desviación estándar, lo conocemos (35) y calculamos el 
  error estándar muestral.  El error estándar nos permite estimar que tanto varia la media muestral con respecto al valor de la que se obtendría 
  calculando la media poblacional. Se obtiene la siguiente manera:
</p></>}/>
<br />
<h4><center>Error Estándar Muestral = 35/√30 = 3.29</center></h4>

<ImagePlus
          image={eggs}
          texto="Determinación del intervalo"
          width="50%"
          max_zoom = "60%"
        />

<Paragraph texto = {<><p>Entonces de la tabla z obtenemos el 𝛂/2, como queremos establecer un intervalo de confianza del 95% entonces el 𝛂 seria
  5/2 = 2.5% (la mitad para cada cola). Este valor en la tabla es de 1.96.  Entonces reemplazamos en la formula para obtener el valor mínimo y el 
  valor máximo.<br/>El valor para establecer el intervalo de confianza se puede calcular en Excel por lo tanto no hay necesidad de tener una tabla. 
  Para ello utilizamos en inglés la función <b>=NORM.S.INV o =DITR.NORM.ESTAND.INV</b> en español.  Esta función nos pide insertar el porcentaje de
  confianza en este caso es del 95% pero hay que tener en cuenta que este se reparte entre las dos colas, asi que  el 𝛂/2 que en este caso es el 97.5%
  y el valor retornado es igual al obtenido en la tabla o sea 1.96. Con este valor podemos construir nuestro intervalo de confianza. Una vez tenemos el
  valor crítico de la tabla podemos calcular el  intervalo.<br/><br/></p>
<h4><center>Valor mínimo = 339 – (3.29 * 1.96) = 332.55</center></h4>
<br/>
<h4><center>Valor máximo = 339 + ( 3.29*1.96) = 347.82</center></h4><br/>
<p>Para calcular el intervalo en Excel, utilizamos la función <b>=CONFIDENCE.NORM o =INTERVALO.CONFIANZA.NORM</b>. Insertamos la función e incluimos el
valor del 𝛂, la desviación estándar y el tamaño de la muestra. Para este caso el valor es 12.52. Entonces el intervalo será de 339 ± 12.52 con lo cual
vamos a obtener los mismos resultados calculados previamente.  Entonces con un 95% de confianza podemos decir que la media de producción por ave por
lote en esta finca es un valor que se encuentra entre 332.55 y 347.82 huevos por ave por lote. Por tanto con un 95% de confianza podemos afirmar que
la media que el administrador estimó en 360 huevos por ave por lote, no es acertada.</p>
<br />
<p>Vamos a ver otra manera de comprobar si el promedio es 360 huevos por ave/encasetada como dice el administrador, para ello establezcamos las hipótesis
H<sub>0</sub> y H<sub>1</sub> donde:</p>
<ul>
<li>H<sub>0</sub>: 𝛍 = 360</li>
<li>H<sub>1</sub>: 𝛍 ≠ 360</li>
</ul>
<br/>
<p>Como la hipótesis es una igualdad y una desigualdad entonces hablamos de un ensayo de dos colas. Para demostrar si estas medias son iguales,
   utilizamos la siguiente fórmula:</p>
</>}/>

<ImagePlus
          image={tail}
          texto="Fórmula dos colas"
          width="15%"
          max_zoom = "60%"
        />

<Paragraph texto = {<><p>Donde <b>X</b> es la media muestral, 𝛍 es la media poblacional, <b>σ</b> es la desviación estándar de la población y <b>n</b> el tamaño de la muestra. Entonces, reemplazando:</p></>}/>

<ImagePlus
          image={tail2}
          texto="Fórmula con valores reemplazados"
          width="25%"
          max_zoom = "60%"
        />

<Paragraph texto = "El z calculado para una media de 360 es de -3.28 desviaciones estandar. El intervalo de z establecido para el 95% de confianza es entre -1.96 y 1.96 desviaciones estandar, por tanto -3.28 se encuentra por fuera de este rango y podemos decir con 95% de confianza que la media no es 360 huevos por ave por lote. Tal como lo habíamos previsto en nuestro intervalo de confianza."/>

<center><SubTitle title="Intervalo de confianza con varianza poblacional conocida" /></center>
        <Video id="qWcPOUR3LG4" title="Intervalo de confiaza, varianza conocida" />
</SubChapter>

<SubChapter id = "intervalo2">
<SubTitle title = ">6.3.2- Intervalo de confianza con varianza poblacional desconocida"/>
<Paragraph texto = "Cuando no se conoce la varianza de la población de interés, podemos basados en una muestra  obtener un intervalo de confianza para la media de dicha variable.  Para ello entonces, debemos obtener  una muestra aleatoria de tamaño n, que pertenece a una población con distribución normal, media 𝝻 y desviación estandar 𝞂, ambas desconocidas. El intervalo de confianza se construye partiendo de la variable aleatoria:"/>

<ImagePlus
          image={desc}
          texto="Intervalo de confianza var. poblacional desconocida"
          width="15%"
          max_zoom = "30%"
        />
<Paragraph texto = {<><p>Donde <b>𝛸</b> es la media muestral, <b>𝛍</b> es la media poblacional, <b>s</b> es la desviación estándar
de la muestra y <b>n</b> el tamaño de la muestra.<br /><br/>
El intervalo de confianza asociado con un nivel de confianza de <b>100(1-𝝰)%</b> es:
</p></>}/>

<ImagePlus
          image={desc2}
          texto="Intervalo de confianza var. poblacional desconocida"
          width="25%"
          max_zoom = "50%"
        />

<Paragraph texto = {<><p>
  Donde t<sub>α/2</sub>, n-1 es el punto de la distribución t Student con n-1 grados de libertad.<br/><br/>
  Ejemplo, en una finca ganadera del departamento del Cesar en Colombia, se busca determinar el peso promedio de los novillos vendidos en pie. 
  Para ello se tomaron al azar y se pesaron 25 novillos antes de embarcarlos al camión.  Este intervalo se puede calcular fácilmente por medio de la
  función en Excel =INTERVALO.CONFIANZA.T o =CONFIDENCE.T<br/>Para ello nos ubicamos en la celda donde deseamos insertar la función y 
  seleccionamos el 𝝰, la desviación estándar de la muestra y el tamaño de la muestra. Como se ve en la tabla siguiente y de esta manera obtendremos el
  intervalo.
</p></>}/>
<ImagePlus
          image={conf}
          texto="Tabla pesos novillos"
          width="40%"
          max_zoom = "60%"
        />

<Paragraph texto = "Resultados: "/>
<ImagePlus
          image={conf2}
          texto="Resultados"
          width="40%"
          max_zoom = "60%"
        />

<Paragraph texto = {<><p>
  Otra manera sencilla de obtener el intervalo es con el modulo de estadística descriptiva que se ubica en la 
  herramienta <b>Análisis de Datos o Data Analysis</b> de Excel. Una vez seleccionada esta herramienta seleccionamos el rango de los datos, 
  marcamos que están agrupados por columnas (columns) si están en una fila (desaconsejable) seleccionar filas o rows. Seleccionamos la celda o la hoja 
  donde queremos ubicar el informe, incluimos la opción <b>summary statistics (resumen estadístico)</b> y finalmente, seleccionamos la opción nivel
  de confianza para la media, en este caso 95% tal como se muestra en el cuadro.</p></>}/>
<ImagePlus
          image={conf3}
          texto="Summary Statistics, selección de opciones"
          width="45%"
          max_zoom = "70%"
        />

<Paragraph texto = "Una vez seleccionadas las opciones damos ok y obtendremos el siguiente reporte:"/>
<ImagePlus
          image={conf4}
          texto="Summary Statistics, reporte"
          width="30%"
          max_zoom = "60%"
        />
<Paragraph texto = {<><p>
  Si observamos la ultima fila, el valor de confianza (confidence) es igual al que obtuvimos con la función <b>=INTERVALO.CONFIANZA.T</b>
  <br /><br />Ahora que ya tenemos el valor solo tendremos que sumar y restar de la media asi:<br />
  514.92 ± 42.72 , entonces el intervalo de la media de peso para los novillos en pie para esta finca con un 95% de confianza esta entre 472.2 y 
  557.64 kg. Podemos suponer que este un intervalo mayor al que obtendriamos si conocieramos la desviación estandar poblacional pero dado que no 
  la conocemos este intervalo a partir de la muestra nos da certeza sobre los resultados a esperar sobre el comportamiento poblacional. 
</p></>}/>


<center><SubTitle title="Intervalo de confianza con varianza poblacional desconocida" /></center>
        <Video id="0MHlgMjbMxc" title="Intervalo sin varianza poblacional conocida " />

</SubChapter>

<SubChapter id = "intervalo3">

<SubTitle title = "6.4- Intervalo de confianza para la diferencia de medias en poblaciones normales independientes"/>
<Paragraph texto = {<><p>
  Existen situaciones en las cuales es importante comparar las medias de dos grupos diferentes. Por ejemplo la condición corporal de vacas 
  lecheras en confinamiento y semi confinamiento, o la persistencia en producción entre lotes de ponedoras de diferentes líneas. Estas situaciones
  involucran comparaciones entre dos grupos independientes, significando que son diferentes animales los que están en los grupos
  <a href="https://sphweb.bumc.bu.edu/otlt/mph-modules/bs/bs704_confidence_intervals/bs704_confidence_intervals5.html" target ="_blank">
  (<u>Boston University of Public Health, 2017</u>)</a>.
  </p></>}/>


<SubTitle title = "6.4.1- Intervalo cuando las varianzas son desconocidas, pero se asumen iguales"/>
<Paragraph texto = {<><p>
  Cuando no se conocen las varianzas poblacionales, para calcular el intervalo <b>𝛍x – 𝛍y</b> se usa la fórmula:</p></>}/>
<ImagePlus
          image={novar}
          texto="Fórmula del Intervalo de confianza  para diferencia de medias"
          width="30%"
          max_zoom = "60%"
        />
<Paragraph texto = {<><p>
  Donde <b>t</b><b><sub>(k,1-α/2)</sub></b> Es el valor de la variable con distribución t con <b>k = nx + ny – 2</b> grados de libertad que determina
  un área superior de media <b>𝛼/2</b> <br/><br/>Como se desconoce la varianza poblacional debemos calcular la varianza 
  ponderada <b> S<sub>p</sub></b> con la siguiente fórmula:
</p></>}/>
<ImagePlus
          image={novar2}
          texto="Intervalo de confianza  para diferencia de medias"
          width="30%"
          max_zoom = "60%"
        />

<Paragraph texto = {<>
  <center><p>La diferencia de los parámetros se toma de manera que la diferencia muestral sea positiva.</p></center><br/><br/>
  <p>Ejemplo: Un propietario tiene dos hatos lecheros, sus registros son escasos y contrata un asistente técnico para que le ayude a mejorar producción.
     El asistente desea saber si existen diferencias en las medias de producción de ambas fincas.  Para ello tomó los registros de producción del ultimo
     año y seleccionón 27 lactacias al azar de cada uno de los hatos.  Desconocemos las varianzas poblacionales, pero podemos calcular las de las
     muestras de cada finca para determinar el intervalo de la diferencia de la  media.</p>
</>}/>

<ImagePlus
          image={novar3}
          texto="Tabla de las muestras de lactancias"
          width="30%"
          max_zoom = "60%"
        />



<Paragraph texto = {<>
  <center><p>Entonces X será el promedio de la producción de leche para la granja A y Y el promedio de la producción de leche par a la granja B.</p></center>
   <br/><br/><p>Calculamos la varianza combinada siguiendo la fórmula establecida y tenemos por resultado:</p></>}/>

<ImagePlus
          image={novar4}
          texto="Aplicando la fórmula"
          width="30%"
          max_zoom = "60%"
        />

<Paragraph texto = {<><p>
  Una vez tenemos este valor buscamos el valor de t para los grados de libertad combinados y un 𝛼 de 5%.  En este caso utilizamos la función de 
  Excel <b>=T.INV.2T</b> porque estamos trabajando con una igualdad, queremos saber si las medias de X y Y son iguales <b>(H<sub>0</sub>)</b> o por el
  contrario las medias de X y Y son diferentes  <b>(H<sub>1</sub>)</b>.<br/> La condición de que las medias son iguales se traduce por la 
  condición <b>(𝛍x – 𝛍y) = 0</b>.</p></>}/>
<ImagePlus
          image={novar5}
          texto="Resultados en Excel"
          width="30%"
          max_zoom = "60%"
        />

<Paragraph texto = "Entonces, tenemos que el valor de T para 52 grados de libertad y 𝛼/2 es de 2.31.  Reemplazando los valores tenemos que el intervalo de la media de producción de las dos granjas con un 95% de confianza, oscila entre -61.22  kg y 1546 kg, por tanto no podemos descartar que las dos medias sean iguales, ya que el 0 esta incluido dentro del intervalo, por tanto aceptamos la hipótesis nula."/>

<center><SubTitle title="Intervalo de confianza para la diferencia de dos medias con varianza poblacional desconocida pero se asumen iguales" /></center>
        <Video id="He5qTcVbkXU" title="Intervalo sin varianza poblacional desconocida " />
<br/>
<br/>
<SubTitle title = "6.4.2- Cálculo del intervalo de dos medias  cuando las varianzas poblacionales no son conocidas y se asumen diferentes"/>
<Paragraph texto = {<><p>
  Si el número de las muestras obtenidas de ambos grupos es diferente y existe gran diferencia entre ambas varianzas (por lo menos el doble), 
  es recomendable hacer esta prueba (podemos asumir que las varianzas son iguales). Para realizar la prueba vamos a tomar ventaja del analizador 
  de datos de Excel que hemos trabajado durante toda esta sección.<br/>Ejemplo: en una finca de ganado de ceba se hace un estudio para comparar 
  los pesos ajustados a 24 meses de dos grupos de novillos, el primero son animales Brahman puros y el segundo grupo es un lote de animales F1 Simbrah 
  (Simmental x Brahman), tal como como en el fragmento que se muestra en la tabla a continuación:
</p></>}/>
<ImagePlus
          image={dosmed}
          texto="Tabla comparativa"
          width="30%"
          max_zoom = "60%"
        />
<Paragraph texto = {<>
<p>El propietario desea conocer cual es el intervalo de la diferencia entre ambos grupos con un 95% de confianza.<br/>
La diferencia de los parámetros se toma de manera que la diferencia muestral sea positiva.<br/>
Definiendo los términos tenemos:</p><br/>
<ul>
  <li>X = peso (kg) ganado Simbrah</li>
  <li>Y = peso (kg) ganado Brahman</li>
</ul>
<br />
<p>Los resultados obtenidos con el analizador de datos de Excel para prueba T cuando la varianza no se conoce fueron:</p>
</>}/>

<ImagePlus
          image={dosmed2}
          texto="Resultados"
          width="40%"
          max_zoom = "60%"
        />
<Paragraph texto = {<><p>
  La condición de que las medias son iguales se traduce por la condición <b>(𝛍x – 𝛍y) = 0</b>. En este caso Excel no nos devuelve el intervalo, 
  sin embargo el P calculado para dos colas es muy inferior al nivel de confianza (P= 0.05), por tanto podemos decir que no hay igualdad entre los dos
   grupos, por lo tanto con un 95% de confianza podemos decir que las medias poblacionales son diferentes, por tanto aceptamos la hipótesis alterna.
   </p></>}/>
<center><SubTitle title="Intervalo de confianza para la diferencia de dos medias con varianza poblacional desconocida y se asumen diferentes" /></center>
        <Video id="qETB6_m39bU" title="Intervalo  varianza poblacional desconocida y se asumen diferentes " />

 </SubChapter>

<SubChapter id = "intervalo4">
<SubTitle title = "6.5- Intervalo de confianza para la diferencia de dos medias dependientes"/>
<Paragraph  texto = {<><p>
  Las muestras dependientes ocurren en múltiples situaciones, por ejemplo, cuando estamos mirando variaciones de la misma variable en el tiempo 
  (antes y después). La varianza que se utiliza es la varianza de la diferencia entre el antes y el después. Se asume que la distribución de los datos
  sigue una curva normal.<br/><br/>La formula para calcular el intervalo de la diferencia ese el siguiente:
  </p></>}/>

<ImagePlus
          image={depen}
          texto="Fórmula"
          width="20%"
          max_zoom = "40%"
        />

<Paragraph texto = {<><p>
  Como se ve la fórmula del intervalo es muy similar a la de una sola población con varianza desconocida solo que aquí para calcular el intervalo utilizamos la media
  de la diferencia entre el <b>antes</b> y el <b>después</b> que es la "d" y sumamos o restamos el valor obtenido en la tabla t para n-1 y 𝛼/2 multiplicado por el error estandar. Por ejemplo, queremos evaluar el efecto de un nuevo programa de higiene
  y control preventivos contra la mástitis clínica. Tomamos 13 vacas al azar a las cuales previamente hemos hecho el recuento de céluas somaticas
  (scc 000/ml) y volvemos a medir 30 días después para comprobar si hay alguna diferencia.  Como podemos ver las variables son dependientes porque
  son las mismas vacas las que estamos muestreando tanto antes como después.  De igual manera con otras medidas que se pueden tomar en la finca.
  </p></>}/>

<ImagePlus
          image={depen2}
          texto="Conteos de células somáticas"
          width="30%"
          max_zoom = "50%"
        />

 <Paragraph texto = {"La tabla superior presenta los resultados de scc/ml para un n de 13 animales. "} />

<ImagePlus
          image={depen3}
          texto="Conteos de células somáticas"
          width="40%"
          max_zoom = "60%"
        />

<Paragraph texto = {<><p>
  Calculamos la media de la diferencia (antes y después), la desviación estándar, el error estándar y el t de la tabla, tal como lo hemos visto 
  anteriormente. Finalmente reemplazamos los valores de la fórmula para obtener nuestros rangos superior e inferior.<br/><br/>
  Teniendo en cuenta que ambos valores del intervalo están por debajo del 0, y viendo que el promedio de scc/ml es inferior después de aplicar 
  las medidas podemos asegurar que si hubo un cambio positivo en la implementación de las medidas ya que el conteo dismunuyó y no hay igualdad dentro 
  del intervalo. 
</p></>}/>
<center><SubTitle title="Intervalo de confianza para la diferencia de dos medias dependientes" /></center>
        <Video id="tZ449vQQ0VY" title="Intervalo  de confianza dos medias dependientes " />


</SubChapter>
<ReferencesBlock
        references={[
         
          <a href="https://towardsdatascience.com/type-i-type-ii-errors-5b7eaf493dab"> <u>* Alterman R. Type I and type II errors, in Towards Data Science, 2020</u></a>,
          <a href="http://cidecame.uaeh.edu.mx/lcc/mapa/PROYECTO/libro19/71de_una_o_dos_colas.html"><u>* Benitez Morales A., Probabilidad y Estadistica -Apuntes Digitales-, Universidad Autónoma del Estado Hidalgo , Consultado 2020</u>)</a>,
          <a href="https://sphweb.bumc.bu.edu/otlt/mph-modules/bs/bs704_confidence_intervals/bs704_confidence_intervals5.html">* Boston University School of Public Health, 2017. <u> Confidence intervals for two independent outcomes, Continuous Outcome</u> </a>,
          "* Chao, L.L., 1978. Estadística para las ciencias administrativas. McGraw-Hill Interamericana.",
          <a href="https://www.greelane.com/es/ciencia-tecnolog%C3%ADa-matemáticas/mates/hypothesis-tests-z-test-function-excel-3126622"><u>* Portal Greelane.com,2018. Z.Test cómo utilizar la funcion en Excel</u> </a>,
          "* Pfaffenberger, R.C. and Patterson, J.H., 1977. Statistical methods for business and economics. Homewood, IL: Richard D. Irwin.",
          <a href="http://lcolladotor.github.io/courses/Courses/MEyAdDG/day2/Pruebas%20de%20Hipótesis.pdf"><u>* Rohen V. Consultado Junio 2021, Presentación de pruebas de hipótesis, PDF</u> </a>
        ]}/>

</ChapterLayout>
 );
};
export default Analisis;
