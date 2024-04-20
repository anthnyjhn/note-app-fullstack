import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/create' element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
