import React from 'react'
import ChapterCard from './ChapterCard'
import data from "Media/images/data1.png"
import dataprocess from "Media/images/data-quality.jpg"
import probability from "Media/images/probability.jpg"
import analisisgrafica from "Media/images/analisisgrafica.png"
import resolver from "Media/images/resolver.png"
import datatools from "Media/images/datatools.jpg"
const Chapters = () => {
  return (
    <div className='chapters'>
        <ChapterCard imagen={data} link = "Post" titulo="1- Introducción a la ciencia de los datos"/>
        <ChapterCard imagen={dataprocess} link = "Examples" titulo="2- Cuáles son los datos estructurados y como se deben alistar para su procesamiento."/>
        <ChapterCard imagen={probability} titulo="3- Que son las probabilidades y cómo nos pueden ayudar a tomar decisiones."/>
        <ChapterCard imagen={analisisgrafica} titulo="4- Como se distribuyen los datos y que análisis hacer de acuerdo a esto."/>
        <ChapterCard imagen={resolver} link = "Analisis" titulo="5- Herramientas de analisis inicial de los datos y estadística descriptiva"/>
        <ChapterCard imagen={datatools} titulo="6- Que herramientas podemos utilizar para comprobar la hipótesis?
        Cómo se interpretan los resultados?."/>
    </div>
  )
}

export default Chapters