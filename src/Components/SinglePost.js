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


  if (!singlePost) return <div>Loading</div>;


  return (
    <section>
      <Link to={`/`}>
        <button>Home</button>
      </Link>
      <div className='singlePost-container'>
        <img src={urlFor(singlePost.mainImage).width(600).url()} alt='hello' />
        <h1>{singlePost.title}</h1>
        <div>
          <BlockContent
            blocks={singlePost.content}
            projectId='t3i39t8x'
            dataset='production'
          />
        </div>
        <p>{singlePost.createdAt}</p>
      </div>
    </section>
  )
}

export default SinglePost
