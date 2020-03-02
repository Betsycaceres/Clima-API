import React, { Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header titulo="Pronóstico del Tiempo"></Header>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="col-6">
              <Formulario></Formulario>
            </div>
            <div>2</div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
