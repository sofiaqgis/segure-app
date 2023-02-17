import CardData from './CardContent';
import Card1 from './Card';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './style.css';


export default function Result() {
  return (
    <Box sx={{ flexGrow: 1 }} className="wall1">
      <Grid style={{alignItems: 'center'}} container >
        {
    
    CardData.map(item => ( 
      
        <Grid  style={{margin: '1rem'}} key={item.id} item xs={12}  md={12}>
       <Card1 item={item}/> 
       </Grid>
 
      
    
    )) 
    
    } 
      </Grid>
    </Box>
  );
}