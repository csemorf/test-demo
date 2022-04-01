import React, { useContext, useState } from 'react';
import AlertContext from '../context/alert/AlertContext';
import { clearUsers, searchUser } from '../context/GithubAction';
import GithubContext from '../context/GithubContext';

const UserSearch = () => {
  const [text, setText] = useState('');
  const { users, dispatch } = useContext(GithubContext);
  const { sendAlert } = useContext(AlertContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (text === '') {
      sendAlert({ msg: 'fill text value', type: 'error' });
    } else {
      dispatch({ type: 'SET_LOADING' });
      const items = await searchUser(text);
      dispatch({ type: 'GET_USERS', payload: items });
      setText('');
    }
  };
  const inputHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <div className="relative">
            <input
              className="w-full bg-white input-lg input pr-40 text-black"
              type="text"
              value={text}
              placeholder="Search User"
              onChange={inputHandler}
            />

            <button className="rounded-l-none absolute top-0 right-0 w-36 btn-lg btn">
              GO
            </button>
          </div>
        </div>
      </form>
      {users.length > 0 && (
        <div className="btn btn-ghost btn-lg">
          <button onClick={() => clearUsers(dispatch)}>CLEAR</button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
