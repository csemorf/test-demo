import React, { useContext, useEffect } from 'react';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/GithubContext';

import {
  FaCodepen,
  FaStore,
  FaUser,
  FaUserFriends,
  FaUsers,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Repos from './Repos';
import {
  getUserRepos,
  getUser,
  clearUsers,
  getUserAndRepos,
} from '../context/GithubAction';

const User = () => {
  const { user, isLoading, repos, dispatch } = useContext(GithubContext);
  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    twitter_username,
    hireable,
    type,
  } = user;
  const params = useParams();
  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const getUserData = async () => {
      //   const user = await getUser(params.login);
      //   const data = await getUserRepos(params.login);
      const userData = await getUserAndRepos(params.login);
      dispatch({ type: 'GET_USER_AND_REPOS', payload: userData });
      //   dispatch({ type: 'GET_USER_AND_REPOS', payload: repos });
    }; //GET_USER_AND_REPOS
    getUserData();
  }, [dispatch, params.login]);
  if (isLoading) return <Spinner />;

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className=" rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="image" />
              </figure>
              <div className="card-body relative ">
                <h2 className="card-title absolute left-5 bottom-10 mb-0 text-white text-secondary">
                  {name}
                </h2>
                <p className="absolute left-5 bottom-5 text-white-800">
                  {' '}
                  {login}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-2">
              <h2 className="card-title">
                <p className="badge badge-success"> {type}</p>
                {hireable && <p className="badge badge-info">Hireable</p>}
              </h2>
            </div>
            <p>{bio}</p>
            <div className="mt-4 card-actions">
              <a href={html_url} target="_blank" className=" btn btn-outline">
                Visit Github Profile
              </a>
            </div>
            <div className="w-full rounded-lg shadow-lg bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div>Location</div>
                  <div>{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div>Blog</div>
                  <div>
                    {' '}
                    <a href={blog} target="_blank">
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div>Twitter</div>
                  <div>
                    <a href={`twitter/${twitter_username}`}>
                      {twitter_username || '🥰'}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full stats">
          {followers && (
            <div className="stat">
              <div className="stat-figure">
                <FaUser className="text-secondary text-5xl"></FaUser>
              </div>
              <div className="stat-title">followers</div>
              <div className="stat-value">{followers}</div>
            </div>
          )}
          {following && (
            <div className="stat">
              <div className="stat-figure">
                <FaUserFriends className="text-secondary text-5xl"></FaUserFriends>
              </div>

              <div className="stat-title">following</div>
              <div className="stat-value">{following}</div>
            </div>
          )}
          {public_repos && (
            <div className="stat">
              <div className="stat-figure">
                <FaCodepen className="text-secondary text-5xl"></FaCodepen>
              </div>
              <div className="stat-title">public_repos</div>
              <div className="stat-value">{public_repos}</div>
            </div>
          )}
        </div>
      </div>
      <div>
        <Repos repos={repos}></Repos>
      </div>
    </>
  );
};

export default User;
