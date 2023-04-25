import { configureStore } from '@reduxjs/toolkit'
import procedenciaReducer from './../features/procedenciaSlice';
import calculadoraReducer from './../features/calculadoraSlice';


export const store = configureStore({
    reducer:{
        procedencia: procedenciaReducer,
        calculadora: calculadoraReducer
    }
})