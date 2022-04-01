import React, { createContext, useEffect, useReducer, useState } from 'react';

const GithubContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case 'GET_USER_AND_REPOS':
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        repos: action.payload.repos,
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };
    case 'GET_USER_REPOS':
      return {
        ...state,
        repos: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export const GithubProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    user: {},
    repos: [],
    users: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  // const clearUsers = () => {
  //   dispatch({ type: 'CLEAR_USERS' });
  // };
  // const searchUser = async (text) => {
  //   dispatch({ type: 'SET_LOADING' });
  //   const params = new URLSearchParams({
  //     q: text,
  //   });
  //   try {
  //     const response = await fetch(
  //       `${process.env.REACT_APP_GITHUB_ENDPOINT}/search/users?${params}`,
  //       {
  //         headers: {
  //           Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  //         },
  //       }
  //     );
  //     const { items } = await response.json();
  //     dispatch({ type: 'GET_USERS', payload: items });
  //   } catch (error) {
  //     dispatch();
  //     console.log(error);
  //   }
  // };
  // const getUserRepos = async (login) => {
  //   dispatch({ type: 'SET_LOADING' });
  //   const params = new URLSearchParams({
  //     sort: 'created',
  //     per_page: 10,
  //   });
  //   try {
  //     const response = await fetch(
  //       `${process.env.REACT_APP_GITHUB_ENDPOINT}/users/${login}/repos?${params}`,
  //       {
  //         headers: {
  //           Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  //         },
  //       }
  //     );
  //     console.log(response);
  //     const data = await response.json();
  //     console.log(data);
  //     dispatch({ type: 'GET_USER_REPOS', payload: data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getUser = async (login) => {
  //   dispatch({ type: 'SET_LOADING' });

  //   try {
  //     const response = await fetch(
  //       `${process.env.REACT_APP_GITHUB_ENDPOINT}/users/${login}`,
  //       {
  //         headers: {
  //           Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     dispatch({ type: 'GET_USER', payload: data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        // users: state.users,
        // isLoading: state.isLoading,
        dispatch,
        // repos: state.repos,
        // user: state.user,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
