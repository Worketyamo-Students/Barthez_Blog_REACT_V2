import React from 'react'
import { tablinks } from '../../global/constant/mocks'
import { NavLink } from 'react-router-dom'

const Navlinks: React.FC = () => {
    return (
        <ul className='flex items-center gap-4'>
            {
                tablinks.map((ele) => {
                    return (
                        <NavLink
                            key={ele.id}
                            to={ele.href}
                            className={({isActive}) => `font-semibold text-lg ${isActive ? "text-primary":""}`}
                        >
                            {ele.target}
                        </NavLink>
                    )
                })
            }
        </ul>
    )
}

export default Navlinks