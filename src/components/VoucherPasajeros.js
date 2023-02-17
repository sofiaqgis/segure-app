import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './style.css';
import Divider from '@mui/material/Divider';


function VoucherPasajeros({item}) {


  return (
  
       <Card sx={{ minWidth: 275, boxShadow: 'none', background: 'transparent'}}>
      <CardContent style={{ margin: '1rem',  marginTop: '0rem' }}>
      <Grid  container>


      <Grid item xs={12}  md={12}>
  
  <Typography style={{ marginBottom: '1rem', color: '#1A237E', fontWeight: 'bold'}} gutterBottom variant="h7" component="div">
    Datos personales/ Dados pessoias/ Personal information
    </Typography>
 
 </Grid>
       <Grid item xs={12}  md={12} style={{marginTop: '1rem'}}>
    
    <Typography sx={{ mb: 1.5 }} variant="h7" component="div">
     {item.apellido}
    </Typography>
    <Divider/>
    <Typography variant="h7" component="div" color="text.secondary">
     Apellido/ Sobrenombre/ Last Name
    </Typography>

    </Grid>
        <Grid item xs={12}  md={12} style={{marginTop: '1rem'}}>

        <Typography sx={{ mb: 1.5 }} variant="h7" component="div">
         {item.nombre}
        </Typography>
        <Divider/>
        <Typography variant="h7" component="div"  color="text.secondary">
         Nombre/ Nome/ Name
        </Typography>

        </Grid>
        <Grid item xs={12}  md={12} style={{marginTop: '1rem'}}>
      
        <Typography sx={{ mb: 1.5 }} variant="h7" component="div">
         {item.nacimiento}
        </Typography>
        <Divider/>
        <Typography variant="h7" component="div" color="text.secondary">
         Fecha de nacimiento/ Data de nascimento/ Date of Birth
        </Typography>

        </Grid>


        <Grid item xs={12}  md={12} style={{marginTop: '1rem'}}>

<Typography sx={{ mb: 1.5 }} variant="h7" component="div">
 {item.documento} {item.numero}
</Typography>
<Divider/>
<Typography variant="h7" component="div"  color="text.secondary">
 Tipo y Nro. de Doc/ Tipo e Nro. Carteira de Iden./ Doc. Type and Nr.
</Typography>

</Grid>
<Grid item xs={12}  md={12} style={{marginTop: '1rem'}}>

<Typography sx={{ mb: 1.5 }} variant="h7" component="div">
 {item.domicilio}
</Typography>
<Divider/>
<Typography variant="h7" component="div" color="text.secondary">
 Domicilio/ Endereco/ Address
</Typography>

</Grid>
<Grid item xs={12}  md={12} style={{marginTop: '1rem'}}>

<Typography sx={{ mb: 1.5 }} variant="h7" component="div">
 {item.ciudad}      {item.pais}
</Typography>
<Divider/>
<Typography variant="h7" component="div" color="text.secondary">
 Ciudad/ Cidade/ City      País/ Pais/ Country
</Typography>

</Grid>
<Grid item xs={12}  md={12} style={{marginTop: '1rem'}}>
<Typography sx={{ mb: 1.5 }} variant="h7" component="div" style={{fontWeight: 'bold', color: '#1A237E'}}>
 Contacto de emergencia/ Contato de emergencia/ Emergency contact 
</Typography>
<Typography sx={{ mb: 1.5 }} variant="h7" component="div">
 {item.nombreContacto} {item.apellidoContacto}
</Typography>
<Divider/>
<Typography variant="h7" component="div" color="text.secondary">
 Apellido y Nombre/ Nome e Sobrenome/ Name and Last Name
</Typography>

</Grid>

<Grid item xs={12}  md={12} style={{marginTop: '1rem'}}>

<Typography sx={{ mb: 1.5 }} variant="h7" component="div">
 {item.telefonoContacto}
</Typography>
<Divider/>
<Typography variant="h7" component="div"  color="text.secondary">
 Télefono/ Telefone/ Phone Number 
</Typography>

</Grid>
</Grid>


        </CardContent>
        </Card>
     
  
  
  );
}

export default VoucherPasajeros;