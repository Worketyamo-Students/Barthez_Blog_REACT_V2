import React from 'react'
import Logo from './Logo'
import CtaBtn from './CtaBtn'
import MoreBtn from './ButtonMore'
import UserAvatar from './UserAvatar'
import SearchInput from './SearchInput'
import Navlinks from './Navlinks'
// import ModeToggle from './Mode'

const Navbar: React.FC = () => {
    const [isConnected, setIsConnected] = React.useState<boolean>(true);

    return (
        <nav className='w-full sticky top-0 left-0 z-50 container py-1 flex flex-col md:flex-row md:justify-between md:items-end bg-black/50 backdrop-blur-sm border-b-2 border-primary/30'>
            {/* Left Side */}
            <div className="flex items-center gap-6 md:gap-10 lg:gap-16">
                <Logo />

                <Navlinks />

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
                    {
                        isConnected ? <UserAvatar /> : <CtaBtn name='connexion' />
                    }
                </div>

                {/* <ModeToggle/> */}
            </div>

        </nav>
    )
}

export default Navbar