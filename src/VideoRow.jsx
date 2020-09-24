import React from 'react';
import './VideoRow.css';

function VideoRow({ views, subs, description, timestamp, channel, image, title }) {
  return (
    <div className='videoRow'>
      <img
        src='https://cdn-media-1.freecodecamp.org/images/kE3b4TOXtlEYpwhRvtSMi87mkWPaTfzbWOC9'
        alt=''
      />
      <div className='videoRow__text'>
        <h3>{title}</h3>
        <p className='videoRow__headline'>
          {channel} • {''}
          <span className='videoRow__subs'>
            <span className='videoRow__subNumber'>{subs}</span> Subscribers
          </span>{' '}
          {views} views • {timestamp}
        </p>
        <p className='videoRow__description'> {description} </p>
      </div>
    </div>
  );
}

export default VideoRow;
