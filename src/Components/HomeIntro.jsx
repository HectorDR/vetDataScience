import React from 'react'

const HomeIntro = () => {
  return (
    <div className='home_intro'>
        <div className='intro_title'>
            <h1>Análisis de Datos para el Campo</h1> 
            <h3>Una Introducción con herramientas aplicadas para entender el análisis de datos</h3>
        </div><br/> 
            <h3 className='intro_subtitle'>Bienvenidos a esta Introducción al análisis de datos para Medicos Veterinarios y Zootecnistas</h3>
         <div className='intro_card'>
          <p>Esta página ha sido creada pensando en los profesionales y estudiantes del sector pecuario que tienen la necesidad 
            de trabajar con datos. Existe hoy en día la necesidad de entender los datos que se generan al interior y al exterior
            de la empresa pecuaria e ir un poco mas allá en la interpretación de los mismos para convertirlos en información
            valiosa. Es por ello, que si usted es un profesional Medico Veterinario, Zootecnista, estudiante o alguien
            interesado en el sector pecuario, que aqui va a encontrar algunas bases fundamentales sobre el manejo de los
            datos que se recojen en el diario vivir de nuestras empresas y muchos ejemplos aplicados que le permitiran
            entender su utilidad y aplicabilidad. A la vez espero que pueda implementarlos en su proceso de toma de
            decisiones.<br/>Los temas a tratar son los siguientes...</p>
            <img src={`https://images.unsplash.com/photo-1651438034554-9d35cbec79ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}/>
         </div>
    </div>
  )
}

export default HomeIntro