import React from 'react';
import './Header.css';
import {BsSun} from 'react-icons/bs'

export default function Header() {
  return (
      <>
      <h1>Twolink</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Career Explorer</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <button className="sun-button">
              <BsSun />
            </button>
          </li>
          <li>
            <button className="signin-button">Sign In</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
