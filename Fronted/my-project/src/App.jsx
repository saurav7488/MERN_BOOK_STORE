import { Outlet } from "react-router-dom"
import Navbar from "./component/Navbar"
import "./App.css"
import MyFooter from "./component/MyFooter"
function App() {

  return (
    <>
       <Navbar/>
       <div className="min-h-screen" >
       <Outlet/>
       </div>
       <MyFooter/>
    </>
  )
}

export default App
