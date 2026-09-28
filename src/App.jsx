import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import Cepe from './pages/Cepe'
import Bepc from './pages/Bepc'
import Bacc from './pages/Bacc'
import Subjects from './pages/Subjects'
import Quizzes from './pages/Quizzes'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cepe" element={<Cepe />} />
          <Route path="/bepc" element={<Bepc />} />
          <Route path="/bacc" element={<Bacc />} />
          <Route path="/sujets" element={<Subjects />} />
          <Route path="/quiz" element={<Quizzes />} />
          <Route path="/connexion" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App