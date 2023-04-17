import { Link } from "react-router-dom"
import Webcam from "react-webcam"
import React, {useRef, useState} from 'react';


const UtilesWebcam = () => {
  //states para la webcam
  const webcamRef = React.useRef(null); //useref para un nodo html
  const mediaRecorderRef = React.useRef(null); //manipular los controles
  const [capturing, setCapturing] = React.useState(false); //manipular la captura
  const [recordedChunks, setRecordedChunks] = React.useState([]); //manipular la grabación


     //método para permitir obtener la data
  const handleDataAvailable = React.useCallback (
    ({data}) => {
      if(data.size > 0){
          setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  //Método para inicializar la captura
const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);
  
 
    //método para parar la transmisión
    const handleStopCaptureClick = React.useCallback(() => {
        mediaRecorderRef.current.stop(); 
        setCapturing(false);
    }, [webcamRef, setCapturing, mediaRecorderRef]);

    //método para descargar la captura 
    const handleDownload = React.useCallback(() => {
      if(recordedChunks.length){
        const blob = new Blob(recordedChunks,{
            type: "video/webm"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.download = "react-webcam-stream-capture.webm";
        a.click();
        window.URL.revokeObjectURL(url);
        setRecordedChunks([]);
      }
    }, [recordedChunks]);

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/utiles">Útiles</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            React-web cam
          </li>
        </ol>
      </nav>
      <hr />
      <h3>React-webcam</h3>
      <Webcam audio={true} ref={webcamRef} />
      <hr />
      {capturing ? ( <button className="btn btn-danger" onClick={handleStopCaptureClick}>Detener captura</button> 
        
      ) : ( <button className="btn btn-success" onClick={handleStartCaptureClick}>Hacer captura</button>)}
        {recordedChunks.length > 0 && (

            <button className="btn btn-warning" onClick={handleDownload}>Descargar</button>
        )}
        

     
    </>
  )
}

export default UtilesWebcam
