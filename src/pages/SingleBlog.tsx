import React from 'react'
import { useParams } from 'react-router-dom';

const SingleBlog: React.FC = () => {
    const { id } = useParams();
    
    return (

        <h2>Blog N: {id} </h2>
    )
}

export default SingleBlog