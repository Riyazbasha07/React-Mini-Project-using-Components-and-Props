import { useState } from "react";

export default function Header({ title, prep, cook }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="card-header">
      <button
        className="dislike-btn"
        onClick={() => setDislikes(dislikes + 1)}
      >
        👎 {dislikes}
      </button>

      <h1>{title}</h1>

      <button
        className="like-btn"
        onClick={() => setLikes(likes + 1)}
      >
        👍 {likes}
      </button>

      <p>Prep Time: {prep} | Cook Time: {cook}</p>
    </div>
  );
}
