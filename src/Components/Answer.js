import React, { Component } from 'react'
import { connect } from 'react-redux'
import Calculator from './Calculator.js'
import Commas from './Commas.js'
import GracePeriod from './GracePeriod.js'

class Answer extends Component {
    render() {
        let numMonths=this.props.homeLoanTenure
        let principle= Math.round(parseFloat(Calculator()))+""
        let interest=Math.round(parseFloat(((this.props.homeLoanTenure-this.props.gracePeriod)*Calculator())-this.props.homeLoanAmount))+""
        let total=Math.round(parseFloat(((this.props.homeLoanTenure-this.props.gracePeriod)*Calculator())))+""
        if(this.props.homeLoanTenure==0){
            principle= this.props.homeLoanAmount
            interest=0
            total=this.props.homeLoanAmount
        }
        principle=Commas(principle)
        interest=Commas(interest)
        total=Commas(total)

        
        return (
            <div className='rowH' style={{backgroundColor: 'white'}}>
                <div style={{marginRight:'3em'}}>
                <h2 style={{color:'teal', fontSize:'22px'}}>Loan EMI</h2>
                <h2 style={{color:'teal', fontSize:'22px'}}>₹ {principle}</h2>
                </div>
                <div style={{marginRight:'3em'}}>
                <h2 style={{color:'teal', fontSize:'22px'}}>Total Interest Payable</h2>
                <h2 style={{color:'teal', fontSize:'22px'}}>₹ {interest}</h2>
                </div>
                <div>
                <h2 style={{color:'teal', fontSize:'22px'}}>Total Payment</h2>
                <h2 style={{color:'teal', fontSize:'22px '}}>₹ {total}</h2>
                </div>
                </div>


        )
    }
}

const mapStateToProps = state => {
    return{
        homeLoanAmount: state.homeLoanAmount,
        homeLoanTenure: state.homeLoanTenure,
        homeInterestRate: state.homeInterestRate,
        moratorium :state.moratorium,
        gracePeriod: state.gracePeriod
    }
}
export default connect(mapStateToProps)(Answer);   