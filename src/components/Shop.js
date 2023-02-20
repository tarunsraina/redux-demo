import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export default function Shop(){

    const dispatch = useDispatch()
    const {depositMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch)
    return(
        <div>
        <center>
       <div className="container">
            <h3>Deposit/Withdraw</h3>
            <button className='btn btn-primary mx-2' onClick={()=>{depositMoney(100)}}> + </button>
            Update balance
            <button className='btn btn-primary mx-2' onClick={()=>{withdrawMoney(100)}}> - </button>
       </div>
        </center>
       <h3>Learnt topics:</h3>
       <ul>
        <li>Redux Library</li>
        <li>Action Creator</li>
        <li>Reducer</li>
        <li>Redux store: Accessing and updating state</li>
        <li>useDispatch hook</li>
        <li>Binding Action Creators</li>
        <li>applyMiddleware using redux-thunk</li>
       </ul>
        <a href='https://github.com/tarunsraina/redux-demo'>Source code</a>

       </div>
       
      )
}

