import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    heading: string,
    text: string,
}

const Card = ({heading, text}: Props) => {
    return (

        <Link to="/" className="block w-full p-6 my-5 bg-white border border-gray-200 rounded-lg shadow-2xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>
        </Link>

    )
}

export default Card