import React from "react";
import ContentsTable from "Components/ContentsTable";
import SubChapter from "Components/SubChapter";
import Paragraph from "Components/Paragraph";
import SubTitle from "Components/SubTitle";
import ImagePlus from "Components/ImagePlus";
import ChapterLayout from "Layouts/ChapterLayout";
import ReferencesBlock from "Components/ReferencesBlock";
import bufalas from "Media/photos_web/bufalosII.JPG";
import homo from "Media/photos_gen1/punnett_homo.png";
import hete from "Media/photos_gen1/punnet_het.png";
import synd from "Media/photos_gen1/punnett_syn.png";
import syndII from "Media/photos_gen1/punnett_synII.png"


const ProbabilidadesIII =()=>{
    return(
        <ChapterLayout chapter_title ="3- Principios generales de probabilidades"
        chapter_image= {bufalas}>
            
            <section id = "tabla" className = "container">
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
                        link: "#general"}

                    ]}/>
                </section>
            
                <SubChapter id = "general">
                    <SubTitle title = "Probabilidades en genética cualitativa"/>
                    <Paragraph texto = {["Este proyecto no pretende de ninguna manera convertirse en un curso de genética, ni epidmología ni ninguna otra rama de la MVZ.  Lo que se busca es mirar la aplicabilidad de las diferentes herramientas que tenemos a nuestro alcance para tomar decisiones, para este caso estamos revisando como podriamos utilizar las probabilidades.  En este último capítulo de probabilidades vamos a revisar un poquito de genética cualitativa. El material ha sido adaptado de el artículo ",<a href="http://www.holsteinfoundation.org/pdf_doc/workbooks/Gen_Sire_WKBK.pdf"><u>Understanding Genetics and the Sire Summaries.</u></a>, " de los manaules de la fundación Holstein."
                ]}/>
                <Paragraph texto= {["Recordemos que los genes ", <b>cualitativos</b>  ," son aquellos que son controlados por un par de genes donde un genotipo determinado resultara en el mismo fenotipo cada vez. Como ejemplo de ellos en ganado tenemos el sexo, el color del manto y la expresión de los cuernos. Ahora, los ", <b>alelos</b>  , " son las variantes del gene que se heredan  y van a determinar el fenotipo. En los cualitativos se hereda un alelo por cada padre. En los casos cualitativos (cuernos, manto), los alelos son etiquetados como dominantes o recesivos. Los caracteres dominantes serán expresados cuando al menos una versión del alelo dominante está presente.",<b> Recordemos que los alelos dominantes se expresan siempre en mayúscula y los recesivos en minúscula.</b>," Los animales heterocigotos para genes recesivos suelen ser llamados 'portadores' porque aunque no manifiestan el gen, sí lo portan y pueden transmitirlo a su camada. ", <br/>, "Entonces cuando se emparejan los alelos en un genotipo podemos tener:"]}/>

                <Paragraph texto = {[ <ul>
                    <center><li><h4>Homocigoto dominante: ambos alelos fueron heredados en su forma dominante "AA".</h4></li></center>
                    <center><li><h4>Homocigoto recesivo: ambos alelos fueron heredados en su forma recesiva "aa".</h4></li></center>
                    <center><li><h4>Heterocigoto: un alelo dominante fué heredado de un padre y un recesivo del otro "Aa".</h4></li></center>
                </ul>]}/>
                <Paragraph texto = {["La forma de cuantificar las probabilidades de las combinaciones geneticas de dos individuos que se aparean, se puede determinar por medio del ",  <b>cuadro de Punnett</b> , " (ver recuadro inferior). En el eje horizontal se lista la combinacion de genes del padre, y a la izquierda los de la madre. Se combina un valor de cada padre en la casilla correspondiente y mirando los resultados se calcula la probabilidad que tienen las crías de expresar el caracter en estudio. "]}/>      
                
                <Paragraph texto = {["Un ejemplo sencillo es utilizar los colores del manto del ganado Holstein. Tenemos homocigoto dominante para manto negro expresado como ", <b>BB</b> , " Heterocigoto para manto negro (portador rojo) ", <b>Bb</b>," y homocigoto recesivo para manto rojo ", <b>bb</b> ,". Si cruzamos dos animales homocigotos un Macho negro BB con hembra roja bb y miramos el cuadro de Punnet los resultados serían como se presentan en el recuadro inferior." ]}/>

                <center><h4>Macho manto negro BB con hembra manto bb</h4></center>
            
                <ImagePlus 
                width = "30%"
                max_zoom = "70%"
                image = {homo}
                texto = "Cuadro de Punnet para BB y bb"
                />  
            <Paragraph texto = "Revisando el cuadro y sumando las combinaciones entonces la probabilidad de que todos los animales sean fenotipicamente negros, pero todos serán portadores del manto rojo."/>

            <Paragraph texto = "Ahora, si una de hembra heterocigota portadoras del manto rojo (Bb) se cruza con un toro rojo (homocigoto recesivo bb) cual es la probabilidad de que las crías sean rojas? "/>

            <center><h4>Hembra manto negro Bb com macho manto rojo bb</h4></center>
            
            <ImagePlus 
                width = "30%"
                max_zoom = "70%"
                image = {hete}
                texto = "Cuadro de Punnet para Bb y bb"
                />  
            <Paragraph texto = "Entonces revisando el cuadro superior podemos deducir que la probabilidad de que tener animales expresando el manto rojo es de 2/4 = 50% y animales portadores del gen recesivo = 2/4 + 2/4 = 100%. En otras palabras fenotípicamente la posiblidad de expresar manto rojo es del 50% pero todos los animales serán portadores del gen homocigoto"/>

            <Paragraph texto = {["Analicemos una alteración genética a nivel de un solo gen como",  <a href="http://www.ainfo.inia.uy/digital/bitstream/item/14026/1/st-253-p163.pdf"><u>el Pie de Mula o Sindactilia</u></a>, ". Si seleccionamos un toro portador de esta malformación, en un lote de hembras de las cuales el 12% de las mismas tambien son portadoras de la misma condición, 1- cuál es la probabilidad que tienen las crias de este lote de expresar la condición?.  2- Que porcentaje de las crias tienen la probabilidad de portar el gen de la sindactilia? "]}/>

            <h4> <center>Toro heterecigoto Ss x vaca heterocigota Ss</center> </h4>

            <ImagePlus 
                width = "30%"
                max_zoom = "70%"
                image = {synd}
                texto = "Cuadro de Punnet para Ss y Ss"
                />  
            <Paragraph texto = "Entonces revisando el cuadro de Punnet la probabilidad de nacimientos  homocigotos (SS) es del = 1/4 = 25%. La probabilidad de animales portadores (Ss) = 2/4 = 50%. La probabilidad de animales homocigotos recesivos (condición sindactilia ss) = 1/4 =25%.  Teniendo en cuenta que el porcentaje de hembras portadoras del gen recesivo para sindactilia en el hato es del  12% entonces la probabilidad del total de las crias que pueden expresar la condición sindactilia en el hato es igual a  0.12 * 0.25 = 0.03 = 3%. Entonces existe un 3% de probabilidad de que si usamos ese toro en esa población de vacas, las crias van a expresar el gen."/>

            <h4> <center>Toro heterecigoto Ss x vaca homocigota SS</center> </h4>

            <ImagePlus 
                width = "30%"
                max_zoom = "70%"
                image = {syndII}
                texto = "Cuadro de Punnet para Ss y SS"
                />  
            <Paragraph texto = "La probabilidad de animales homocigotos dominantes (no portadores) seria de 2/4 = 50%. La probabilidad de animales heterocigotos (portadores) 2/4 = 50%. "/>
    
            
            <ReferencesBlock 
         references={[
          
          <a href="http://www.ainfo.inia.uy/digital/bitstream/item/14026/1/st-253-p163.pdf">* Federici M.T. et al., 2019, <u>* Identificación de bovinos Holando portadores de mutaciones asociadas al síndrome Sindactilia utilizando el panel Arbos1</u> en portal del Instituto Nacional de Investigación, Uruguay </a> ,
          <a href="http://www.holsteinfoundation.org/pdf_doc/workbooks/Gen_Sire_WKBK.pdf">* Holstein foundation, 2021.
          <u>Understanding Genetics and the Sire Summaries </u>,en PDF en línea </a>,

         
          
        ]}/>
            </SubChapter>
            </ChapterLayout>
        

    );
};
export default ProbabilidadesIII