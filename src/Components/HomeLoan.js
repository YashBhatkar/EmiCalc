import React, { Component } from 'react'
import Answer from './Answer.js'
import EmiTable from './EmiTable'
import Graph from './Graph.js'
import './HomeLoan.css'
import HomeLoanParameters from './HomeLoanParameters'



 class HomeLoan extends Component {
     
    render() {
        return (
            <div>
                <h1  style={{ fontSize:30, fontWeight:'bold'}}>Home Loan</h1>
                <div className='rowH'>
                <HomeLoanParameters style={{marginRight:'30em'}}/>
                <div style={{marginLeft:'12em', marginTop:'5em',marginBottom:'0em'}}>
                <Graph />
                </div>
                </div>
                <div style={{ marginBottom:'4em', marginLeft:'45em'}}>
                <Answer />
                </div>
                <EmiTable/>
            </div>
        )
    }
}

export default HomeLoan
