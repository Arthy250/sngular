import { useState } from "react"

const NumeroTriangular = () => {

    const [resultadoTriangular, setResultadoTriangular] = useState(0);

    const calcularTriangular = (numero: number) => {
        let numeroEvaluar = (numero - 2);
        let nuevoNumero = 0;
        if(numero){
          for (let i = 1; i <= numeroEvaluar; i++) {
              nuevoNumero += i;
          }
          setResultadoTriangular(3 * nuevoNumero);
        }
    }

  return {
    calcularTriangular,
    resultadoTriangular
  }
}

export default NumeroTriangular;
