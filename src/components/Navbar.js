import React from 'react';
import { useSelector } from 'react-redux';

export default function NavBar(){

    const amount = useSelector(state => state.amount)
    return(
        <div className='App'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Indian Bank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.cumulations.com" target="_blank">Company</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.github.com/tarunsraina" target="_blank">About!</a>
            </li>
          </ul>
          
        </div>
        <div className='balance-btn'>
          <center>
            <button disabled={true} className="btn btn-primary">Your Balance : {amount}</button>
          </center>
          </div>
      </nav>
      </div>
      )
}

