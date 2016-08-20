import axios from 'axios';

export const SEARCH_GROUPS  = 'SEARCH_GROUPS';
export const USER_LOGIN     = 'USER_LOGIN';
export const USER_LOGOUT    = 'USER_LOGOUT';
export const USER_REGISTER  = 'USER_REGISTER';

// const request = axios.get(url);

/*
  SEARCH ACTIONS
*/
export function searchGroups(searchTerm) {
  console.log('search action fired');
  return {
    type: SEARCH_GROUPS,
    payload: searchTerm
  };
}

/*
  USER AUTH ACTIONS
*/
export function userRegister(data) {
  console.log('register action fired');
  return {
    type: USER_REGISTER,
    payload: data
  };
}

export function userLogin(data) {
  console.log('login action fired');
  return {
    type: USER_LOGIN,
    payload: data
  };
}

export function userLogout() {
  console.log('logout action fired');
  return {
    type: USER_LOGOUT,
    payload: 'log_out'
  };
}
