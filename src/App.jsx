  import { useState,useEffect,useRef } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'

  function App() {
  
  const [length,setLength] = useState(8);
  const [specialallowed, setSpecialAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const inRef=useRef(null);
  const copy=(e)=>{
    inRef.current.select();
    window.navigator.clipboard.writeText(password);
  }
  
  const passwordGenerator = () => {
  let str="abcdefghijklmnopqrstuvwxyz";
  if(specialallowed){
      str+="!@#$%^&*()_+";
    } 
  if(numberAllowed){
      str+="1234567890";
    }
    let pass="";
  for(let i=0;i<length;i++){
    pass+=str[Math.floor(Math.random()*str.length)];
  }     
  setPassword(pass);
  }
  useEffect(() => {passwordGenerator()}, [length, specialallowed, numberAllowed, ])
  return (
    <>
    <div className='bg-white max-w-xl mx-auto my-6 rounded-xl flex flex-wrap justify-center text-orange-500 px-auto ' >
<h1 className='font-bold ' >Password generator</h1>    
<div className='w-full px-3 py-3 flex bg-slate-400 mx-2 my-2 rounded-xl'>
  <input className='rounded-l-xl flex-grow' ref={inRef} value={password} type="text"  placeholder='password'/>
    <button className='bg-blue-500 rounded-r-xl px-2 py-2 ' onClick={copy} >COPY</button>
</div>
<div>
  <input  type="range" id='r' min={8} max={40} onChange={(e)=>setLength(e.target.value)} value={length}/>
  <label className='font-bold' htmlFor="r">LENGTH:{length}</label>
  <input defaultChecked={specialallowed} className='ml-3 mr-3 font-bold' type="checkbox" id='q' onChange={()=>setSpecialAllowed((prev)=>!prev)}/>
  <label className='font-bold' htmlFor="q">CHAR</label>
  <input className='ml-3 mr-3 font-bold ' type="checkbox" id='qq' onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
  <label className='font-bold' htmlFor="qq">NUMBER</label>
</div>
    </div>
    </>
  )
}

export default App
