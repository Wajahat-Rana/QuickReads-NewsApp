import React, { Component } from "react";
import Icon from './icon.png'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg sticky-top bg-light bg-body-tertiary py-1">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex justify-content-center align-items-center" to="/">
            <img src={Icon} alt="" width="40" height="40" className="d-inline-block align-text-top" />
            QuickReads-NewsApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About
                </Link>
              </li>
            <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/general">General</Link></li>
          <li><Link className="dropdown-item" to="/health">Health</Link></li>
          <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
          <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
          <li><Link className="dropdown-item" to="/business">Business</Link></li>
          <li><Link className="dropdown-item" to="sports">Sports</Link></li>
          <li><Link className="dropdown-item" to="/science">Science</Link></li>
          </ul>
        </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
