import 'Styles/style.css';
import "Styles/utilities.css";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Analisis from "Pages/Analisis.jsx";
import Blog from "Pages/Blog.jsx"
import MainLayout from 'Layouts/MainLayout';
import Home from 'Pages/Home';
import Contenidos from 'Pages/Contenidos';
import Post from "Pages/Post";
import Examples from "Pages/Examples";
import Probabilidades from "Pages/Probabilidades";
import ProbabilidadesII from "Pages/ProbabilidadesII";
//importe todo lo nceesario a app los estilos, el router y las paginas
function App() {
  return (
      <BrowserRouter>
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

            </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
