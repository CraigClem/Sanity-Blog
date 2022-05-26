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
        excerpt,
        createdAt,
        mainImage{
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

    <div className='allPosts-main-wrap'>
      <div className="allPosts-Container">
        {allPosts.map((post, index) =>

          <div
            key={index}
            className="post" >
            <h1>
              {post.title}
            </h1>
            <img className='main-image' src={`${post.mainImage.asset.url}`} alt={post.title} />
            <p>{post.excerpt.length > 30 ? post.excerpt.slice(0, 30) + '...' : post.excerpt}</p>
            <div className='date-readmore'>
              <p>{new Date(post.createdAt).toLocaleDateString()}</p>
              <Link to={`/${post.slug.current}`}>
                <button>Read More...</button>
              </Link>
            </div>
          </div>

          // <Post
          //   index={index}
          //   title={post.title}
          //   body={post.body}
          //   img={post.image.asset.url}
          //   createdAt={post.createdAt}
          //   slug={post.slug.current}
          // />

        )}
      </div>
    </div>
  )
}

export default AllPosts
