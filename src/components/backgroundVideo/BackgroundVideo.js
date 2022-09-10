import React from 'react';
import timelapse from '../../assets/timelapse.mp4';

const BackgroundVideo = () => {

  return (
    <div className="overlay">
        <video className='backVideo' src={timelapse} autoPlay loop muted />
    </div>
  );
};

export default BackgroundVideo;