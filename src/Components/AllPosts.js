import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import sanityClient from '../client'

function AllPosts() {

  const [allPosts, setAllPosts] = useState([])


  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog"]{
        title,
        slug,
        body,
        createdAt,
        image{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (

    <>
      <p>posts:{allPosts.length}</p>
      <div className="allPosts-Container">
        {allPosts.map((post, index) =>
          <div className="post">
            <h1 key={index}>
              {post.title}
            </h1>
            <img className='main-image' src={`${post.image.asset.url}`} alt={post.title} />
            <p>{post.body}</p>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
            <Link to={`/${post.slug.current}`}>
              <button>Read More...</button>
            </Link>
          </div>

        )}

      </div>
    </>
  )
}

export default AllPosts
