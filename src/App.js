import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Map from './landingpage'
import './App.css';

function convertToM (km) {
  return km * 1000
};

const useStyles = makeStyles((theme) => ({
  head: {
    marginTop: theme.spacing(4)
  },
  form: {
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(5)
  }
}));

function App() {
  const classes = useStyles();
  const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(distance)
      setDistance(distance)
      setFinalDistance(convertToM(distance))
      setDistance('')
  }
  const [distance, setDistance] = useState(null)

  const [finalDistance, setFinalDistance] = useState(0.0)

  return (
    <>
    <Container className={classes.head} maxWidth="md" gutterBottom>
      <Typography align="center" variant="h1">
        Find Your Dating area
      </Typography>
      <Typography align="center" variant="h5" gutterBottom>
        Build By GU
      </Typography>
      <Typography variant="subtitle1" align="center">
        Have you ever wonder how far your tinder's match lives? Yes I do, and this will help you to get the overall picture of distance from you to your tinder date
      </Typography>
      <Typography align="center" variant="h5">
        Need By GU
      </Typography>
      <Container className={classes.head} maxWidth="md">
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid justifyContent="center" container>
          <Grid item>
            <TextField
            style={{width: 400}}
            id="standard-basic" 
            label="Distance (Km)" 
            type="float"
            placeholder="ex: 12 (km)"
            value={distance}
            onChange={e => setDistance(e.target.value)}
            />
          </Grid>
        </Grid>
        
        <Button style={{marginTop: '1em', width: '100%' }} variant="contained" type="submit">Submit</Button>
    </form>
      <Map distance={finalDistance} />
      </Container>
    </Container>
    </>
  );
}

export default App;
