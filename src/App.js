import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'

const App = () => {

  return (
    <>
    <Navbar></Navbar>
     <div>OKAY, DESU</div>
     <Button startIcon={<SaveIcon/>
    } onClick={() => console.log('hello')} href="#" size="large" color="primary" variant="contained">

Click Me

</Button>
    </>
  );
};

export default App;