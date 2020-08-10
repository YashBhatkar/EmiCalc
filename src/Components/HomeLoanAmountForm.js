import { teal } from '@material-ui/core/colors';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import React from 'react';
import store from '../store';
import './HomeLoanAmountForm.css';
import Commas from './Commas';
import RemoveCommas from './RemoveCommas';



const HomeLoanAmountMarks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 2500000,
    label: '25L',
  },
  {
    value: 5000000,
    label: '50L',
  },
  {
    value: 7500000,
    label: '75L',
  },
  {
    value: 10000000,
    label: '100L',
  },
  {
    value: 12500000,
    label: '125L',
  },
  {
    value: 15000000,
    label: '150L',
  },
  {
    value: 17500000,
    label: '175L',
  },
  {
    value: 20000000,
    label: '200L',
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

  
class HomeLoanAmountForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '5000000'};

      store.dispatch({
        type:"homeLoanAmount",
        payload:{
          homeLoanAmount: this.state.value
        }
      });
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSliderChange = this.handleSliderChange.bind(this);
      }
  
    handleInputChange(event) {
     let noComma=RemoveCommas(event.target.value)
     if(isNaN(noComma)){
       return
     }
     noComma= noComma.replace(/ /g,'')
     noComma= noComma.replace(/,/g,'')
     noComma= noComma.replace(/\./g,'')
     if(noComma===''){
       noComma=0
     }
     if(noComma.length===2){
       if(noComma.charAt(0)==0){
         noComma=noComma.charAt(1)
       }
     }
     if(noComma>1000000000){
       noComma=1000000000
     }
     this.setState({value: noComma});
      store.dispatch({
        type:"homeLoanAmount",
        payload:{
          homeLoanAmount: noComma
        }
      });
    }
    handleSliderChange(event, newValue){
       this.setState({value: newValue})
        store.dispatch({
          type:"homeLoanAmount",
          payload:{
            homeLoanAmount: newValue
          }
        });
     }
    numberToText(value){

    }
    render() {
      return (
        <React.Fragment>
        <form>
          <label  style={{paddingRight:'1.5em'}}>
            Home Loan Amount
          </label>
          <ThemeProvider theme={theme}>
          <OutlinedInput
            value={Commas(store.getState().homeLoanAmount)}
            onChange={this.handleInputChange}
            endAdornment={<InputAdornment position="end">INR</InputAdornment>}
              labelWidth={0}
              style = {{width: 200}}
          />
           </ThemeProvider>
        </form>
        <PrettySlider 
        value={store.getState().homeLoanAmount}
        onChange={this.handleSliderChange}
        disabled={false}
        max={20000000}
        min={0}
        step={10000}
        marks={HomeLoanAmountMarks}
        
      />
               

       </React.Fragment>
       
      );
    }
  }

  export default HomeLoanAmountForm