//main page of react
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ContextProvider} from './components/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextProvider>
    <App/>
   </ContextProvider>
  </React.StrictMode>,
)

//App page of react
import Custom2 from './components/Custom2'


function App() {
  return (
<>
<Custom2/>
</>
  )
}

// export default App





//context-api page
import { createContext, useState } from 'react';

const testContext = createContext(null);


export const ContextProvider=({children})=>{
    let con={
        a:10,
        b:20
      }
        
      let [val,setVal]=useState(0)

  return(
    <testContext.Provider value={{val,setVal,con}}>
    {children}
</testContext.Provider>
  )

}

export default testContext;



// cosumer page

import React, { useContext } from 'react'
import testContext from './Context'

function Custom2() {
    // let [val,setVal]=useContext(testContext)
    let {con,val,setVal}=useContext(testContext)
  return (
    <div onClick={()=>{setVal(val+1)}}>
        {val}
        fkdjksjdslkj
        {con.a}
    
    </div>
  )
}

// export default Custom2