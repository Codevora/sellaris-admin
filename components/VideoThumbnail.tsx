import React from 'react';
import Link from 'next/link';

interface VideoThumbnailProps {
  videoId: string;
  title: string;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ videoId, title }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="max-w-sm overflow-hidden ">
      <Link href={videoUrl} target="_blank" rel="noopener noreferrer">
        <img className="w-full" src={thumbnailUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
        </div>
      </Link>
    </div>
  );
};

export default VideoThumbnail;