import React, { Component } from 'react'
import HomeLoanAmountForm from './HomeLoanAmountForm'
import InterestRateForm from './InterestRateForm'
import LoanTenureForm from './LoanTenureForm'


 class HomeLoanParameters extends Component {
    render() {
        return (
            <div style={{marginTop: '2em', fontSize:17}}>
               <HomeLoanAmountForm/>
               <div class="ui divider"></div>
               <InterestRateForm/>
               <div class="ui divider"></div>
               <LoanTenureForm/>
            </div>
        )
    }
}

export default HomeLoanParameters
