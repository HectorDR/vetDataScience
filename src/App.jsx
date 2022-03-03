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
//importe todo lo nceesario a app los estilos, el router y las paginas
function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0DOMAIN}
      clientId={process.env.REACT_APP_AUTH0CLIENTID}
      redirectUri={window.location.origin}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute page={<MainLayout/>}/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="Analisis" element={<Analisis/>}/>
            <Route path="Blog" element={<Blog/>}/>
            <Route path="Contenidos" element={<Contenidos/>}/>
            <Route path="Post" element={<Post/>}/>
            <Route path="Examples" element={<Examples/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
