import { useState } from "react";

function Counter(){
    let [Counter, setCounter] = useState(0);

    const addValue = () => {
      setCounter(Counter + 1);
      if (Counter == 20) {
        setCounter(20);
      }
    };

    
  
    const removeValue = () => {
      setCounter(Counter - 1);
      if (Counter == 0) {
        setCounter(0);
      }
    };
  
    return(
        
        <>
      <h1> hello world</h1>

      <h2>This is a counter project </h2>
      <h3>Counter Value : {Counter}</h3><br />
      <button onClick={addValue}>Add value +</button> <br />
      <button onClick={removeValue}>Remove value -</button><br />
    </>
    )
    
}

export default Counter;