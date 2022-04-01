import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card compact shadow-md bg-base-100 side">
      <div className="flex-row items-center space-x-4 shadow-xl card-body">
        <div className="avatar">
          <div className="rounded-full w-14 h-14 ">
            <img width={100} src={avatar_url} alt="profile" />
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link className="opacity-40" to={`/user/${login}`}>
            Visit profile
          </Link>
        </div>
      </div>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
