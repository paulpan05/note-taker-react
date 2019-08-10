import React from 'react';
import Grid from '@material-ui/core/Grid';
import { authPageStyles } from '../constants/ComponentStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const AuthPage: React.FC = () => {
  const classes = authPageStyles();
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.pageGrid}
    >
      <Grid item>
        <img src={logo} alt='logo' className={classes.logo} />
      </Grid>
      <Grid item>
        <Typography align='center' variant='h6' gutterBottom>
          A flexible note taking app with custom integrations.
        </Typography>
      </Grid>
      <Grid
        container
        item={true}
        className={classes.innerGrid}
      >
        <TextField
          label='Email'
          type='email'
          name='email'
          autoComplete='email'
          margin='normal'
          variant='outlined'
          fullWidth
        />
        <TextField
          label='Password'
          type='password'
          autoComplete='current-password'
          margin='normal'
          variant='outlined'
          fullWidth
        />
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          spacing={6}
          className={classes.loginGrid}
        >
          <Grid item>
            <Button
              variant='contained'
              color='primary'
            >
              Log in
            </Button>
          </Grid>
          <Grid item>
            <MuiLink component={ Link } to='/forgot-password' variant='body1'>
              Forgot password?
          </MuiLink>
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          justify='center'
          className={classes.signupGrid}
        >
          <Typography variant='body1'>
            New to the app?&nbsp;
          </Typography>
          <MuiLink component={ Link } to='/signup' variant='body1'>
            Sign up
          </MuiLink>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AuthPage;