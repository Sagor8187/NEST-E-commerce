import Layout from "./component/Layout";

import About from "./page/About"
import Home from "./page/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
     
     <BrowserRouter>
     
        <Routes>
            <Route element ={<Layout></Layout>}>
                  <Route path="/" element={<Home></Home>}> </Route>
                  <Route path="/about" element ={<About></About>} ></Route>
            
            </Route>

        </Routes>

     </BrowserRouter>
     
    </>
  )
}

export default App
