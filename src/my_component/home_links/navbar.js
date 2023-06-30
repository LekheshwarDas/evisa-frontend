import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './homepage.css';
export const Navbar = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search query:', query);
    // You can add code here to handle the search query, such as submitting it to a server or updating state
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  
  return (
    <div class='position-absolute mt-3'>
      <div class='d-flex'>
        <a class="nav-link navbar-brand fs-4 mx-4 text-white me-5 ps-5" href="/"><b>eVisa Service</b></a>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="/admin">Admin</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/hre">HR Executive</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/user">User</a>
          </li>
        </ul>
        <form class="form-inline d-flex mt-2 h-25" onSubmit={handleSubmit}>
            <input class="form-control form-control-sm rounded-pill" type="text" value={query} onChange={handleChange} placeholder="Search" aria-label="Search" />
            <button class="btn btn-success btn-sm ms-2 px-2 align-item-center rounded-pill" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </div>
    </div>
  )
}
