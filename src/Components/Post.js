import React from 'react'
import { Link } from 'react-router-dom'

function Post({ index, slug, title, createdAt, img, body }) {


  return (
    <div className="post">
      <h1 key={index}>
        {title}
      </h1>
      <img className='main-image' src={`${img}`} alt={title} />
      <p>{body}</p>
      <p>{new Date(createdAt).toLocaleDateString()}</p>
      <Link to={`/${slug.current}`}>
        <button>Read More...</button>
      </Link>
    </div>

  )
}

export default Post
