import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Layout from "./Layout"
import Profile from "./pages/Profile"




function App() {
  

  return (
    <Layout>
     <Routes>
      <Route path="/" element ={ <Home/>} />
      <Route path="/auth" element ={ <Auth/>} />
      <Route path="/:user" element ={ <Profile/>} />
     </Routes>
    </Layout>
  )
}

export default App
