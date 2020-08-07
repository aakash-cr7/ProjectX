export function fetchAlbums() {
  return async function (dispatch) {
    // fetch
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await response.json();

    console.log('data', data);
    dispatch(updateAlbums(data));
  };
}

export function updateAlbums(albums) {
  return {
    type: 'UPDATE_ALBUMS',
    albums,
  };
}
