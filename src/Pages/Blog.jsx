import React from "react";
import ChapterHead from "Components/ChapterHead";
import ContentsTable from "Components/ContentsTable";
import SubChapter from "Components/SubChapter";
import Paragraph from "Components/Paragraph";
import SubTitle from "Components/SubTitle";
import ImagePlus from "Components/ImagePlus";
import ReferencesBlock from "Components/ReferencesBlock";
import cambodia from "Media/images/cambodia.jpeg";
import laptop from "Media/images/laptop.png"
const Blog =()=>{
    return(

        <div>
            <body>
            <ChapterHead
          titulo="Porque los profesionales del campo necesitamos saber de ciencia de datos"
          background={cambodia}
        />
                <main> 

                <section id = "tabla">
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
              
            ]}
          />
        </section >

<section id = "introduccion">
                <SubChapter>

                <SubTitle title="Introducción" />
            <Paragraph texto="Este proyecto ha sido desarrollado pensando en aquellos estudiantes y profesionales de las ciencias del campo a quienes les interesa conocer un poco mas sobre los datos que se recogen diaria o periódicamente en una empresa del sector y desean ampliar la información que de estos datos se puede obtener para una mejor toma de decisiones." />
            
            <Paragraph texto="El mundo de hoy se maneja con los datos que se obtienen y el sector agropecuario no es la excepción.  Ya sea que usted trabaje en una empresa agrícola o como clínico en un consultorio.  Los datos se generan constantemente, por ejemplo los registros de peso corporal y consumo de alimentos, los registros de reproducción, las historias clínicas son tal vez los mas comunes. Estos registros usualmente se observan de una manera unidireccional, sin embargo, la integración de estos y su adecuado análisis puede generar perspectivas diferentes para el proceso de toma de decisiones y es aquí donde la ciencia de datos entra en juego." />
            <Paragraph texto="Con las adecuadas técnicas, con unos datos de buena calidad y con tecnologías no muy sofisticadas, podemos calcular con precisión el peso esperado de un lote de ganado de ceba en un determinado periódo de tiempo, o podemos explicar las causas de porque no se alcanzo el mismo peso.  También podemos calcular la probabilidad de alcanzar las metas de postura en un lote de ponedoras o evaluar si las mejoras implementadas en el manejo o instalaciones de los animales han traído una mejora significativa en producción. La ciencia de los datos está aquí para ayudarnos a evaluar estrategias y tomar decisiones. " />

            <Paragraph texto="Con esta introduccion al manejo de la ciencia de los datos no se pretende reemplazar los conocimientos básicos de matemáticas ni estadística que deben ser adquiridos durante el pregrado, pero si busca partir de estos conocimientos (si ya no recuerda encontrará links para revisar los conceptos) y generardar una visión mas amplia  sobre la utilidad de los registros y datos ya que a veces se subutilizan por desconocimiento.  El proyecto ha sido creado de una manera practica, con ejemplos reales y con el objetivo de que el lector pueda de manera sencilla entender la aplicabilidad y sobre todo desarrolle las habilidades para poner en practica los contenidos. Ya sea que usted sea experimentado en la materia puede seleccionar el módulo que desee revisar o si quiere aprender puede comenzar desde el principio y familiarizarse con los conceptos teóricos.  "/>

            <ImagePlus
              image={laptop}
             
              max_zoom="60%"
            />
        
          </SubChapter>
          </section>




                </main>
            </body>
        
        </div>

    );
}
export default Blog;