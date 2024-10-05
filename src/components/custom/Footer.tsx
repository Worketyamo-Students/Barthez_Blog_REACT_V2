import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { contactLink, tablinks } from '../../global/constant/mocks'

const Footer: React.FC = () => {
  return (
    <footer className='container flex flex-col bg-slate-900 text-white/85 py-2 md:py-4'>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center py-4 gap-6 md:gap-0 mx-auto">
        {/* Logo */}
        <div className="md:col-span-2 flex flex-col gap-0 items-center text-center">
          {/* Logo */}
          <Logo />

          {/* Short presentation */}
          <p className="text-sm md:max-w-[60%] text-balance">
            Universal Blog est une communauté regroupant
            des passionés qui écrivent et partages des articles sur divers sujets.
          </p>
        </div>

        {/* Navigate LiNavlinksng */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <h4 className="text-lg font-medium text-white">
            Navigation Links
          </h4>
          <ul className="flex flex-col gap-1">
            {
              tablinks.map((link) => (
                <li key={link.id} className='group'>
                  <Link to={link.href} className='hover:text-white'>
                    {link.target}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>

        {/* Navigate LiNavlinksng */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <h4 className="text-lg font-medium text-white">
            Legal & Support
          </h4>
          <ul className="flex flex-col gap-1">
            <li>
              <Link to={""} className='hover:text-white'>
                Nous Contactez
              </Link>
            </li>

            <li>
              <Link to={""} className='hover:text-white'>
                Terms et Conditions
              </Link>
            </li>

            <li>
              <Link to={""} className='hover:text-white'>
                Licence
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <h4 className="text-lg font-medium text-white">
            Nous Joindre
          </h4>
          <ul className="flex gap-4 items-center text-3xl">
            {
              contactLink.map((link) => (
                <Link key={link.id} to={link.href} className='hover:text-white'>
                  {link.target}
                </Link>
              ))
            }
          </ul>
        </div>
      </div>

      <hr className='bg-gray-800 h-1' />

      <div className="flex justify-center gap-2 md:justify-between items-center text-white/80 py-4 px-10 flex-wrap">
        <span className='text-nowrap'>© All Right Reserved</span>
        <span>October 2024</span>
      </div>
    </footer>
  )
}

export default Footer