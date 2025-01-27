import React from 'react'
import Newsitems from './Newsitems'

function Newscontent({ data }) {

  return (
    <div className='container'>
      <h1 className='heading'>Latest <span className='badge bg-danger fs-4'>News</span></h1>
      <div className='news'>
        {data && data.length > 0 ? (
          data.map((news, index) => (
            <Newsitems
              key={index}
              title={news.title}
              description={news.description}
              imgurl={news.urlToImage}
              url={news.url}
            />
          ))
        ) : (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Newscontent
