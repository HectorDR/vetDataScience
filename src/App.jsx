import 'Styles/style.css';
import "Styles/utilities.css";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import { Auth0Provider} from '@auth0/auth0-react';
import Analisis from "Pages/Analisis.jsx";
import Blog from "Pages/Blog.jsx"
import MainLayout from 'Layouts/MainLayout';
import Home from 'Pages/Home';
import Contenidos from 'Pages/Contenidos';
import Post from "Pages/Post";
import Examples from "Pages/Examples";
import ProtectedRoute from 'Components/ProtectedRoute';
import Probabilidades from "Pages/Probabilidades";
import ProbabilidadesII from "Pages/ProbabilidadesII";
import ProbabilidadesIII from "Pages/ProbabilidadesIII";
import Distribuciones from 'Pages/Distribuciones';
import DistribucionesII from 'Pages/DistribucionesII';
import AnalisisII from "Pages/AnalisisII.jsx";
import Anava from "Pages/Anava.jsx";
import AnavaII from "Pages/AnavaII.jsx";
import Referencias from 'Pages/Referencias';
import { Helmet, HelmetProvider } from 'react-helmet-async';
//importe todo lo nceesario a app los estilos, el router y las paginas
function App() {
  return (
      <HelmetProvider>   
      <BrowserRouter>
      <Helmet>
          <title>VetDataScience</title>
          <meta name="description"
          content="Ciencia de datos para profesionales y estudiantes del sector pecuario"/>
          <meta name='keywords'
          content='Ciencia, Datos, Data, Science, Veterinaria, Zootecnia, Probabilidad, Análisis, Pecuario'
          />
      </Helmet> 
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="Analisis" element={<Analisis/>}/>
            <Route path="Blog" element={<Blog/>}/>
            <Route path="Contenidos" element={<Contenidos/>}/>
            <Route path="Post" element={<Post/>}/>
            <Route path="Examples" element={<Examples/>}/>
            <Route path="Probabilidades" element={<Probabilidades/>}/>
            <Route path="ProbabilidadesII" element={<ProbabilidadesII/>}/>
            <Route path="ProbabilidadesIII" element={<ProbabilidadesIII/>}/>
            <Route path="Distribuciones" element={<Distribuciones/>}/>
            <Route path = "DistribucionesII" element = {<DistribucionesII/>}></Route>
            <Route path = "AnalisisII" element = {<AnalisisII/>}></Route>
            <Route path = "Anava" element = {<Anava/>}></Route>
            <Route path = "AnavaII" element = {<AnavaII/>}></Route>
            <Route path = "Referencias" element = {<Referencias/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </HelmetProvider>  
      )
  }
export default App;
