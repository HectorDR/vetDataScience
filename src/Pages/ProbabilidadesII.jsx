import React from "react";
import ContentsTable from "Components/ContentsTable";
import SubChapter from "Components/SubChapter";
import Paragraph from "Components/Paragraph";
import SubTitle from "Components/SubTitle";
import { HashLink } from "@xzar90/react-router-hash-link"; 
import ImagePlus from "Components/ImagePlus";
import ChapterLayout from "Layouts/ChapterLayout";
import ReferencesBlock from "Components/ReferencesBlock";
import bufalas from "Media/photos_web/bufalosII.JPG";
import probcond from "Media/photos_probs/prob_cond.png";
import total from "Media/photos_probs/total.png"
import mult from "Media/photos_probs/mult.png"
import multII from "Media/photos_probs/multII.png"
import bayes from "Media/photos_probs/bayes.png"
import bayesII from "Media/photos_probs/bayesII.png"
import {Helmet} from "react-helmet-async";
const ProbabilidadesII =()=>{
    return(
        <ChapterLayout chapter_title ="3- Principios generales de probabilidades"
        chapter_image= {bufalas}>
<div>
      <Helmet>
  <title>3- Principios generales de probabilidades - reglas</title>
  <meta name="description" content="Principios generales de probabilidades - reglas"/>
  <meta name='keywords'
  content='probabilidad condicional,
  probabilidad total, regla de la adicion, regla de la multiplicacion, teorema de bayes'/>
    </Helmet>
    <main>
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
                        link: "#condicional"},
                        { titulo:"3.9- Regla de la probabilidad total",
                        link: "#total"},
                        { titulo:"3.10- Regla de la adición",
                        link: "#adicion"},
                        { titulo:"3.11- Regla de la multiplicación",
                        link: "#multiplicacion"},
                        { titulo:"3.12- El teorema de bayes ",
                        link: "#bayes"},
                        { titulo:"3.13- Probabilidades en genética cualitativa",
                        link: "ProbabilidadesIII#general"}

                    ]}/>
                </section>
                    

            <SubChapter id = "condicional">
                <SubTitle title ="3.8- Qué es una probabilidad condicional"/>
                <Paragraph texto = {<><p>La probabilidad condicional es la probabilidad de que un evento suceda dado que otro evento ya ocurrió. Si el evento en el que estamos interesados es A y el evento B es conocido, la probabilidad condicional se denota como P(A|B) es decir la probabilidad de A dado B ya ocurrió. Esta probabilidad se da cuando dos eventos son dependientes de manera que la P(A ∩ B) = P(A) * P (B).  Si los eventos son independientes entonces la P(A|B) = P(A). </p></>}/>
                <center><h4>Fórmula de la probabilidad condicional</h4></center>
                <ImagePlus 
                width = "20%"
                max_zoom = "40%"
                image = {probcond}
                texto = "Probabilidad condicional"
                />  
                <Paragraph texto ="Donde P(A│B) representa la probabilidad de A dado que B ha ocurrido. P(A∩B) Representa la probabilidad de la intersección y P(B) Representa la probabilidad del evento B.  "/>
                <Paragraph texto = {<><p> <b>Solo es de interés el resultado si se cumple B y la P(B) debe ser mayor que 0</b>. Únicamente los elementos de la intersección podrían hacer que se cumpla B, por tanto deben haber elementos en común. Ojo aquí el orden es importante, la P(A|B) no es igual que la P(B|A) <a href="https://definicion.de/probabilidad-condicional/" target="_blank"> <u>(Porto y Gardey, 2019)</u></a>. Es importante aclarar que en la probabilidad condicional no necesariamente puede haber una relación temporal o causal entre los dos componentes, esto quiere decir que A puede producirse antes que B, después o al mismo tiempo y que A puede ser el origen de B o viceversa o no tener ningún tipo de relación." </p></>} />

                <Paragraph texto = "Por ejemplo, un investigador toma una muestra de 100 fincas de una región de la costa colombiana.  De esas 100 fincas 80 tienen producción ganadera y 45 tienen producción ganadera y reforestadora a la vez (doble propósito) y solo 20 son de orientación exclusivamente reforestadoras.  ¿Cual será la probabilidad de encontrar una finca que tenga actividad  reforestadora cuando en principio ha sido seleccionada una finca de orientación ganadera?"/>
                <Paragraph texto ={[<ul>
                    <center><li>Espacio muestral: 100 fincas de la costa colombiana</li></center>
                    <center><li>P(A ∩ B)= 45/100</li></center>
                    <center><li>P(B) = 80/100</li></center>
                    <br />
                    <center><li><b>P(A|B)= 0.45/0.80 = 56%</b> </li></center>
                </ul>, <br /> ]}/>
                <p><center><b>Entonces el investigador tiene  un 56% de probabilidades de seleccionar una finca ganadera que también tenga orientación reforestadora.</b></center></p>

            </SubChapter>
            <SubChapter id ="total">
                <SubTitle title ="3.9- Regla de la probabilidad total"/>
                <Paragraph texto = {["La regla o teorema de la probabilidad total permite calcular la probabilidad de un evento a partir de varias probabilidades condicionadas. Por ejemplo cuando buscamos la probabilidad de encontrar un animal afectado con mastitis clínica (MC) en un conjunto de animales que tienen una característica determinada como son vacas con altos niveles de células somáticas -CCS- en la leche y su complemento que son las vacas con bajos niveles de células somáticas en leche.", <br/> , "Entonces para cualquier conjunto de A (probabilidad de A o seleccionar un animal afectado con MC), estaría dado por la unión de varios conjuntos mutualmente excluyentes B1, B2 ... Bn (animales con elevado número de CCS + animales con bajo número de CCS), su probabilidad es igual a la siguiente suma:"]}/>
                <br />
                <ImagePlus 
                width = "50%"
                max_zoom = "70%"
                image = {total}
                texto = "Probabilidad total"
                />  
                <br />
                <Paragraph texto = {<><p>Donde P(A) es la probabilidad de que ocurra el evento A, P(A│B<sub>1</sub>) es la probabilidad condicional de A dado que B<sub>1</sub>ha ocurrido, P(B<sub>1</sub>) es la probabilidad de que B<sub>1</sub> ocurra. P(A│B<sub>n</sub>) es la probabilidad condicional de A dado que B<sub>n</sub>ha ocurrido. P(B<sub>n</sub>) es la probabilidad de que B<sub>n</sub> ocurra.</p></>}/>
                <Paragraph texto ="Ejemplo, en un estudio epidemiológico se encuentra que de una muestra aleatoria de 100 hatos, al realizar el conteo de células somáticas en leche, el 60% tienen niveles adecuados de CCS (≦4), mientras que el 40% restantes tiene niveles superiores a 4 por tanto muy elevados. De los hatos con adecuados niveles de CCS la prevalencia de Mastitis Clínica es del 15%, mientras que en los hatos con altos niveles de CCS la mastitis clínica esta presente en un 33%.  ¿Si seleccionamos al azar en estos hatos cual es la probabilidad de escoger un animal positivo para mastitis clínica?"/>

                <Paragraph texto ={[
                    <ul>
                      <center><li>Probabilidad vaca con MC = P (mastitis|bajo SCS) * P(bajo SCS) + P(mastisis|alto SCS) * P(alto SCS)</li></center>  
                      <br />
                      <center><li>Probabilidad vaca con MC= (0.15*0.60)+(0.33*0.40)</li></center>
                      <br />
                      <center><li><b>Probabilidad vaca con MC= 0.09+0.132= 0.22</b></li></center>
                    </ul>,
                    <br />,
                    <center>Entonces, hay una probabilidad del 22% de que el un animal seleccionado dentro de los 100 hatos de la muetra esté afectado con mastitis clínica.</center>
                   
                ]}/>
            </SubChapter>

            <SubChapter id = "adicion">
                <SubTitle title ="3.10- Regla de la adición de las probabilidades"/>
                <Paragraph texto = "Esta regla calcula la probabilidad de la unión de un evento A y un evento B y está basada en la probabilidad de los conjuntos individuales, calculando el tamaño de la unión y descontando el tamaño de la intersección."/>

            <Paragraph texto ={[ <br/>, <h3> <center>P(A∪B) =P(A) +P(B) -P(A∩B)</center></h3>, <br/>, <center> <b> Donde P(A∪B) = Probabilidad de la Unión y P(A∩B) = Probabilidad de la Intersección.</b></center>]}/>
            <br />
            <Paragraph texto = {["Ejemplo, en un análisis de casos en una clínica veterinaria se encontró que el 15% de los pacientes caninos que atendieron consulta el año anterior eran hipertensos. El 6% de los pacientes fueron pacientes con fallo renal y el 3% de los casos atendidos presentaron ambas situacion (hipertensión y falla renal).  ¿Que probabilidad existe de que se seleccione un paciente que sea hipertenso o con fallo renal?", <b/>, <ul>
                <center><li>P(Hipertenso ∪ Fallo Renal) = 0.15 + 0.06 – 0.03</li></center>
                <center><li><b>P(Hipertenso ∪ Fallo Renal) = 0.18%</b></li></center> </ul>, <br/>,"Entonces la probabilidad de encontrar un paciente ya sea hipertenso o con fallo renal en análisis es del 18%."
           ]}/>

            </SubChapter>
        <SubChapter id = "multiplicacion">
           <SubTitle title = "3.11- Regla de la multiplicación de las probabilidades"/>
           <Paragraph texto = "Esta regla nos permite encontrar la probabilidad de que ocurra el evento A y el evento B.  Para la regla de la multiplicación existen dos casos, el primero se da si los eventos son dependientes y el segundo cuando los eventos son independientes.  Veamos entonces como se diferencian:"/>
           <SubTitle title ="3.11.1- Eventos dependientes"/>

           <Paragraph texto ={[ "La regla de la multiplicación para eventos dependientes se da cuando los eventos están relacionados entre sí. La fórmula esta definida de la siguiente manera:", <h3> <center> P(A∩B)=P(A|B)*P(B)</center></h3>, <br/>, "Donde la probabilidad esta dada por la probabilidad de A dado que B ocurrió y multiplicado por la probabilidad de B.", <br/>,"Por ejemplo, si voy a sacar dos novillas de un corral donde hay 4 blancas, 5 pardas y 2 negras, cual es la probabilidad de que la segunda novilla sea negra sabiendo que la primera también fue negra (no hay reemplazos dentro del corral).", <br/>, "El espacio muestral en este caso sería de: 4 novillas blancas + 5 novillas pardas +2 novillas negras = 11 novillas, entonces,"]}/>
           <br />
           <ImagePlus 
                width = "30%"
                max_zoom = "70%"
                image = {mult}
                texto = "Regla de la multiplicación, eventos dependientes "
                />  
            <Paragraph texto = "En la primera sacada hay dos novillas negras de un total de 11 novillas.  En la segunda hay una de un total de 10 novillas, entonces, la posibilidad de que salgan los dos animales negros en primer y segundo lugar es apenas del 1.8%. "/>

            <SubTitle title = "3.11.2- Eventos independientes"/>
            <Paragraph texto = {["En el segundo caso de la regla de la multiplicación, los eventos son independientes cuando la ocurrencia de uno de ellos no afecta la ocurrencia del otro. la fórmula se expresa de la siguiente manera:", <br/>, <h3><center>P(A∪B)=P(A)*P(B)</center></h3>,<b/>, <br/>, <center><b>Donde la Probabilidad está dada por la probabilidad de A multiplicada por la probabilidad de B</b></center> ,<br/>,"Por ejemplo, en una finca hay 100 novillas de las cuales 35 son Holstein. De las 100 novillas 75 han sido inseminadas por primera vez. El hecho de que la novilla sea Holstein no tiene nada que ver con que la novilla haya sido inseminada o no. Ahora nos interesa saber,cuál es la probabilidad que una de las novillas Holstein haya sido inseminada?"]}/>

            <ImagePlus 
                width = "30%"
                max_zoom = "70%"
                image = {multII}
                texto = "Regla de la multiplicación, eventos independientes "
                />  
            <Paragraph texto = "Entonces, La probabilidad de seleccionar una novilla Holstein que haya sido inseminada dentro de la totalidad de las 100 novillas es del 26%. "/>
        </SubChapter>

        {/* <SubChapter id = "bayes">
        <SubTitle title ="3.12- El teorema de Bayes"/>
           <Paragraph texto = {<><p>El teorema de Bayes es utilizado para calcular la probabilidad de un suceso, teniendo información que de antemano se conoce sobre ese suceso <a href="https://economipedia.com/definiciones/teorema-de-bayes.html" target = "_blank"><u>(Lopez,2018)</u></a>. Es de mucha utilidad para ayudarnos a encontrar una relación causal entre dos eventos, es decir nos ayuda a buscar argumentos mas razonables acerca de que evento puede causar el otro.</p></>}/>
           <br />
           <center><h4>Forma simple del teorema de Bayes</h4></center>
           <ImagePlus 
                width = "25%"
                max_zoom = "70%"
                image = {bayes}
                texto = "teorema de bayes "
                />  
            <p><center><b>Donde A y B son eventos y B ≠ 0. P(A│B) es la probabilidad de A dado que ha ocurrido el evento B y P(B|A) es la probabilidad de B dado que ha ocurrido el evento A. </b></center></p>  
            <br />
            <Paragraph texto = "Por ejemplo, tenemos una finca lechera de alta producción donde todos los animales han sido genotipificados.  Revisando los genotipos encontramos que el 68% de los animales son de alta producción y dentro de este grupo de alta producción el 26% tienen alta resistencia a Mastitis.  De igual manera revisamos los genotipos para alta resistencia a mastitis y encontramos que el 22% del total de los animales de la finca lechera cumplen con esta característica.  Quisieramos saber, de los animales con alta resistencia a mastitis en que porcentaje tambien son de alta producción? "/>
            <Paragraph texto ={[ "Entonces tenemos que: ", <ul> <b>
                <li>A: animales de alta producción= 68% </li>
              <li>B: animales de alta resistencia a mastitis= 22%</li>
               <li>(B|A): animales de alta resistencia a mastitis dado que son de alta producción: 26%</li>
               <li>(A|B): animales de alta producción dado que son resistentes a mastitis: ?</li></b>
            </ul>]}/>
            <ImagePlus 
                width = "30%"
                max_zoom = "70%"
                image = {bayesII}
                texto = "Probabilidad de que sea de alta producción dado que tiene alta resistencia a MC "
                />  
            <Paragraph texto = "Entonces la probabilidad de que un animal sea de alta producción dado que genotipicamente es de alta resistencia a mastitis es del 82%. Es un punto muy interesante para hacer selección de ganado, ya que la mayoría de productores siempre se enfocan solo en producción y no dan mucha importancia a la selección de caracteres por salud.  Pero eso es otro curso :)"/>
            </SubChapter> */}

            <ReferencesBlock 
         references={[
          "* Chao, L.L., 1978. Estadística para las ciencias administrativas. McGraw-Hill Interamericana.",
          <a href="https://economipedia.com/definiciones/teorema-de-bayes.html" target = "_blank">* López J., 2018, <u>Teorema de Bayes</u> en Economipedia.com </a> ,
          <a href="https://definicion.de/probabilidad-condicional/" target = "_blank">* Pérez Porto J. y Gardey A., 2021.
          <u>Definición de probabilidad condicional </u>,en portal defición.de </a>,

          "* Pfaffenberger, R.C. and Patterson, J.H., 1977. Statistical methods for business and economics. Homewood, IL: Richard D. Irwin.",
          
        ]}/>
</main>
</div>
        </ChapterLayout>
    );
};
export default ProbabilidadesII