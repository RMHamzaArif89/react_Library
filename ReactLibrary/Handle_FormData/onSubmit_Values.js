import { useState } from 'react'
import './App.css'

function App() {
  let [values,setValues]=useState({
    name:'',
    email:'',
    password:''
  })
  let[totalValues,setTotalValues]=useState([])
  const hadleChange=(identifier,value)=>{
    setValues((pre)=>({...pre,[identifier]:value}))
  }

  let submit=()=>{
   
      setTotalValues((pre)=>([...pre,{values}]))
console.log(totalValues)
  }
 

  return (
   <>
   <form action="#" onSubmit={()=>{submit}}>
     <input type="text" name="name" id="name" onChange={(e)=>{hadleChange('name',e.target.value)}} value={values.name}/>
     <input type="text" name="email" id="email" onChange={(e)=>{hadleChange('email',e.target.value)}} value={values.email}/>
     <input type="text" name="password" id="password" onChange={(e)=>{hadleChange('password',e.target.value)}} value={values.password}/>
     <button type="submit" onClick={()=>{submit()}}>submit</button>
     
   </form>
   </>
  )
}

export default App