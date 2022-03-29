import React from "react";
import ChapterHead from "Components/ChapterHead";
import ContentsTable from "Components/ContentsTable";
import SubChapter from "Components/SubChapter";
import Paragraph from "Components/Paragraph";
import SubTitle from "Components/SubTitle";
import ImagePlus from "Components/ImagePlus";
import hozando from "Media/images/hozando.JPG";
import rumination from "Media/images/rumination1.png"
import reg_aves from "Media/tables/reg_aves.png"
import sensrum from "Media/images/sensrum1.png"
import tipos_datos from "Media/tables/tipos_datos1.png"
import datos_summary from "Media/tables/datos_summary.png"
import ReferencesBlock from "Components/ReferencesBlock";
import ChapterLayout from "Layouts/ChapterLayout";
//import rumination from "Media/images/rumination.JPG";
const Post = () =>{
    return(

<div>
    <ChapterLayout chapter_title="1- Introducción a la Ciencia de los Datos"
        chapter_image={hozando}>
    
        <main>
        <section id = "tabla" className = "container">
          <ContentsTable
            contenidos={[
              {
                titulo: "1.1- Qué es la ciencia de los datos",
                link: "#definicion",
              },
              {
                titulo: "1.2- Qué son los datos crudos",
                link: "#datos",
              },
              
              {
                titulo:
                  "1.3- Clasificación de los datos según su naturaleza",
                link: "#raw",
              },

            ]}
          />
        </section>
       
            <SubChapter id = "definicion">
                <SubTitle title="1.1- Que es la Ciencia de los datos" />
                <Paragraph
                    texto ={<><p>La ciencia de los datos abarca un amplio espectro de habilidades que se requieren para analizar los datos obtenidos
                     de diferentes fuentes tanto dentro de la finca como por fuera.  De acuerdo con 
                     <a href="https://www.oracle.com/ca-en/data-science/what-is-data-science.html"> <u>Oracle </u></a>
                     la ciencia de los datos es una combinación de varios campos como la estadística, el método científico y el análisis de datos
                      que se usan para extraer valor de los datos, o en otras palabras obtener información útil.</p></>}
                
                />
                <Paragraph texto = {
                  <><p>El manejo y análisis de los datos requiere de ciertos conocimientos, experiencia y algunas habilidades de programación que se puede
                   aprender,  pero fundamentalmente se necesita curiosidad, interés y unas buenas bases de matemáticas y estadística que permitan dar 
                   respuesta adecuada a las preguntas planteadas. Esto se resume en un artículo de 
                    <a href="https://ischoolonline.berkeley.edu/data-science/what-is-data-science/"><u> McKinsey&Company</u></a>. Este artículo retoma 
                   las palabras de  Hal Varian antiguo ecomista en jefe de Google quien manifiesta que para hacer  ciencia de los datos  se requiere: 
                   1- identificar preguntas relevantes, 2- recolectar datos de múltiples fuentes, 3- organizar la información, 4- traducir los 
                   resultados en soluciones y 5- comunicar los hallazgos en una manera que afecte positivamente la decisión.</p></>}
                />
                <Paragraph
                texto = "En nuestro sector pecuario, los datos se obtienen de diferentes fuentes. Tenemos desde los  simples registros de producción diaria que se llevan en un cuaderno, hasta sofisticados sensores de producción que hoy en día se ubican en  los ordeños, en las básculas y en los animales como los podometros y los sensores de ruminación (ver gráfico inferior). También podemos hablar de sensores de ambiente (temperatura, humedad), software de alimentación, examenes bromatológicosy estudios de suelos entre muchos otros. Por lo cual los requisitos mencionados son fundamentales y se requieren habilidades específicas para poder recolectar e integrar datos de múltiples fuentes."
                />

                <ImagePlus 
                image = {rumination}
                texto = "Créditos: Animal Behavior in a Fully Automatically Controlled Dairy Farm, Gräph et al. 2015"
                />
                <Paragraph
                texto= "Como profesionales del campo, seguramente no nos vamos a convertir en científicos de datos, Pues ya tenemos suficientes responsabilidades clínicas, administrativas o de producción. Pero si es necesario entender los datos que se generan tanto adentro como afuera de la granja, y que información podemos obtener a partir de ellos transformandolos en información valiosa que nos ayude a identificar riesgos y oportunidades. "
                />
            </SubChapter >

            <SubChapter id = "datos">
                <SubTitle title = "1.2- Qué son los datos crudos"/>
                <Paragraph
                texto = {<><p>Los datos que se generan a todo nivel tanto dentro de la empresa como por fuera de la operación y aun no han sido editados,
                 los podemos denominar datos crudos o datos primarios. Estos datos se caracterizan porque no han sido manipulados ni tabulados.
                  Según el <a target="_blank" href="https://www.statista.com/statistics-glossary/definition/351/raw_data/"><u>Statista</u> </a> una vez que los
                   diferentes datos han sido procesados es decir integrados, normalizados o agregados podríamos hablar de datos secundarios y 
                   estos datos se caracterizan porque no necesariamente contienen los datos originales sino que tienen algún tipo de valor agregado 
                   o información.</p></>}/>

               <Paragraph
               texto= {<><p>Desde el punto de vista práctico, los datos crudos se refieren a tablas de datos donde cada fila contiene una observación
                y cada columna representa una variable <a href="https://www.displayr.com/what-is-raw-data/"><u>(Bock, 2018)</u></a>. Entonces, 
                lo mas importante es tener en cuenta que la data cruda es esa data que no ha sido procesada. Un ejemplo claro son los datos de 
                producción que se recogen a diario en un galpón de ponedoras (ver la tabla inferior). Estos registros solo contiene la producción del 
                día, el consumo de alimento y la variación en la población de aves, que sería la materia prima para comenzar a realizar los análisis,
                 sin embargo, no hay ningún tipo de tabulación o procesamiento de los datos. De hecho en la mayoría de nuestras fincas 
                 estos datos aún se llevan a la mano y no son tabulados.</p></>}
               />
                
                <ImagePlus 
                image = {reg_aves}
                texto = {"Registro de producción de huevos y carne (gallinas adultas)"}
                />
                <Paragraph
                texto= {<><a href="http://repositorio.bibliotecaorton.catie.ac.cr/bitstream/handle/11554/8001/Manual_de_producion_manejo_aves_de_patio.pdf">
                   <center> <p>Fuente: <u>Manual de producción, manejo de aves de patio</u></p></center> </a></>}
                />

                <Paragraph 
                texto ="Los registros como el de producción de ponedoras (tabla superior) son la base para la recolección de datos y representan nuestra materia prima. Sin embargo, para un adecuado análisis hay que tabularlos en un medio digital. Siempre hay que tener claro cuales son las variables que queremos obtener y esto sin caer ni en excesos ni en defectos (muchos datos innecesarios o repetidos o por el contrario escasez de datos que no permitan hacer el análisis).  Es clave diseñar registros efectivos que nos permita introducir los datos de la manera mas rápida y evitando comenter errores en la digitación que posteriormente conduzcan a errores en la interpretación de resultados. "
                />
                <Paragraph 
                texto= {<><p>La <em>estructura del registro</em> hace referencia a la manera como los datos se recogen y pueden clasificarse como datos estructurados
                 o desestructurados. Los primeros normalmente vienen en forma tabular es decir filas y columnas, por ejemplo el registro de postura presentado
                  el cuadro superior. Usualmente, las columnas (eje vertical) hacen referencia a las variables y las filas (eje horizontal) hacen referencia a
                   las observaciones o datos registrados para cada una de las variables. Mientras que los datos desestructurados son los que no vienen organizados
                    de una manera predefinida.  La información puede venir de manera textual, números, fechas u objetos binarios (Blobs).  Hoy en día a nivel de
                     las fincas este tipo de datos se hacen mas frecuentes pues las cámaras de video o térmicas al igual que los sensores como los podómetros o los
                      sensores de ruminación generan este tipo de datos. La gráfica inferior muestra información de aceleración reticulo-ruminal colectada en vacas
                       Jersey con bolos sensores como ejemplo de datos no estructurados.</p></>}
                />
                <ImagePlus
                image = {sensrum}
                texto ={"información de medidas de aceleración enviada por un bolo sensor en una vaca Jersey"}
                />
                <Paragraph
                texto = {<><center><p>Fuente: Identification of the Rumination in Cattle Using Support Vector Machines with Motion-Sensitive Bolus Sensors,
                   Hamilton et al. 2019</p></center></>}
                />
                <Paragraph
                texto = {<>Finalmente, existe una tercera categoría que es la data semi-estructurada. La principal característica es que tiene algo de estructura,
                 pero no toda la estructura requerida para ajustarse a los requerimientos de una base de datos.  La data semi-estructurada posee algunos 
                 atributos para separar varias entidades dentro de la data. Algunos ejemplos son XML, JSON, Emails, NoSQL DBs, seguimiento de eventos, y páginas web
                 <a href="https://www.sisense.com/blog/understanding-structured-and-unstructured-data/"><u>(De Couto, 2020).</u></a></>}
                />
            </SubChapter>

            <SubChapter id = "raw">
                <SubTitle title = "1.3-  Clasificación de los datos según su naturaleza"/>
                <Paragraph 
                texto= "De acuerdo con su naturaleza los datos pueden ser nominales, ordinales, de intervalos y de escala de radio. Es muy importante entender esta clasificación ya que de acuerdo con esta, sabremos que tipo de análisis es el mas indicado para los datos recogidos.  Por ejemplo datos como raza o estado reproductivo, no podran analizarse de igual manera a los datos de produccion. En la tabla que se presenta a continuación se resume esta clasificación y se presentan varios ejemplos aplicados a nuestro sector pecuario."/>


                <ImagePlus
                image = {tipos_datos}
                texto= {"Tipos de datos de acuerdo con su naturaleza"}
                />
                <Paragraph
                texto = {<><center><p> Tabla adaptada del libro Excel data analysis (Guerrero, H., 2019).</p></center></>}
                />
                <Paragraph 
                texto = {<><p>La siguiente tabla que se presenta en la parte inferior está adapta del portal 
                <a href="https://www.questionpro.com/blog/nominal-ordinal-interval-ratio/"><u>QuestionPro</u> </a> y presenta de manera resumida las
                 forma de medición de las cuatro escalas (nominal, ordinal, intervalos y radios). Como se puede observar los datos de tipo radio, 
                 son los que permiten un mayor análisis y son tal vez los de mayor importancia para nosotros (conversión alimenticia, peso final, 
                 producción de huevos por galpón etc.).  Esto no significa que sean los mas importantes, ya que existe información clave para el 
                 sistema productivo que se obtiene de otro tipo de datos, sin embargo, mucha de la información de producción pecuaria pertenece a 
                 esta categoría lo cual nos permite realizar un gran numero de mediciones como veremos posteriormente. Estas clasificaciones las
                  trabajaremos en mas detalle cuando desarrollemos los ejemplos prácticos.</p></>} />
                
                <ImagePlus 
                image ={datos_summary}
                texto = {"Resumen de clasificación de los datos y su forma de medición"}
                />
            </SubChapter>
            <ReferencesBlock 
            references = {[<a href="https://www.statista.com/statistics-glossary/definition/351/raw_data/"><u>Defición de Datos Crudos</u>. Enciclopedia Statista. Consultado en Mayo 2021 </a>,<a href="https://www.sisense.com/blog/understanding-structured-and-unstructured-data/"><u>Entendiendo la data estructurada y desestructurada. </u>De Couto Carmen, 2020 en Sisense.com.  Consultado Mayo 2021</a>,<a href="https://www.questionpro.com/blog/nominal-ordinal-interval-ratio/"><u>Niveles de Medición </u>en questionpro.com. Consultado Mayo 2021 </a>,<a href="https://www.oracle.com/ca-en/data-science/what-is-data-science.html"> <u>Qué es la Ciencia de los Datos?</u> Oracle. Consultado en Mayo 2021.</a>,<a href="https://ischoolonline.berkeley.edu/data-science/what-is-data-science/"><u>Qué es la Ciencia de los Datos?</u> Berkeley School of Information.  Consultado en Mayo 2021.</a>,<a href="https://www.displayr.com/what-is-raw-data/"><u>Qué son los Datos Crudos? </u> Bock Tim, 2018 en displayr.com </a>

            ]}
            />
      </main>
      </ChapterLayout>
</div>

    );

};
export default Post;