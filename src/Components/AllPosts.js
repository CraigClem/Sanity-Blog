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
    <div class="container py-5 d-flex flex-wrap">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {allPosts.map((post, index) =>
            <div class="col" key={index}>
              <div class="card shadow-sm h-100">
                <img class="card-img-top img-fluid" src={`${post.mainImage.asset.url}`}
                  alt={post.title} width="100%" />
                <div class="card-body d-flex flex-column justify-content-between">
                  <h1 class='card-title'>{post.title}</h1>
                  <p class="card-text text-muted"> {post.excerpt.length > 30 ? post.excerpt.slice(0, 30) + '...' : post.excerpt}</p>
                  <div class="align-items-center">
                    <Link to={`/${post.slug.current}`}>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Read</button>
                    </Link>
                    <small class="text-muted">{new Date(post.createdAt).toLocaleDateString()}</small>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AllPosts
