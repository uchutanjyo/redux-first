import React from "react";
import ReactDOM from "react-dom";
import  Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { TextField } from '@material-ui/core'

import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { createTheme } from '@mui/material/styles';
import { orange, green } from "@material-ui/core/colors";

import 'typeface-roboto-material'

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
root: {
  borderRadius: '5em',
  color: 'black',
  padding: '0 15em',
  background: 'grey'
}
});

const theme = createTheme({
  palette:  {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: green[400]
    }
  }
})

const ButtonStyled = () => {
  const classes = useStyles();
  return <Button className={classes.root} > Oh </Button>
}

const MUITest = () => {

  return (
    <>
    <Typography variant='h1'> Hey It's my website from 2005</Typography>

    <ThemeProvider theme={theme}>
     <div>OKAY, DESU</div>
     <ButtonGroup>
      <ButtonStyled />
     <Button startIcon={<SaveIcon/>} onClick={() => console.log('hello')} href="#" size="large" color="primary" variant="contained">
Click Me
</Button>
<Button startIcon={<SaveIcon/>} onClick={() => console.log('hello')} href="#" size="large" color="secondary" variant="contained">
Click Me Too
</Button>
</ButtonGroup>

<TextField variant='outlined' color="secondary" label="yo" placeholder="ysdfsdfsdf" />

<FormControlLabel control={<Checkbox inputProps={{'aria-label': 'secondary-checkbox'}} icon={<DeleteIcon/>} checkedIcon={<SaveIcon />}/>} />

</ThemeProvider>
    </>
  );
};

export default MUITest;