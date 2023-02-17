import Form1 from './Form1';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import './style.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';




function Portada () {


    return (

       <>
      <Grid className="wall" container spacing={1}>
          <Grid item  md={7}><div></div></Grid>
        <Grid item xs={10} md={4}>
            <Typography style={{ marginBottom: '1rem', color: 'white', fontWeight: 'bold', marginTop: '3rem' }} gutterBottom variant="h2" component="div"> Assistance travel </Typography>
     </Grid>
     <Grid item  md={1}><div></div></Grid>
        <Grid item lg={5}><div></div></Grid>
        <Grid item xs={12} md={12} lg={6}>
        <Form1/>
        </Grid>
        <Grid item md={1}>
          <div></div>
        </Grid>
        </Grid>
        <Grid container style={{background: 'white'}} item xs={12} md={12}>
       <List>
        <ListItem>
       <Button style={{color: '#37312c', padding: '0rem', margin: '0rem'}}  variant="text"> Politicas de Privacidad</Button>
       </ListItem>
       <ListItem>
       <Button style={{color: '#37312c', padding: '0rem', margin: '0rem'}}  variant="text"> Botón de baja y arrepentimiento </Button>
       </ListItem>
       <ListItem>
       <Button style={{color: '#37312c', padding: '0rem', margin: '0rem'}}  variant="text">  Defensa al Consumidor </Button>
       </ListItem>
       </List>
       </Grid>
       </>

     
      
   
      
       
    
      
     
    
    
  

    )

}

export default Portada;