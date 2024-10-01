import React from 'react'
import Logo from './Logo'
// import CtaBtn from './CtaBtn'
import MoreBtn from './ButtonMore'
import UserAvatar from './UserAvatar'
import SearchInput from './SearchInput'







const Navbar: React.FC = () => {

    return (
        <nav className='w-full container py-1 flex flex-col md:flex-row md:justify-between md:items-end bg-black/50 backdrop-blur-md border-b border-primary/30'>
            {/* Left Side */}
            <div className="flex items-center gap-6 md:gap-10 lg:gap-16">
                <Logo />

                <div className="hidden md:block w-full">
                    <SearchInput />
                </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-evenly items-end">
                <div className="block md:hidden w-full">
                    <SearchInput />
                </div>

                <div className="flex items-center gap-1 md:gap-4">
                    <MoreBtn />
                    {/* <CtaBtn name='connexion' /> */}
                    <UserAvatar />
                </div>
            </div>

        </nav>
    )
}

export default Navbar