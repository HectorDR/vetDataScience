import React from 'react'
import ChapterCard from './ChapterCard'
import data from "Media/images/data1.jpg"
import dataprocess from "Media/images/data2.jpg"
import probability from "Media/images/probability.jpg"
import analisisgrafica from "Media/images/analisisgrafica.jpg"
import datatools from "Media/images/datatools.jpg"
import datatools2 from "Media/images/datatools2.jpg"
import anava from "Media/images/anava.jpg"
const Chapters = () => {
  return (
    <div className='chapters'>
        <ChapterCard imagen={data} link = "Post" titulo="1- Introducción al análisis de los datos"/>
        <ChapterCard imagen={dataprocess} link = "Examples" titulo="2- Cuáles son los datos estructurados y como se deben alistar para su procesamiento"/>
        <ChapterCard imagen={probability} link = "Probabilidades" titulo="3- Que son las 
        probabilidades y cómo nos pueden ayudar a tomar decisiones"/>
        <ChapterCard imagen={analisisgrafica} link ="Distribuciones" titulo="4- Como se distribuyen los datos y que análisis hacer de acuerdo a esto"/>
        <ChapterCard imagen={datatools} link = "Analisis" titulo="5- Herramientas de analisis inicial de los datos y estadística descriptiva"/>
        <ChapterCard imagen={datatools2}  link ="AnalisisII"titulo="6- Que herramientas podemos utilizar para comprobar la hipótesis?
        Cómo se interpretan los resultados?"/>
        <ChapterCard imagen={anava}  link ="Anava"titulo="7- El Análisis de Varianza (ANAVA) y su aplicabilidad"/>
    </div>
  )
}

export default Chapters