import React from 'react';
import { connect } from 'react-redux';

import { Album } from './';
import { fetchAlbums } from '../actions/albums';

class AlbumList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchAlbums());
  }
  render() {
    // console.log('PROPS', this.props)
    const { albums } = this.props;
    return (
      <div className="AlbumList">
        <h1>Album list</h1>
        {albums && albums.map((album) => <Album album={album} />)}
      </div>
    );
  }
}

function mapStateToProps({ albums }) {
  return {
    albums,
  };
}
export default connect(mapStateToProps)(AlbumList);
