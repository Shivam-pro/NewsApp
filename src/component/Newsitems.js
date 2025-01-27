import React from 'react'

function Newsitems({ title, description, imgurl, url }) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="image">
          <img src={imgurl} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title custom-scrollbar">{title}</h5>
          <p className="card-text custom-scrollbar">{description}</p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Newsitems
