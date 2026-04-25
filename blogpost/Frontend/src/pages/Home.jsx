import { useEffect, useState } from "react";
import { API } from "../services/api";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get("/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog Posts</h1>

      {posts.length === 0 ? (
        <p>No posts yet</p>
      ) : (
        posts.map((post) => (
          <div
            key={post._id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 100)}...</p>
            {post.image && <img src={post.image} alt="blog" width="200" />}
          </div>
        ))
      )}
    </div>
  );
}
