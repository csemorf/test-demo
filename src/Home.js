import React from 'react';
import UserResults from './components/UserResults';
import UserSearch from './components/Usersearch';

const Home = () => {
  return (
    <>
      <UserSearch></UserSearch>
      <UserResults></UserResults>
    </>
  );
};

export default Home;
