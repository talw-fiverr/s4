export function searchGroups(term) {

  console.log('search action has been commited');
  return {
    type: 'SEARCH_GROUPS',
    payload: term
  };
}
