import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  shape: {
    backgroundColor:'teal',
    width: 25,
    height: 25,
  },
  shape2: {
    backgroundColor:'black',
    width: 25,
    height: 25,
  },
}));

export default function Legend() {
  const classes = useStyles();

  const rectangle = <div className={classes.shape} />;
  const rectangle2 = <div className={classes.shape2} />;
  return (
    <div className={classes.root}>
      <Badge color="teal" badgeContent=" ">
        {rectangle}
      </Badge>
      <label style={{marginLeft:'0.75em',fontSize:'15px'}}>Principle Amount</label>
      <Badge color="black" badgeContent=" ">
        {rectangle2}
        <label style={{marginLeft:'0.75em',fontSize:'15px'}}>Total Interest</label>
      </Badge>
    </div>
  );
  }