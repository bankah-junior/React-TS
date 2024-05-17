import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login, Register, Home, Profile, EditProfile, Post, EditPost } from './pages/index'

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
        <Route path='/post' element={<Post />} />
        <Route path='/post/:id' element={<EditPost />} />
      </Routes>
    </Router>
  )
}

export default App