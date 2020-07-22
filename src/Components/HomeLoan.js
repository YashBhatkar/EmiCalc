import React, { Component } from 'react'
import HomeLoanParameters from './HomeLoanParameters'
import Graph from './Graph.js'

 class HomeLoan extends Component {
    render() {
        return (
            <div>
                <h1  style={{ fontSize:30, fontWeight:'bold'}}>Home Loan</h1>
                <HomeLoanParameters/>
                <Graph/>
            </div>
        )
    }
}

export default HomeLoan
