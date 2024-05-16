import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login, Register, Home, Profile } from './pages/index'
import EditProfile from './pages/profile/EditProfile';

type Props = {}

const App = (props: Props) => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/edit' element={<EditProfile />} />
      </Routes>
    </Router>
  )
}

export default App