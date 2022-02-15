import logo from 'logo.svg';
import 'Styles/style.css';
import "Styles/utilities.css";
import {BrowserRouter} from "react-router-dom";
import Analisis from "Pages/Analisis.jsx";
//importe todo lo nceesario a app los estilos, el router y las paginas
function App() {
  return (
    <BrowserRouter>
    <Analisis/>
    </BrowserRouter>
  );
}

export default App;
