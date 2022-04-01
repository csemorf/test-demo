import axios from 'axios';
import React from 'react';
const github = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_ENDPOINT,
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

export const searchUser = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  try {
    // const response = await fetch(
    //   `${process.env.REACT_APP_GITHUB_ENDPOINT}/search/users?${params}`,
    //   {
    //     headers: {
    //       Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    //     },
    //   }
    // );
    const response = await github.get(`/search/users?${params}`);
    // const { items } = await response.json();
    return response.data.items;
    // return items;
    //   dispatch({ type: 'GET_USERS', payload: items });
  } catch (error) {
    console.log(error);
  }
};
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });
  const [user, repos] = await Promise.all([
    await github.get(`users/${login}`),
    await github.get(`users/${login}/repos?${params}`),
  ]);
  return { user: user.data, repos: repos.data };
};
export const getUserRepos = async (login) => {
  // dispatch({ type: 'SET_LOADING' });
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });
  try {
    const response = await github.get(`users/${login}/repos?${params}`);
    return response.data;
    // return data;
    // dispatch({ type: 'GET_USER_REPOS', payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getUser = async (login) => {
  // dispatch({ type: 'SET_LOADING' });

  try {
    // const response = await fetch(
    //   `${process.env.REACT_APP_GITHUB_ENDPOINT}/users/${login}`,
    //   {
    //     headers: {
    //       Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    //     },
    //   }
    // );
    // const data = await response.json();
    // console.log(data);
    const response = await github.get(`users/${login}`);
    return response.data;
    // dispatch({ type: 'GET_USER', payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const clearUsers = (dispatch) => {
  dispatch({ type: 'CLEAR_USERS' });
};
