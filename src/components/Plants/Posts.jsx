import React from "react";
import { Link } from "react-router-dom";
import './Post.css';

function Posts() {
  return (
    <div className="posts p-3">
      <div class="PlantPrev">
        <Link to="/Plants/this-is-a-post-title">
          <div class="row align-items-center">

            <h1 class="font-weight-light">Plant card 1</h1>
            <p>
              Sneak peak text.
            </p>
          </div>

        </Link>
      </div>
      <div class="PlantPrev">
        <Link to="/Plants/this-is-a-post-title">
          <div class="row align-items-center">
            <h1 class="font-weight-light">Plant card 2</h1>
            <p>
              Sneak peak text.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;