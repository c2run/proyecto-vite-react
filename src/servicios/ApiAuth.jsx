import axios from "axios";

export async function authRegistro(request){
    let datos = axios
    .post(`${import.meta.env.VITE_API_URL_LOCAL}`,request,{
        headers: {'content-type': 'application/json'}
    })
    .then((response) => {
        return response.data;
    }).catch((error) => {
            console.log(error);
    });
    return datos;
}

export async function authLogin(request){
    let datos = axios
    .post(`${import.meta.env.VITE_API_URL_LOCAL}login`,request,{
        headers: {'content-type': 'application/json'}
    })
    .then((response) => {
        return response.data;
    }).catch((error) => {
        return {"estado": "error"}
    });
    return datos;
}