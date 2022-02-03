import React from 'react'

export default function Navbar(props) {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#">{props.navTitle}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-row-reverse " id="navbarNav">
      <ul className="navbar-nav ">
        {/* <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="#">{props.navItem1}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.navItem2}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.navItem3} </a>
        </li> */}
        
      </ul>
    </div>
  </div>
</nav>
      </>
    )
}
