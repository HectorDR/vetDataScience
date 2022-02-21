import React from 'react'

const Form = () => {
  return (
    <div id= "contact" className="contact flex-columns flex-reverse">
      <div className="column-2 bg-light">
        <h2>Si desea ponerse en contacto</h2>
        <form action="" className="callback-form">
          <div className="form-control">
            <label for="name"></label>
            <input type="text" name="name" id="name"
            placeholder="Su nombre"/>
          </div>
          <div className="form-control">
            <label for="email"></label>
            <input type="email" name="email" id="email"
            placeholder="Su correo electronico"/>
          </div>
          <div className="form-control">
            <label for="comment"></label>
            <input type="text" name="comment" id="comment"
            placeholder="Escriba su comentario"/>
          </div>
          <input type="submit" value="Enviar" id= "submit"
          className="btn"/>
        </form>
      </div>
    </div>
  )
}

export default Form