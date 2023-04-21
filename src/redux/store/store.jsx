import { configureStore } from '@reduxjs/toolkit'
import procedenciaReducer from './../features/procedenciaSlice';

export const store = configureStore({
    reducer:{
        procedencia: procedenciaReducer
    }
})