import * as React from 'react';
import Link from 'next/link';

export interface IPostsPageProps {
  posts: any
}

export default function PostsPage (props: IPostsPageProps) {
  console.log('client log ')
  console.log(props)
  if (!props) return null
  
  return (
    <div>
        <h1>Post List Page</h1>
        <ul>
          {props.posts.map((post:any) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link> 
            </li>
          ))}
        </ul>
    </div>
  );
}

export async function getStaticProps(context: any) {
  console.log("GET STATIC PROPS")
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json()
  // console.log(data)
  return {
    props: {
      posts: data.data
    }, // will be passed to the page component as props
  }
}
