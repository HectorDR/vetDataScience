import 'Styles/style.css';
import "Styles/utilities.css";
import {BrowserRouter} from "react-router-dom";
// import { Auth0Provider} from '@auth0/auth0-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import WebRoutes from 'Components/WebRoutes';
//importe todo lo nceesario a app los estilos, el router y las paginas
function App() {
  return (
    // <Auth0Provider
    //   domain={process.env.REACT_APP_AUTH0DOMAIN}
    //   clientId={process.env.REACT_APP_AUTH0CLIENTID}
    //   redirectUri={window.location.origin}>
      <HelmetProvider>   
      <Helmet>
          <title>Análisis de datos para profesionales del campo</title>
          <meta name="description"
          content="Ciencia de datos para profesionales y estudiantes del sector pecuario"/>
          <meta name='keywords'
          content='analisis de datos, estadistica, excel,  datos, data, Science, Veterinaria, Zootecnia, Probabilidad, Análisis, Pecuario, 
          data analysis, statistic, probabilidades, probabilities, excel analysis toolpack, herramienta de analisis de excel, analisis de varianza, ANAVA, 
          ANOVA, linear regression, regresion lineal, dummy variables, variables cuantitativas, variables cualitativas, tipos de datos, distribucion normal, 
          campana de gauss, gaussian, poisson, distribucion de poisson, bernoulli, distribucion binomial, covarianza, correlacion, medidas de dispersion, 
          desviacion estandar, varianza, medidas de tendencia central, media, mediana , moda, diagrama de dispersion, permutaciones, combinaciones'
          />
      </Helmet> 
      <BrowserRouter>
        <WebRoutes/>
      </BrowserRouter>
      </HelmetProvider>  
      // </Auth0Provider>
      )
  }
export default App;
