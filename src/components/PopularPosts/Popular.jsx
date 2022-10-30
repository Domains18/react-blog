import React from 'react'
import './Popular.css'
const Popular = () => {
  return (
    <div id="Popular">
      <h1>Our Popular Posts</h1>
      <div className="posts">
        <article>
          <h3>Post Title</h3>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad alias enim consequuntur ipsam dolore quisquam incidunt voluptate distinctio quibusdam.
            <div className='cta'>
              <a href="" type='button'>Read More</a>
            </div>
          </div>
        </article>
        <div className="posts">
          <article>
            <h3>Post Title</h3>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad alias enim consequuntur ipsam dolore quisquam incidunt voluptate distinctio quibusdam.
              <div className='cta'>
                <a href="" type='button'>Read More</a>
              </div>
            </div>
          </article>
        </div>
        <div className="posts">
          <article>
            <h3>Post Title</h3>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad alias enim consequuntur ipsam dolore quisquam incidunt voluptate distinctio quibusdam.
              <div className='cta'>
                <a href="" type='button'>Read More</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Popular