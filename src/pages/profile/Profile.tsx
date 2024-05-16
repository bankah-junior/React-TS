import React from 'react'
import avatar from '../../assets/avatar.jpg';
import NavBar from '../../components/general/NavBar';
import { Link } from 'react-router-dom';
import Content from '../../components/general/Content';

const Profile = () => {
  return (
    <div className='text-black bg-[#e4dddd] p-7'>
      <NavBar showSearch={true}>
        <div>
          <Link to="/" className="font-bold text-amber-500">Logout</Link>
          <span className="mx-2 ">|</span>
          <Link to="/profile/edit" className="font-bold text-amber-500">Edit</Link>
        </div>
      </NavBar>
      <div className="flex flex-col px-5 my-10 space-y-3 sm:items-center sm:px-10 sm:flex-row sm:space-x-6 sm:space-y-0">
        <div className="w-48 h-48 mb-2 rounded-full">
          <img src={avatar} alt="User" className='rounded-full' />
        </div>
        <ul className='flex flex-col space-y-0'>
          <li className='text-xs'>Software Engineer</li>
          <li className='text-2xl font-bold'>Anthony Bekoe Bankah</li>
          <li className='text-sm'>iam.Bankah</li>
          <br />
          <li>Some bio goes here</li>
        </ul>
      </div>

      <Content isProfile={true} />
    </div>
  )
}

export default Profile