import { useEffect, useState } from 'react';
import './App.css';
import NumerosPrimos from './components/numeroPrimo';
import NumeroTriangular from './components/numeroTriangular';
import Fibonacci from './components/fibonacci';

function App() {

  const [numeroSerie, setNumeroSerie] = useState('');
  const [resultadoSerie, setsetResultadoSerie] = useState(0)
  

  // Funciones
  const {calcularPrimo, resultadoPrimo} = NumerosPrimos();
  const {calcularTriangular, resultadoTriangular} = NumeroTriangular();
  const {calcularFibonacci, resultadoFibo} = Fibonacci();
  

  const onInputChange = ({target}:any) => {
    const {value} = target;
    setNumeroSerie(value)
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    
    // Validar que el input exista
    if(numeroSerie === ''){
      alert('Debe ingresar un numero');
    }

    // Convertir a numero el valor del input
    const numeroEvaluar = parseInt(numeroSerie);

    // Calfular funciones
    calcularPrimo(numeroEvaluar);
    calcularTriangular(numeroEvaluar);
    calcularFibonacci(numeroEvaluar);

    mostrarResultado()
  }

  const mostrarResultado = () => {}

  useEffect(() => {
    { resultadoPrimo 
      ? setsetResultadoSerie(resultadoPrimo * resultadoTriangular * resultadoFibo)
      : setsetResultadoSerie(resultadoTriangular * resultadoFibo)
    }
  }, [mostrarResultado])
  
  

  return (
    <div className="App">
      <header className="App-header">
        <form className='formulario' onSubmit={handleSubmit}>
        <label>Ingrese un numero</label>
        <input
          type='number'
          className='form-control'
          placeholder='Ingrese un numero'
          name='numero'
          value={numeroSerie}
          onChange={onInputChange}
        />
        <input type="submit" name="Calcular"/>
        </form>
        
        {/* <p>Resultado numero primo: {resultadoPrimo !== 0 ? resultadoPrimo : ''}</p>
        <p>Resultado numero triangular: {resultadoTriangular !== 0 ? resultadoTriangular : ''}</p>
        <p>Resultado Fibonacci: {resultadoFibo !== 0 ? resultadoFibo : ''}</p> */}
        <p>Resultado Serie: {resultadoSerie}</p>

      </header>
    </div>
  );
}

export default App;
