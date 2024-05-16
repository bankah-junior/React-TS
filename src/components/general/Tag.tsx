import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    tag: string
}

const Tag = ({tag}: Props) => {
    return (
        <Link to="/" className="block max-w-sm p-2 my-5 bg-white border border-gray-200 rounded-lg shadow-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{tag}</h3>
        </Link>
    )
}

export default Tag