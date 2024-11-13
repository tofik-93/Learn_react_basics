import {useState} from 'react';
export default function App(){
    const [advice ,setAdvice ] = useState("")
    async function getAdvice(){

    const res = await fetch("https://api.www.tofik.com");
    const data = await res.json()
    setAdvice(data.slip.advice);


}
return(
    <div>
   <h1>{advice}</h1>
   <button onClick={getAdvice}>GetAdvice</button>
    </div>

)
    
}













