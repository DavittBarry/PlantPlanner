import React, { useEffect } from "react";
import { useParams } from "react-router";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div style={{ overflow: 'hidden' }}>
      <div class="container" >
        <div class="slider">
          <div id="imgDiv">
            <img src='https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="plantImg" style={{ width: '200px', height: '200px' }}></img>
            <h2>Rose</h2>
          </div> {/* ./imgDiv */}
          <span>Kastelutiheys</span>
          <input type="range" min="1" max="100" />
          <span>Lannoitus</span>
          <input type="range" min="1" max="100" />
        </div> {/* ./slider */}
        <div class="PlantCard">
          <div id="imgDiv">
            <img src='https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="plantImg" style={{ width: '200px', height: '200px' }}></img>
            <h2>Kasvin nimi</h2>
          </div> {/* ./imgDiv */}
          <div id="textField">
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div> {/* ./textField */}
          <div id="indicatorCont">
            <div class="indicator flex flex-jc-sb-a-c"><span>Kasteltu viimeksi:</span><span>17.3.2022</span><div class="colorInd" id="color1"></div></div>
            <div class="indicator flex flex-jc-sb-a-c"><span>Lannoitettu viimeksi:</span><span>1.3.2021</span><div class="colorInd" id="color2"></div></div>
            <div class="indicator flex flex-jc-sb-a-c">Jotain ja jotain:<div class="colorInd" id="color3"></div></div>
            <div class="indicator flex flex-jc-sb-a-c">Jotain ja jotain:<div class="colorInd" id="color4"></div></div>
          </div> {/* ./indicatorCont */}
        </div> {/* ./PlantCard */}
      </div>
    </div>
  );
}

export default Post;
