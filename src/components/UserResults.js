import React, { useContext, useEffect, useState } from 'react';
import GithubContext from '../context/GithubContext';
import Spinner from './Spinner';
import UserItem from './UserItem';

const UserResults = () => {
  const { isLoading, users } = useContext(GithubContext);

  if (isLoading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div>
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
          {users.map((u) => (
            <UserItem key={u.id} user={u}></UserItem>
          ))}
        </div>
      </div>
    );
  }
};

export default UserResults;
