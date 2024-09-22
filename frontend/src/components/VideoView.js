import React from "react";
import { useParams } from "react-router-dom";

const VideoView = () => {
  const { folderId, videoId } = useParams();

  // Construct the Google Drive Embed URL for videos
  const videoEmbedUrl = `https://drive.google.com/file/d/${videoId}/preview`;

  return (
    <div>
      <h1>Video in Folder: {folderId}</h1>
      <iframe
        src={videoEmbedUrl}
        title="Video Player"
        width="100%"
        height="500px"
        allow="autoplay"
        allowFullScreen
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default VideoView;
