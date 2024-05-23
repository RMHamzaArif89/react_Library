import { useState } from 'react'
import './App.css'

function App() {
  const [values,SetValues]=useState([])


  let submit=(event)=>{
  event.preventDefault();

  const reset=()=>{
     
  }
  
    const formData= new FormData(event.target)
    const data= Object.fromEntries(formData.entries());
    SetValues([...values,data])
    event.target.reset();
   
   
  }
  console.log(values)
 

  return (
   <>
   <form onSubmit={(e)=>{submit(e)}}>
     <input type="text" name="name" id="name" />
     <input type="text" name="email" id="email"  />
     <input type="text" name="password" id="password"/>
     <button type="submit" >submit</button>
     <button type="reset">Reset</button>
     
   </form>
   </>
  )
}

export default App