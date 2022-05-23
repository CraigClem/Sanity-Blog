import React, { useState, useEffect } from 'react'
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
    <div className="allPosts-Container">
      {allPosts.map((post, index) =>

        <h1 key={index}>
          {post.title}
        </h1>
      )}
    </div>
  )
}

export default AllPosts
