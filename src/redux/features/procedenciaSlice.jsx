import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pais: 'Chile',
    ciudad: 'Rancagua'
}

export const procedenciaSlice = createSlice({
    name: "procedencia", //el reducer debe llamarse en este caso procedenciaReducer para el store
    initialState,
    reducers:{ 
        cambiarMexico: (state) => { state.pais= "México", state.ciudad="Ciudad de México" },
        cambiarPeru:  (state) => {state.pais= "Perú", state.ciudad="Lima"},
        cambiarVenezuela:  (state) => {state.pais= "Venezuela", state.ciudad="Caracas"},
        volverChile: (state) => {state.pais = "Chile", state.ciudad="Rancagua"}
    }
});

export const {cambiarMexico,cambiarPeru,cambiarVenezuela,volverChile} = procedenciaSlice.actions

export default procedenciaSlice.reducer