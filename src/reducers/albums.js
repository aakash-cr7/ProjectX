export default function albums(state = {}, action) {
  if (action.type === 'UPDATE_ALBUMS') {
    return action.albums;
  }
  return state;
}
