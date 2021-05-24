import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputWithIcon() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Name</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl className={classes.margin} spacing={1}>
        <InputLabel htmlFor="input-with-icon-adornment">Rent Item</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
        <InputLabel htmlFor="input-with-icon-adornment">Rent Description</InputLabel>
          <Grid item>
            <textarea row='6' />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
