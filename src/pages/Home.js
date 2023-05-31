import Post from "../components/Post";
import { useEffect, useState } from "react";
import { BASE_URL } from "../api";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/post`,{
      // mode: "no-cors",
    }).then((response) => {
      response.json().then((posts) => {
        console.log(posts);
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>
      {posts.length > 0 &&
        posts.map((post, index) => <Post {...post} key={index} />)}
    </>
  );
}
