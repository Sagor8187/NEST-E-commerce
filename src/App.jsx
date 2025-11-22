import Layout from "./component/Layout";

import About from "./page/About"
import Home from "./page/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Megamenu from "./page/Megamenu";
import Blog from "./page/Blog";
import Contact from "./page/Contact";
import Login from "./page/Login";



function App() {
  

  return (
    <>
     
     <BrowserRouter>
     
        <Routes>
            <Route element ={<Layout></Layout>}>
                  <Route path="/" element={<Home></Home>}> </Route>
                  <Route path="/about" element ={<About></About>} ></Route>
                  <Route path="/megamenu" element ={<Megamenu></Megamenu>} ></Route>
                  <Route path="/blog" element ={<Blog></Blog>}></Route>
                  <Route path="/contact" element={<Contact></Contact>}></Route>
                  <Route path="/login" element={<Login></Login>}></Route>

            
            </Route>

        </Routes>

     </BrowserRouter>
     
    </>
  )
}

export default App
