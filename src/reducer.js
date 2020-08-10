export default function reducer(state={}, action){
    if(action.type==='homeLoanAmount'){
        return Object.assign({}, state, {homeLoanAmount: action.payload.homeLoanAmount})
    }
    else if(action.type==='homeInterestRate'){
        return Object.assign({}, state, {homeInterestRate: action.payload.homeInterestRate})
    }
    else if(action.type==='homeLoanTenure'){
        return Object.assign({}, state, {homeLoanTenure: action.payload.homeLoanTenure})
    }
    else if(action.type==='moratorium'){
        return Object.assign({}, state, {moratorium: action.payload.moratorium})
    }
    else if(action.type==='gracePeriod'){
        return Object.assign({}, state, {gracePeriod: action.payload.gracePeriod})
    }
}