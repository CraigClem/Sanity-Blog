import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import sanityClient from '../client'
// import BlockContent from "@sanity/block-content-to-react";
// import imageUrlBuilder from "@sanity/image-url";

function SinglePost() {

  const [singlePost, setSinglePost] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams()
  // console.log(slug)

  // const builder = imageUrlBuilder(sanityClient);
  // function urlFor(source) {
  //   return builder.image(source);
  // }

  useEffect(() => {
    sanityClient.fetch(
      `*[slug.current == '${slug}']{
        title,
        slug,
        body,
        image{
          asset-> {
          _id,
          url
        }
      }
    }`,
    )
      .then((data) => setSinglePost(data[0]))
      .catch((err) => console.log(err))
    setIsLoading(false)
  }, [])

  console.log('single:', singlePost)

  if (!singlePost) return <div>Loading</div>;


  return (
    <section>
      <Link to={`/`}>
        <button>Home</button>
      </Link>
      <p>{slug}</p>
      <p>This is blog article {slug}</p>
      <p>{singlePost.title}</p>
      <img src={singlePost.image.asset.url} alt='hello' />
      <p>{singlePost.body}</p>
      {/* {isLoading ? <p>Loading...</p> : <p>{singlePost.title}</p>} */}
    </section>
  )
}

export default SinglePost
