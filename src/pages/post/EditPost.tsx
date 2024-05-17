import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const EditPost = (props: Props) => {
  return (
    <div className='text-black bg-[#e4dddd] p-7 sm:h-screen'>
      <center className="mb-10">
        <h1 className="text-3xl font-bold">EDIT POST</h1>
        <p className="text-lg">Edit your post</p>
      </center>

      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Heading</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Heading" required />
          </div>
          <div>
            <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tags</label>
            <input type="text" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="wed dev, fullstack dev,..." required />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="article" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Article</label>
          <textarea name="article" id="article" cols={30} rows={10}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
        </div>
          <div className="flex flex-col space-y-3 sm:space-x-6 sm:flex-row sm:space-y-0">
            <Link to={'/home'}>
              <button type="submit" className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">Submit</button>
            </Link>
            <Link to={'/post'}>
              <button type="submit" className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">Cancel</button>
            </Link>
          </div>
      </form>


    </div>
  )
}

export default EditPost