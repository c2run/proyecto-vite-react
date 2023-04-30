import { Link } from "react-router-dom"
import { useState,useEffect } from "react";
import { CircularProgress, Slide, TextField } from "@mui/material";
import '../../public/css/weather.css';



const FetchApiWeather = () => {
const [ciudad, setCiudad] = useState("Rancagua");
const [inputText, setInputText] = useState("");

const [data, setData] = useState({});
const [error, setError] = useState(false);
const [loading, setLoading] = useState(true);
useEffect(() => {
    fetch(
      
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=12e59fbdb49e8fd0fcbe441ad899b5ef&units=metric`
        )
        .then((res)=>{
            if(res.status===200){
                error && setError(false);
                return res.json();  
            }else{
                throw new Error("Algo salió mal!");
            }
        })
        .then((data)=>{
            setData(data);
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false))
},[ciudad, error]);
    console.log(inputText);

    const manejarBusqueda = (e) => {
        if(e.key === "Enter"){
            setCiudad(e.target.value);
            setInputText("");
        }
    }

  return (
    
    <div className="bg_image">
       <h1>Clima</h1>
        <hr />
        {!loading ? (  
            <>
        <TextField
        size="lg"
        placeholder="Ciudad..."
        variant="filled"
        label="Ubicación"
        className="input"
        error={error}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={manejarBusqueda}
                       />
        <h1 className="ciudad">{data.name}</h1>
        <div className="group">
        <h1>Despejado</h1>
        </div>
        <h1 className="temp">{data.main.temp.toFixed()}° C</h1>
            
            <Slide direction="right" timeout={800} in={!loading}>
            <div className="box_container">
            <div className="box">
            <p>Humedad</p>
            <h1>{data.main.humidity.toFixed()}%</h1>
            </div>

            <div className="box">
            <p>Viento</p>
            <h1>{data.wind.speed.toFixed()} km</h1>
            </div>

            <div className="box">
            <p>sensación térmica</p>
            <h1>{data.main.feels_like.toFixed()} °C</h1>
            </div>

            </div>
            </Slide>
           
            </>
            ) : (
                <CircularProgress />
            )
        }
    </div>
  )
}

export default FetchApiWeather

