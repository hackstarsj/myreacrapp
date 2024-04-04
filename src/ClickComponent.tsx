import { useEffect, useState } from "react";

const ClickComponent =(props:any)=>{

    const [counter,setCounter]=useState(0);

    useEffect(()=>{
        console.log("Use Effect Render")
    },[]);

    const onButtonClick=()=>{
        setCounter(counter+1);
    }

    return <div>
        <hr/>
        <button onClick={()=>{ setCounter(counter+1); props.changeParentCounter(props.parentCounter+1); } }>Click Me</button>
        <p>Counter : {counter}</p>
        <p>Global Counter : {props.parentCounter}</p>
        <hr/>
    </div>
}
export default ClickComponent;