import React from 'react'

const BarraDeNavegacion = () => {
  return (
    <div id="navbar" className="navbar top">
        <h1 className= "logo">
        <span className="text-primary"><i className= "fas fa-book-open"></i>Blog de Ciencia de Datos </span> para el campo</h1>
    
    <nav>
    <ul>
      <li><a href="index.html">Bienvenidos</a></li>
      <li><a href="blog.html">Acerca de</a></li>
      <li><a href="contenidos.html">Contenidos</a></li>
      <li><a href="index.html#team">Blogger</a></li>
      <li><a href="index.html#contact">Contacto</a></li>
    </ul>
    </nav>
    </div>
  )
}

export default BarraDeNavegacion;