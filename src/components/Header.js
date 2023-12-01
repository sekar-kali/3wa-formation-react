import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1 className="text-3xl text-indigo-500">My Book</h1>

      <nav>
        <ul className="flex gap-5 items-center bg-yellow-500 text-white p-2 my-8">
          <NavLink className={({ isActive }) => (isActive ? 'text-indigo-600' : '')} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-indigo-600' : '')} to="/about">
            About
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-indigo-600' : '')} to="/blogs">
            Blogs
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}