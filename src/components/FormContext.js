
import {createContext, useState } from "react";

export const FormContext = createContext();


function CartContextProvider ({children}) {

const [calcTotalA, setCalcTotalA] = useState(0);
const [calcTotalB, setCalcTotalB] = useState(0);
const [calcTotalC, setCalcTotalC] = useState(0);


const calcTotal = (dias, destino, itemCount) => {

setCalcTotalA (calcTotalA + dias)
setCalcTotalB (calcTotalB + destino)
setCalcTotalC (calcTotalC + itemCount)
}

const [diasB, setDiasB] = useState('');
const [destinoB, setDestinoB] = useState('');
const [regresoB, setRegresoB] = useState('');
const [origenB, setOrigenB] = useState('');
const [salidaB, setSalidaB] = useState('');


const variabB = (dias, destino, regreso, origen, salida ) => {
    setDiasB (diasB + dias)
    setDestinoB (destinoB + destino)
    setRegresoB (regresoB + regreso)
    setOrigenB (origenB + origen)
    setSalidaB (salidaB + salida)

}

const clear = () => {
    setMontoBB(0);
    setTituloBB('')
  }

const [pasajerosDatosB, setPasajerosDatosB] = useState([]);

  const pasajerosFunction = (pasajeroDatosP) => {
      setPasajerosDatosB (pasajeroDatosP)
  }


const [calcItemCount, setCalcItemCount] = useState(0);

const calcItemCountFun = (itemCount) => {
    setCalcItemCount (calcItemCount + itemCount)
}

const total = calcTotalA * calcTotalB * calcTotalC

const [tituloBB, setTituloBB] = useState('');

const addTitulo = (tituloB) => {
setTituloBB(tituloBB + tituloB)
}

const [montoBB, setMontoBB] = useState(0);

const addMonto = (montoB) => {
setMontoBB(montoBB + montoB)
}

return (
    <FormContext.Provider value={{calcTotal, total, variabB, diasB, destinoB, regresoB, origenB, salidaB, addTitulo, tituloBB, addMonto, montoBB, clear, calcItemCount, calcItemCountFun, pasajerosFunction, pasajerosDatosB }}>
     {children}
    </FormContext.Provider>

    );

}

export default CartContextProvider;


