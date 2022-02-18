import logo from 'logo.svg';
import 'Styles/style.css';
import "Styles/utilities.css";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Analisis from "Pages/Analisis.jsx";
import MainLayout from 'Layouts/MainLayout';
//importe todo lo nceesario a app los estilos, el router y las paginas
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="Analisis" element={<Analisis/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
