import React from "react";
import ContentsTable from "Components/ContentsTable";
import SubChapter from "Components/SubChapter";
import Paragraph from "Components/Paragraph";
import SubTitle from "Components/SubTitle";
import Video from "Components/Video";
import novillas from "Media/photos_web/ucaldas.JPG"
import ImagePlus from "Components/ImagePlus";
import fecha1 from "Media/examples/fecha1.png"
import fecha_error from "Media/examples/fecha_error.png"
import ChapterLayout from "Layouts/ChapterLayout";
import ReferencesBlock from "Components/ReferencesBlock";
import list1 from "Media/examples/list-1.png"
import list2 from "Media/examples/list-2.png"
import list3 from "Media/examples/list-3.png"
import list4 from "Media/examples/list-4.png"
import list5 from "Media/examples/list-5.png"
import num1 from "Media/examples/num-1.png"
import num2 from "Media/examples/num-2.png"
import val1 from "Media/examples/val1.png"
import val2 from "Media/examples/val2.png"
import val3 from "Media/examples/val3.png"
import val4 from "Media/examples/val4.png"
import spell1 from "Media/examples/spell-1.png"
import spell2 from "Media/examples/spell-2.png"
import dup1 from "Media/examples/dup-1.png"
import dup2 from "Media/examples/dup-2.png"
import dup3 from "Media/examples/dup-3.png"
import dup4 from "Media/examples/dup-4.png"
import dup5 from "Media/examples/dup-5.png"
import dup6 from "Media/examples/dup-6.png"
import miss1 from "Media/examples/miss-1.png"
import miss2 from "Media/examples/miss-2.png"
import miss3 from "Media/examples/miss-3.png"
import miss4 from "Media/examples/miss-4.png"
import miss5 from "Media/examples/miss-5.png"
import miss6 from "Media/examples/miss-6.png"
import miss7 from "Media/examples/miss-7.png"





const Examples =()=>{
    return(
        <ChapterLayout chapter_title="2- Ejemplos prácticos para manejar los datos estructurados"
        chapter_image={novillas}>
<div>
<body>
    <main>
    <section id = "tabla" className = "container">
          <ContentsTable
            contenidos={[
              {
                titulo: "2.1-Cómo crear campos con criterio de validación",
                link: "#fechas",
              },
              {
                titulo: "2.2- Cómo crear listas desplegables",
                link: "#listas",
              },              
              {
                titulo:
                  "2.3- Cómo manejar los datos cuantitativos",
                link: "#cuantitativas",
              },
              {
                titulo:
                  "2.4- Listas dependientes de otras -Madre e hijas- ",
                link: "#madrehija",
              },
              {
                titulo:
                  "2.5- Cómo solucionar problemas con datos importados o secundarios",
                link: "#importados",
              },
              {
                titulo:
                  "2.5.1- Inconsistencia en los terminos para referirse a un evento",
                link: "#importados",
              },
              {
                titulo:
                  "2.5.2- Revisar los datos duplicados en los registros",
                link: "#duplicados",
              },
              {
                titulo:
                  "2.5.3- Que hacer cuando hacen falta datos en los registros",
                link: "#missing",
              },
            ]}
          />
        </section>

            <SubChapter id ="introduccion">
            <SubTitle title= "I- Introducción"/>
            <Paragraph texto = {["La manera mas común como se colectan los datos utilizados en producción son los",<a href="Post#datos"> <u> <b>datos estructurados</b> </u></a> ,".  La principal estrategia para que los datos crudos sean de buena calidad radica en el diseño de los registros, pues estos deben ser lo más sencillos y claros posibles. Ademas de la manera como se llevan los registros y la calidad en la recolección de datos.  Por ejemplo los pesajes de ganado bovino deben hacerse muy temprano en la mañana una vez al mes y la báscula debe estar adecuadamente calibrada.  Esto asegura datos que permitan se analizados adecuadamente." ]}/>
            <Paragraph texto = "Una vez que tenemos recogidos los datos crudos y estamos listos para su procesamiento, podemos enfrentar diversos problemas, especialmente si las tablas no han sido bien diseñadas y las variables o los datos no son claros.  Un caso típico, es la falta de estandarización en los registros de actividades y producción.  Cuando las variables no están bien definidas o no se han estandarizado los valores y términos que pueden tomar las variables se va a generar un caos en el manejo de los registros. Esto es porque cada quien va a utilizarlos como mejor le parece y vamos a encontrar muchas versiones de como incluir un evento. Supongamos que hay una vaca enferma con mastitis, sino existe un código para este evento, bajo la columna de 'Observaciones' el funcionario puede escribir Mast, Mastitis, M, Mgram+ etc. y todos serán válidos pero esto va a generar un dolor de cabeza a la hora de compilar los datos."/>
            <Paragraph texto = "Una forma de solucionar esta situación es conocer claramente cuales son nuestras variables y el tipo de información con la cual vamos a alimentar los registros. Por ejemplo, para datos datos nominales como raza o problemas de salud, es adecuado de antemano delimitar la entrada de los datos.  Por ejemplo si vamos a registrar un caso de mastitis clínica, en el registo debería solo existir la opcion 'Mastitis' o cualquiera que sea el código asignado y podemos luego generar otra variable explicativa que dé un poco mas de detalle.  "/>
            <Paragraph texto = {["Finalmente podemos asegurar que unos datos adecuadamente procesados y analizados son fundamentales para una adecuada ", <a href="https://www.guru99.com/business-intelligence-definition-example.html"> <b><u>Inteligencia de negocios</u></b> </a>, ". Esta la podemos interpretar como la capacidad de transformar los datos crudos para convertirlos en información oportuna que pueda generar herramientas útiles en la gerencia de la finca tratando de incluir tantos aspectos como sea posible (nutrición, producción, costos, mercadeo, etc.) para asegurar su sostenibilidad y rentabilidad. Con la Inteligencia de negocios podemos encontrar cuellos de botella en el sistema (eje: donde están los problemas que afectan mi rentabilidad), evaluación de los recursos que existen dentro de la empresa y también  como se afecta la producción cuando generamos cambios en la empresa (eje: invertir en un nuevo equipo de ordeño vale la pena?)."
        
        ]}/>
            </SubChapter>

            <SubChapter id = "Definiciones">
                <SubTitle title="II- Definiciones importantes"/>

                <p> Revisemos algunas definiciones importantes (Chao, 1978) dentro del proceso del manejo de datos. </p>
                <br />
                   <ul>
                   <li> - <b>Variable</b>: Es toda característica que toma diferentes valores en distintas especies, lugares o cosas. Por ejemplo, peso, sexo, edad al 1er parto, raza etc.</li>

                    <li>- <b>Datos</b>: Son números o medidas que han sido recopilados como resultado de las observaciones. Los datos pueden provenir de recuentos tales como el total de aves que se encuentran en una granja de ponedoras o mediciones como el peso del ganado.</li>

                    <li>- <b>Variable aleatoria</b>: Cuando los valores que asume la variable han sido antecedidos por una selección aleatoria de los objetos medios o son resultado de algún proceso al azar. </li>

                    <li>- <b>Variable continua</b>: Es aquella que teóricamente puede tomar cualquier valor dentro de un intervalo. Ejemplo, peso corporal, producción de leche.
                            </li>

                    <li>- <b>Variable discreta</b>: Es aquella que toma valores separados entre si por alguna cantidad. Ejemplos: numero de cerdas en lactancia, numero de empleados requeridos.
                    </li>

                    <li>- <b>Variable cuantitativa</b>: Es aquella que asume valores acompañados de una unidad de medida. Numero de aves muertas en el año, valor total de los ingresos por ventas de huevo.
                    </li>

                    <li>- <b>Variable cualitativa</b>: Es la que se refiere a la clasificación, como raza, tipo de galpón, tipo de rotación</li>

                   </ul>
                <br />
                <p>Cuando estamos trabajando con datos y registros, debemos tener en cuenta varios puntos simples pero muy efectivos para que nos ayudaran a optimizar la colección y el manejo de los mismos (adaptado de Guerrero, 2010).  Los mas importantes son: </p>
                <br />
                <ul>
                <li>- No todos los datos son creados de la misma manera. Es importante primero analizar los datos, como se colectan y a que <a href="Post#raw"><u> <b>categoría</b>  </u> </a> pertenecen. Una vez hecho esto tener claridad sobre su necesidad y uso. </li> 
                <li>- Mantenenga las tablas simples y de forma columnar para las variables y las filas para los eventos u observaciones. Tal como se mostró en la sección anterior con el registro de <a href="Post#datos"> <u> <b>gallinas ponedoras</b> </u> </a>  </li>
                <li>- No colecte mas datos de los que se necesitan, pero que tampoco menos. </li>
                <li>-Haga comentarios sobre que es que, trate de ser explicativo porque a lo mejor usted entiende, pero si alguien va a analizar los datos va a entender. </li>
                <li>- Sea consistente con los títulos y los nombres de las variables. Si una variable se repite en varios registros, siempre llamela de la misma manera, esto ahorrará dolores de cabeza</li>
                <li>- Sea consistente con la forma de los registros y la frecuencia para recoger los datos. De esta manera se facilitará la comparación, el análisis y por tanto la toma de decisiones</li>
                </ul>
                <br />

            </SubChapter>

            <SubChapter id ="fechas">
                <SubTitle title= "2.1- Como crear campos con criterios de validación en Excel"/>
                <Paragraph  texto = {["Los criterios de validación se utilizan para evitar que al ingresar los datos en los campos, se incurra en datos espurios o erroneos.  Para ello Excel nos permite ", <b>validar los datos</b>, " o solo permitir la entrada de ciertos valores asignados a los campos. Para entender de manera mas clara  vamos a crear un registro de control de nacimientos de terneros en la hoja electrónica." ]}    />
                
                <Paragraph texto =
                "El primer paso es crear el campo donde va la fecha de nacimiento del ternero. Entonces para evitar errores diferentes formatos (día-mes-año) o datos que no sean una fecha, Excel permite asignar primero la exclusividad de introducir solo fechas en los campos deseados y en el formato deseado. Para hacer esto entonces,"/>
                
                <Paragraph texto = {[ <ul>
                    <li>1- Identifique el rango de las celdas donde se van a digitar las fechas.</li>
                    <li>2-Vaya al menú datos ubicado en la parte superior de la hoja electrónica y seleccione la opción 'validación de datos'. </li>
                    <li> 3- En el menú criterio de validación (validation criteria) se muestra una lista que ofrece varias opciones y de ahí seleccione 'fecha' como se muestra en el cuadro 2.1.  Esto hace que no se pueda introducir ningún otro tipo de datos diferente a una fecha. </li>
                    <li> 4- Para determinar el rango de fechas, podemos seleccionar de una mínima a una máxima o solo una mínima, para este caso se ha seleccionado  la posibilidad de introducir fechas superiores a Enero 1 del 2021, como se muestra en el cuadro 2.1.1.  Finalizado este paso ya se puede seleccionar la fecha.  Al tratar de digitar  una fecha anterior al 2021  o un valor diferente a una fecha, se activará una señal de error como se muestra en en el recuadro 2.1.2."  </li>
                </ul>

                ]}/>
                
                 <center><h4>2.1.1- Validación de criterios, selección del criterio por fecha</h4></center>
                 <ImagePlus 
                image = {fecha1}
                texto = "Selección de los criterios para la validación de los datos"
                />  
                <br />
                <center><h4>2.1.2- Alerta de error al tratar de digitar un dato diferente a una fecha</h4></center>
                 <ImagePlus 
                image = {fecha_error}
                texto = "Si se intruce un dato erroneo el sistema de validación de datos lo rechaza"
                />  
                <br />
                <center><h4>Creación de un campo de fecha para la construcción de un registro con Validación de datos</h4></center>
                <Video
          id="c2O-O9MAOB4"
          title="Creación de un campo de fecha para la construcción de un registro con Validación de datos "
        />

            </SubChapter>

        <SubChapter id = "listas">
            <SubTitle title ="2.2- Como crear listas desplegables en Excel para seleccionar datos -Listas Desplegables-"/>
            <Paragraph texto ="También conocidas como listas de validación, son una herramienta útil para diseñar los registros y minimizar el impacto causado por datos erroneos o espurios.  Por medio de estas listas, se generan un número limitado de opciones para introducir datos (valores que puede tomar la variable) y evitar problemas como el anteriormente mencionado con todas las posiblidades de nombrar un evento como Mastitis o tambien como vimos en la sección anterior la creación de fechas. "/>
            
            <Paragraph texto="Para crear una de estas listas,  lo primero que se debe hacer es identificar los posibles valores que puede tomar la variable. Para ilustrar de manera mas clara vamos a utilizar un ejemplo, en donde vamos a incluir la raza de los animales en un registro individual de novillas de levane.  También vamos a crear una lista para incluir el sexo del animal. Como se observa en los cuadros 2.2.1 a 2.2.5"/>
            
            <center><h4>2.2.1- Crear de la lista de validación</h4></center>
                 <ImagePlus 
                image = {list1}
                texto = "Creación de la lista de validación"
                />  
            <Paragraph texto = "El primer paso consiste en generar una lista para todas las razas, esta debe ir a manera de columna y un valor por celda. Este caso creamos una lista para razas en la columba B, y otra para para en la columna C."/>
            <center><h4>2.2.2- Dar un nombre a lista creada</h4></center>
                 <ImagePlus 
                image = {list2}
                texto = "Nombrar la lista recién creada"
                />  
            <Paragraph texto = "El segundo paso es seleccionar el rango de los datos y nos ubicamos en la celda que se ubica en la parte superior izquierda de la pantalla, hacemos click y desde ahí le damos el nombre a la lista, en este caso “Razas”. Una vez cumplido este paso ya se puede utilizar en la creación de la tabla o el registro deseado."/>
             
            <center><h4>2.2.3- Utilización de la lista creada</h4></center>
                 <ImagePlus 
                image = {list3}
                texto = "Utilizando la lista 'Razas'"
                />  

            <Paragraph  texto ="Para usar la lista, debe ubicarse en la celda o en el rango deseado dentro del registro, ir al menú datos (data) que se ubica en la parte superior de la hoja electrónica y seleccionar validación de datos (data validation), luego del mendu seleccionar la opción lista, y dar el nombre de la lista que acabamos de crear (=Razas)" />

            <center><h4>2.2.4- Comprobación del funcionamiento adecuado de la lista </h4></center>
                 <ImagePlus 
                image = {list4}
                texto = "Chequear si todo OK"
                />  
            <Paragraph texto ="Una vez terminado este paso vemos que cuando vamos a digitar una raza la hoja solo permite seleccionar una de las que hemos incluido en la lista."/>

            <center><h4>2.2.5- Poblar las listas y crear mas </h4></center>
                 <ImagePlus 
                image = {list5}
                texto = "una vez comprobado el funcionamiento adecuado podemos poblar el registro"
                />  
            <Paragraph texto="Finalmente, repetimos la operación para la columna donde vamos a incluir el sexo del animal y como podemos ver en la figura la lista solo nos permite seleccionar alguno de los valores incluidos en la lista. "/>

            <center><h4>Video de creación de una lista desplegable en Excel para usar validación de datos</h4></center>
                <Video
          id="LxfaiH88x_s"
          title="creación de una lista desplegable en Excel para usar validación de datos"
        />
        </SubChapter>

        <SubChapter id = "cuantitativas">
            <SubTitle title ="2.3- Manejo de la información cuantitativa "/>
            <Paragraph texto = "Con la información cuantitativa (numérica) es frecuente cometer errores al digitarla. Por ejemplo es común incluir u omitir un cero. De esta manera, es posible ver como una vaca llega a producir 200 kg. de leche en un ordeño en vez de 20 kg.  Existen diferentes maneras para poder detectar estos valores atípicos, uno de ellos es la distribución de los datos como lo veremos mas adelante.  Sin embargo, en gran medida podemos evitar la inclusión de datos espurios desde la misma construcción de los registros.  Para ello podemos nuevamente en Excel acudir al menú de datos y a la sección validación de datos. "/>
            <Paragraph texto ="Vamos a continuar trabajando con el registro de nacimiento de terneros que comenzamos en la sección anterior.  Esta vez vamos a incluir el peso al nacimiento.  De antemano sabemos que un peso de un ternero al nacer puede oscilar entre los 20 y los 45 kg (dependiendo de la raza) por tanto 450 kgs al nacer no es posible en un ternero vacuno.  Vamos a incluir un límite máximo de 55 kgs para los terneros al nacer, de manera tal que si se va un cero adicional el sistema no lo reconozca y obligue a revisar el dato, Tal como se ve en lo recuadros 2.3.1 y 2.3.2 "/>
            <center><h4>2.3.1- Selección de los criterios para usar para la validación de datos numéricos</h4></center>
                 <ImagePlus 
                image = {num1}
                texto = "Tabla de diálogo para la validación de los datos"
                />  
            <Paragraph texto="Primero desde el menú de datos vamos a la opción validación de datos o 'Data Validation' y vamos a seleccionar el criterio de número completo o 'Whole number' y de la lista 'Datos' seleccionamos la opción 'inferior' a (less than) y digitamos el número que deseamos, en este caso 55 y seleccionamos OK."/>

            <center><h4>2.3.2- Poblar los registros con los criterios de validación </h4></center>
                 <ImagePlus 
                image = {num2}
                texto = "Los datos se pueden introducir de manera mas confiable"
                />  
            <Paragraph texto="Una vez asignado el rango de datos en el menú de validacion, ya se puede poblar el registro de una manera mas confiable. Como vemos al tratar de digitar un numero superior a 55, inmediatamente tenemos un mensaje de alerta indicándonos el error. "/>

            <center><h4>Video para la validación de información cuantitativa</h4></center>
                <Video
          id="1KhfePxHc_o"
          title="validación de datos para pesos al nacimiento en un registro"
        />

        </SubChapter>

        <SubChapter id ="madrehija">
            <SubTitle title ="2.4- Creación de una lista de variables que son dependientes de otra variable -Madre e hija-"/>
            <Paragraph texto = "Es muy común encontrar en nuestros registros un campo para aclarar o ampliar información sobre un evento. Por ejemplo, en un campo que por lo general se llama 'Observaciones' vamos a encontrar una variedad increible de comentarios y a veces resulta imposible entender y sobre todo cuantificar.  Esto sucede en registros de actividad diaria, en el caso de animales enfermos donde se pregunta la enfermada y el tipo de tratamiento que se aplicó o la evoulición del paciente. Una alternativa para tener los datos de manera sencilla para su tabulación y análisis es crear listas de validación hijas dependientes de una lista madre.  Por ejemplo, si en la actividad del día se registra una actividad reproductiva, lo ideal es crear una lista que se despliegue en la siguiente celda mostrandonos que tipo de actividad puede ser por ejemplo detección de calor, inseminación, palpación etc."/>
            <Paragraph texto = {["Es muy común  que cuando estamos creando un registro de actividades diarias que se realizan en una finca lechera, lo primero que vamos a hacer es clasificar las actividades según su naturaleza. Entonces creamos una lista de la misma manera como lo hicimos anteriormente con ",<a href="#listas"><u>raza y sexo</u>.</a> , "Para este caso, vamos a dividir las actividades en 4 principales tareas: manejo, salud, reproducción y producción y cada una de ellas a su vez tendrá sus propias actividades o listas hijas. Por ejemplo, para salud vamos a crear la lista con los problemas de salud mas comunes que se presentan en la finca como mastitis, cetosis, hipocalcemia etc.  Para orientarnos observemos los cuadros enumerados entre el  2.4.1 al 2.4.4"]}/>
            <center><h4>2.4.1- Creación de la lista madre y darle su respectivo nombre</h4></center>
                 <ImagePlus 
                image = {val1}
                texto = "Creación de la lista 'madre'"
                />  
            <Paragraph texto="En la misma hoja electrónica podemos crear todas las listas (aconsejable), primero la lista 'madre' en este caso la que llamamos 'Actividades' y luego las hijas.  Una vez que han sido digitados todos las variables (una por celda) de la lista 'Actividades' seleccionamos todo el rango de la lista  y le damos el nombre en la celda que se ubica en la parte superior izquierda y repetimos con las hijas"/>
            <center><h4>2.4.2- Implementación de las listas en el registro a crear</h4></center>
                 <ImagePlus 
                image = {val2}
                texto = "Implementación de la lista madre en el registro"
                />  
            <Paragraph texto="Una vez creadas las lista madre, podemos ir al registro que estamos creando y nos ubicamos en el rango en el que deseamos asignar los eventos de la lista madre o principal que en este caso es la lista 'Actividad'. Una vez seleccionado el rango vamos al menú de validación de datos y seleccionamos la opción de listas de validación como lo hemos desarrollado previamente y asignamos a este rango el nombre de la lista 'Actividad' para que no se acepten valores diferentes."/>
            <center><h4>2.4.3- Implementación de la lista hija</h4></center>
                 <ImagePlus 
                image = {val3}
                texto = "Asignar la ubiciación de las lista hijas"
                />  
            <Paragraph texto="Una vez activada la lista madre en el registro y seleccionada una de las actividades (salud, reproducción, etc.) en uno de los campos, seleccionamos el rango donde queremos ubicar la lista hija y volvemos a validación de datos y seleccionamos lista.  En la misma hoja de diálogo vamos a seleccionar la función 'indirect' y asignamos la celda donde está ubicada la actividad en este caso la D4. Es importante asegurarse que se remuevan los signos $ que son automáticamente asignados. También es muy importante que las listas secundarias o hijas tengan exactamente el mismo nombre como aparecen en la lista principal, de lo contrario habrá un error. "/>
            <center><h4>2.4.4- Probar la relación condicional</h4></center>
                 <ImagePlus 
                image = {val4}
                texto = "Comprobación de que la relacion madre-hija funciona OK"
                />  
            <Paragraph texto="Finalmente, cuando seleccionemos por ejemplo la actividad reproducción, en la celda de la siguiente columna se va a desplegar unicamente lista con las actividades incluidas en reproducción.  "/>

            <center><h4>Creación de una lista dependiente de otra o relación madre-hija</h4></center>
                <Video
          id="o-uELNf64Uw"
          title="Creación de listas dependientes de otra, relación madre-hija" />


         </SubChapter>

        <SubChapter id = "importados">
            <SubTitle title ="2.5- Como solucionar problemas con los datos importados o secundarios" />
            <Paragraph texto = {["Es normal que a veces tengamos que trabajar con datos provenientes de otras fuentes es decir registros que no fueron creados por nosotros o que fueron diseñados para otro propósito. Para ello lo ideal es que estos datos vengan de manera  tabular (estructurados) y sobre todo hay que conocer cuáles son las variables incluidas, cual es su ",<a href="Post#raw"><u><b>naturaleza</b></u></a>," (categórico, ordinal, etc.) y sus valores y escalas (eje: libras o kilos).  Cuando estamos trabajando con unos pocos registros posiblemente solo visualizando los datos podremos identificarlos fácilmente, sin embargo, cuando estamos trabajando con miles (o millones) de datos la situación se torna complicada y necesitaremos de varias herramientas para facilitar este proceso. En este enlace de ",<a href="https://support.microsoft.com/en-us/office/top-ten-ways-to-clean-your-data-2844b620-677c-47a7-ac3e-c2e157d1db19"><u> <b>Microsoft®</b> </u></a>,"  podemos ver algunos de los puntos clave cuando estamos trabajando con datos estructurados."]}/>

            <SubTitle title = "2.5.1- Manejo de inconsistencias en los términos para referirse a un evento "/>
            <Paragraph texto = "Uno de los casos mas comunes es la heterogeneidad en los términos para referirnos a un mismo evento. En este caso podemos acudir a Excel cuando no estamos trabajando con millones de datos. En caso de gran número de registros es mejor utilizar lenguajes de programación como SAS® o Python. Pero cuando tengamos una cantidad considerable de datos sin que sea abrumadora, Excel funciona muy bien.  Vamos a explorar las posibilidades del corrector ortográfico (Spelling), para ello vamos a revisar un registro simulado donde la actividad de inseminación ha sido digitada de multiples maneras (recuadros 2.5.1.1 y 2.5.1.2 )"/>

            <center><h4>2.5.1.1- Uso del corrector ortográfico</h4></center>
                 <ImagePlus 
                image = {spell1}
                texto = "Selección del corrector para estandarizar los términos"
                />  
            <Paragraph texto="El primer paso es seleccionar en el menu 'Revisar' (review) la opción de corrección de ortografía o spelling que se halla ubicado en la parte superior izquierda. Una vez hecho esto una hoja de diálogo permite permite editar cada uno de los términos de la columna(s) seleccionada.  Por ejemplo vamos a reemplazar 'Insem' por 'Inseminación', una vez seleccionada la primera celda, Excel lo hará en todas las celdas donde se requiera, para ello se debe presionar sobre la opción 'change all' o cambiar todas. "/>

            <center><h4>2.5.1.2- Revisar que los datos fueron adecuadamente cambiados y guardados</h4></center>
                 <ImagePlus 
                image = {spell2}
                texto = "Los datos han sido adecuadamente cambiados y ahora los términos son homogeneos"
                />  
            <Paragraph texto="Con esta opción se estandariza los datos como se muestra en el recuadro. Tanto las actividades como las observaciones ya tienen una mejor cara y será mas fácil realizar los respectivos análisis. Sin embargo, aun no está perfecto, por ejemplo en las observaciones aparece Mastitis y Mastitis g+.  Posteriormente veremos como se pueden manejar estos problemas."/>

            <center><h4>Manejando las inconsistencias de los datos con el corrector ortográfico</h4></center>
                <Video
          id="4Lb7eBzr5a0"
          title="Uso del corrector ortográfico" />

        </SubChapter>
        <SubChapter id = "duplicados">
          <SubTitle title="2.5.2- Que hacer cuando se presentan los datos duplicados" />
          <Paragraph texto="Los datos duplicados pueden suceder por varias razones, entre ellas porque se digita doble cuando varias personas acceden al mismo registro, por accidente o cuando se trabaja con información secundaria (registros que han sido utilizados con otro propósito previo) y al integrar los registros no se hace de manera adecuada. Hay que diferenciar entre un registro duplicado o solo campos duplicados por ellos vamos primero a identificar los registros.  Como anteriormente lo mencionamos si se tratan de pocos registros probablemente es fácil hacerlo a ojo, sin embargo, si tenemos miles de registros debemos utilizar las herramientas tecnológicas disponibles.  Con Excel es posible identificar los duplicados. " />
          <Paragraph texto = {["Lo primero que se debe hacer es  identificar los registros duplicados (altamente recomendado), esto para evitar remover información que a lo mejor no era un verdadero duplicado, a veces puede ser un aclaratorio y se crea como un segundo evento. ", <b>Importante nunca haga cambios en los archivos originales</b> ," en caso de un accidente es importante mantener este archivo adecuadamente guarado. Lo ideal es crear un nuevo archivo (copia) y mantener los originales tal y como estaban (siempre mantener un archivo original intacto), y continuar trabajando con la copia. "]}/>
          <center><h4>2.5.2.1- Seleccionar los datos donde se quieren buscar los duplicados</h4></center>
                 <ImagePlus 
                image = {dup1}
                texto = "Selección de los campos o de la tabla"
                />  
            <Paragraph texto="Una vez seleccionada la tabla o el rango que queremos revisar, desde el menú 'Inicio' (home) seleccionamos 'Formateado condicional' (conditional formatting) y de ahí la opción 'Valores duplicados' (duplicate values)  "/>

            <center><h4>2.5.2.2- Seleccionar las opciones del menu de dialogo</h4></center>
                 <ImagePlus 
                image = {dup2}
                texto = "Seleccionar opciones de resaltar duplicados"
                />  
            <Paragraph texto="En seguida se abre una hoja de diálogo en donde se da la opción para resaltar los registros duplicados y de que manera se desean resaltar.  Para este caso se seleccionó el modo estándar.  "/>

            <center><h4>2.5.2.3- Revisar los duplicados visualmente</h4></center>
                 <ImagePlus 
                image = {dup3}
                texto = "Revisar los duplicados"
                />  
            <Paragraph texto="Una vez seleccionadas las diferentes opciones que se desean utilizar se presiona “OK” y vemos como los duplicados se resaltan en la tabla.  Facilitando inmediatamente la revisión de los mismos.   "/>

            <center><h4>2.5.2.4- Resaltar los duplicados a remover</h4></center>
                 <ImagePlus 
                image = {dup4}
                texto = "Cuantos campos del registro estan duplicados?"
                />  
            <Paragraph texto="En la tabla se resaltan todos los duplicados ya sean para todos los campos del registro o parciales por ejemplo fechas, estos últimos no son nuestro objetivos, sino los duplicados del registro completo. En este caso hay dos, los  de los animales 154424 y 155539 están repetidos así que podemos remover.  Para ellos también vamos al menú 'Datos' (Data) y seleccionamos la opción 'Remover duplicados' (remove duplicates)   "/>

            <center><h4>2.5.2.5- Ubicar los registros que  duplicadas</h4></center>
                 <ImagePlus 
                image = {dup5}
                texto = "Solo remover aquellos que son duplicados completos"
                />  
            <Paragraph texto="Un menú de diálogo se abrirá pidiendo seleccionar las columnas donde se encuentran las variables duplicadas (en este caso seleccionarlas todas) y si la tabla tiene encabezados (my list has headers), lo cual en este caso es cierto.  "/>

            
            <center><h4>2.5.2.6- Está seguro de lo que va a hacer?</h4></center>
                 <ImagePlus 
                image = {dup6}
                texto = "Misión cumplida los duplicados han sido removidos"
                />  
            <Paragraph texto="Finalmente, damos click en OK y vemos como los duplicados son removidos de la tabla, no sin antes ver un mensaje de alerta notificando que se han removido.  "/>

            <center><h4> Manejo de registros duplicados</h4></center>
                <Video
          id="S6Eisv7QL4Y"
          title="Selección y remoción de registros duplicados" />

        </SubChapter>

<SubChapter id = "missing">
<SubTitle title ="2.5.3-	Que hacer cuando hacen falta datos (missing values)"/>
<Paragraph texto = "Este es uno de las situaciones mas comunes que se presentan cuando se trabaja con datos de segunda mano. Es importante saber que hacer y cuando vale la pena salvar el registro o por el contrario desecharlo, pues al momento de procesar la información vamos a encontrar que no todos los registros tienen todos los datos completos y aquí hay que tomar decisiones al respecto. También es importante saber que tan crucial son los datos faltantes y si hay posibilidad de hallarlos en otra fuente. "/>

<Paragraph texto = "Una vez que identificamos que hay datos faltantes, primero debemos contar los valores que hacen falta, y que porcentaje del total de la población representan, ya que no es igual que haga falta el 0.5% de los datos de pesaje de novillos en un año, a que nos haga falta el 25% de los datos en un pesaje.  Es importante saber por que faltan los datos y si algo se puede hacer para remediarlo.  Vamos a trabajar con un ejemplo de registro de pesos para un grupo de animales que se encuentran entre los  8 y 10 meses de edad. " />

            <center><h4>2.5.3.1- Opción contar el total de los registros</h4></center>
                 <ImagePlus 
                image = {miss1}
                texto = "Utilizar la función =count"
                />  
            <Paragraph texto="Lo primero que vamos a hacer es identificar el numero de animales.  En este caso con la función de Excel “contar” o “count”, seleccionamos el rango de la tabla como se muestra en la ilustración y obtendremos el total, este caso 40 observaciones en total.  "/>
      
            <center><h4>2.5.3.2- Contar los valores faltantes</h4></center>
                 <ImagePlus 
                image = {miss2}
                texto = "Identificar cuantos valores faltantes existen en la tabla"
                />  
            <Paragraph texto="Para identificar el numero de observaciones faltantes podemos utilizar la función “contar.blanco” o “countblank” en Excel, simplemente escribimos la función en la celda donde queremos tener el dato y  seleccionamos el rango como se muestra en la imagen. "/>

            <center><h4>2.5.3.3- Determine la proporción de valores faltantes</h4></center>
                 <ImagePlus 
                image = {miss3}
                texto = "Calcule la proporción de valores faltantes"
                />  
            <Paragraph texto="En total faltan tres registros,  es decir el 7.5% de los pesos no aparecen.  Esto puede ser por diferentes circunstancias sin embargo al momento de llevar los controles de peso se puede o bien descartar lo registros o asignar el valor del promedio de los animales.  Para calcular la media del peso debemos utilizar la función =averageif. "/>

            <Paragraph texto = "En caso de no querer descartar los registros pensando que en el futuro cuando el animal salga a la venta se puede tener una idea aproximada de la ganancia de peso para ese periodo de tiempo, podemos incluir el promedio del peso en el es campo faltante basados en el lote como control. La manera de incluir el promedio del lote en los registros sin datos es la siguiente: lo primero es obtener la media de los pesos sin los registros que estan en blanco para ello utilizamos la función “averageif” o en español “promedio.si” como se muestra en la barra de fórmulas de las imagen número 3. Es decir se calcula el promedio del lote, excluyendo aquellos que estan en blanco" />

            <center><h4>2.5.3.4- Calcular la media para incluir en los valores faltantes</h4></center>
                 <ImagePlus 
                image = {miss4}
                texto = "Calcule la media"
                />  
            <Paragraph texto="El valor que vamos a 'insertar' en las celdas en blanco es la media que obtuvimos sin los valores en blanco, este valor tiene que copiarse en una celda aparte ya que de lo contrario entraremos en un error de referencia circular.  Una vez hecho esto, desde el menú inicio ir a buscar (find) y seleccionar 'ir a especial' o 'go to special' "/>
            
            <center><h4>2.5.3.5- Seleccionar los espacios en blanco </h4></center>
                 <ImagePlus 
                image = {miss5}
                texto = "Seleccionar los espacios en blanco donde se va a insertar la media"
                />  
            <Paragraph texto="En la hoja de dialogo seleccionar la opción 'blancos' (blanks) y hacer click en OK."/>

            <center><h4>2.5.3.6- Señalar el valor a insertar </h4></center>
                 <ImagePlus 
                image = {miss6}
                texto = "Seleccionar el valor a insertar"
                />  
            <Paragraph texto="Una vez seleccionados los campos en blaco, en la primera celda resaltada deberemos copiar la coordendada donde se encuentra el valor que deseamos incluir. Finalizado este paso presionar al tiempo control + enter (windows) o command + enter (si es un mac) y los valores se copiaran automáticamente. "/>

            <center><h4>2.5.3.7- Revisar que el dato fue adecuadamente copiado en todas las celdas </h4></center>
                 <ImagePlus 
                image = {miss7}
                texto = "Insertar el valor en los campos y revisar"
                />  
            <Paragraph texto="Finalmente se puede observar que ya no existen valores faltantes, sino que han sido reemplazados con la media y de esta manera no vamos a afectar este resultado. Solo se recomienda hacer esto cuando no hacen falta muchos datos y por alguna razon es mejor no borrar los registros de lo contrario no incluir estos registros si hacen parte de otro análisis ya que esto tendría alguna incidencia sobre los resultados. "/>

            <center><h4>Como trabajar cuando hay datos faltantes</h4></center>
                <Video
          id="Ohr0g3zHJNw"
          title="manejo de datos faltanets" />

     
</SubChapter>
<ReferencesBlock references ={[
 "* Chao, L.L., 1978. Estadística para las ciencias administrativas. McGraw-Hill Interamericana.",
 "* Guerrero, H., 2010. Excel data analysis: modeling and simulation. Springer Science & Business Media.",
 "* Pfaffenberger, R.C. and Patterson, J.H., 1977. Statistical methods for business and economics. Homewood, IL: Richard D. Irwin.",
 <a href="https://www.guru99.com/business-intelligence-definition-example.html">* <u>What is Business Intelligence, Definition and Example</u>. Taylor D., Octubre 7 2021 </a>
]}

/>


    </main>
</body>

</div>
</ChapterLayout>

);};
export default Examples