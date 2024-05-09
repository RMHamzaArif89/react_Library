//contextComponents
import { createContext } from 'react';

const testContext = createContext();

// export default testContext;




//app page will be...
// import testContext from './components/Context'
//import Custom2 from './'

function App() {



    let con={
      a:10,
      b:20
    }
      
    let [val,setVal]=useState(0)
      return (
    <>
    <testContext.Provider value={{val,setVal,con}}  >
      <Custom2/>
    </testContext.Provider>
    </>
      )
    }
    
    export default App





    //Custom component will use in this way
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