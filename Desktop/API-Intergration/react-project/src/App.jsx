import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  // Filter posts by title
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading posts...</p>;

  return (
    <div className="app">
      <h1>Posts</h1>
      <input
        type="text"
        value={search}
        placeholder="Search by title..."
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
