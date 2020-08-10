import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RadialChart } from 'react-vis'
import Calculator from './Calculator.js'
import Legend from './Legend.js'
import Moratorium from './Moratorium.js'
import { StepTitle } from 'semantic-ui-react'




class Graph extends Component {	

   /*  constructor(props) {
        super(props);
        this.state = {homeLoanAmount: store.getState().homeLoanAmount};
        this.state = {homeLoanTenure: store.getState().homeLoanTenure};
        this.state ={emi: Calculator()}
    } */

  /*   componentDidUpdate(prevProps, prevState){
        if(prevState.homeLoanAmount !== store.getState().homeLoanAmount
        || prevState.homeLoanTenure !== store.getState().homeLoanTenure 
        || prevState.emi !== Calculator()){
        this.state = {homeLoanAmount: store.getState().homeLoanAmount};
        this.state = {homeLoanTenure: store.getState().homeLoanTenure};
        this.state ={emi: Calculator()}
        }
    } */

      render() {
        let numMonths=this.props.homeLoanTenure
        let principle= Math.round(this.props.homeLoanAmount)
        let interest=Math.round(parseFloat(((this.props.homeLoanTenure-this.props.gracePeriod)*Calculator())-this.props.homeLoanAmount))
        let principleAngle=((360*principle)/(principle+interest))
        let interestAngle=((360*interest)/(principle+interest))
        if(principle==0){
            principleAngle=1
            interestAngle=0
        }
        if(this.props.homeLoanTenure==0){
            principleAngle=1
            interestAngle=0
        }
        if(this.props.homeInterestRate==0){
            principleAngle=1
            interestAngle=0
        }
        let myData = 
        [{angle: principleAngle, label:'Principle Loan Amount',color:'teal'}
        , {angle: interestAngle, label:'Total Interest',color:'black'}]
        //let myData = [{angle: '300', label:'Principle Loan Amount'}, {angle: '60', label:'Total Interest'}]
     
		return (
		<div>
            <h2 style={{fontSize:'25px',marginLeft:'2px'}}>Break-up of Total Payments</h2>
            <RadialChart
             data={myData}
             width={300}
             height={300} 
             animation={true}
             colorType="literal"
             
             //showLabels={true}
             />
             <Legend/>
            			
        </div>
		);
	}
}
//store.subscribe(Graph.change()) 

const mapStateToProps = state => {
    return{
        homeLoanAmount: state.homeLoanAmount,
        homeLoanTenure: state.homeLoanTenure,
        homeInterestRate :state.homeInterestRate,
        moratorium: state.moratorium,
        gracePeriod: state.gracePeriod

    }
}
export default connect(mapStateToProps)(Graph);      
