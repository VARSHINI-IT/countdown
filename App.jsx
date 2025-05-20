{/*import {useState} from "react"
import Sample from "./components/sample"

function App() {
  const [count, setCount, Count] = useState(0)
  {/*const myName = "varshi"
  const Age="19"
  const hobby="coding"*/}
  {/*return (
    <>
    <h1 className=" text-30x1 font-bold underline text-pink-600">Hello world</h1>
    <button className="bg-purple-400 p-2" onClick={() => setCount(count + 1)}>Click me</button><br></br>
    {/*<Sample myName={myName} Age={Age} hobby={hobby}/>*/}
    {/*<Sample count={count}/>
    </>
  )
}
export default App*/}




import {BrowserRouter, Routes , Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import pagenotfound 

function App () {

    return(
      <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Register" element={<Register />}/>
      </Routes>
      </BrowserRouter>
      </>
    )
        
}
export default App       
