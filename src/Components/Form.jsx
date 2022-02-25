import React from 'react'
import emailjs from "emailjs-com"
import { useRef, useState } from 'react'
const Form = () => {

  // manejo del formulario y uso de emailjs
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm("service_a1kmgcs","contact_form",form.current,"user_2wnxcOTl5tX9IWJkRPZnv")
    .then((result) => {
      console.log("salio bien!");
      setEnviado(true);
    }, (error) => {
      console.log("Salio mal :c!");
    });
  }

  // efecto de formulario
  const [enviado,setEnviado] = useState(false);

  return (
    
    <div id= "contact" className="contact flex-columns flex-reverse">
      {enviado==false?<div className="column-2 bg-light">
        <h2>Si desea ponerse en contacto</h2>
        <form ref={form} onSubmit={sendEmail} className="callback-form">
          <div className="form-control">
            <label for="name"></label>
            <input type="text" name="user_name" id="name"
            placeholder="Su nombre"/>
          </div>
          <div className="form-control">
            <label for="email"></label>
            <input type="email" name="user_email" id="email"
            placeholder="Su correo electronico"/>
          </div>
          <div className="form-control">
            <label for="comment"></label>
            <input type="text" name="message" id="comment"
            placeholder="Escriba su comentario"/>
          </div>
          <input type="submit" value="Enviar" id= "submit"
          className="btn"/>
        </form>
      </div>:<div className="column-2 bg-light">
        <h2>Mensaje enviado!</h2>
        </div>}
    </div>
  )
}

export default Form