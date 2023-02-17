import { FormControl, InputLabel, Select, MenuItem, FormGroup, FormLabel, TextField} from '@mui/material';
import { useState } from 'react';
import ItemCount from './ItemCount';
import Button from '@mui/material/Button';
import React, { useContext } from 'react';
import { FormContext } from './FormContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './style.css';
import { useNavigate  } from "react-router-dom";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';





function Form1() {

  const [show, setShow] = useState(true);

  const AlertB = () => {
    return (

      <Collapse in={show}>
        <Alert style={{marginTop: '1rem'}} severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setShow(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Todos los campos son requeridos
        </Alert>
      </Collapse>
    )
  }


  const {calcTotal, variabB, calcItemCountFun} = useContext(FormContext);

  const [origen, setOrigen] = useState('');


  const handleChange = (event) => {
    setOrigen(event.target.value);

  };

const [destino, setDestino] = useState('');


const handleChangeb = (event) => {
    setDestino(event.target.value);
              
  }   
  

const [dias, setDias] = useState('');

  const handleChangec = (event) => {
    setDias(event.target.value);

  };
  

  const [salida, setSalida] = useState('');

  const handleChanged = (event) => {
    setSalida(event.target.value);
  };

  const [regreso, setRegreso] = useState('');

  const handleChangee = (event) => {
    setRegreso(event.target.value);
  };
 
  const [itemCount, setItemCount] = useState(0);

  const onAdd = (qty) => {

     setItemCount(qty) 
}


const [alert, setAlert] = useState(false);

let navigate = useNavigate();

const submitChange = (e) => {
 e.preventDefault();

  if(!destino || !dias || itemCount===0 || salida==='' || regreso==='' || !origen ) {
 
    navigate("/" );
    setAlert(true);
  } else {
    navigate("/result" );
  }
    calcTotal(itemCount, dias, destino);
    variabB(dias, destino, regreso, origen, salida); 
    calcItemCountFun(itemCount);
  
  }; 

  return (
    <Card style={{ margin: '1rem' }}>
      <CardContent> 
   
<FormGroup style={{margin: '1rem'}} sx={{ flexDirection: { xs: "column", sm: "row"} }}>
<FormLabel style={{margin: '1rem'}}>Origen</FormLabel>
<FormControl className="formfield" >
<InputLabel  id="demo-simple-select-label">Seleccione una opción</InputLabel>
  <Select 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={origen}
    label="Seleccione una opción"
    onChange={handleChange}
  required>
    <MenuItem value="Argentina">Argentina</MenuItem>
    <MenuItem value="Uruguay">Uruguay</MenuItem>
    <MenuItem value="Chile">Chile</MenuItem>
    <MenuItem value="Paraguay">Paraguay</MenuItem>
    <MenuItem value="Ecuador">Ecuador</MenuItem>
    <MenuItem value="Colombia">Colombia</MenuItem>
    <MenuItem value="Perú">Perú</MenuItem>
    <MenuItem value="Bolivia">Bolivia</MenuItem>
    <MenuItem value="Venezuela">Venezuela</MenuItem>
  </Select>
  </FormControl>

  <FormLabel style={{margin: '1rem'}}>Destino</FormLabel>
  <FormControl  className="formfield" >
 
  <InputLabel  id="demo-simple-select-label">Seleccione una opción</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    label="Seleccione una opción"
    id="demo-simple-select"
    value={destino}
    onChange={handleChangeb}
 
  required>
    <MenuItem value={5.1}>Europa</MenuItem>
    <MenuItem value={5}>Norte América</MenuItem>
    <MenuItem value={2.1}>Caribe-México</MenuItem>
    <MenuItem value={2}>Sudamerica</MenuItem>
    <MenuItem value={2.2}>África</MenuItem>
    <MenuItem value={3}>Asia</MenuItem>
    <MenuItem value={4}>Oceania</MenuItem>
  </Select>
</FormControl>
</FormGroup>
<FormGroup style={{margin: '1rem'}} sx={{ flexDirection: { xs: "column", sm: "row" } }}>
<FormLabel style={{margin: '1rem'}}>Salida</FormLabel>

<TextField   className="formfield"  id="outlined-basic" value={salida} onChange={handleChanged} label="dd/mm/yyyy" variant="outlined" />

<FormLabel style={{margin: '1rem'}}>Regreso</FormLabel>

<TextField   className="formfield"  id="outlined-basic" value={regreso} onChange={handleChangee} label="dd/mm/yyyy" variant="outlined"/></FormGroup>
<FormGroup style={{margin: '1rem'}} sx={{ flexDirection: { xs: "column", sm: "row" } }}>
<FormLabel style={{margin: '1rem'}}>Cantidad de días</FormLabel>
<FormControl   className="formfield" >
<InputLabel  id="demo-simple-select-label-c">Seleccione una opción</InputLabel>
 <Select 
   labelId="demo-simple-select-label-c"
   id="demo-simple-select-c"
   value={dias}
   label="Seleccione una opción"
   onChange={handleChangec}
 required>
   <MenuItem value={7}>1 a 10</MenuItem>
   <MenuItem value={12.3}>11 a 20</MenuItem>
   <MenuItem value={14.5}>21 a 30</MenuItem>
   <MenuItem value={16.9}>31 a 40</MenuItem>
   <MenuItem value={20.4}>41 a 50</MenuItem>
   <MenuItem value={23.8}>51 a 60</MenuItem>
   <MenuItem value={26.3}>61 a 70</MenuItem>
   <MenuItem value={28.7}>71 a 80</MenuItem>
   <MenuItem value={30.2}>81 a 90</MenuItem>
 </Select>

</FormControl>
</FormGroup>
<FormGroup style={{margin: '1rem'}} sx={{ flexDirection: { xs: "column", sm: "row"} }}>
<FormLabel style={{margin: '1rem'}}>Cantidad de pasajeros</FormLabel><ItemCount onAdd={onAdd} required/>
</FormGroup>
<FormGroup style={{margin: '1rem',  display: 'flex', justifyContent: 'center'}} sx={{ flexDirection: { xs: "row", sm: "row" } }}>
<Button onClick={submitChange} style={{padding: '1rem', marginTop: '1rem', width: '100%'}} variant="contained">Cotizar ahora</Button>
</FormGroup>
{ alert && <AlertB/>}
</CardContent>

</Card>





  );  

} 

  export default Form1;