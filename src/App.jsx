import { useState } from "react";

import ResultImc from "./components/ResultImc";
import TableImc from "./components/TableImc";

function App() {
  const [inputAltura, setInputAltura ] = useState(0);
  const [inputPeso, setInputPeso ] = useState(0);
  const [imc, setImc] = useState(null);
  
  function calculaImc() {
      if (inputAltura !== 0 && inputPeso !== 0) {
      const resultImc = inputPeso / (inputAltura * inputAltura);

      setImc(resultImc.toFixed(2).replace(".", ","));
    } else {
      alert("Insira os valores nos campos!")
    }
  };

  return (
    <>
      <header className="containerImc">
        <h1 className="title">IMC React</h1>
        <p>Preencha os campos abaixo para calcular o seu IMC. 😊</p>
        <form className="formImc">
          <label className="label" htmlFor="altura">Altura: 
            <input id="altura" className="input" type="number" placeholder="ex: 1.70" onChange={e => setInputAltura(Number(e.target.value))} />
          </label>
          <label className="label" htmlFor="peso">Peso:
            <input id="peso" className="input" type="number" placeholder="ex: 70.2" onChange={e => setInputPeso(Number(e.target.value))} />
          </label>
          <button className="buttonForm" onClick={calculaImc} type="button">Calcular</button>
        </form>
      </header>
      
      {imc !== null && (
        <main>
          <ResultImc resultImc={imc} />
          <TableImc resultImc={imc} />
        </main>
      )}
    </>
  )
}

export default App
