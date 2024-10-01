import React from 'react'
import logo from '/logo-univere-blog.png'
import { Link } from 'react-router-dom'


const Logo: React.FC = () => {
    return (
        <Link
            to={'/home'}
            className="mx-auto w-48 inline-block"
        >
            <img
                src={logo}
                alt="Logo Universe Blog"
                className='w-full h-full object-contain'
            />
        </Link>

    )
}

export default Logo