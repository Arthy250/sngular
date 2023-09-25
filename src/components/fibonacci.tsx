import { useState } from "react";

const Fibonacci = () => {

    const [resultadoFibo, setResultadoFibo] = useState(0)

    const calcularFibonacci = (numero: number) => {
        let numeroEvaluar = (numero - 1);
        let a = 1;
        let b = 1;
        
        if(numero){
            for (let i = 3; i <= numeroEvaluar; i++) {
                let c = a + b;
                a = b;
                b = c;
            }
            setResultadoFibo(7 * b);
        }
    }

    return {
        calcularFibonacci,
        resultadoFibo
    };
}
 
export default Fibonacci;