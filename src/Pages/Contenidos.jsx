import React from "react";
import ChapterHead from "Components/ChapterHead";
import ContentsTable from "Components/ContentsTable";
import perrito from "Media/photos_web/perrito.jpeg"
import { HashLink } from "@xzar90/react-router-hash-link";

const Contenidos =()=>{
    return(
<div id="home" >
        <ChapterHead
          titulo="Tabla de Contenidos"
          background={perrito}
        />

    <main>
      <section id = "Blog" className = "container bg-light">
      <HashLink smooth to={"/Blog"}><h1>Acerca de este proyecto</h1></HashLink>
      
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
<HashLink smooth to={"/Post"}><h1>1- Introducción al análisis de los datos</h1></HashLink> 

          <ContentsTable
            contenidos={[
              {
                titulo: "1.1- Qué es el análisis y la ciencia de los datos",
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
        <HashLink smooth to={"/Examples"}><h1>2- Ejemplos prácticos para manejar los datos estructurados</h1></HashLink> 
        
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
        <HashLink smooth to={"/Probabilidades"}><h1>3- Principios generales de las probabilidades</h1></HashLink> 
     
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
                        link: "ProbabilidadesIII#general"}

                    ]}/>


        </section>

        <section id = "distribuciones" className = "container bg-light">
        <HashLink smooth to={"/Distribuciones"}><h1>4- Cómo se distribuyen los datos y cual es su utilidad</h1></HashLink> 
          
                    <ContentsTable contenidos ={[
                       { titulo:"4.1-¿Qué es la distribucion de una variable?",
                        link: "Distribuciones#definicion"},
                        { titulo:"4.2- Veamos algunos términos importantes",
                        link: "Distribuciones#glosario"},
                        { titulo:"4.3- Distribuciones discretas",
                        link: "Distribuciones#discretas"},
                        { titulo:"4.3.1- Distribuciones discretas - Uniforme",
                        link: "Distribuciones#discretas"},
                        { titulo:"4.3.2- Distribuciones discretas - Bernoulli",
                        link: "Distribuciones#bernoulli"},
                        { titulo:"4.3.3- Distribuciones discretas - Binomial",
                        link: "Distribuciones#binomial"},
                        { titulo:"4.3.3.1- Distribucion Binomial en Excel",
                        link: "Distribuciones#binexcel"},
                        { titulo:"4.3.4- Distribucion discretas - Poisson",
                        link: "Distribuciones#poisson"},
                        { titulo:"4.4- Distribuciones continuas",
                        link: "DistribucionesII#continuas"},
                        { titulo:"4.4.1- Distribuciones continuas - normal",
                        link: "DistribucionesII#normal"},
                        { titulo:"4.4.2- Distribuciones continuas - normal estandarizada",
                        link: "DistribucionesII#normal-estandar"},
                        { titulo:"4.4.3- Distribuciones continuas- t-Student ",
                        link: "DistribucionesII#t-student"},
                        { titulo:"4.4.4- Distribuciones continuas- Chi-Cuadrado ",
                        link: "DistribucionesII#chi-cuadrado"},
                        { titulo:"4.5- Teorema central del límite",
                        link: "DistribucionesII#teorema"}
                    ]}/>
                </section>

                


        <section id = "Analisis" className="container bg-light">
        <HashLink smooth to={"/Analisis"}><h1>5- Estadística descriptiva y análisis inicial de los datos</h1></HashLink> 
        
          <ContentsTable
            contenidos={[
              {titulo: "5.1- Presentación de datos categóricos nominales",
                link: "Analisis#categoricos",},
              {titulo: "5.2- Presentación de datos cuantitativos",
                link: "Analisis#cuantitativos"},
              { titulo: "5.3- Visualización de variables cuantitativas y categóricas",
                link: "Analisis#visualizacion",
              },
              { titulo: "5.4- Estadística descriptiva", 
              link: "Analisis#descriptiva" },
              { titulo: "5.4.1- Medidas de tendencia central",
                link: "Analisis#central", },
              { titulo: "5.4.2- Medidas de dispersión", link: "Analisis#dispersion" },
              {titulo: "5.5- Ejemplo de estadística descriptiva",
                link: "Analisis#ejemplo",},        
              {titulo: "5.6- Relaciones entre variables",
                link: "Analisis#covarianza",
              },
            ]}
          />
        </section >

        <section id = "AnalisisII" className = "container bg-light">
        <HashLink smooth to={"/AnalisisII"}><h1>6- Pruebas de hipótesis e intervalos</h1></HashLink> 
        
    <ContentsTable
            contenidos={[
              {titulo: "6.1- Pruebas de hipótesis",
                link: "AnalisisII#hipotesis",  },
              {titulo: "6.2- Tipos de pruebas- una o dos colas ",
                link: "AnalisisII#tests",  },
              { titulo: "6.3- Intervalos de confianza - varianza conocida",
                link: "AnalisisII#intervalo", },
              { titulo: "6.3.1- Intervalos de confianza - varianza conocida", 
              link: "AnalisisII#intervalo" },
              { titulo: "6.3.2- Intervalos de confianza - varianza desconocida",
                link: "AnalisisII#intervalo2", },
             
              {titulo: "6.4- Intervalo de confianza para la diferencia de dos medias en poblaciones normales independientes",
                link: "AnalisisII#intervalo3",
              },
              { titulo: "6.5- Intervalo de confianza para la diferencia de dos medias dependientes",
                link: "AnalisisII#intervalo4",
              },
            ]}
          />
        </section>

        <section id = "Anava" className = "container bg-light">
        <HashLink smooth to={"/Anava"}><h1>7- Análisis de Varianza (ANAVA)</h1></HashLink> 
      
    <ContentsTable
            contenidos={[
              {titulo: "7.1-Que es el análisis de varianza (ANAVA)",
                link: "Anava#anava",  },
              {titulo: "7.2- El ANAVA de un solo factor",
                link: "Anava#unianova",  },
              { titulo: "7.3- El ANAVA de dos factores sin replicación",
                link: "Anava#twoanova", },
              { titulo: "7.4- El ANAVA de dos factores con replicación", 
              link: "Anava#twoanovarep" },
              { titulo: "7.5- La regresión lineal",
                link: "Anava#linearreg", },
              { titulo: "7.6- La regresión lineal simple en Excel", 
              link: "AnavaII#reglinex" },
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
          </section>
 
</main>
</div>

    );
};

export default Contenidos