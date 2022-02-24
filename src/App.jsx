import logo from 'logo.svg';
import 'Styles/style.css';
import "Styles/utilities.css";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Analisis from "Pages/Analisis.jsx";
import Blog from "Pages/Blog.jsx"
import MainLayout from 'Layouts/MainLayout';
import Home from 'Pages/Home';
import Contenidos from 'Pages/Contenidos';
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
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
