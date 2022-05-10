import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import Postform from "../components/Postform";
import Post from "../components/Post";
import Head from "next/head";
import { getSession } from 'next-auth/react';
import { connectToDatabase } from '../utils/mongodb';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>LinkedIn</title>
      </Head>
      <main className="w-11/12 m-auto mt-20 flex">
      <Navbar />
      <LeftSidebar />
        <div className="w-6/12 mx-2">
          <Postform />
            <article className="posts">
              <Post />
              {posts.map(post => (
                <Post author={post.author} caption={post.caption} authorImg={post.authorImg}
                photo={post.photo} createdAt={post.createdAt} key={idx} id={post._id}/>
              ))}
            </article>
          </div>
          <RightSidebar />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const posts = await db.collection("posts").find().sort({ timestamp: -1 }).toArray();
  const session = await getSession(context);
  if(!session) {
      return {
          permanent: false,
          destination: '/home'
      }
  }
  return { props: {
      session,
      posts: posts.map((post) => ({
          _id: post._id.toString(),
          author: post.author,
          caption: post.caption,
          authorImg: post.authorImg,
          createdAt: post.createdAt,
          photo: post.photo
      })),
  } }
}