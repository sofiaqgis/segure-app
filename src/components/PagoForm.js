import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import './style.css';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import palmera from './img/palmera.png';
import Button from '@mui/material/Button';
import { useNavigate  } from "react-router-dom";
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, Select, MenuItem, FormGroup, FormLabel, TextField, InputLabel} from '@mui/material';

function PagoForm () {


 const Palmera = () => {
  return (

      <img src={palmera} width="100%" style={{borderRadius: '.2rem'}} alt="palmera"/>
  
  )
}

const voucher = () => {
  navigate("/voucher" );
}


const [open, setOpen] = useState(false);

const handleClose = () => {
  setOpen(false);
};

const Pagado = () => {


  return (

 
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Tu pago ha sido procesado exitosamente"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          ¡Imprime tu seguro de viajero y disfruta del viaje!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={voucher} autoFocus>
            IMPRIMIR VOUCHER
          </Button>
          <Button onClick={handleClose}>Cerrar</Button>
         
        </DialogActions>
      </Dialog>

      
  )
}

const [openB, setOpenB] = useState(false);

const handleCloseB = () => {
  setOpenB(false);
};


const NoPagado = () => {

  return (

   
    <Dialog
      open={openB}
      onClose={handleCloseB}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Tu pago no pudo ser procesado"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
         Hubo un error en la carga de los datos de pago. Por favor revisa los datos ingresados e intentalo nuevamente. 
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseB}>Cerrar</Button>
       
      </DialogActions>
    </Dialog>

   

  )
}

    const [nombretitular, setNombretitular] = useState('');


    const handleChangeNombreTitular = (event) => {
      setNombretitular(event.target.value);
  
    };
  
    const [codigoseguridad, setCodigoseguridad] = useState('');
    const limitChar = 3;
  
  
    const handleChangeCodigoSeguridad = (event) => {
    
      if (event.target.value.toString().length <= limitChar) {
        setCodigoseguridad(event.target.value);
      }
  
    };
  
    const [numerotarjeta, setNumerotajeta] = useState('');
    const limitChar2 = 16;
  
  
    const handleChangeNumeroTarjeta = (event) => {
   
      if (event.target.value.toString().length <= limitChar2) {
        setNumerotajeta(event.target.value);
      }
  
    };
  
    const [mesexpiracion, setMesexpiracion] = useState('');
  
  
    const handleChangeMes = (event) => {
      setMesexpiracion(event.target.value);
  
    };
  
    const [yearexpiracion, setYearexpiracion] = useState('');
  
  
    const handleChangeYear = (event) => {
      setYearexpiracion(event.target.value);
  
    };

    let navigate = useNavigate();


    const submitPago1 = (e) => {
        e.preventDefault();
   

      
  if(!mesexpiracion || !yearexpiracion || numerotarjeta.length<16 || nombretitular==='' || codigoseguridad.length<3) {
    setOpenB(true)
  
  } else {
    setOpen(true)

  }
       
    console.log(nombretitular, codigoseguridad, numerotarjeta, mesexpiracion, yearexpiracion);
         
         }; 



    return (
      <Grid style={{display: 'flex', justifyContent: 'center', minHeight: '100vh', minWidth: '100vw'}} container>
   
      <Grid item xs={12}  md={7}>
   <Card  sx={{ minWidth: 275, margin: '2rem', boxShadow: 'none', marginBottom: '0rem'}}>
 
   <Typography style={{ margin: '2rem', color: '#1776D1' }} gutterBottom variant="h5" component="div">
     Datos de pago
     </Typography>
     <FormGroup style={{margin: '2rem', background: '#d3302e', padding: '1rem'}} sx={{ flexDirection: { xs: "column", sm: "row" } }} >
<FormLabel style={{marginLeft: '1rem', color: 'white' }}>Tarjetas de crédito o débito</FormLabel>


</FormGroup>


<Grid container sx={{ flexDirection: { xs: "column", sm: "row" } }}>
<Grid item xs={12}  md={6}>
     <FormGroup style={{margin: '2rem' , marginTop: '0rem', marginBottom: '0rem'}} >
<FormLabel style={{marginLeft: '1rem'}}>Nombre del titular</FormLabel>
   <TextField style={{margin: '1rem', width: '90%'}} className="formfield2" id="outlined-basic" value={nombretitular} onChange={handleChangeNombreTitular}  variant="outlined" /></FormGroup>
   </Grid>
   <Grid item xs={12}  md={6}>
   <FormGroup style={{margin: '2rem' , marginTop: '0rem', marginBottom: '0rem'}} >
<FormLabel style={{marginLeft: '1rem'}}>Número de tarjeta</FormLabel>
<TextField style={{margin: '1rem', width: '90%'}} className="formfield2"  id="outlined-basic" type="number"  value={numerotarjeta} onChange={handleChangeNumeroTarjeta} label="xxxx xxxx xxxx xxxx" variant="outlined" />


</FormGroup>
</Grid></Grid>
<Grid container>
  <Grid item xs={12}  md={6}>
<FormGroup style={{margin: '2rem', marginTop: '.2rem', marginBottom: '0rem'}} >
<FormLabel style={{marginLeft: '1rem'}}>Fecha de expiración</FormLabel>
<Grid container >
<Grid item xs={6}  md={6}>
<FormControl className="form3"  style={{marginLeft: '1rem', marginTop: '1rem'}} >
<InputLabel  id="demo-simple-select-label-c">Mes</InputLabel>
<Select 
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value={mesexpiracion}
  onChange={handleChangeMes}
  label="Mes"
>
  <MenuItem value="enero">01 - Enero</MenuItem>
   <MenuItem value="febrero">02 - Febrero</MenuItem>
  <MenuItem value="marzo">03 - Marzo</MenuItem>
  <MenuItem value="abril">04 - Abril</MenuItem>
   <MenuItem value="mayo">05 - Mayo</MenuItem>
   <MenuItem value="junio">06 - Junio</MenuItem>
  <MenuItem value="julio">07 - Julio</MenuItem>
  <MenuItem value="agosto">08 - Agosto</MenuItem>
   <MenuItem value="septiembre">09 - Septiembre</MenuItem>
  <MenuItem value="octubre">10 - Octubre</MenuItem>
  <MenuItem value="noviembre">11 - Noviembre</MenuItem>
   <MenuItem value="diciembre">12 - Diciembre</MenuItem>


</Select>
</FormControl>
</Grid>
<Grid item xs={6}  md={6}>
<FormControl  className="form3"  style={{marginLeft: '1rem', marginTop: '1rem', marginBottom: '1rem'}}>
<InputLabel  id="demo-simple-select-label-c">Año</InputLabel>
<Select 
  labelId="demo-simple-select-label"
  label="Año"
  id="demo-simple-select"
  value={yearexpiracion}
  onChange={handleChangeYear}
>
  <MenuItem value="2023">2023</MenuItem>
   <MenuItem value="2024">2024</MenuItem>
  <MenuItem value="2025">2025</MenuItem>
  <MenuItem value="2026">2026</MenuItem>
   <MenuItem value="2027">2027</MenuItem>
   <MenuItem value="2028">2028</MenuItem>
  <MenuItem value="2029">2029</MenuItem>
  <MenuItem value="2030">2030</MenuItem>

</Select>
</FormControl>
</Grid>
</Grid>
</FormGroup>

</Grid>

   <Grid item xs={12}  md={6}>
   <FormGroup style={{margin: '2rem', marginTop: '0.2rem', marginBottom: '0rem'}} >
<FormLabel style={{marginLeft: '1rem'}}>Código de seguridad</FormLabel>
<TextField className="formfield2"  style={{marginLeft: '1rem', marginTop: '1rem', width: '40%'}}  id="outlined-basic" value={codigoseguridad} onChange={handleChangeCodigoSeguridad} label="xxx" type="number"  variant="outlined" />
</FormGroup>
</Grid></Grid>


<Box style={{ display: 'flex', justifyContent: 'flex-end'}}>
<Button style={{margin: '2rem', padding: '.8rem', width: '20%', marginTop: '.5rem'}} color="error" onClick={submitPago1} variant="contained">Pagar</Button>

</Box>
   </Card>
   </Grid>
   <Grid style={{margin: '2rem', marginBottom: '0rem'}} item xs={12}  md={4}>
          <Palmera/>
        </Grid>
  <Grid style={{margin: '2rem'}} item xs={12}  md={12}>
          <Box className='blue'/>
        </Grid>
        { openB===true && <NoPagado/>}
        { open===true && <Pagado/>}

   </Grid>


    )
} 

export default PagoForm;