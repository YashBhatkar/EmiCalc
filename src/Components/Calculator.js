import React from 'react'
import store from '../store.js'
import {Axios} from 'axios'

const axios = require('axios').default;

function Calculator() {
    /* const homeLoanAmount= (store.getState().homeLoanAmount)

   const interestRate= (store.getState().homeInterestRate)/(1200);
   const loanTenure= (store.getState().homeLoanTenure);


    const emiValue=(homeLoanAmount*interestRate*(Math.pow((1+interestRate),loanTenure)))/((Math.pow((1+interestRate),loanTenure))-1);
    console.log(emiValue) */

    axios({
        method: 'get',
        url: 'http://localhost:3200/',
        data: {
          homeLoanAmount: store.getState().homeLoanAmount,
          interestRate: (store.getState().homeInterestRate)/(1200),
          loanTenure: (store.getState().homeLoanTenure)
        }
      })
    .then(response => {
        console.log(response)
    })
    .catch(error =>{
        console.log(error)
    })
    return (
  <div/>
    )
}

export default Calculator

