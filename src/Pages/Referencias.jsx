import React from "react";

import ChapterLayout from "Layouts/ChapterLayout";
import ReferencesBlock from "Components/ReferencesBlock";
import bienestar from "Media/images/bienestar.jpeg"

const Referencias = () => {
    return (
      <ChapterLayout
        chapter_title="Referencias"
        chapter_image={bienestar}>
             <section id = "referencias" className = "container bg-light">
            <ReferencesBlock 
            references = {[
              <a href="https://towardsdatascience.com/type-i-type-ii-errors-5b7eaf493dab"> * Alterman R., 2020.<u> Type I and type II errors</u>. En Towards Data Science</a>,
              <a href="http://cidecame.uaeh.edu.mx/lcc/mapa/PROYECTO/libro19/71de_una_o_dos_colas.html">* Benitez Morales A. Consultado Junio 2021 , <u>Probabilidad y Estadistica -Apuntes Digitales-</u>, Universidad Autónoma del Estado Hidalgo. </a>,
            <a href="https://ischoolonline.berkeley.edu/data-science/what-is-data-science/">* Berkeley School of Information.  Consultado en Mayo 2021.<u>Qué es la Ciencia de los Datos?</u> </a>,<a href="https://www.displayr.com/what-is-raw-data/">* Bock Tim, 2018. Consultado en Junio 2021. <u>Qué son los Datos Crudos? </u> Portal displayr.com </a>,
            <a href="https://sphweb.bumc.bu.edu/otlt/mph-modules/bs/bs704_confidence_intervals/bs704_confidence_intervals5.html">* Boston University School of Public Health, 2017. <u> Confidence intervals for two independent outcomes, Continuous Outcome</u> </a>,
            <a href="https://sphweb.bumc.bu.edu/otlt/MPH-Modules/BS/BS704_Multivariable/BS704_Multivariable7.html">* Boston University School of Public Health. 2013.<u> Multivariable Regression. </u></a>,
            "* Chao, L.L., 1978. Estadística para las ciencias administrativas. McGraw-Hill Interamericana.",
            <a href="http://animsci.agrenv.mcgill.ca/StatisticalMethodsII/">* Cue R., 2019 <u> Course of Statistical MethodsII</u>. McGill University.</a> ,
            <a href="https://www.sisense.com/blog/understanding-structured-and-unstructured-data/">* De Couto Carmen, 2020.  Consultado Mayo 2021<u>Entendiendo la data estructurada y desestructurada. </u> en portal Sisense.com</a>,
            <a href= "https://psicolearning.files.wordpress.com/2014/10/d-normal-estc3a1ndar-apunte-alumnos.pdf">  * Dzib J. A., Consultado Marzo, 2021.<u>Distribución normal estándar, PDF</u>. Portal psicolearning</a>,
            <a href="https://www.statista.com/statistics-glossary/definition/351/raw_data/">* Enciclopedia Statista. Consultado en Mayo 2021, <u>Defición de Datos Crudos</u>. </a>,
            <a href="http://www.ainfo.inia.uy/digital/bitstream/item/14026/1/st-253-p163.pdf">* Federici M.T. et al., 2019, <u>* Identificación de bovinos Holando portadores de mutaciones asociadas al síndrome Sindactilia utilizando el panel Arbos1</u> en portal del Instituto Nacional de Investigación, Uruguay </a> ,
            <a href="https://www.statisticshowto.com/probability-and-statistics/chi-square/"> * Glen Stephanie. Consultado 20 de marzo, 2021, <u>"Chi-Square Statistic: How to Calculate It / Distribution"</u>. En StatisticsHowTo.com: Elementary Statistics for the rest of us!</a>,
            <a href="https://www.greelane.com/es/ciencia-tecnolog%C3%ADa-matemáticas/mates/hypothesis-tests-z-test-function-excel-3126622">* Portal Greelane.com,2018.<u> Z.Test cómo utilizar la funcion en Excel</u> </a>,
            "* Guerrero, H., 2010. Excel data analysis: modeling and simulation. Springer Science & Business Media.",
            <a href="https://www.investopedia.com/terms/s/standarddeviation.asp">* Hargrave, M., 2021. <u> Standard Deviation </u> en portal Investopedia.com</a>,
            <a href="http://www.holsteinfoundation.org/pdf_doc/workbooks/Gen_Sire_WKBK.pdf">* Holstein foundation, 2021. <u>Understanding Genetics and the Sire Summaries </u>,en PDF en línea </a>,
            <a href="https://mattchoward.com/quadratic-regression-in-excel/">* Howard M., Consultado Junio 2021.<u> Quadratic Regression in Excel</u>. En portal Mattchoward.com</a> ,
            <a href="https://economipedia.com/definiciones/teorema-de-bayes.html">* López J., 2018, <u>Teorema de Bayes</u>. Economipedia.com </a> ,
            <a href="https://economipedia.com/definiciones/distribucion-binomial.html">* Marco Sanjuán, F.J. 2017. <u>Distribución binomial.</u>  Economipedia.com</a>,
            "* McDonald, J.H., 2009. Handbook of biological statistics (Vol. 2, pp. 6-59). Baltimore, MD: sparky house publishing.",
            <a href="https://www.smartick.es/blog/matematicas/probabilidad-y-estadistica/probabilidad-que-es/">* Molina Susana, 2021, <u> La Probabilidad que es y cómo la utilizamos el día a día</u>. en portal Smartick.</a>, 

            <a href="https://www.oracle.com/ca-en/data-science/what-is-data-science.html">* Oracle. Consultado en Mayo 2021. <u>Qué es la Ciencia de los Datos?</u></a>,
            <a href="https://definicion.de/probabilidad-condicional/">* Pérez Porto J. y Gardey A., 2021. <u>Definición de probabilidad condicional </u>,en portal defición.de </a>,
            "* Pfaffenberger, R.C. and Patterson, J.H., 1977. Statistical methods for business and economics. Homewood, IL: Richard D. Irwin.",
           <a href="https://www.questionpro.com/blog/nominal-ordinal-interval-ratio/">* Portal Question Pro,  Consultado Mayo 2021, <u>Niveles de Medición </u> 
            </a>,  
            <a href="https://towardsdatascience.com/basic-probability-theory-and-statistics-3105ab637213">* Radke Paraga, 2017, <u>Basic Probability Theory and Statistics</u> , en portal Towards Data Science. </a>,
            <a href="https://www.medwave.cl/link.cgi/Medwave/Series/MBE04/5033"> * Ricardi F., (Mayo, 2011). <u>Distribución Normal.</u> En Portal Medwave, revista biomédica </a> ,
            <a href="https://economipedia.com/definiciones/distribucion-t-de-student.html">* Rodó P.,05 de noviembre, 2019. <u>Distribución t de Student.</u> en portal Economipedia.com </a> ,
            <a href="https://economipedia.com/definiciones/distribucion-normal.html">* Rodó P. 10 de noviembre, 2019. <u>Distribución normal</u>. Economipedia.com </a> ,
            <a href="http://lcolladotor.github.io/courses/Courses/MEyAdDG/day2/Pruebas%20de%20Hipótesis.pdf">* Rohen V. Consultado Junio 2021. <u>Presentación de pruebas de hipótesis, PDF</u> </a>,
            "* Sellam, V. and Poovammal, E., 2016. Prediction of crop yield using regression analysis. Indian Journal of Science and Technology, 9(38), pp.1-5.",
            <a href="https://www.guru99.com/business-intelligence-definition-example.html">* Taylor D., Octubre 7 2021 <u>What is Business Intelligence, Definition and Example</u>. En portal Guru99 </a>,
            <a href="https://www.investopedia.com/terms/d/discrete-distribution.asp">* Young Julie, 2021. <u>Discrete Distribution</u>. Investopedia.com </a>,
            <a href="https://www.statology.org/linear-regression-real-life-examples/">* Zach, 2020. <u> Examples of using linear regression in linear life. </u>En portal Statology.com </a>,
            <a href="https://www.real-statistics.com/chi-square-and-f-distributions/independence-testing/">* Zaiontz C., Consultado Mayo 2021. <u>Independence Testing.</u> en Portal  Real Statistics Using Excel. </a>,
            <a href="https://www.real-statistics.com/multiple-regression/interaction/">* Zaiontz C., Consultado Junio 2021. <u>Interaction.</u> En portal Real Statistics Using Excel. </a>
            ]}
            />

       </section>

        </ChapterLayout>

    );};
    export default Referencias