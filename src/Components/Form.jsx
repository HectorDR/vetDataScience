import React from 'react'
import emailjs from "emailjs-com"
import { useRef, useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
const Form = () => {

  // manejo del formulario y uso de emailjs
  const form = useRef(null)
  const sendEmail = (e) => {
    e.preventDefault()
    // se envia todo lo que necesita el servicio de emailjs incluyendo la key que devuelve la recptcha
    // seria bueno meter todo esto en variables de entorno
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,"contact_form",form.current,process.env.REACT_APP_EMAILJS_USER_ID)
    .then((result) => {
      setEnviado(true);
    }, (error) => {
      console.log(error)
    });
  }
  // Estados formulario
  const [enviado,setEnviado] = useState(false);
  const [submitButton,setSubmitButton] = useState(false);
  const captcha = useRef()
  // manejo del captcha
  const captchaChange = () => {
    setSubmitButton(!submitButton)
  }


  return (
    
    <div id= "contact" className="contact flex-columns flex-reverse">
      {enviado==false?<div className="column-2 bg-light">
        <h2>Si desea ponerse en contacto</h2>
        <form onSubmit={sendEmail} ref={form} className="callback-form">
          <div className="form-control">
            <label htmlFor="user_name"></label>
            <input type="text" name="user_name" id="name" required
            placeholder="Su nombre" />
          </div>
          <div className="form-control">
            <label htmlFor="user_email"></label>
            <input type="email" name="user_email" id="email" required
            placeholder="Su correo electronico" />
          </div>
          <div className="form-control">
            <label htmlFor="comment"></label>
            <input type="text" name="message" id="comment" required
            placeholder="Escriba su comentario" />
          </div>
          {/* captcha de google que cambia de valor cuando es resolvida y ese valor se guarda en los valores del formulario */}
          {/* esta key tambien deberia ir en las variables de entorno */}
          <ReCAPTCHA
            ref={captcha}
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
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