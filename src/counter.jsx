import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0);
    
    const handelAdd = () =>{
        // const newCount = count + 1;
        // setCount(newCount);
        setCount(count+1);
    }
    const handelResuce = () =>{
        setCount(count-1);
    }

    return(
        
        <div style={{border: '2px solid lightGreen', padding: '20px',borderRadius:'8px'}}>
            <h2>We are working on state management</h2>
            <hr />
            <h3>Counter: {count} </h3>
            <button style={{marginRight:'20px'}} onClick={handelAdd}>Add</button>
            <button onClick={handelResuce}>Reduce</button>
        </div>
    )
}