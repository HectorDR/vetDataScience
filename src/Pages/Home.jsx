import React from "react";
import Form from "Components/Form";
import Chapters from "Components/Chapters";
import Homehead from "Components/HomeHead";
import cultivo from "Media/photos_web/cultivo.jpg"
const Home = () => {
  return (
    <div>
      <body>
          <Homehead background={cultivo} titulo={[<h1 style={{color:"whitesmoke"}}>Ciencia de Datos para el campo </h1>,<br/>,
          <h2 className = "text-tertiary">Una Introducción con herramientas útiles para entender la ciencia de los datos </h2>]}/>
          <Chapters/>
        <Form/>
      </body>
    </div>
  );
};

export default Home;
