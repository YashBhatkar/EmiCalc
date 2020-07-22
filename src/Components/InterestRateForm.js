import React, { Component } from 'react'
import Symbol from './Symbol'
import './InterestRateForm.css'
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { teal } from '@material-ui/core/colors';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import store from '../store.js'

const InterestRateMarks = [
        {
      value: 5,
      label: '5%',
    },
    {
      value: 7.5,
      label: '7.5%',
    },
    {
      value: 10,
      label: '10%',
    },
    {
      value: 12.5,
      label: '12.5%',
    },
    {
      value: 15,
      label: '15%',
    },
    {
        value: 17.5,
        label: '17.5%',
      },
      {
        value: 20,
        label: '20%',
      },
   
  ];
  

const theme = createMuiTheme({
    palette: {
      primary: teal,
    },
  });

const PrettySlider = withStyles({
    root: {
      color: 'teal',
      height: 8,
      width:'30em',
      padding:'0.75em'
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: 'white',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
      
    },
    track: {
      height: 12,
      borderRadius: 4,
      width:'30em'
    },
    rail: {
      height: 12,
      borderRadius: 4,
      width:'30em'
    },
    mark: {
        backgroundColor: '#bfbfbf',
        height: 0,
        width: 0,
        marginTop: 0,
      },
      markActive: {
        opacity: 0,
        backgroundColor: 'currentColor',
      },
      markLabel:{
        color:'A5A3A3',
        padding:'0.75em'
      },
  })(Slider);

  
class InterestRateForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '10'};

      store.dispatch({
        type:"homeInterestRate",
        payload:{
          homeInterestRate: this.state.value
        }
      });
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSliderChange = this.handleSliderChange.bind(this);
      }
  
    handleInputChange(event) {
      this.setState({value: event.target.value});
      store.dispatch({
        type:"homeInterestRate",
        payload:{
          homeInterestRate: event.target.value
        }
      });
    }
    handleSliderChange(event, newValue){
        this.setState({value: newValue})
        store.dispatch({
          type:"homeInterestRate",
          payload:{
            homeInterestRate: newValue
          }
        });
    }
    numberToText(value){
      
    }
    render() {
      return (
        <React.Fragment>
        <form>
          <label  style={{ paddingRight:'5em'}}>
            Interest Rate
          </label>
          <ThemeProvider theme={theme}>
          <OutlinedInput
            value={store.getState().homeInterestRate}
            onChange={this.handleInputChange}
            endAdornment={<InputAdornment position="end">%</InputAdornment>}
              labelWidth={0}   
              style = {{width: 200}} 
          />
          </ThemeProvider>
          </form>
        <PrettySlider 
        value={store.getState().homeInterestRate}
        onChange={this.handleSliderChange}
        disabled={false}
        max={20}
        min={5}
        step={0.25}
        marks={InterestRateMarks}
      />
       </React.Fragment>
      );
    }
  }

  export default InterestRateForm