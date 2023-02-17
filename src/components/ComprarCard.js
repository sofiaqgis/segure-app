import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import { FormContext } from './FormContext';
import './style.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import mastercard from './img/mastercard.png';
import visa from './img/visa.png';
import Pasajero from './Pasajero';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate  } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function ComprarCard() {


 const MasterCard = () => {
    return (

        <img src={mastercard} alt="mastercard"/>
    
    )
  }


const Visa = () => {
    return (

        <img src={visa} alt="visa"/>
    
    )
  }


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

const {calcItemCount} = useContext(FormContext);

const [selectedOption, setSelectedOption] = useState('');
const [selectedOptionLabel, setSelectedOptionLabel] = useState(false);


const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
  setSelectedOptionLabel(true)

};

const [pasajeroDatosP, setPasajeroDatosP] = useState([]);


const onAdd = (pasajeroDatos) => {

      setPasajeroDatosP([
        ...pasajeroDatosP, 
            
              { 
                nombre: pasajeroDatos.nombre,
                nacimiento: pasajeroDatos.nacimiento,
                apellido: pasajeroDatos.apellido,
                documento: pasajeroDatos.documento,
                numero: pasajeroDatos.numero,
                pais: pasajeroDatos.pais,
                ciudad: pasajeroDatos.ciudad,
                domicilio: pasajeroDatos.domicilio,
                telefono: pasajeroDatos.telefono,
                apellidoContacto: pasajeroDatos.apellidoContacto,
                nombreContacto: pasajeroDatos.nombreContacto,
                telefonoContacto: pasajeroDatos.telefonoContacto
          } 
        ]
      )}

      const [completar, setCompletar] = useState(false);

      const handleClose = () => {
        setCompletar(false);
      };
      
      const CompletarForm = () => {
      
      
        return (
      
       
            <Dialog
              open={completar}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Debes completar los datos del formulario para continuar"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                Completa los campos y envialos a continuación
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cerrar</Button>
              </DialogActions>
            </Dialog>
      
            
        )
      }


const submitSend = (e) => {
  e.preventDefault();

  if(pasajeroDatosP.length<calcItemCount ) {

    setCompletar(true)
   

  } else {

   pasajerosFunction(pasajeroDatosP);
   navigate("/pagoform" );

  }
   
   }; 

let navigate = useNavigate();

const volver = () => {
  navigate("/result" );
  clear();
}

const {clear, pasajerosFunction} = useContext(FormContext);

const items = new Array(calcItemCount).fill(null);


  return (
    <Grid className="wall3" container>
        <Grid item xs={12}  md={12}>
    <Card sx={{ minWidth: 275, margin: '2rem'}}>
      <CardContent style={{ margin: '1rem' }}>
        <Typography style={{ marginBottom: '3rem', color: '#1776D1' }} gutterBottom variant="h6" component="div">
          Datos de tu viaje
          </Typography>
          <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}  md={3}>
        <Typography variant="h7" component="div">
         Origen: 
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h7" component="div" color="text.secondary">
         {cardContext.origenB}
        </Typography>
        </Grid>
        <Grid item xs={6}  md={3}>
        <Typography variant="h7" component="div">
          Destino: 
        </Typography>
        <Typography sx={{ mb: 1.5 }} component="div" variant="h7" color="text.secondary">
        {contentDestino[cardContext.destinoB]}
        </Typography>
        </Grid>
        <Grid item xs={6}  md={3}>
        <Typography variant="h7" component="div">
          Producto: 
        </Typography>
        <Typography sx={{ mb: 1.5 }} component="div" variant="h7" color="text.secondary">
        {cardContext.tituloBB}
        </Typography>
        </Grid>
        <Grid item xs={6}  md={3}>
        <Typography variant="h7" component="div">
          Fecha de partida: 
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h7" component="div" color="text.secondary">
        {cardContext.salidaB}
        </Typography>
        </Grid>
        <Grid item xs={6}  md={3}>
        <Typography variant="h7" component="div">
          Fecha de regreso:
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h7" component="div" color="text.secondary">
        {cardContext.regresoB}
        </Typography>
        </Grid>
        <Grid item xs={6}  md={3}>
        <Typography variant="h7" component="div">
          Tarifa total: 
        </Typography>
        <Typography sx={{ mb: 1.5 }} component="div" variant="h7" color="text.secondary">
         ARS ${(   cardContext.montoBB * cardContext.total).toLocaleString(undefined, {minimumFractionDigits: 2})}
        </Typography>
        </Grid>
        <Grid item xs={6}  md={3}>
        <Typography variant="h7" component="div">
          Anual: 
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h7" component="div" color="text.secondary">
        No
        </Typography>
        </Grid>
        <Grid item xs={6}  md={3}>
        <Typography variant="h7" component="div">
        Días corridos: 
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h7" component="div" color="text.secondary">
        {contentDias[cardContext.diasB]}
        </Typography>
        </Grid>
      </Grid>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={12}  md={12}>
    <Card sx={{ minWidth: 275, margin: '2rem', marginTop: '0rem', marginBottom: '1rem'}}>
    <CardContent style={{ margin: '1rem' }}>
    <Typography style={{ marginBottom: '3rem', color: '#1776D1' }} gutterBottom variant="h6" component="div">
          Medio de pago
          </Typography>
          <Grid container>
    <Grid item xs={12} sm={6}  md={6}>
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel onChange={handleOptionChange} checked={selectedOption=== 'mastercard'} value="mastercard" control={<Radio />} label={<MasterCard/>} />
        <FormControlLabel onChange={handleOptionChange} checked={selectedOption=== 'visa'} value="visa" control={<Radio />} label={<Visa/>} />
     
      </RadioGroup>
    </FormControl>
    </Grid>
    <Grid item xs={12} sm={6} md={6}>
    { selectedOptionLabel===true && <Typography sx={{ mb: 1.5 }} variant="h7" component="div" color="text.secondary">
     1 Cuota de ARS ${(   cardContext.montoBB * cardContext.total).toLocaleString(undefined, {minimumFractionDigits: 2})}
        </Typography>}
        </Grid>
        </Grid>
    </CardContent>
    </Card>
    </Grid>

   {calcItemCount>0 && <Card sx={{ minWidth: 275, margin: '2rem', marginTop: '1rem', width: '100%'}}>

   
    { items.map((_, idx) => <Pasajero onAdd={onAdd} key={idx}/>) } 
    
  
    <Grid item style={{ textAlign:'center', display: 'flex', justifyContent: 'center', margin: '2rem'}} xs={12} sm={12}  md={12}>

<Button onClick={volver} style={{margin: '1rem', fontSize: '1rem'}} variant="contained">Volver</Button>
<Button style={{margin: '1rem', fontSize: '1rem'}} onClick={submitSend} variant="contained">Enviar</Button>

</Grid>

</Card>}
{completar===true && <CompletarForm/>}
    </Grid>
  );
}

export default ComprarCard;