import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import View from './pages/View'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/create' element={<Create/>}/>
        <Route path='/view/:note_id' element={<View/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
