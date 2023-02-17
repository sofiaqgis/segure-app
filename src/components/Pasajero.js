import { TextField, InputLabel, Select, MenuItem, FormGroup, FormLabel } from '@mui/material';
import { useState } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


function Pasajero ({onAdd}) {

    const [nombre, setNombre] = useState('');



    const handleChangeNombre = (event) => {
      setNombre(event.target.value);

  
    };
  
    const [nacimiento, setNacimiento] = useState('');
  
  
    const handleChangeNacimiento = (event) => {
      setNacimiento(event.target.value);

  
    };
  
    const [apellido, setApellido] = useState('');
  
  
    const handleChangeApellido = (event) => {
      setApellido(event.target.value);

  
    };
  
    const [documento, setDocumento] = useState('');
  
  
    const handleChangeDocumento = (event) => {
      setDocumento(event.target.value);

  
    };
  
    const [numero, setNumero] = useState('');
  
  
    const handleChangeNumero = (event) => {
      setNumero(event.target.value);
 
  
    };
  
    const [pais, setPais] = useState('');
  
  
    const handleChangePais = (event) => {
      setPais(event.target.value);
 
  
    };
  
    const [ciudad, setCiudad] = useState('');
  
  
    const handleChangeCiudad = (event) => {
      setCiudad(event.target.value);
 
  
    };
  
    const [domicilio, setDomicilio] = useState('');
  
  
    const handleChangeDomicilio = (event) => {
      setDomicilio(event.target.value);
     
  
    };
  
    const [telefono, setTelefono] = useState('');
  
  
    const handleChangeTelefono = (event) => {
      setTelefono(event.target.value);
    
  
    };
  
    const [apellidoContacto, setApellidoContacto] = useState('');
  
  
    const handleChangeApellidoContacto = (event) => {
      setApellidoContacto(event.target.value);
      
  
    };
  
    const [nombreContacto, setNombreContacto] = useState('');
  
  
    const handleChangeNombreContacto = (event) => {
      setNombreContacto(event.target.value);
      
  
    };
  
    const [telefonoContacto, setTelefonoContacto] = useState('');
  
  
    const handleChangeTelefonoContacto = (event) => {
      setTelefonoContacto(event.target.value);

  
    };

    let pasajeroDatos = {
      nombre: nombre,
      nacimiento: nacimiento,
      apellido: apellido,
      documento: documento,
      numero: numero,
      pais: pais,
      ciudad: ciudad,
      domicilio: domicilio,
      telefono: telefono,
      apellidoContacto: apellidoContacto,
      nombreContacto: nombreContacto,
      telefonoContacto: telefonoContacto

    }

    const [disabledNombre, setDisabledNombre] = useState(false);
    const [disabledApellido, setDisabledApellido] = useState(false);
    const [disabledNacimiento, setDisabledNacimiento] = useState(false);
    const [disabledDocumento, setDisabledDocumento] = useState(false);
    const [disabledNumero, setDisabledNumero] = useState(false);
    const [disabledPais, setDisabledPais] = useState(false);
    const [disabledCiudad, setDisabledCiudad] = useState(false);
    const [disabledDomicilio, setDisabledDomicilio] = useState(false);
    const [disabledTelefono, setDisabledTelefono] = useState(false);
    const [disabledNombreContacto, setDisabledNombreContacto] = useState(false);
    const [disabledApellidoContacto, setDisabledApellidoContacto] = useState(false);
    const [disabledTelefonoContacto, setDisabledTelefonoContacto] = useState(false);
    
    const disabledOption = () => {
      setDisabledNombre(true);
      setDisabledApellido(true);
      setDisabledNacimiento(true);
      setDisabledDocumento(true);
      setDisabledNumero(true);
      setDisabledPais(true);
      setDisabledCiudad(true);
      setDisabledDomicilio(true);
      setDisabledTelefono(true);
      setDisabledNombreContacto(true);
      setDisabledApellidoContacto(true);
      setDisabledTelefonoContacto(true);

    }



    return (

   <Card sx={{ minWidth: 275, margin: '1rem', border: 'none', boxShadow: 'none'}}>
   <Typography style={{ margin: '2rem', color: '#1776D1' }} gutterBottom variant="h7" component="div">
     Datos personales del pasajero: 
     </Typography>
       <FormGroup style={{margin: '1rem', display: 'flex', justifyContent: 'space-evenly'}} sx={{ flexDirection: { xs: "column", sm: "row" } }} >

       <FormLabel style={{margin: '1rem'}}>Nombre</FormLabel>
   <TextField  className="formfield2" id="outlined-basic" value={nombre} disabled={disabledNombre} onChange={handleChangeNombre}  variant="outlined" />

   <FormLabel style={{margin: '1rem'}}>Apellido</FormLabel>
   <TextField className="formfield2"  id="outlined-basic" value={apellido} disabled={disabledApellido} onChange={handleChangeApellido}  variant="outlined" />

   <FormLabel style={{margin: '1rem'}}>Fecha de nacimiento</FormLabel>
   <TextField  className="formfield2"  id="outlined-basic" value={nacimiento}  disabled={disabledNacimiento} onChange={handleChangeNacimiento} label="dd/mm/yyyy" variant="outlined" />

</FormGroup>

<FormGroup style={{margin: '1rem',  display: 'flex', justifyContent: 'space-evenly'}} sx={{ flexDirection: { xs: "column", sm: "row" } }} >
<FormLabel style={{margin: '1rem'}}>Documento de identidad</FormLabel>
<FormControl className="formfield3">

<InputLabel  id="demo-simple-select-label">Tipo</InputLabel>
<Select 
  labelId="demo-simple-select-label"
  label="Seleccione una opción"
  id="demo-simple-select"
  value={documento}
  disabled={disabledDocumento}
  onChange={handleChangeDocumento}
>
  <MenuItem value="Cédula">Cédula</MenuItem>
   <MenuItem value="Documento">Documento</MenuItem>
  <MenuItem value="Pasaporte">Pasaporte</MenuItem>

</Select>
</FormControl>

<FormLabel style={{margin: '1rem'}}>Número</FormLabel>
   <TextField className="formfield2" id="outlined-basic" value={numero} onChange={handleChangeNumero}  disabled={disabledNumero}  variant="outlined" />

   <FormLabel style={{margin: '1rem'}}>País de residencia</FormLabel>
   <TextField className="formfield2"  id="outlined-basic" value={pais}  disabled={disabledPais} onChange={handleChangePais} variant="outlined" />

</FormGroup>
   <FormGroup style={{margin: '1rem',  display: 'flex', justifyContent: 'space-evenly'}} sx={{ flexDirection: { xs: "column", sm: "row" } }} >
   <FormLabel style={{margin: '1rem'}}>Ciudad</FormLabel>
   <TextField className="formfield2" id="outlined-basic" value={ciudad}  disabled={disabledCiudad} onChange={handleChangeCiudad}  variant="outlined" />
   <FormLabel style={{margin: '1rem'}}>Domicilio</FormLabel>
   <TextField className="formfield2" id="outlined-basic" value={domicilio}  disabled={disabledDomicilio} onChange={handleChangeDomicilio} variant="outlined" />
   <FormLabel style={{margin: '1rem'}}>Teléfono</FormLabel>

   <TextField className="formfield2"  id="outlined-basic" value={telefono} type="number"  disabled={disabledTelefono} onChange={handleChangeTelefono} variant="outlined" />

</FormGroup>

<Typography style={{ margin: '2rem', color: '#1776D1' }} gutterBottom variant="h7" component="div">
     En caso de emergencia nos comunicaremos con
     </Typography>
<FormGroup style={{margin: '1rem',  display: 'flex', justifyContent: 'space-evenly'}} sx={{ flexDirection: { xs: "column", sm: "row" } }}>
<FormLabel style={{margin: '1rem'}}>Apellido</FormLabel>
   <TextField className="formfield2" id="outlined-basic" value={apellidoContacto}  disabled={disabledApellidoContacto} onChange={handleChangeApellidoContacto} variant="outlined" />
   <FormLabel style={{margin: '1rem'}}>Nombre</FormLabel>

   <TextField  className="formfield2" id="outlined-basic" value={nombreContacto}  disabled={disabledNombreContacto} onChange={handleChangeNombreContacto}  variant="outlined" />

   <FormLabel style={{margin: '1rem'}}>Teléfono</FormLabel>
   <TextField className="formfield2" id="outlined-basic" value={telefonoContacto} type="number" disabled={disabledTelefonoContacto} onChange={handleChangeTelefonoContacto} variant="outlined" />
</FormGroup>
<Box style={{ textAlign:'center', display: 'flex', justifyContent: 'flex-end', margin: '3rem', marginBottom: '0rem'}}>
<Button onClick={()=>
  {
    onAdd(pasajeroDatos); 
    disabledOption();
    }} variant="contained">Cargar pasajero</Button>
</Box>
   </Card>
    )
} 

export default Pasajero;