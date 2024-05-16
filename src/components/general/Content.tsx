import React from 'react'
import Tag from './Tag'
import Card from './Card'

type Props = {
    isProfile: boolean
}

const Content = ({isProfile}: Props) => {
    return (
        <div className="flex flex-col-reverse md:flex-row">
            <div className="w-full sm:2/3">
                {isProfile && <h2 className="text-2xl italic font-bold">Your Posts</h2>}
                <div className='mt-1 sm:mt-3 sm:px-4'>
                    <Card
                        heading='Programming Best Practice'
                        text='This is a description of the post. It can be as long or as short as you like.'
                    />
                    <Card
                        heading='Dehyration'
                        text='This is a description of the post. It can be as long or as short as you like.'
                    />
                    <Card
                        heading='CS roadmap'
                        text='This is a description of the post. It can be as long or as short as you like.'
                    />
                    <Card
                        heading='About Your Mentor'
                        text='This is a description of the post. It can be as long or as short as you like.'
                    />
                    <Card
                        heading='Programming Best Practice'
                        text='This is a description of the post. It can be as long or as short as you like.'
                    />
                    <Card
                        heading='Dehyration'
                        text='This is a description of the post. It can be as long or as short as you like.'
                    />
                    <Card
                        heading='CS roadmap'
                        text='This is a description of the post. It can be as long or as short as you like.'
                    />
                    <Card
                        heading='About Your Mentor'
                        text='This is a description of the post. It can be as long or as short as you like.'
                    />
                </div>
            </div>
            <div className="w-full p-2 mb-8 border rounded shadow-xl sm:w-1/3 sm:mb-0">
                <h2 className='text-2xl italic font-bold'>Most used Tags</h2>
                <div className='flex mt-1 space-x-4 overflow-x-scroll sm:overflow-auto sm:space-x-0 sm:mt-3 sm:px-4 sm:flex-col'>
                    <Tag tag='Mobile' />
                    <Tag tag='Health' />
                    <Tag tag='Programming' />
                    <Tag tag='Music' />
                </div>
            </div>
        </div>
    )
}

export default Content