import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';



function ItemCount ({onAdd}) {

 
    const[amount, setAmount] = useState(0);

    const Increment = () => {
        setAmount(amount+1); 
        onAdd(amount+1);
    }
    
    const Decrement = () => {
        setAmount(amount-1); 
    }
    
        
      return (
      
        <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
        <Button  disabled={amount <= 1} onClick={Decrement}>-</Button>
        <div style={{padding: '1rem', color: '#5B5C5B'}}>   {amount}    </div>
        <Button  disabled={amount >= 30} onClick={Increment}>+</Button>  
        </ButtonGroup>
       
        
    )


  }
  
  export default ItemCount;





