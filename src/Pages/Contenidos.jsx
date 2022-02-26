import React from "react";
import ChapterHead from "Components/ChapterHead";
import ContentsTable from "Components/ContentsTable";
import perrito from "Media/photos_web/perrito.jpeg"


const Contenidos =()=>{
    return(
<div >

<body id="home" >
        <ChapterHead
          titulo="Tabla de Contenidos"
          background={perrito}
        />

    <main>
          <ContentsTable
            contenidos={[
              {
                titulo: "I- Introducción",
                link: "Blog#introduccion",
              },
              {
                titulo: "II- Objetivos y Requisitos",
                link: "Blog#objetivos",
              },
              {
                titulo:
                  "III- Metodología",
                link: "Blog#metodologia",
              },
              
              {
                titulo:
                  "IV- Acerca del Autor",
                link: "Blog#autor",
              },

            ]}
          />




    <section id = "Analisis" className="container bg-light">
        <h1>5- Estadística descriptiva y análisis inicial de los datos</h1>
          <ContentsTable
            contenidos={[
              {
                titulo: "5.1- Presentación de datos categóricos nominales",
                link: "Analisis#categoricos",
              },
              {
                titulo: "5.2- Presentación de datos cuantitativos",
                link: "Analisis#cuantitativos",
              },
              {
                titulo:
                  "5.3- Visualización de variables cuantitativas y categóricas",
                link: "Analisis#visualizacion",
              },
              { titulo: "5.4- Estadística descriptiva", link: "Analisis#descriptiva" },
              {
                titulo: "5.4.1- Medidas de tendencia central",
                link: "Analisis#central",
              },
              { titulo: "5.4.2- Medidas de dispersión", link: "Analisis#dispersion" },
              {
                titulo: "5.5- Ejemplo de estadística descriptiva",
                link: "Analisis#ejemplo",
              },        
              {
                titulo: "5.6- Relaciones entre variables",
                link: "Analisis#covarianza",
              },
            ]}
          />
        </section >






</main>
</body>
</div>

    );
};

export default Contenidos