import React from 'react'
import data from '../assets/data'
import { Link } from 'react-router-dom';

export default function BlogPage() {
  return (
    <div className='flex gap-5'>
    {data.map((item, index) => <div key={item.name} className='bg-gray-300 p-5'>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <Link to={`/blogs/${index}`} className='bg-white p-2 block mt-8'>Detail</Link>
    </div>
    )}
    </div>
  )
}
