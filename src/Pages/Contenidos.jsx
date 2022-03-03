import React from "react";
import ChapterHead from "Components/ChapterHead";
import ContentsTable from "Components/ContentsTable";
import perrito from "Media/photos_web/perrito.jpeg"
import ReferencesBlock from "Components/ReferencesBlock";


const Contenidos =()=>{
    return(
<div >

<body id="home" >
        <ChapterHead
          titulo="Tabla de Contenidos"
          background={perrito}
        />

    <main>
      <section id = "Blog" className = "container bg-light">
        <h1>Acerca de este proyecto</h1>
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

</section>
<section id = "Post" className = "container bg-light">
<h1>1- Introducción a la ciencia de los datos</h1>
          <ContentsTable
            contenidos={[
              {
                titulo: "1.1- Qué es la ciencia de los datos",
                link: "Post#definicion",
              },
              {
                titulo: "1.2- Qué son los datos crudos",
                link: "Post#datos",
              },
              
              {
                titulo:
                  "1.3- Clasificación de los datos según su naturaleza",
                link: "Post#raw",
              },

            ]}
          />
        </section>

    

        <section id = "Examples" className = "container bg-light"> 
        <h1>2- Ejemplos prácticos para manejar los datos estructurados</h1>
        <ContentsTable
            contenidos={[
              {
                titulo: "2.1-Cómo crear campos con criterio de validación",
                link: "Examples#fechas",
              },
              {
                titulo: "2.2- Cómo crear listas desplegables",
                link: "Examples#listas",
              },              
              {
                titulo:
                  "2.3- Cómo manejar los datos cuantitativos",
                link: "Examples#cuantitativas",
              },
              {
                titulo:
                  "2.4- Listas dependientes de otras -Madre e hijas- ",
                link: "Examples#madrehija",
              },
              {
                titulo:
                  "2.5- Cómo solucionar problemas con datos importados o secundarios",
                link: "Examples#importados",
              },
              {
                titulo:
                  "2.5.1- Inconsistencia en los terminos para referirse a un evento",
                link: "Examples#importados",
              },
              {
                titulo:
                  "2.5.2- Revisar los datos duplicados en los registros",
                link: "Examples#duplicados",
              },
              {
                titulo:
                  "2.5.3- Que hacer cuando hacen falta datos en los registros",
                link: "Examples#missing",
              },
            ]}
          />

        </section>

        <section id = "Probabilidades" className ="container bg-light">
        <h1>3- Principios generales de las probabilidades</h1>
        <ContentsTable contenidos ={[
                       { titulo:"3.1-¿Qué es una probabilidad y para que nos sirve?",
                        link: "Probabilidades#definicion"},
                        { titulo:"3.2- Veamos algunos términos importantes",
                        link: "Probabilidades#glosario"},
                        { titulo:"3.3- Probabilidad de eventos independientes",
                        link: "Probabilidades#independientes"},
                        { titulo:"3.4- Probabilidad de eventos dependientes",
                        link: "Probabilidades#dependientes"},
                        { titulo:"3.5- Que son las permutaciones y como se calculan",
                        link: "Probabilidades#permutaciones"},
                        { titulo:"3.6- Que son las variaciones y como se diferencian de las permutaciones",
                        link: "Probabilidades#variaciones"},
                        { titulo:"3.7- Que son las combinaciones",
                        link: "Probabilidades#combinaciones"},
                        { titulo:"3.8- que es una probabilidad condicional",
                        link: "ProbabilidadesII#condicional"},
                        { titulo:"3.9- Regla de la probabilidad total",
                        link: "ProbabilidadesII#total"},
                        { titulo:"3.10- Regla de la adición",
                        link: "ProbabilidadesII#adicion"},
                        { titulo:"3.11- Regla de la multiplicación",
                        link: "ProbabilidadesII#multiplicacion"},
                        { titulo:"3.12- El teorema de bayes ",
                        link: "ProbabilidadesII#bayes"},
                        { titulo:"3.13- Probabilidades en genética cualitativa",
                        link: "Probgen"}

                    ]}/>


        </section>



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