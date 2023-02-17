import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import { FormContext } from './FormContext';
import './style.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';



function Servicio() {

  const cardContext = useContext(FormContext);

  return (

    <Card sx={{ minWidth: 275, boxShadow: 'none', background: 'transparent'}}>
    <CardContent style={{ margin: '1rem',  marginTop: '0rem' }}>

    <Grid container >


    <Grid item xs={12}  md={12} style={{marginTop: '1rem'}}>
  <Typography style={{ marginBottom: '1rem', color: '#1A237E', fontWeight: 'bold'}} gutterBottom variant="h7" component="div">
  Servicio/ Servico/ Service
</Typography>
</Grid>

  <Grid item xs={12}  md={12} style={{marginTop: '1rem'}}>

  <Typography sx={{ mb: 1.5 }} variant="h7" component="div">
   {cardContext.tituloBB}
  </Typography>
  <Divider/>
  <Typography variant="h7" component="div"  color="text.secondary">
   Plan adquirido/ Plano adquirido/ Suscription Plan
  </Typography>

  </Grid>

  <Grid item xs={12}  md={12} style={{marginTop: '1rem'}}>

<Typography sx={{ mb: 1.5 }} variant="h7" component="div">
ARS ${(   cardContext.montoBB * cardContext.total).toLocaleString(undefined, {minimumFractionDigits: 2})}
</Typography>
<Divider/>
<Typography variant="h7" component="div"  color="text.secondary">
 Tarifa/ Valor/ Price
</Typography>

</Grid>

<Typography style={{ marginBottom: '1rem', color: '#1A237E', fontWeight: 'bold', marginTop: '2rem'}} gutterBottom variant="h7" component="div">
  Agente emisor/ Agente emissor/ Issuing agency
</Typography>

  <Grid item xs={12}  md={12} style={{marginTop: '1rem'}}>

  <Typography sx={{ mb: 1.5 }} variant="h7" component="div">
   Travel Assistance 
  </Typography>
  <Divider/>
  <Typography variant="h7" component="div"  color="text.secondary">
   Nombre de agencia/ Nome agencia/ Agency Name
  </Typography>
  </Grid>

</Grid>

</CardContent>
</Card>
  );
}

export default Servicio;