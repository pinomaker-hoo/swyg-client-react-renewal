// ** Router Imports
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello world</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
