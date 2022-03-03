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
import Probabilidades from "Pages/Probabilidades";
import DeniedPage from 'Pages/DeniedPage';

//importe todo lo nceesario a app los estilos, el router y las paginas
function App() {
  return (
    <Auth0Provider
      domain='dev-sl45luzg.us.auth0.com'
      clientId='zjMjAj68SnvB0C1It8bNAtXJlaDUJZI0'
      redirectUri={window.location.origin}>
      <BrowserRouter>
        <Routes>
          <Route path="/AccesoDenegado" element={<DeniedPage/>}/>
            <Route path="/" element={<MainLayout/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="Analisis" element={<Analisis/>}/>
              <Route path="Blog" element={<Blog/>}/>
              <Route path="Contenidos" element={<Contenidos/>}/>
              <Route path="Post" element={<Post/>}/>
              <Route path="Examples" element={<Examples/>}/>
              <Route path="Probabilidades" element={<Probabilidades/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
      </Auth0Provider>
  );
}

export default App;
