import React from "react";
import Form from "Components/Form";
import Image from "Components/Image";
import Chapters from "Components/Chapters";
import Homehead from "Components/HomeHead";
import cultivo from "Media/photos_web/cultivo.jpg";


const Home = () => {
  return (
    <div>
      <body className = "container" >
        
          <Homehead background={cultivo} titulo={[<h1 style={{color:"yellow"}}>Ciencia de Datos para el campo </h1>,<br/>,
          <h2 style={{color:"yellow"}} >Una Introducción con herramientas útiles para entender la ciencia de los datos </h2>]}/>
     
          
          <section id = "contents" class = "container">

          <Chapters/>
          </section>
          <section id = "contact" class = "container" >
      <div class = "row">
           
      </div>
      <div className = "column" >
        <Form/>
        </div>
        
        </section>
      </body>
    </div>
  );
};

export default Home;
