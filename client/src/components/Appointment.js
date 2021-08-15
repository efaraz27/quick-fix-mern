import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DepartureBoardIcon from '@material-ui/icons/DepartureBoard';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Modern Tek Innovations
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    display: 'none',
  },
}));

export default function SignUp() {

  const history = useHistory()


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  let[error, setError] = useState()
  let [value, setValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address1: '',
    address2: '',
    phone: '',
    time:'',
    activeOrder: true,
  })


  const classes = useStyles();

  const sendData = async () =>{
    const data = value
    console.log(`SentData: ${JSON.stringify(data)}`);
    return await fetch(`https://quickfixcellphone.com/book`,{
        method:'POST',
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(response=>console.log(`Book Response: ${JSON.stringify(response)}`)).catch(err=>console.log(err))
  }

  const getOrderId = async () =>{
    const data = await fetch('https://quickfixcellphone.com/orderID', {method:"POST"})
    .then((t) => t.json())
    console.log(data)
  }

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!(re.test(String(email).toLowerCase()))){
      setError('Please Enter a Valid Email')
      return false
    }
    return true
  }
  const validateName = (name) => {
    if(name==='' ||name.length < 3){
      setError('First Name Should Contain Atleast 3 characters')
      return false
    }
    else if(!(/^[A-Za-z\s]+$/.test(name))){
      setError('Please Enter a Valid First Name')
      return false
    }
    else return true;
  }
  const validateAddress = (address) => {
    if(address.length<10){
      setError('Please Enter a Valid Address')
      return false
    }
    return true
  }
  const validatePhone = (phone) => {
    if(!(/^[0-9]{10}$/.test(phone))){
      setError('Please Enter a Valid 10 Digit Phone Number')
      return false
    }
    return true
  }

    const handleClick = () =>{
      if(!validateName(value.firstName)) return
      if(!validateName(value.lastName)) return
      if(!validateEmail(value.email)) return
      if(!validateAddress(value.address1)) return
      if(!validatePhone(value.phone)) return
      sendData()
      getOrderId()
      history.push('/exit')
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <DepartureBoardIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Book an Appointment
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e)=>{handleSubmit(e)}}>
          {error && 
            <Grid item xs={12}>
              <Alert severity="error">{error}</Alert>
              </Grid>}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e)=>{setValue({...value, firstName: e.target.value})}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e)=>{setValue({...value, lastName: e.target.value})}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e)=>{setValue({...value, email: e.target.value})}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="address-line1"
                label="Address Line 1"
                id="address-line1"
                autoComplete="address-line1"
                onChange={(e)=>{setValue({...value, address1: e.target.value})}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="address-line2"
                label="Address Line 2"
                id="address-line2"
                autoComplete="address-line2"
                onChange={(e)=>{setValue({...value, address2: e.target.value})}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Phone Number"
                id="phone"
                autoComplete="phone"
                onChange={(e)=>{setValue({...value, phone: e.target.value})}}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
              id="datetime-local"
              label="Preferred Date and Time"
              type="datetime-local"
              defaultValue="2021-05-24T10:30"
              className={classes.textField}
              InputLabelProps={{shrink: true,}}
              onChange={(e)=>{setValue({...value, time: e.target.value})}}
            />
            </Grid>
          </Grid>
          <Button
            type="submit"
            required
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
            Book an Appointment
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}