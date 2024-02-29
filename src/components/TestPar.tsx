import React, { useState, useEffect } from 'react';
import Test from './Test';
const TestPar=()=> {
    const [count, setCount] = useState(0);
    useEffect(()=>{console.log("parent",count)})
    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <Test/>
        </div>
    );
  }
export default TestPar;