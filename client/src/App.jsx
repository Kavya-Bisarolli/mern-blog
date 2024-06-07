import{ BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUP from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"           
import project from "./pages/project"
export default function App() {
  return {
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUP/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/project" element={<project/>} />
        
      </Routes>
    </BrowserRouter>
  }
}
