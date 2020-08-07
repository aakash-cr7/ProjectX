import React from 'react';

function Album(props) {
  const { album } = props;
  return (
    <div className="Album">
      <h3>{album.title}</h3>
    </div>
  );
}

export default Album;
