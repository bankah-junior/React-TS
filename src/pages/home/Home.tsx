import React from 'react'
import NavBar from '../../components/general/NavBar'
import avatar from '../../assets/avatar.jpg';
import { Link } from 'react-router-dom';
import Content from '../../components/general/Content';

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='text-black bg-[#e4dddd] p-7'>
      <NavBar showSearch={true}>
        <Link to={'/profile'}>
          <div className="w-16 h-16 mb-2 rounded-full">
            <img src={avatar} alt="User" className='rounded-full' />
          </div>
        </Link>
      </NavBar>
      <Content isProfile={false} />
    </div>
  )
}

export default Home