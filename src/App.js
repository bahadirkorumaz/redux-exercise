import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { createPolicy, deletePolicy, createClaim } from './redux/reducers/rootReducer'



function App( { store } ) {
  const bagOfMoney = useSelector(state => state.accounting);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>{ bagOfMoney }</h1>
      <button
          onClick={() =>
            dispatch(createClaim('Alex', 50))
          }
        >
         createClaim
        </button> 
        <button
          onClick={() =>
            dispatch(createPolicy('Alex', 20))
          }
        >
         createPolicy
        </button> 
    </div>
  );
}

export default App;
