import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import { FormContext } from './FormContext';
import './style.css';
import VoucherPasajeros from './VoucherPasajeros';
import Vigencia from './Vigencia';
import Servicio from './Servicio';
import Button from '@mui/material/Button';
import { useNavigate  } from "react-router-dom";



function Voucher() {

  let navigate = useNavigate();

  const cardContext = useContext(FormContext);

  const pasajerosVoucherID = cardContext.pasajerosDatosB

const print = () => {
  navigate("/pdfviewer" );
}


  return (
    <Grid className="wall3" container>

    <Card sx={{ minWidth: 275, margin: '2rem'}} className="voucher">
      <CardContent style={{ margin: '1rem' }}>
        <Typography style={{ margin: '2rem', color: '#1776D1', fontWeight: 'bold' }} gutterBottom variant="h4" component="div">
          Travel Assistance
          </Typography>
          <Button onClick={print} variant="contained">Imprimir</Button>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item md={6}>
            <Vigencia/>
            </Grid>
            <Grid item md={6}>
            <Servicio/>
              </Grid>
              </Grid>

  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

       

{ pasajerosVoucherID.map((item, idx) => <Grid item xs={2} sm={6} md={6} key={idx}> <VoucherPasajeros item={item} key={idx}/></Grid>) } 


</Grid>


</CardContent>
</Card>
</Grid>


  );
}

export default Voucher;