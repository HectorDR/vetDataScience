import React from "react";
import ChapterHead from "Components/ChapterHead";
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

                <p> Revisemos algunas definiciones importantes (Chao y Castaño, 1993) dentro del proceso del manejo de datos. </p>
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
                    <li> 4- Para determinar el rango de fechas, podemos seleccionar de una mínima a una máxima o solo una mínima, para este caso se ha seleccionado  la posibilidad de introducir fechas superiores a Enero 1 del 2021, como se muestra en el cuadro 2.2.  Finalizado este paso ya se puede seleccionar la fecha.  Al tratar de digitar  una fecha anterior al 2021  o un valor diferente a una fecha, se activará una señal de error como se muestra en en el recuadro 2.2."  </li>
                </ul>

                ]}/>
                
                 <center><h4>2.1- Validación de criterios, selección del criterio por fecha</h4></center>
                 <ImagePlus 
                image = {fecha1}
                texto = "Selección de los criterios para la validación de los datos"
                />  
                <br />
                <center><h4>2.2- Alerta de error al tratar de digitar un dato diferente a una fecha</h4></center>
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






    </main>
</body>

</div>
</ChapterLayout>

);};
export default Examples