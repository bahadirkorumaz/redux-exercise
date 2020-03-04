import { combineReducers } from 'redux';


//ACTION CREATORS (PEOPLE DROPPING OFF A FORM)
export const createPolicy = (name, amount) => {
    return {
        type : 'CREATE_POLICY',
        payload: {
            name : name,
            amount : amount
        }
    };
};



export const deletePolicy = (name) => {
    return { 
        type : 'DELETE_POLICY',
        payload : {
            name: name
        }
    };
};


export const createClaim = (name, amountOfMoneyToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload : {
            name : name,
            amountOfMoneyToCollect : amountOfMoneyToCollect
        }
    };
};



//REDUCERS (DEPARTMENTS)

const claimsHistoryReducer = (oldListOfClaims = [], action) => {
    //we care about this action (form)
    if(action.type === 'CREATE_CLAIM') {
        return [...oldListOfClaims, action.payload];
    }
    //we don't care about action (form)
    return oldListOfClaims; 
};


const accountingReducer = (bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }
    return bagOfMoney;
};


const policiesReducer = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name];
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name!==action.payload.name)  ;
    }
    return listOfPolicies;
}


// COMBINE REDUCERS
const rootReducer = combineReducers({
    accounting: accountingReducer,
    claimHistory: claimsHistoryReducer,
    policies: policiesReducer
})

export default rootReducer;