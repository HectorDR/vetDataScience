import React from "react";
import ChapterHead from "Components/ChapterHead";
import ContentsTable from "Components/ContentsTable";
import SubChapter from "Components/SubChapter";
import Paragraph from "Components/Paragraph";
import SubTitle from "Components/SubTitle";
import ImagePlus from "Components/ImagePlus";

import aves from "Media/photos_web/aves_sueltas.jpg";

import cerdo from "Media/photos_web/cerdo_barro.jpeg"
import hector from "Media/images/hector.jpeg"


const Blog =()=>{
    return(

        <div>
            <body>
            <ChapterHead
          titulo="Porque los profesionales del campo necesitamos saber de ciencia de datos"
          background={aves}
        />
                <main> 
                  <section id = "tabla" className = "container">
          <ContentsTable
            contenidos={[
              {
                titulo: "I- Introducción",
                link: "#introduccion",
              },
              {
                titulo: "II- Objetivos y Requisitos",
                link: "#objetivos",
              },
              {
                titulo:
                  "III- Metodología",
                link: "#metodologia",
              },
              
              {
                titulo:
                  "IV- Acerca del Autor",
                link: "#autor",
              },
              {
                titulo:
                  "V- Agradecimientos",
                link: "#agradecimientos",
              },
            ]}
          />
</section>
<section id = "introduccion">
                <SubChapter>

                <SubTitle title="Introducción" />
            <Paragraph texto="Este proyecto ha sido desarrollado pensando en aquellos estudiantes y profesionales de las ciencias del campo a quienes les interesa conocer un poco mas sobre los datos que se recogen diaria o periódicamente en una empresa del sector y desean ampliar la información que de estos datos se puede obtener para una mejor toma de decisiones." />
            
            <Paragraph texto="El mundo de hoy se maneja con los datos que se obtienen y el sector agropecuario no es la excepción.  Ya sea que usted trabaje en una empresa agrícola o como clínico en un consultorio.  Los datos se generan constantemente, por ejemplo los registros de peso corporal y consumo de alimentos, los registros de reproducción, las historias clínicas son tal vez los mas comunes. Estos registros usualmente se observan de una manera unidireccional, sin embargo, con la integración de estos y su adecuado análisis se pueden ampliar la visión duranta el proceso de toma de decisiones." />
            <Paragraph texto="Por ejemplo, con unos datos de buena calidad y con una simple hoja de cálcula, podemos calcular con precisión el intervalo peso esperado de un lote de ganado de ceba en un determinado periódo de tiempo, o podemos identificar razones por las cuales no se alcanzó el peso esperado.  También podemos calcular la probabilidad de alcanzar las metas de postura en un lote de ponedoras o evaluar si las mejoras implementadas en el manejo o instalaciones de los animales han traído una mejora significativa en producción. La ciencia de los datos está aquí para ayudarnos a evaluar estrategias y tomar decisiones. " />

            <Paragraph texto="Con esta introduccion al análisis de datos no se pretende reemplazar los conocimientos básicos de matemáticas ni estadística que deben ser adquiridos durante el pregrado, pero si busca partir de estos conocimientos (si ya no los recuerda encontrará links para revisar los conceptos) ampliar la visión sobre la utilidad de los registros y datos ya que a veces se subutilizan por desconocimiento. "/>
            <Paragraph texto ="Finalmente, este proyecto ha sido creado de una manera práctica, con ejemplos reales y con el objetivo de que el lector pueda de manera sencilla entender la aplicabilidad y sobre todo que mediante el auto aprendizaje desarrolle las habilidades para poner en practica los contenidos. Ya sea que usted sea experimentado en la materia puede seleccionar el módulo que desee revisar o si quiere aprender puede comenzar desde el principio y familiarizarse con los conceptos teóricos.  "/>
          
          </SubChapter>
          </section>

<section id = "objetivos">
<SubChapter>
<SubTitle title="Objetivos" />  

        <p> El principal objetivo de este proyecto es entregar herramientas de uso sencillo pero eficaces a la hora de realizar análisis de datos aplicados a nivel de una empresa pecuaria.</p>
       
        <p>Simultáneamente desarrollar una comunidad de  interesados en el análisis y la ciencia de los datos en la que podamos desde este ambiente aprender en comunidad, ayudar a resolver problemas específicos y generar alternativas de optimización en el proceso de toma de decisiones. </p>

        

<SubTitle title = "Requisitos" />

<Paragraph texto = "los módulos que se presentan están diseñados de manera que cualquier persona con conocimientos básicos en matemáticas y estadística (o deseos de aprender) pueda beneficiarse de ellos.  Ojalá esté familiarizado con la hoja de cálculo Microsoft® Excel®, pues esta será la principal herramienta para desarrollar los ejercicios.  Es importante anotar que, aunque Excel es muy útil, es tan solo una de las herramientas de las que se dispone.  Sobra decir que algo de tiempo y dedicación semanal, una buena conexión a internet y un laptop o un computador de mesa son necesarios."/>
</SubChapter>
</section>

<section id = "metodologia">
<SubChapter>
<SubTitle title = "Metodología"/>
<Paragraph texto = " los contenidos esta desarrollados de una manera práctica.  Los conceptos básicos teóricos son mencionados, sin embargo, si el lector desea profundizar o aprender mas sobre el tema se sugiere que investigue por su cuenta para lo cual se proveen enlaces a otros sitios web.  Cada concepto que se presenta tiene una aplicabilidad práctica y se ilustra con ejemplos del sector pecuario. Los datos son presentados en la hoja de cálculo y se muestra paso por paso como calcular los resultados en algunos casos se incluyen videos tutoriales y un archivo para descargar. "/>


<Paragraph texto = "Dada mi formación académica y profesional en el sector pecuario  y cumpliendo con el objetivo principal la mayoría de los ejemplos están dados para nuestro sector. Lectores de otros campos de formación son totalmente bienvenidos y me sabrán excusar. Sin embargo, esta es una página dinámica y en desarrollo.  La idea es que aquellos que estén interesados en el tema de la ciencia de los datos puedan aportar nuevo material para explorar y analizar.  Debo aclarar que ningún animal ha resultado herido o dañado al recoger los datos.  La información con la que trabajo es o bien obtenida de fuentes secundarias o ha sido trabajada con datos simulados (números aleatorios)." />

<ImagePlus
              image={cerdo}   
              width = "20%"         
              max_zoom="20%"
            />
</SubChapter>

</section>


<section id = "autor">
<SubChapter>
<SubTitle title="Acerca del Autor" />

<Paragraph texto = {<><p><a href="https://www.linkedin.com/in/hector-delgado-9860b1246/" target="_blank"><b><u>Hector Delgado</u></b></a>: Medico Veterinario Zootecnista, con Maestría en Administracion de Empresas y Doctorado en Ciencia Animal (ciencia de datos en ganado lechero), con mas de 25 años de experiencia en el sector pecuario trabajando en múltiples frentes como la academia, la empresa y el sector no gubernamental trabajando en temas de bienestar animal y ciencia de datos, pero sobre todo alquien con mucho interés en aprender, compartir y construir conocimiento. 
                     </p></>}/>

<ImagePlus
              image={hector}            
              max_zoom="20%"
            />
</SubChapter>



</section>

<section id = "agradecimientos">
<SubChapter>
<SubTitle title="Agradecimientos" />
<Paragraph texto = "Quiero agradecer especialmente a Robert Davis porque sin su apoyo no hubiera podido desarrollar este proyecto. A Victor Cabrera quien en gran medida me inspiró a desarrollar este trabajo y sobre todo creyó en mí. A Liliana Fadul por todas las horas en que me escuchó pacientemente hablar sobre este proyecto y por su tiempo ayudandome a revisarlo. A Roger Cue quien alguna vez me dijo 'Si usted quiere aprender, yo quiero enseñarle'. A César Serrano porque siempre me ha demostrado que es posible soñar y convertir los sueños en realidad.  A Johan Sebastian Mazo por las horas de trabajo desarrollando los componentes de React y finalmente a todos los estudiantes e investigadores de las ciencias agropecuarias por su esfuerzo y dedicación para que con sus aportes el campo se fortalezca y desarrolle cada día mas y mejor. "/>

</SubChapter>



</section>


                </main>
            </body>
        
        </div>

    );
}
export default Blog;