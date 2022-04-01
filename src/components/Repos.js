import React, { useContext, useEffect } from 'react';
import GithubContext from '../context/GithubContext';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  console.log(repos);
  return (
    <div className="w-full card">
      <div className="card-body">
        <h2 className=" text-2xl my-4 font-bold cart-title"></h2>
        {repos.map((r) => (
          <h3 key={r.id}>
            <RepoItem repo={r}></RepoItem>
          </h3>
        ))}
      </div>
    </div>
  );
};
Repos.propTypes = {
  repos: PropTypes.array,
};
export default Repos;
