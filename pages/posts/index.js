import React, { useEffect, useState } from "react";
import Posts from "../../components/Posts/Posts";
import Protected from "../../components/Utilities/Protected";
import API from "../../service/API";

import Link from "next/link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function Post() {
  const [ui, setUi] = useState("your_posts")

  const [posts,setPosts] = useState([])
  const [unpublished_posts,setUnpublishedPosts] = useState([])

  const fetchPosts = async()=>{
    setPosts((await API.get("/articles?user=divyanshu")).data.articles)
    setUnpublishedPosts((await API.get('/getUnpublishedPosts')).data.articles)
  }

  useEffect(()=>{
    fetchPosts()
  },[posts,unpublished_posts])
  return (
    <Protected>
      <main className="relative">
        <nav className="">
          <ul className="flex justify-center items-center bg-gray-100 overflow-scroll scrollbar-hide">
            <li className={`${ui=="your_posts" && "border-b-2 border-x-0 border-blue-500"} posts_tab_li`} onClick={()=>setUi("your_posts")}>Your Post</li>
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
        {ui=='your_posts' && posts &&
          <Posts posts={posts} />
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
