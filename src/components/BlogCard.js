import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (<div className='col-3'>
    <div className='blog-card'>
         <div className='card-image'>
            <img src="images/blog-1.jpg"  className='img-fluid' alt="blog" />
        </div>
        <div className='blog-content'>
            <p className='date'>1 Dec, 2022</p>
            <h5 className='tilte'>A beautiful sunday morning renaissance</h5>
            <p className='desc'>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </p>
            <Link to="/" className="button">
                Read More
            </Link>
        </div> 
    </div>
  </div>
  )
}

export default BlogCard
