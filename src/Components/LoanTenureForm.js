import { teal } from '@material-ui/core/colors';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import React from 'react';
import store from '../store.js';
import './LoanTenureForm.css';
import { connect } from 'react-redux'

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
      let answer= event.target.value
      if(isNaN(answer)){
        //console.log("hey2")
        return
      }
      answer= answer.replace(/ /g,'')
     // console.log(answer)
      answer= answer.replace(/,/g,'')
     // console.log(answer)
     answer= answer.replace(/\./g,'')
  
      if(answer===''){
       // console.log(answer)
        answer=0
      }
      /* if(answer<1){
        answer=1
      } */
      if(answer>360){
        answer=360
      }
      if(answer<= parseInt(store.getState().moratorium)+parseInt(store.getState().gracePeriod)){
        store.dispatch({
          type:"moratorium",
          payload:{
            moratorium: 0
          }
        });
        store.dispatch({
          type:"gracePeriod",
          payload:{
            gracePeriod: 0
          }
        });
      }
      if(answer.length==2){
        if(answer.charAt(0)==0){
          answer=answer.charAt(1)
         // console.log("hey")
        }
      }

      this.setState({value: answer});
      store.dispatch({
        type:"homeLoanTenure",
        payload:{
          homeLoanTenure: answer
        }
      });
      if(store.getState().homeLoanTenure<=store.getState().moratorium){
        if(store.getState().homeLoanTenure==0){
          const value=0
          store.dispatch({
            type:"moratorium",
            payload:{
              moratorium: value
            }
          });
          
        }
        else{
          const value=store.getState().homeLoanTenure-1
          store.dispatch({
            type:"moratorium",
            payload:{
              moratorium: value
            }
          });
        }
      }
    }
    handleSliderChange(event, newValue){
      store.dispatch({
        type:"moratorium",
        payload:{
          moratorium: 0
        }
      });
      store.dispatch({
        type:"gracePeriod",
        payload:{
          gracePeriod: 0
        }
      });
    

     /*  if(newValue<= parseInt(store.getState().moratorium)+parseInt(store.getState().gracePeriod)){
        newValue=parseInt(store.getState().moratorium)+parseInt(store.getState().gracePeriod)+1
      } */
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
  const mapStateToProps = state => {
    return{

        moratorium: state.moratorium,
        gracePeriod: state.gracePeriod


    }
}
export default connect(mapStateToProps)(LoanTenureForm);    