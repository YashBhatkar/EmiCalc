import React, { Component } from 'react'
import HomeLoanAmountForm from './HomeLoanAmountForm'
import InterestRateForm from './InterestRateForm'
import LoanTenureForm from './LoanTenureForm'
import Moratorium from './Moratorium'
import GracePeriod from './GracePeriod'

 class HomeLoanParameters extends Component {
    render() {
        return (
            <div>
            <div style={{marginTop: '2em', fontSize:17}}>
               <HomeLoanAmountForm/>
               <div class="ui divider"></div>
               <InterestRateForm/>
               <div class="ui divider"></div>
               <LoanTenureForm/>    
               <div class="ui divider"></div>
               <Moratorium/>   
               <div class="ui divider"></div>
               <GracePeriod/> 
               
            </div>
            </div>
        )
    }
}

export default HomeLoanParameters
