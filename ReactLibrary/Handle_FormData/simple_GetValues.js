import { useState } from 'react'
import './App.css'

function App() {
  let [values,setValues]=useState({
    name:'',
    email:'',
    password:''
  })
  const hadleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
    console.log(values)
  }


  return (
   <>
   <form action="" onSubmit={''}>
     <input type="text" name="name" id="name" onChange={(e)=>{hadleChange(e)}}/>
     <input type="text" name="email" id="email" onChange={(e)=>{hadleChange(e)}}/>
     <input type="text" name="password" id="password" onChange={(e)=>{hadleChange(e)}}/>
     <button type="submit">submit</button>
   </form>
   </>
  )
}

export default App