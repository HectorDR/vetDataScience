import React from "react";
import ChapterHead from "Components/ChapterHead";
import ContentsTable from "Components/ContentsTable";
import SubChapter from "Components/SubChapter";
import Paragraph from "Components/Paragraph";
import SubTitle from "Components/SubTitle";
import ImagePlus from "Components/ImagePlus";

import aves from "Media/photos_web/aves_sueltas.jpg";
import laptop from "Media/images/laptop.png"
import excel from "Media/images/excel.jpg"
import cat from "Media/images/cat_mac.jpg"
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

            ]}
          />
</section>
<section id = "introduccion">
                <SubChapter>

                <SubTitle title="Introducción" />
            <Paragraph texto="Este proyecto ha sido desarrollado pensando en aquellos estudiantes y profesionales de las ciencias del campo a quienes les interesa conocer un poco mas sobre los datos que se recogen diaria o periódicamente en una empresa del sector y desean ampliar la información que de estos datos se puede obtener para una mejor toma de decisiones." />
            
            <Paragraph texto="El mundo de hoy se maneja con los datos que se obtienen y el sector agropecuario no es la excepción.  Ya sea que usted trabaje en una empresa agrícola o como clínico en un consultorio.  Los datos se generan constantemente, por ejemplo los registros de peso corporal y consumo de alimentos, los registros de reproducción, las historias clínicas son tal vez los mas comunes. Estos registros usualmente se observan de una manera unidireccional, sin embargo, la integración de estos y su adecuado análisis puede generar perspectivas diferentes para el proceso de toma de decisiones y es aquí donde la ciencia de datos entra en juego." />
            <Paragraph texto="Con las adecuadas técnicas, con unos datos de buena calidad y con tecnologías no muy sofisticadas, podemos calcular con precisión el peso esperado de un lote de ganado de ceba en un determinado periódo de tiempo, o podemos explicar las causas de porque no se alcanzo el mismo peso.  También podemos calcular la probabilidad de alcanzar las metas de postura en un lote de ponedoras o evaluar si las mejoras implementadas en el manejo o instalaciones de los animales han traído una mejora significativa en producción. La ciencia de los datos está aquí para ayudarnos a evaluar estrategias y tomar decisiones. " />

            <Paragraph texto="Con esta introduccion al manejo de la ciencia de los datos no se pretende reemplazar los conocimientos básicos de matemáticas ni estadística que deben ser adquiridos durante el pregrado, pero si busca partir de estos conocimientos (si ya no recuerda encontrará links para revisar los conceptos) y generardar una visión mas amplia  sobre la utilidad de los registros y datos ya que a veces se subutilizan por desconocimiento.  El proyecto ha sido creado de una manera práctica, con ejemplos reales y con el objetivo de que el lector pueda de manera sencilla entender la aplicabilidad y sobre todo desarrolle las habilidades para poner en practica los contenidos. Ya sea que usted sea experimentado en la materia puede seleccionar el módulo que desee revisar o si quiere aprender puede comenzar desde el principio y familiarizarse con los conceptos teóricos.  "/>

            <ImagePlus
              image={laptop}
             width = "30%"
              max_zoom="30%"
            />
        
          </SubChapter>
          </section>

<section id = "objetivos">
<SubChapter>
<SubTitle title="Objetivos" />  

        <p> El principal objetivo de este proyecto es entregar herramientas de uso sencillo pero eficaces a la hora de realizar análisis de datos aplicados a nivel de una empresa pecuaria.</p>
       
        <p>Simultáneamente desarrollar una comunidad de  interesados en la ciencia de los datos en la que podamos desde este ambiente aprender en comunidad, ayudar a resolver problemas específicos y generar alternativas de optimización en el proceso de toma de decisiones. </p>
<br />
        <ImagePlus
              image={excel}   
              width = "25%"         
              max_zoom="25%"
            />

<SubTitle title = "Requisitos" />

<Paragraph texto = "los módulos que se presentan están diseñados de manera que cualquier persona con conocimientos básicos de matemática y estadística (o deseos de aprender) pueda beneficiarse de ellos.  Ojalá esté familiarizado con la hoja de cálculo Microsoft® Excel®, pues esta será la principal herramienta para desarrollar las bases.  Es importante anotar que, aunque Excel es muy útil, es tan solo una de las herramientas de las que se dispone.  Sobra decir que algo de tiempo y dedicación semanal, una buena conexión a internet y un laptop o un computador de mesa son necesarios."/>
</SubChapter>
</section>

<section id = "metodologia">
<SubChapter>
<SubTitle title = "Metodología"/>
<Paragraph texto = " los contenidos esta desarrollados de una manera práctica.  Los conceptos básicos teóricos son mencionados, sin embargo, si el lector desea profundizar o aprender mas sobre el tema se sugiere que investigue por su cuenta para lo cual se proveen enlaces a otros sitios web.  Cada concepto que se presenta tiene una aplicabilidad práctica y se ilustra con ejemplos del sector pecuario. Los datos son presentados en la hoja de cálculo y se muestra paso por paso como calcular los resultados en algunos casos se incluyen videos tutoriales. "/>

<Paragraph texto = " Es importante mencionar que aunque los contenidos están desarrollados en la hoja de cálculo Excel, esta no es la única herramienta disponible, al contrario. Los invito a explorar por su propia cuenta otras herramientas y a compartirlas en esta página.  La idea es aportar y que todos podamos aprender de todos." />

<Paragraph texto = "Dada mi formación académica y profesional en el sector pecuario la mayoría de los ejemplos están dados para este sector. Lectores de otros campos de formación me sabrán excusar.  Sin embargo, esta es una página dinámica y en desarrollo.  La idea es que aquellos que estén interesados en el tema de la ciencia de los datos puedan aportar nuevo material para explorar y analizar.  Debo aclarar que ningún animal ha resultado herido o dañado al recoger los datos.  La información con la que trabajo es o bien obtenida de fuentes secundarias o ha sido trabajada con datos simulados." />

<ImagePlus
              image={cat}   
              width = "30%"         
              max_zoom="30%"
            />
</SubChapter>

</section>


<section id = "autor">
<SubChapter>
<SubTitle title="Acerca del Autor" />
<Paragraph texto = "Hector Delgado: Medico Veterinario Zootecnista, con Maestría en Administracion de Empresas y Doctorado en Ciencia Animal (ciencia de datos en ganado lechero), con mas de 25 años de experiencia en el sector pecuario trabajando en múltiples frentes como la academia, la empresa y el sector no gubernamental trabajando en temas de bienestar animal y ciencia de datos, pero sobre todo alquien con mucho interés en aprender, compartir y construir conocimiento.  "/>
<ImagePlus
              image={hector}            
              max_zoom="20%"
            />
</SubChapter>



</section>

                </main>
            </body>
        
        </div>

    );
}
export default Blog;