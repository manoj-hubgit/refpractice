import React, { useEffect, useRef } from 'react';

const Useref = () => {
    const myref=useRef();
useEffect(()=>{
    myref.current.focus();
},[])
    return (
        <div>
            <input type="text" ref={myref}/>
        </div>
    );
};

export default Useref;