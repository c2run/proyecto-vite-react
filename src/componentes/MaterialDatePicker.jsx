import { Link } from "react-router-dom"
import { useState } from "react";

import dayjs from "dayjs";
import 'dayjs/locale/es'

import { Button } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopTimePicker } from "@mui/x-date-pickers";
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DemoItem } from "@mui/x-date-pickers/internals/demo";

const MaterialDatePicker = () => {
    //crear un estado
    const [fechaSeleccionada, cambiarFechaSeleccionada] = useState();

    const [horaSeleccionada, cambiarHoraSeleccionada] = useState();

    const [horaseleccionada2, cambiarHoraSeleccionada2] = useState();
   
  const mandarValor = () => {
    alert('hola mundo '+ dayjs(fechaSeleccionada).format('DD-MM-YYYY') + ' || '+ dayjs(horaSeleccionada).format('hh:mm') + '||' +
    dayjs(horaseleccionada2).format('hh:mm'));
  }

  return (
    <>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/material">Material</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
           <label>Date Picker</label>
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Date Picker</h3>
      <form onSubmit={mandarValor} >
      <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="DD-MM-YYYY" inputFormat='DD-MM-YYYY' value={fechaSeleccionada} onChange={cambiarFechaSeleccionada} />
      </DemoContainer>
    </LocalizationProvider>
    <hr />
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DesktopTimePicker']}>
      <DesktopTimePicker defaultValue={dayjs('2022-04-17T15:30')} value={horaSeleccionada} onChange={cambiarHoraSeleccionada} />
      </DemoContainer>
      </LocalizationProvider>
    <hr />
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoItem label="Mobile variant" components={['MobileTimePicker']}>
          <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} value={horaseleccionada2} onChange={cambiarHoraSeleccionada2} />
          </DemoItem>
    </LocalizationProvider>
    <hr />
    <Button type="submit">Botón</Button>
    </form>
    </>
  )
}

export default MaterialDatePicker
