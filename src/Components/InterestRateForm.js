import { teal } from '@material-ui/core/colors';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import React from 'react';
import store from '../store.js';
import './InterestRateForm.css';
import DecimalCheck from './DecimalCheck.js';

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
      let answer= event.target.value
      if(isNaN(answer)){
        return
      }
      answer= answer.replace(/ /g,'')
      answer= answer.replace(/,/g,'')
      //answer= answer.replace(/./g,'')
      //console.log(answer)
      /* if(answer=='.'){
        answer=''
        console.log("lol")
      } */
      answer=DecimalCheck(answer)
      if(answer===''){
        answer=0
      }
      /* if(answer<1){
        answer=1
      } */
      if(answer>25){
        answer=25
      }
      if(answer.length===2){
        if(answer.charAt(0)==0){
          if(answer.charAt(1)!="."){
          answer=answer.charAt(1)
          }
        }
      }
  

      this.setState({value: answer});
      store.dispatch({
        type:"homeInterestRate",
        payload:{
          homeInterestRate: answer
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