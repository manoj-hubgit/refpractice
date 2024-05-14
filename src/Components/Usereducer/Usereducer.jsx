import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction'
const Usereducer = () => {
    // const[state,dispatch]=Usereducer()
    const [state,dispatch]=useReducer(ReducerAction,0)
    return (
        <div>
            <h2>counter function using use reducer</h2>

            {state}
            <br/>
            <button onClick={()=>{dispatch({type:'add'})}}>Add</button>
            <button  onClick={()=>{dispatch({type:'sub'})}}>Sub</button>
        </div>
    );
};

export default Usereducer;