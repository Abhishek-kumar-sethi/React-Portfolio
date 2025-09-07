// src/AvatarViewer.js
import React from 'react';
import '@google/model-viewer';

const AvatarViewer = () => {
  const avatarUrl = "https://models.readyplayer.me/67205d3bb5ca4fb6beb68bce.glb"; // Replace with your avatar link

  return (
    <div style={{ width: '100%', maxWidth: '500px', margin: 'auto' }}>
      <model-viewer
        src={avatarUrl}
        alt="3D avatar"
       
        style={{ width: '100%', height: '500px' }}
      ></model-viewer>
    </div>
  );
};

export default AvatarViewer;
