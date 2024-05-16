import { Link } from 'react-router-dom';
import avatar from '../../assets/avatar.jpg';

type Props = {
    text: string
}

const RegisterTemplate = ({ text }: Props) => {
    return (
        <div className='relative flex items-center justify-center md:justify-end md:p-20 authBg'>
            <div className="w-4/5 flex items-center px-5 py-10 text-white flex-col bg-[rgb(95,78,21)] rounded-2xl border-2 shadow-3xl md:w-1/2">
                <div className="w-24 h-24 mb-2 rounded-full">
                    <img src={avatar} alt="User" className='rounded-full' />
                </div>

                <h1 className='text-3xl font-bold capitalize mb-7'>{text}</h1>

                <form className="w-full max-w-md mx-auto">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_name" id="floating_name" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent px-2 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name:</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent px-2 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address:</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password:</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password:</label>
                    </div>
                    <Link to={'/home'}>
                        <button type="submit" className="text-white bg-yellow-400 hover:bg-yellow-800 focus:ring-2 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full mt-10 px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600">Submit</button>
                    </Link>
                    <p className='mt-10 text-center'>Already have an account? <Link to="/" className="hover:underline ">Login</Link></p>
                </form>

            </div>
        </div>
    )
}

export default RegisterTemplate