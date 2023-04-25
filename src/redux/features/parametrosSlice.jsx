import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    nombre: "",
    perfil_id: 3,
    perfil:""
}

export const parametrosSlice = createSlice({
    name: "parametros",
    initialState,
    reducers:
    {
        iniciarSesion: (state, datos) =>
        {
            //pasar parametros a un action reducers de objeto slice en redux
            state.nombre = datos.payload.nombre,
            state.perfil_id = datos.payload.perfil_id,
            state.perfil = datos.payload.perfil
        }
    }
});

export const {iniciarSesion} = parametrosSlice.actions
export default parametrosSlice.reducer