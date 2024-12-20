import CricketScore from './Components/CricketScore'
import { Routes,Route } from 'react-router-dom'
import Login from './Components/Login'
import Header from './Components/Header'
function App() {
  

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<CricketScore></CricketScore>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    
    </>
  )
}

export default App
