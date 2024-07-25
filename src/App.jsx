import { Header } from "./Components/Header"
import { Home } from "./Routes/Home"
import { Contact } from "./Routes/Contact"
import { About } from "./Routes/About"
import { Proyects } from "./Routes/Proyects"
import {Route,Routes} from "react-router-dom"
//import { Juego } from "./js/Juego"
export const App = () => {
  return (
    <> 
        <Header></Header>
        <Routes>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/proyects" element={<Proyects></Proyects>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
        </Routes>
    </>
  )
}
