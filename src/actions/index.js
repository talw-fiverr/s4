/*
  SEARCH FUNCTIONS
*/

export function searchGroups(searchTerm) {
  console.log('search action fired');
  return {
    type: 'SEARCH_GROUPS',
    payload: searchTerm
  };
}

/*
  LOGIN FUNCTIONS
*/

export function userLogin(data) {
  console.log('login action fired');
  return {
    type: 'USER_LOGIN',
    payload: data
  };
}

export function userLogout(data) {
  console.log('logout action fired');
  return {
    type: 'USER_LOGOUT',
    payload: data
  };
}
