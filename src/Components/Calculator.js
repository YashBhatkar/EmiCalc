import store from '../store.js';

//const axios = require('axios').default;

function Calculator() {
    const moratorium=(store.getState().moratorium)
    const gracePeriod=(store.getState().gracePeriod)
    const homeLoanAmount= (store.getState().homeLoanAmount)
    //console.log(gracePeriod)

   const interestRate= (store.getState().homeInterestRate)/(1200);
   let loanTenure= (store.getState().homeLoanTenure)-gracePeriod;
   if(loanTenure==0){
     loanTenure=1
   }


    let emiValue=(homeLoanAmount*interestRate*(Math.pow((1+interestRate),loanTenure)))/((Math.pow((1+interestRate),loanTenure))-1);
    emiValue= (emiValue*(loanTenure)/(loanTenure-moratorium))

    

    if(interestRate==0){
      emiValue=homeLoanAmount/loanTenure
    }

   
    /* if(loanTenure==0){
      emiValue=homeLoanAmount
    } */
    return emiValue
    

    /* axios({
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
    ) */
}

export default Calculator

