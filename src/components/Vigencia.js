import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import { FormContext } from './FormContext';
import './style.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Divider from '@mui/material/Divider';



function Vigencia() {

  const cardContext = useContext(FormContext);

  const contentDias = {
    7: '1 a 10',
    12.3: '11 a 20',
    14.5: '21 a 30',
    16.9: '31 a 40',
    20.4: '41 a 50',
    23.8: '51 a 60',
    26.3: '61 a 70',
    28.7: '71 a 80',
    30.2: '81 a 90'
  }

  const contentDestino = {
    5.1: 'Europa',
    5: 'Norte América',
    2.1: 'Caribe-México',
    2: 'Sudamerica',
    2.2: 'África',
    3: 'Asia',
    4: 'Oceania'
  }

  return (

    <Card sx={{ minWidth: 275, boxShadow: 'none', background: 'transparent'}}>
    <CardContent style={{ margin: '1rem',  marginTop: '0rem' }}>

    <Grid container>



    <Grid item xs={12}  md={12} style={{marginTop: '1rem'}}>

<Typography style={{ marginBottom: '1rem', color: '#1A237E', fontWeight: 'bold'}} gutterBottom variant="h7" component="div">
Vigencia/ Vigencia/ Validity
</Typography></Grid>


 <Grid item xs={12}  md={12} style={{marginTop: '1rem'}}>

<Typography sx={{ mb: 1.5 }} variant="h7" component="div">
{cardContext.salidaB}
</Typography>
<Divider/>
<Typography variant="h7" component="div" color="text.secondary">
Inicio de vigencia/ Inicio de vigencia/ Validity Begins 
</Typography>

</Grid>
  <Grid item xs={12}  md={12} style={{marginTop: '1rem'}}>

  <Typography sx={{ mb: 1.5 }} variant="h7" component="div">
   {contentDias[cardContext.diasB]}
  </Typography>
  <Divider/>
  <Typography variant="h7" component="div"  color="text.secondary">
   Cantidad de días/ Quantidade de dias/ Nr. Days
  </Typography>

  </Grid>
  <Grid item xs={12}  md={12} style={{marginTop: '1rem'}}>

  <Typography sx={{ mb: 1.5 }} variant="h7" component="div">
   {cardContext.regresoB}
  </Typography>
  <Divider/>
  <Typography variant="h7" component="div" color="text.secondary">
   Fecha de fin de vigencia/ Data de vigencia/ Validity ends
  </Typography>

  </Grid>

  <Typography style={{ marginBottom: '1rem', color: '#1A237E', fontWeight: 'bold', marginTop: '2rem'}} gutterBottom variant="h7" component="div">
  Destino del viaje/ Destino de viagem/ Destination of journey
</Typography>

  <Grid item xs={12}  md={12} style={{marginTop: '1rem'}}>

  <Typography sx={{ mb: 1.5 }} variant="h7" component="div">
   {contentDestino[cardContext.destinoB]}
  </Typography>
  <Divider/>
  <Typography variant="h7" component="div"  color="text.secondary">
   Ciudad/Cidade/City
  </Typography>
  </Grid>

  </Grid>

</CardContent>
</Card>
  );
}

export default Vigencia;


