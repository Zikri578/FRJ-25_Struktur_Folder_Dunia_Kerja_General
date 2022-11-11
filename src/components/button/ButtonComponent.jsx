import React from 'react'

// onClick merupakan properti
export default function ButtonComponent({ onClick, title }) {
    return (
        <div className='px-20 h-10 flex flex-row items-center justify-center bg-red-400 hover:bg-red-600' onClick={onClick}>
            {title}
        </div>
    )
}
