import React from "react";
import ContentsTable from "Components/ContentsTable";
import SubChapter from "Components/SubChapter";
import Paragraph from "Components/Paragraph";
import SubTitle from "Components/SubTitle";
import ImageCorousel from "Components/ImageCorousel";
import ImagePlus from "Components/ImagePlus";
import ChapterLayout from "Layouts/ChapterLayout";
import ReferencesBlock from "Components/ReferencesBlock";
import bufalas from "Media/photos_web/bufalosII.JPG";
import probgral from "Media/photos_probs/prob_gral.png";
import probind from "Media/photos_probs/prob_ind.png";
import probind2 from "Media/photos_probs/prob_indII.png";
import probind3 from "Media/photos_probs/prob_indIII.png";
import probind4 from "Media/photos_probs/prob_indIV.png";
import probind5 from "Media/photos_probs/prob_indV.png";
import probdep from "Media/photos_probs/prob_dep.png";
import perm from "Media/photos_probs/perm.png";




const Probabilidades =()=>{
    return(
        <ChapterLayout chapter_title ="3- Principios generales de probabilidades"
        chapter_image= {bufalas}>
          
                <section id = "tabla" className = "container">
                    <ContentsTable contenidos ={[
                       { titulo:"3.1-¿Qué es una probabilidad y para que nos sirve?",
                        link: "#definicion"},
                        { titulo:"3.2- Veamos algunos términos importantes",
                        link: "#glosario"},
                        { titulo:"3.3- Probabilidad de eventos independientes",
                        link: "#independientes"},
                        { titulo:"3.4- Probabilidad de eventos dependientes",
                        link: "#dependientes"},
                        { titulo:"3.5- Que son las permutaciones y como se calculan",
                        link: "#permutaciones"},
                        { titulo:"3.6- Que son las variaciones y como se diferencian de las permutaciones",
                        link: "#variaciones"},
                        { titulo:"3.7- Que son las combinaciones",
                        link: "#combinaciones"},
                        { titulo:"3.8- que es una probabilidad condicional",
                        link: "ProbabilidadesII#condicional"},
                        { titulo:"3.9- Regla de la probabilidad total",
                        link: "ProbabilidadesII#total"},
                        { titulo:"3.10- Regla de la adición",
                        link: "ProbabilidadesII#adicion"},
                        { titulo:"3.11- Regla de la multiplicación",
                        link: "ProbabilidadesII#multiplicacion"},
                        { titulo:"3.12- El teorema de bayes ",
                        link: "Probabilidades#bayes"},
                        { titulo:"3.13- Probabilidades en genética cualitativa",
                        link: "Probgen"}

                    ]}/>
                </section>

            
                <SubChapter id ="definicion">
                    <SubTitle title = "3.1- ¿Qué es una probabilidad y para que nos sirve?"/>
                    <Paragraph texto = {["Podríamos definir una probabilidad como la medición de la posibilidad de que un evento ocurra en una situación cuyo resultado no se puede predecir hasta que sea observado (experimento aleatorio). La probabilidad se cuantifica como un número entre 0 y 1, donde 0 indica imposibilidad y 1 certitud",<a href="https://towardsdatascience.com/basic-probability-theory-and-statistics-3105ab637213"><u>(Radke, 2017)</u></a>,". Un ejemplo típico sería el sexo al nacer (XX o XY).  En teoría la probabilidad debería ser 50% de que nazca macho y 50% de que sea hembra.  Pero el clásico ejemplo de una probabilidad es tirar al tirar una moneda al aire cuales son las probabilidades de tener car o sello. En otras palabras la probabilidad es un cálculo matemático que evalúa las posibilidades de que una cosa suceda cuando interviene el azar",<a href="https://www.smartick.es/blog/matematicas/probabilidad-y-estadistica/probabilidad-que-es/"> <u>(Molina, 2021)</u> .</a> 

                    ]}/>
                    <Paragraph texto = "Conocer de probabilidades nos ayuda a entender cuales son las reales posibilidades de que un evento suceda de una manera calculada y evitar o reducir el riesgo.  Por ejemplo, suponga que se desea analizar si debe cambiar el técnico inseminador de sus vacas, para ello uno de los criterios mas importantes seria calcular el porcentaje de éxito del  técnico actual (animales preñados/animales inseminados) frente a los posibles candidatos. Además habria que ver el valor adicional que se estaría dispuesto a pagar por los servicios del nuevo técnico.  Si el técnico A tiene un record del 60%, el B tiene un record del 58% y el C del 65% seria fácil escoger el C.  Sin embargo, hay que tener aquí en cuenta otros factores, como las instalaciones de la finca, la calidad del semen utilizado y la condición de las vacas entre otras. Recapitulando entonces, la probabilidad es medir la posibilidad de que un evento ocurra. Para el evento aún no conocemos el resultado, pero basados en la información previa podemos determinar cual es la posibilidad real que tenemos de obtener el resultado esperado."/>

                   <center><h4>La fórmula general de la probabilidad es:</h4></center>
                   <ImagePlus 
                image = {probgral}
                texto = "Fórmula general de la probalidad"
                />  
                <Paragraph texto ="Donde la probabilidad de que ocurra el evento X es igual al número de veces en que ocurrió el evento que esperábamos (X) sobre el total de veces en que se intentó el ensayo o experimento (espacio muestral). "/>

            </SubChapter>

            <SubChapter id="glosario" >
              <SubTitle title ="3.2- Repasemos algunas definiciones"  />
              <br />
              <ul>
                    <li>-<b>Ensayo</b>: observar la ocurrencia del evento y registrar el resultado. Por ejemplo el nacimiento de una ternera y registrarlo o registrar en una incubadora la cantidad de pollitos machos y hembras nacidos en el mismo lote. </li>
                    <li>-<b>Experimento</b>: es un grupo de uno o múltiples ensayos. Por ejemplo, registrar el sexo de los terneros en 1000 nacimientos.  Recordemos que el experimento es aleatorio porque no podemos predecir el resultado hasta tanto no es observado.  </li>
                    <li>-<b>Probabilidad experimental:</b>la probabilidad que asignamos a un evento basados en el experimento conducido. Ejemplo, luego de haber registrado el sexo de 1000 terneros al nacer, basados en los resultados esperamos que haya un 50.4% de posibilidades de que sea hembra.</li>
                    <li>-<b>Valor esperado:</b>:  el resultado especificado que esperamos cuando conducimos un experimento.  En este caso el valor esperado del experimento será el número de hembras o machos que esperamos después de 1000 nacimientos. </li>
                    <li>-<b> El espacio muestral</b>es la cantidad de posibles resultados de un experimento aleatorio.  Es decir, la cantidad de veces en que corremos el experimento. </li>

              </ul>
            </SubChapter>
            <SubChapter id = "independientes">
            <SubTitle title ="3.3- Probabilidades de dos eventos independientes"/>
            <Paragraph texto = "Dos eventos son independientes si el resultado del segundo evento NO es afectado por el resultado del primer evento y viceversa. Si A y B son eventos independientes, la probabilidad de que el evento ocurra es el producto (multiplicación) de la probabilidad de cada evento individual. Donde la probabilidad de A no es igual a 0 y la probabilidad de B no es igual a 0."/>
            <center><h4>Función de dos eventos independientes</h4></center>
            <ImagePlus 
                image = {probind}
                texto = "Eventos independientes"
                />  
                <Paragraph texto =" Donde la probabilidad de A dado B es igual a la probabilidad de A y la probabilidad de B dado A es igual a la probabilidad de B "/>
                <Paragraph texto ="Para entender un poco mas las probabilidades independientes, vamos a desarrollar un ejemplo. Supongamos que tenemos dos corrales completamente separados y en cada corral hay cuatro vacas cada una de diferente color (blanca, negra, pintada, parda). Si vamos a seleccionar un animal de cada corral ¿Cual es la posibilidad de que salgan un animal blanco del corral A y un animal blanco del corral B?"/>

                <center><h4>Fórmula para calcular la probabilidad de dos eventos independientes</h4></center>
                <ImageCorousel
          width={"40%"}
          images={[
            {
              image: probind2,
              texto: "Donde la probabilidad de A y B es igual a la probabilidad de A multiplicada por  la probabilidad de B",
            },
            {
              image: probind3,
              texto: "Probabilidad para un animal blanco del corral A y un animal blanco del corral B",
            },
          ]}
        />
        <Paragraph texto = "En este caso el espacio muestral es 16, pues hay un total de 16 combinaciones posibles. Sin embargo, si vemos el cuadro la posibilidad de que en cada corral sea seleccionada la ternera blanca al tiempo, es 1 en 16 (cuadro verde).  En otras palabras la probabilidad de sacar una novilla blanca del corral 1 es 1/4 y del corral dos igualmente 1/4 entonces la probabilidad de que de ambos corrales se escoja un animal blanco  es 1/4 * 1/4 = 1/16"/>

        <Paragraph texto = "También nos puede interesar cuál es posibilidad de que el animal elegido del corral A sea de color blanco blanco, mientras que del segundo corral el animal elegido sea de cualquier color?" />
        <ImagePlus 
                image = {probind4}
                texto = "Un animal blanco del corral A y uno de cualquier color del B"
                />  
        <Paragraph texto ="Como vemos el espacio muestral es 16, si observamos el recuadro superior podemos deducir que la posibilidad de que el animal elegido en el primer corral sea blanco y el del segundo corral sea de cualquier color es 1/4 (espacios en azul). Matematicamente esto esta dado por  1/4 para un animal blanco en el primer corral y 4/4 para el corral dos, por tanto tendremos (1/4)*(4/4) = 4/16, es decir la probabilidad de A y B será de 1/4  "/>
        <Paragraph texto = "¿que posibilidad de que los animales elegidos en ambos corrales sean de cualquier color diferente al blanco?"/>
        <ImagePlus 
                image = {probind5}
                texto = "Obtener de ambos corrales animales de cualquier color excepto blanco"
                />  
        <Paragraph texto ="Si contamos las celdas amarillas del cuadro, podemos deducir que La probabilidad de escoger un animal de cualquier color diferente al blanco en ambos corrales es de 9/16. Entonces para cada corral la probabilidad de no seleccionar blanco es 3/4, por tanto tendremos (3/4)*(3/4) = 9/16, es decir la probabilidad de A y B será de 9/16.  "/>

        </SubChapter>
        <SubChapter id = "dependientes">
            <SubTitle title = "3.4- Probabilidades de dos eventos Dependientes"/>
            <Paragraph texto = "Dos eventos son dependientes si el resultado del primer evento afecta la probabilidad del segundo evento así que la probabilidad cambia. Sin embargo al igual que en las proabilidades independientes, la probabilidad de que ambos eventos ocurran es el producto de las probabilidades de los eventos individuales."/>
            <Paragraph texto = "Por ejemplo, estamos trabajando en otro corral y tenemos 10 novillas, 6 blancas y 4 negras. ¿Si la primera novilla en salir es negra, cual es la probabilidad de que la segunda novilla sea blanca? La probabilidad de que la primera novilla sea negra era 4/10 (cuatro novillas negras de un total de 10 novillas). Sin embargo, para el segundo animal ya las probabilidades han cambiado pues no tenemos 10 sino 9 animales en total, por tanto, el segundo evento es dependiente del primero. Como la primera novilla fue negra, todas las novillas blancas aun se encuentran en el corral, pero tenemos una novilla menos en total, entonces, la probabilidad de que la segunda novilla sea blanca es 6/9 o seis novillas blancas de un total de 9 novillas restantes "/>
            <ImagePlus 
                image = {probdep}
                texto = "Probabilidad de seleccionar de un total de 10 novillas primero una novilla negra, seguida de una novilla blanca"
                />  
             <Paragraph texto ="Como vemos entonces al multiplicar la probabilidad de que salga una novilla negra de primera y luego una novilla blanca será del 26%.  "/>
        </SubChapter>

        <SubChapter id = "permutaciones">
          <SubTitle title ="3.5- Que son las permutaciones y como se calculan"/>
          <Paragraph texto = {["Las permutaciones hacen referencia al número total de las diferentes posibles maneras en que podemos organizar un determinado número de elementos. Las permutaciones siempre se representan por los números factoriales. ", <b>En las permutaciones SI importa el orden ya que el intercambio entre dos elementos distintos genera una nueva permutación.  En las permutaciones NO se repiten los elementos, ya que de repetirse o ser iguales entre si, no se genera una nueva permutación.</b>, " En las permutaciones simpre tenemos igual número de espacios para igual número de elementos." ]} />
          <center><h4>La fórmula para representar las permutaciones es:</h4></center>
          <br />
          <center><h2> Pn = n!</h2></center>
          <Paragraph texto = "Donde la probabilidad de n esta dado por el n factorial. Por ejemplo, Tenemos 5 pesebreras y 5 caballos, de cuantas maneras posibles podemos organizar los caballos en el establo?.  Tenemos que acomodar un caballo por pesebrera (no hay repeticiones"/>
          <ImagePlus 
                image = {perm}
                texto = "Permutación para 5 caballos en 5 pesebreras"
                />  
          <Paragraph texto ="Entonces, existen 120 posibles maneras de organizar los caballos en los establos. Es importante tener en cuenta que en las permutaciones todos los elementos están organizados en el mismo espacio  y que no existen repeticiones (no se puede acomodar el mismo animal en dos pesebreras al mismo tiempo). Entonces en la permutación estamos organizando un numero n de elementos en un determinado numero de espacios y ni los elementos, ni los espacios son repetibles. En las permutaciones se organizan todos los elementos que hay disponibles."/>



        </SubChapter>


        </ChapterLayout>

    );
};
export default Probabilidades;