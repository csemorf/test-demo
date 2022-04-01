import React from 'react';
import { FaEye, FaLink, FaTwitch } from 'react-icons/fa';

const RepoItem = ({
  repo: {
    watchers_count,
    stargazers_count,
    open_issues,
    forks,
    name,
    html_url,
    description,
  },
}) => {
  return (
    <div className="card bg-gray-900 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="text-xl font-semibold">
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            <FaLink className="inline mr-4"></FaLink>
            {name}
          </a>
        </h3>
        <div className="mb-3">{description}</div>
        <div>
          <div className="badge badge-success mr-2">
            <FaEye> </FaEye> {watchers_count}
          </div>
          <div className="badge badge-info mr-2">
            <FaEye> </FaEye> {stargazers_count}
          </div>
          <div className="badge badge-info mr-2">
            <FaEye> </FaEye> {open_issues}
          </div>
          <div className="badge badge-info">
            <FaEye> </FaEye> {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
