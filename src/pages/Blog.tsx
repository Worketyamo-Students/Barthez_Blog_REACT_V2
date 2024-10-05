import React from 'react'
import Asidebar from '../components/custom/Asidebar'
import SingleBlog from './SingleBlog'

const Blog: React.FC = () => {
  return (
    <div className='darkBG min-h-screen text-light'>
      <section className='flex'>
        <Asidebar />

        <main className='p-6 space-y-14'>
          <SingleBlog/>
        </main>
      </section>
    </div>
  )
}

export default Blog