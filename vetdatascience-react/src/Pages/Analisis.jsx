import React from 'react'
import BarraDeNavegacion from 'Components/BarraDeNavegacion';
import ChapterHead from 'Components/ChapterHead';
import caballos from "Media/images/caballos.jpg"
import ContentsTable from 'Components/ContentsTable';

const Analisis = () => {
  return (
    <div>
        <body id="home">
        <header className="hero blog">
          <BarraDeNavegacion/>
          <ChapterHead titulo="5- Estadística descriptiva y análisis inicial de los datos" background={caballos}/>
        </header>
          <main>
            <ContentsTable
            contenidos={[{titulo: "5.1- Presentación de datos categóricos nominales", link: "#categoricos"},
            {titulo: "5.2- Presentación de datos cuantitativos", link: "#cuantitativos"},
            {titulo: "5.3- Visualización de variables cuantitativas y categóricas", link: "#visualizacion"},
            {titulo: "5.4- Estadística descriptiva", link: "#descriptiva"},
            {titulo: "5.4.1- Medidas de tendencia central", link: "#central"},
            {titulo: "5.4.2- Medidas de dispersión", link: "#dispersion"},
            {titulo: "5.5- Relaciones entre variables", link: "#covarianza"},
          ]}
            />
          </main>
        </body>
    </div>
  )
}

export default Analisis;