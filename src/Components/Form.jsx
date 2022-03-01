import React from 'react'
import emailjs from "emailjs-com"
import { useRef, useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const Form = () => {

  // manejo del formulario y uso de emailjs
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm("service_a1kmgcs","contact_form",form.current,"user_2wnxcOTl5tX9IWJkRPZnv",{"g-recaptcha-response":captcha.current.getValue()})
    .then((result) => {
      console.log("salio bien!");
      setEnviado(true);
    }, (error) => {
      console.log("Salio mal :c!");
    });
  }
  // Estados formulario
  const [enviado,setEnviado] = useState(false);
  const [submitButton,setSubmitButton] = useState(false);
  const captcha = useRef()
  // manejo del captcha
  const captchaChange = () => {
    setSubmitButton(!submitButton)
    console.log(captcha.current.getValue())
  }


  return (
    
    <div id= "contact" className="contact flex-columns flex-reverse">
      {enviado==false?<div className="column-2 bg-light">
        <h2>Si desea ponerse en contacto</h2>
        <form ref={form} onSubmit={sendEmail} className="callback-form">
          <div className="form-control">
            <label for="name"></label>
            <input type="text" name="user_name" id="name" required
            placeholder="Su nombre"/>
          </div>
          <div className="form-control">
            <label for="email"></label>
            <input type="email" name="user_email" id="email" required
            placeholder="Su correo electronico"/>
          </div>
          <div className="form-control">
            <label for="comment"></label>
            <input type="text" name="message" id="comment" required
            placeholder="Escriba su comentario"/>
          </div>
          <ReCAPTCHA
            ref={captcha}
            sitekey='6Lf7WaoeAAAAAGggwAtkN889OMf-z2sYygpRc_nt'
            onChange={captchaChange}/>
          {submitButton === true?<input type="submit" value="Enviar" id= "submit"
          className="btn"/>:null}
        </form>
      </div>:<div className="column-2 bg-light">
        <h2>Mensaje enviado!</h2>
        </div>}
    </div>
  )
}

export default Form