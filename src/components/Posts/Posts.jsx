import React from 'react'
import './Posts.css'
import image from '../../images/posts/good-morning.jpg';
import image2 from "../../images/posts/r.jpg";
import image3 from "../../images/posts/pexels.jpg";


const Posts = () => {
  return (
    <section className="post_section">
      <div className="post_title">
        <h1>Trending Posts</h1>
      </div>
      <div className="row">
        <div className="post_trend">
          {/* post item */}
          <div className="post_item">
            <div className="post_body">
              <div className="post_img">
                <img src={image2} alt="" />
              </div>
              <div className="post_content">
                <h4>Post One title</h4>
                <p>Post one this one</p>
                <a href="https://post.one" className="btn-1">
                  Read more
                </a>
              </div>
            </div>
          </div>
          {/* end post */}
          {/* post item */}
          <div className="post_item">
            <div className="post_body">
              <div className="post_img">
                <img
                  src={image}
                  alt=""
                />
              </div>
              <div className="post_content">
                <h4>Post One title</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                  molestiae architecto pariatur dolorum officiis obcaecati
                  veritatis delectus repellat beatae reprehenderit?
                </p>
                <a href="https://post.one" className="btn-1">
                  Read more
                </a>
              </div>
            </div>
          </div>
          {/* end post */}
          {/* post item */}
          <div className="post_item">
            <div className="post_body">
              <div className="post_img">
                <img src={image3} alt="" />
              </div>
              <div className="post_content">
                <h4>Post One title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quam!
                </p>
                <a href="https://post.one" className="btn-1">
                  Read more
                </a>
              </div>
            </div>
          </div>
          {/* end post */}
        </div>
      </div>
    </section>
  );
}


export default Posts