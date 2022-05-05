import { GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';

export interface IPagePostDetailProps {
    post: any
}

export default function PagePostDetail ({post}: IPagePostDetailProps) {
  console.log('\nCLIENT log')  
  console.log(post);
  if (!post) return null

  return (
    <div>
        <h1>Page Post detail 2</h1>
        <div>
          <p>{post.id}</p>
          <p>{post.title}</p>
        </div>
    </div>
  );
}

export async function getStaticPaths() {
    console.log('\nGET STATIC PATHS')
    const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
    const data = await response.json()
    console.log(data.data.map((post:any) => ({ params: {postId: post.id}})))
    return {
      paths: data.data.map((post:any) => ({ params: {postId: post.id}})),
      fallback: true // false or 'blocking'
    };
}

export const getStaticProps: GetStaticProps<IPagePostDetailProps> = async (
  context: GetStaticPropsContext
) => {
  // const postId = context.params?.postId
  const postId = "sktwi1cgkkuif36dr"
  console.log('\nGET STATIC PROPS ', context, postId)
  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)
  const data = await response.json()
  console.log(data)

  return {
    props: {
      post: data
    }
  }
}