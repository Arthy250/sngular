import { useState } from "react";

const NumerosPrimos = () => {

    const [resultadoPrimo, setResultadoPrimo] = useState(0)

    const calcularPrimo = (numero: number) => {

        // ( n - 2 )
        const numeroCalcular = (numero - 2);
        
        if(numeroCalcular){
            
            // Validar si es un numero primo
            if(numeroCalcular <= 1){
                return
            } else {
                    for (let i = 2; i < numeroCalcular; i++) {
                        if (numeroCalcular % i === 0) {
                        return;
                    }
                }
                // Calcular resultado 2primo( n - 2)
                const nuevoNumero = (2 * numeroCalcular);
                setResultadoPrimo(nuevoNumero);
            }
        }

    }

    return{
        calcularPrimo,
        resultadoPrimo
    }
}
 
export default NumerosPrimos;