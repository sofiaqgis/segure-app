import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import { FormContext } from './FormContext';
import './style.css';
import { useNavigate  } from "react-router-dom";



export default function Card1({item}) {

  const customOrder = useContext(FormContext);

  const {addTitulo, addMonto} = useContext(FormContext);

  const tituloB = item.titulo

  const montoA = item.monto

let navigate = useNavigate();

const comprar = (e) => {
 e.preventDefault();
navigate("/comprarcard" );
addTitulo(tituloB);
addMonto(montoA);

}

  return (
    <Card sx={{ minWidth: 275}} style={{ margin: '1rem' }}>
      <CardContent style={{ margin: '1rem' }}>
        <Typography style={{ marginBottom: '3rem' }} gutterBottom variant="h4" component="div">
          {item.titulo}
          </Typography>
          <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}  md={3}>
        <Typography variant="body2">
          Ámbito de cobertura
        </Typography>
  
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {item.cobertura}
        </Typography>
        </Grid>
        <Grid item xs={6}  md={3}>
        <Typography variant="body2">
          Asistencia médica por enfermedad
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {item.enfermedad}
        </Typography>
        </Grid>
        <Grid item xs={6}  md={3}>
        <Typography variant="body2">
          Franquicia/ Deducible
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {item.deducible}
        </Typography>
        </Grid>
        <Grid item xs={6}  md={3}>
        <Typography variant="body2">
          Ámbito de cobertura
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {item.cobertura}
        </Typography>
        </Grid>
        <Grid item xs={6}  md={3}>
        <Typography variant="body2">
          Compensación por perdida de equipaje
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {item.equipaje}
        </Typography>
        </Grid>
        <Grid item xs={6}  md={3}>
        <Typography variant="body2">
          Asistencia Médica en caso de COVID-19
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {item.equipaje}
        </Typography>
        </Grid>
        <Grid item xs={6}  md={3}>
        <Typography variant="body2">
          Asistencia Médica por Accidente
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {item.accidente}
        </Typography>
        </Grid>
        <Grid item xs={6}  md={3}>
        <Typography variant="body2">
        Medicamentos
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {item.medicamentos}
        </Typography>
        </Grid>
      <Grid item xs={5}  md={4}><div></div></Grid>
      <Grid item xs={5}  md={5}>
      <Typography className='result' gutterBottom variant="h5" component="div">ARS ${(item.monto * customOrder.total).toLocaleString(undefined, {minimumFractionDigits: 2})}</Typography>
      </Grid>
      <Grid item xs={5}  md={3}>
      <CardActions>
        <Button onClick={comprar} variant="contained" >Comprar</Button>
      </CardActions>
      </Grid>

      </Grid>
      </CardContent>
    </Card>
  );
}