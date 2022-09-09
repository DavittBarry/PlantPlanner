import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="posts">
      <div class="PlantPrev">
        <Link to="/Plants/this-is-a-post-title">
          <div class="row align-items-center">
          
              <h1 class="font-weight-light">Kasvikortti 1</h1>
              <p>
                Tähän "sneak peak" tekstiä
              </p>
            </div>

        </Link>
      </div>
      <div class="PlantPrev">
        <Link to="/Plants/this-is-a-post-title">
          <div class="row align-items-center">
              <h1 class="font-weight-light">Kasvikortti 2</h1>
              <p>
                Tähän "sneak peak" tekstiä
              </p>
            </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;