import React from "react";
import Form from "Components/Form";
import Image from "Components/Image";
import Chapters from "Components/Chapters";
import Homehead from "Components/HomeHead";
import cultivo from "Media/photos_web/cultivo.jpg";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const {user, isAuthenticated} = useAuth0()
  return (
    <div>
      <body  >
        
          <Homehead background={cultivo} titulo={[<h1 style={{color:"yellow"}}>Ciencia de Datos para el campo </h1>,<br/>,
          <h2 style={{color:"yellow"}} >Una Introducción con herramientas útiles para entender la ciencia de los datos </h2>]}/>
     
          
          {isAuthenticated && 
          <div>
            <h1 >User Info</h1>
          <h1 >{user.name}</h1>
          <h2>{user.email}</h2>
          <img style={{width: "200px"}} src={user.picture}/>
          </div>}
          <section id = "contents" class = "container">
          <Chapters/>
          </section>
          <section id = "contact" class = "container" >
      <div class = "row">
           
      </div>
      <div className = "column container" >
        <Form/>
        </div>
        
        </section>
      </body>
    </div>
  );
};

export default Home;
