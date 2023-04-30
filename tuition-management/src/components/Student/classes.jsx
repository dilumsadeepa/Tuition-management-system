import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';


export default function DisableElevation() {
  
  return (

    
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <Button> Ordinary Level</Button>

      <Button>Grade 6</Button>
      <Button>Grade 7</Button>
      <Button>Grade 8</Button>
      <Button>Grade 9</Button>
      <Button>Grade 10</Button>
      <Button>Grade 11</Button>
      

    <Button> Advancved Level </Button>

      <Button>Combined Maths</Button>
      <Button>Chemistry</Button>
      <Button>Physics</Button>
      <Button>Biology</Button>
      <Button>ICT</Button>
      <Button>Science for technology</Button>
      <Button>Engineering technology</Button>
      <Button>Biosystem technology</Button>
      <Button>Accounting</Button>

      </div>
    </ButtonGroup>
  );

}
