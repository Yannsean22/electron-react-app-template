import React, {useState} from "react";


const App=()=>{
    const [name, setName] = useState('name')
    return(
        <>
            <h1>{name}</h1>
            <button onClick={()=>setName('Yann')} >click me</button>
        </>
    )
}

export default App;
