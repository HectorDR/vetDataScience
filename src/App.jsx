import 'Styles/style.css';
import "Styles/utilities.css";
import {BrowserRouter} from "react-router-dom";
import { Auth0Provider} from '@auth0/auth0-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import WebRoutes from 'Components/WebRoutes';
//importe todo lo nceesario a app los estilos, el router y las paginas
function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0DOMAIN}
      clientId={process.env.REACT_APP_AUTH0CLIENTID}
      redirectUri={window.location.origin}>
      <HelmetProvider>   
      <Helmet>
          <title>VetDataScience</title>
          <meta name="description"
          content="Ciencia de datos para profesionales y estudiantes del sector pecuario"/>
          <meta name='keywords'
          content='Ciencia, Datos, Data, Science, Veterinaria, Zootecnia, Probabilidad, Análisis, Pecuario'
          />
      </Helmet> 
      <BrowserRouter>
        <WebRoutes/>
      </BrowserRouter>
      </HelmetProvider>  
      </Auth0Provider>
      )
  }
export default App;
