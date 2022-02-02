import React, { useEffect, useState } from "react";
import Posts from "../../components/Posts/Posts";
import Protected from "../../components/Utilities/Protected";
import API from "../../service/API";

import Link from "next/link";
import Button from "@mui/material/Button";

function Post() {
  const [ui, setUi] = useState("your_posts")

  const [all_posts,setAllPosts] = useState([])
  const [published_posts,setPublishedPosts] = useState([])
  const [submitted_posts,setSubmittedPosts] = useState([])
  const [rejected_posts,setRejectedPosts] = useState([])
  const [unpublished_posts,setUnpublishedPosts] = useState([])

  const fetchPosts = async()=>{
    try{
      let posts= (await API.get("/articles?user=divyanshu")).data
      let publishedPosts = posts.filter(post=>post.status=='published')
      let submittededPosts = posts.filter(post=>post.status=='submitted')
      let rejectedPosts = posts.filter(post=>post.status=='rejected')
      setAllPosts(posts)
      setPublishedPosts(publishedPosts)
      setSubmittedPosts(submittededPosts)
      setRejectedPosts(rejectedPosts)
      setUnpublishedPosts((await API.get('/getUnpublishedPosts')).data.articles)
    }catch(err){
      alert(err)
    }
  }
  // console.log(unpublished_posts)

  useEffect(()=>{
    fetchPosts()
  },[all_posts,unpublished_posts])
  return (
    <Protected>
      <main className="relative">
        <nav className="">
          <ul className="flex justify-center items-center bg-gray-100 overflow-scroll scrollbar-hide">
            <li className={`${ui=="your_posts" && "border-b-2 border-x-0 border-blue-500"} posts_tab_li`} onClick={()=>setUi("your_posts")}>Your Post</li>
            <li className={`${ui=="submitted_posts" && "border-b-2 border-x-0 border-blue-500"} posts_tab_li`} onClick={()=>setUi("submitted_posts")}>Submitted Post</li>
            <li className={`${ui=="rejected_posts" && "border-b-2 border-x-0 border-blue-500"} posts_tab_li`} onClick={()=>setUi("rejected_posts")}>Rejected Post</li>
            <li className={`${ui=="unpublished_posts" && "border-b-2 border-x-0 border-blue-500"} posts_tab_li`} onClick={()=>setUi("unpublished_posts")}>Unpublished Post</li>
            <li className={`${ui=="all_posts" && "border-b-2 border-x-0 border-blue-500"} posts_tab_li`} onClick={()=>setUi("all_posts")}>All Post</li>
            <li className={`${ui=="" && "border-b-2 border-x-0 border-blue-500"} posts_tab_li`}>
              <Link href="/posts/create">
                <Button color="warning" variant="outlined" size="small">
                  Create New Post
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="">
        {ui=='your_posts' && published_posts &&
          <Posts posts={published_posts} />
        }
        {ui=='submitted_posts' && submitted_posts &&
          <Posts posts={submitted_posts} />
        }
        {ui=='rejected_posts' && rejected_posts &&
          <Posts posts={rejected_posts} />
        }
        {ui=='all_posts' && all_posts &&
          <Posts posts={all_posts} />
        }
        {ui=='unpublished_posts' && unpublished_posts &&
          <Posts posts={unpublished_posts} />
        }
        </div>
      </main>
    </Protected>
  );
}

export default Post;

// export async function getServerSideProps() {
//   const posts = (await API.get("/articles?user=divyanshu")).data.articles;
//   const unpublished_posts = (await API.get("/getUnpublishedPosts")).data.articles;
//   return {
//     props: {
//       posts,
//       unpublished_posts
//     },
//   };
// }
