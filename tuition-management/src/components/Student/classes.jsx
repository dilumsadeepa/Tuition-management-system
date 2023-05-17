import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import Sidebar from './StudentSidebar';
import Dashhead from './Dashhead';


export default function DisableElevation() {
  
  return (
<section>
    {/* <!-- Dashboard --> */}
    <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">

    <Sidebar />


    {/* <!-- Main content --> */}
    <div class="h-screen flex-grow-1 overflow-y-lg-auto">

      {/* <!-- Header --> */}
      <Dashhead />



    <div className="Clist-background">
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >

       <div><h1>classes</h1></div> 


<      div style={{ display: 'flex', flexDirection: 'column' ,justifyContent: 'space-evenly', padding:60 , margin:100}}>
      <Button> Ordinary Level</Button>

      <Button>Grade 6</Button>
      <Button>Grade 7</Button>
      <Button>Grade 8</Button>
      <Button>Grade 9</Button>
      <Button>Grade 10</Button>
      <Button>Grade 11</Button>
      
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' ,justifyContent: 'space-evenly',padding:50 , margin:100 }}>
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

    </div>
    </div>
    </div>
    </section>
  );

}