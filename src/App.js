import React, { Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header titulo="Clima"></Header>
      <div>
        <div>
          <div>
            <div>
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
