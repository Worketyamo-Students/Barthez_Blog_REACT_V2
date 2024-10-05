import React from 'react'
import CategorieBlog from './CategorieBlog'
import GreatestAuthors from './GreatestAuthors'

const Asidebar: React.FC = () => {
    return (
        <div className='min-w-[20rem] max-w-xs h-screen max-h-screen overflow-scroll p-4 bg-black'>
            <CategorieBlog />
            <GreatestAuthors />
        </div>
    )
}

export default Asidebar