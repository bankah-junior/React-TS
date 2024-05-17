import React, { useState } from 'react'
import NavBar from '../../components/general/NavBar'
import avatar from '../../assets/avatar.jpg';
import { Link } from 'react-router-dom';

type Props = {}

const Post = (props: Props) => {
    let [likes, setLikes] = useState<number>(5);
    const handleLikeClick = () => {
        setLikes(likes = likes + 1)
    }
  return (
    <div className='text-black bg-[#e4dddd] p-7'>
      <NavBar showSearch={false}>
        <Link to={'/profile'}>
          <div className="w-16 h-16 mb-2 rounded-full">
            <img src={avatar} alt="User" className='rounded-full' />
          </div>
        </Link>
      </NavBar>
      <div className="flex flex-col-reverse md:flex-row">
            <div className="w-full sm:2/3">
                <div className='mt-1 sm:mt-3 sm:px-4'>
                    <div  className="block w-full p-6 my-5 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-row justify-between">
                            <Link to={"/home"} className="p-2 shadow sm:m-3 btn">Back</Link>
                            <Link to={"/post/0"} className="p-2 shadow sm:m-3 btn">Edit Post</Link>
                        </div>
                        <br />
                        <h5 className="mb-4 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">Heading</h5>
                        <span className='block mb-12 text-center'>Web dev, Mobile App, Programming</span>
                        <p className="mb-6 font-normal text-gray-700 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non distinctio, similique nemo vero nesciunt natus quisquam ipsam provident dignissimos, quos eum esse voluptates? Et debitis laborum vitae atque? Molestias assumenda alias facere perspiciatis et ea repellat sit. Consequatur velit architecto nesciunt excepturi distinctio quasi deleniti assumenda exercitationem saepe esse inventore ex, tempora omnis labore beatae aliquam commodi tempore suscipit. Illum sequi, beatae ipsa nulla eum laboriosam minus voluptate aliquid iure omnis? Repudiandae aliquam velit officiis tempore, expedita veritatis maiores necessitatibus possimus sit dignissimos rem aliquid unde aperiam repellat a, neque quaerat deleniti! Odio consectetur fugiat ipsum beatae vel, alias praesentium?
                        </p>
                        <div className="flex justify-between my-10">
                            <span>{likes} <button onClick={handleLikeClick}>👍🏾</button></span>
                            <span>{likes} Comments</span>
                            <span>Share</span>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold">Comments</h2>
                            
                            <div className='my-4'>
                                <div  className="block w-full p-6 my-5 bg-white border border-gray-200 rounded-lg shadow-2xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <p className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white">iam.Bankah</p>
                                    <p className="mt-3 font-normal text-gray-700 dark:text-gray-400">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta sequi magnam maiores at nesciunt consequatur fugit, illum vero dignissimos, ducimus, expedita cum? Amet, earum veritatis debitis dolorum laboriosam, corrupti voluptatibus temporibus sit, ipsam doloremque explicabo repellendus eveniet a blanditiis officiis voluptas ullam ipsa alias id quisquam? Error, nisi iusto. In!
                                    </p>
                                    <div className="flex justify-between mt-5">
                                        <button>Edit</button>
                                        <span>Share</span>
                                        <span>Delete</span>
                                    </div>
                                </div>
                            </div>
                            <div className='my-4'>
                                <div  className="block w-full p-6 my-5 bg-white border border-gray-200 rounded-lg shadow-2xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <p className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white">iam.Bankah</p>
                                    <p className="mt-3 font-normal text-gray-700 dark:text-gray-400">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta sequi magnam maiores at nesciunt consequatur fugit, illum vero dignissimos, ducimus, expedita cum? Amet, earum veritatis debitis dolorum laboriosam, corrupti voluptatibus temporibus sit, ipsam doloremque explicabo repellendus eveniet a blanditiis officiis voluptas ullam ipsa alias id quisquam? Error, nisi iusto. In!
                                    </p>
                                    <div className="flex justify-between mt-5">
                                        <button>Edit</button>
                                        <span>Share</span>
                                        <span>Delete</span>
                                    </div>
                                </div>
                            </div>
                            <div className='my-4'>
                                <div  className="block w-full p-6 my-5 bg-white border border-gray-200 rounded-lg shadow-2xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <p className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white">iam.Bankah</p>
                                    <p className="mt-3 font-normal text-gray-700 dark:text-gray-400">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta sequi magnam maiores at nesciunt consequatur fugit, illum vero dignissimos, ducimus, expedita cum? Amet, earum veritatis debitis dolorum laboriosam, corrupti voluptatibus temporibus sit, ipsam doloremque explicabo repellendus eveniet a blanditiis officiis voluptas ullam ipsa alias id quisquam? Error, nisi iusto. In!
                                    </p>
                                    <div className="flex justify-between mt-5">
                                        <button>Edit</button>
                                        <span>Share</span>
                                        <span>Delete</span>
                                    </div>
                                </div>
                            </div>
                            <div className='my-4'>
                                <div  className="block w-full p-6 my-5 bg-white border border-gray-200 rounded-lg shadow-2xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <p className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white">iam.Bankah</p>
                                    <p className="mt-3 font-normal text-gray-700 dark:text-gray-400">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta sequi magnam maiores at nesciunt consequatur fugit, illum vero dignissimos, ducimus, expedita cum? Amet, earum veritatis debitis dolorum laboriosam, corrupti voluptatibus temporibus sit, ipsam doloremque explicabo repellendus eveniet a blanditiis officiis voluptas ullam ipsa alias id quisquam? Error, nisi iusto. In!
                                    </p>
                                    <div className="flex justify-between mt-5">
                                        <button>Edit</button>
                                        <span>Share</span>
                                        <span>Delete</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post