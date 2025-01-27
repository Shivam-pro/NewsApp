import React, { useState } from 'react'

function Navbar(props) {

  const handleChange = (event) => {
    props.handle(event.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    props.handle(e.target.dataset.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className='badge bg-danger fs-4'>NewsApp</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/" data-value="Sports" onClick={handleClick}>Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/" data-value="Health" onClick={handleClick}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/" data-value="Politics" onClick={handleClick}>Politics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/" data-value="Entertainment" onClick={handleClick}>Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/" data-value="Fitness" onClick={handleClick}>Fitness</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
        <button className="btn btn-outline-success" type='button' onClick={props.getData}>Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
