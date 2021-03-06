import { teal } from '@material-ui/core/colors';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import React from 'react';
import store from '../store.js';
import './LoanTenureForm.css';
import { connect } from 'react-redux'


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

  
class GracePeriod extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '0'};

      store.dispatch({
        type:"gracePeriod",
        payload:{
          gracePeriod: this.state.value
        }
      });
     // console.log(store.getState.gracePeriod)
      this.handleInputChange = this.handleInputChange.bind(this);
     
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
     
      if(answer>=parseInt(store.getState().homeLoanTenure)-parseInt(store.getState().moratorium)){
        answer=(store.getState().homeLoanTenure)-parseInt(store.getState().moratorium)-1
        if(answer<0){
          answer=0
        }
        //console.log(store.getState().homeLoanTenure)
      }
        //console.log(store.getState().homeLoanTenure)
      
      if(answer.length==2){
        if(answer.charAt(0)==0){
          answer=answer.charAt(1)
         // console.log("hey")
        }
      }

      this.setState({value: answer});
      store.dispatch({
        type:"gracePeriod",
        payload:{
          gracePeriod: answer
        }
      });
    }

    numberToText(value){
      
    }
    render() {
      return (
        <React.Fragment>
        <form>
          <label  style={{ paddingRight:'4.5em'}}>
            Grace Period
          </label>
          <ThemeProvider theme={theme}>
          <OutlinedInput
            value={store.getState().gracePeriod}
            onChange={this.handleInputChange}
            endAdornment={<InputAdornment position="end">Months</InputAdornment>}
              labelWidth={0}
              style = {{width: 200}}
          />
           </ThemeProvider>
        </form>
    
       </React.Fragment>
      );
    }
  }

  const mapStateToProps = state => {
    return{

        homeLoanTenure: state.homeLoanTenure,
        moratorium: state.moratorium


    }
}
export default connect(mapStateToProps)(GracePeriod);  