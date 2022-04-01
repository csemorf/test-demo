import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { FaGit, FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Navbar = ({ title }) => {
  return (
    <div className="navbar shadow-lg bg-neutral ">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Link to="/">
            <FaGithub className="inline text-5xl  pr-2"></FaGithub>
          </Link>

          <Link to="/" className="text-lg align-middle font-bold">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              HOME
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
Navbar.defaultProps = {
  title: 'GithubFinder',
};
// Navbar.propTypes = {
//   title: PropTypes.string,
// };
export default Navbar;
