import React from 'react';

export class Video extends React.Component {
  render() {
    return (
      <div>
        <video src='VIDEOS.fast' controls autostart autoPlay muted />
      </div>
    );
  }
}