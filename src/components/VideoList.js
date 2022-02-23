import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
  renderList() {
    return this.props.videos.map((video) => (
      <VideoItem onVideoSelect={this.props.onVideoSelect} video={video} key={video.id.videoId} />
    ));
  }
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

export default VideoList;
