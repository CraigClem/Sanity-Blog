import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import sanityClient from '../client'
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source)
}

function SinglePost() {

  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams()


  useEffect(() => {
    sanityClient.fetch(
      `*[slug.current == '${slug}']{
        title,
        slug,
        content,
        createdAt,
        mainImage{
          asset-> {
          _id,
          url
        }
      }
    }`,
    )
      .then((data) => setSinglePost(data[0]))
      .catch((err) => console.log(err))
  }, [slug])


  if (!singlePost) return <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>


  return (
    <section className="text-center m-2 container">
      <h1>{singlePost.title}</h1>
      <img className="img-fluid" src={urlFor(singlePost.mainImage).width(400).url()} alt='hello' />
      <div>
        <BlockContent
          blocks={singlePost.content}
          projectId='t3i39t8x'
          dataset='production'
        />
      </div>
      <p>{singlePost.createdAt}</p>
    </section>
  )
}

export default SinglePost
