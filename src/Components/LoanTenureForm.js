import React, { Component } from 'react'
import Symbol from './Symbol'
import './LoanTenureForm.css'
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

const LoanTenureMarks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 60,
    label: '60',
  },
  {
    value: 120,
    label: '120',
  },
  {
    value: 180,
    label: '180',
  },
  {
    value: 240,
    label: '240',
  },
  {
    value: 300,
    label: '300',
  },
  {
    value: 360,
    label: '360',
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
      backgroundColor: 'grey',
      height: 0,
      width: 0,
      marginTop: 0,
    },
    markActive: {
      opacity: 0,
      backgroundColor: 'grey',
    },
    markLabel:{
      color:'A5A3A3',
      padding:'0.5em'
    },

  })(Slider);

  
class LoanTenureForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '60'};

      store.dispatch({
        type:"homeLoanTenure",
        payload:{
          homeLoanTenure: this.state.value
        }
      });
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSliderChange = this.handleSliderChange.bind(this);
      }
  
    handleInputChange(event) {
      this.setState({value: event.target.value});
      store.dispatch({
        type:"homeLoanTenure",
        payload:{
          homeLoanTenure: event.target.value
        }
      });
    }
    handleSliderChange(event, newValue){
        this.setState({value: newValue})
        store.dispatch({
          type:"homeLoanTenure",
          payload:{
            homeLoanTenure: newValue
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
            Loan Tenure
          </label>
          <ThemeProvider theme={theme}>
          <OutlinedInput
            value={store.getState().homeLoanTenure}
            onChange={this.handleInputChange}
            endAdornment={<InputAdornment position="end">Months</InputAdornment>}
              labelWidth={0}
              style = {{width: 200}}
          />
           </ThemeProvider>
        </form>
        <PrettySlider 
        value={store.getState().homeLoanTenure}
        onChange={this.handleSliderChange}
        disabled={false}
        max={360}
        min={0}
        step={1}
        marks={LoanTenureMarks}
  
      />
       </React.Fragment>
      );
    }
  }

  export default LoanTenureForm