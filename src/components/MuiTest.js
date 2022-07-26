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
import Container from "@material-ui/core/Container"

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles({
root: {
  borderRadius: '5em',
  color: 'black',
  padding: '0 15em',
  background: 'grey'
}
});

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 50,
      marginTop: '2em'
    }
  },
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
        <ThemeProvider theme={theme}>
        <Container xs={3} lg={16} justify="center" maxWidth="sm">
          {/* <AppBar>
            <Toolbar>
              <IconButton>
                <MenuIcon></MenuIcon>
                <Typography variant='h3'>sadf</Typography>
              </IconButton>
            </Toolbar>
          </AppBar> */}

    <Typography variant='h2'> Hey It's my website from 2005</Typography>
    {/* body1, subtitle1 */}
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

<Grid container spacing={2}>
<Grid item>
  <Paper style={{height: 75, width: 50 }}>sd</Paper>
</Grid>
<Grid item>
  <Paper style={{height: 75, width: 50 }}>sd</Paper>
</Grid>
<Grid item>
  <Paper style={{height: 75, width: 50 }}>sd</Paper>
</Grid>
</Grid>

<FormControlLabel control={<Checkbox inputProps={{'aria-label': 'secondary-checkbox'}} icon={<DeleteIcon/>} checkedIcon={<SaveIcon />}/>} />
</Container>
</ThemeProvider>
    </>
  );
};

export default MUITest;