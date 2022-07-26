import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";

import MUITest from "./components/MuiTest";

import  Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CartContainer from "./components/CartContainer";

const App = () => {

  return (
    <>
    <Navbar>
</Navbar>
<MUITest></MUITest>
<CartContainer/>

    </>
  );
};

export default App;