import { useState } from "react";
import { API } from "../services/api";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);

    try {
      await API.post("/posts", formData);
      alert("Post created!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create Blog</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />

        <textarea
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
        />
        <br /><br />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}