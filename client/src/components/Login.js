
  import React, { Component } from "react";
  import ReactDOM from "react-dom";

  import  Button from '@material-ui/core/Button';
  // import LoginIcon from '@mui/icons-material/Login';
  import Main from "./Main";
  import Box from "@material-ui/core/Box"

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import { signInWithGoogle } from "../config/utils";

  import Container from "@material-ui/core/Container"

  import LoginIcon from '@mui/icons-material/Login';
  //   import ButtonGroup from '@material-ui/core/ButtonGroup'
//   import Checkbox from '@material-ui/core/Checkbox'
//   import FormControlLabel from '@material-ui/core/FormControlLabel'
//   import CartContainer from "./components/CartContainer";
//   import DeleteModal from "./components/Modal";
//   import { openModal, closeModal } from "./features/modal/modalSlice";
  
//   import { calculateTotals, getCartItems, getGraphData } from "./features/cart/cartSlice";


  class Login extends Component {

    handleSubmit = async (e) => {
      e.preventDefault()
      console.log('ok')
    }
    

 render() {
  return (
    <>
    <Container style={{height: '50vh', width: '50vw', marginTop: '10em', backgroundColor: 'red', justifyContent: 'center'}}>
    <form onSubmit={this.handleSubmit}>
    <TextField
      id="name-input"
      name="name"
      label="Name"
      type="text"
      value='{formValues.name}'
      // onChange='handleInputChange'
    />  <Button  style={{height: '10em', width: '10em', backgroundColor: 'purple'}}
    onClick={signInWithGoogle}
    ><LoginIcon />
      Sign in with Google</Button>

      <Button type='submit' style={{height: '10em', width: '10em', backgroundColor: 'purple'}}
    >Submit</Button>
      </form>
    </Container>
    
    
        </>
      );
      }

 }
 

export default Login;