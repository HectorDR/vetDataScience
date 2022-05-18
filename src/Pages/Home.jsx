import React from "react";
import Form from "Components/Form";
import Chapters from "Components/Chapters";
import Homehead from "Components/HomeHead";
import cultivo from "Media/photos_web/cultivo.jpg";
import home_video from "Media/videos/home_video.mp4"
import HomeCover from "Components/HomeCover";
const Home = () => {
 
  return (
    <div>
      <HomeCover video={home_video}/>
          {/* <Homehead background={cultivo} titulo={<><h1 style={{color:"yellow"}}>Análisis de Datos para el Campo </h1>,<br/>,
          <h2 style={{color:"yellow"}} >Una Introducción con herramientas aplicadas para entender el análisis de datos </h2></>}/> */}
          <section id ="introduccion" className = "container">
           <center> <h1>Bienvenidos a esta Introducción al análisis de datos para Medicos Veterinarios y Zootecnistas</h1></center>
           <br />
          <p>Esta página ha sido creada pensando en los profesionales y estudiantes del sector pecuario que tienen la necesidad de trabajar con datos. Existe hoy en día la necesidad de entender los datos que se generan al interior y al exterior de la empresa pecuaria e ir un poco mas allá en la interpretación de los mismos para convertirlos en información valiosa. Es por ello, que si usted es un profesional Medico Veterinario, Zootecnista, estudiante o alguien interesado en el sector pecuario, que aqui va a encontrar algunas bases fundamentales sobre el manejo de los datos que se recojen en el diario vivir de nuestras empresas y muchos ejemplos aplicados que le permitiran entender su utilidad y aplicabilidad. A la vez espero que pueda implementarlos en su proceso de toma de decisiones.  Los temas a tratar son los siguientes:</p>
          </section>

          <section id = "contents">
            <Chapters/>
          </section>
          <section id = "contact" style={{margin : "2vh 0"}}>
            <Form/>
          </section>
    </div>
  );
};

export default Home;
