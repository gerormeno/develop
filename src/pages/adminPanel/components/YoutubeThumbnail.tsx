import React, { useState } from 'react';

const getYoutubeVideoId = (url: string): string | null => {
  if (typeof url !== 'string') {
    return null;
  }
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/);
  return match ? match[1] : null;
};

const useYoutubeThumbnail = (initialLink: string, onLinkChange: (link: string) => void) => {
  const [tutorialLink, setTutorialLink] = useState(initialLink);
  const [videoId, setVideoId] = useState<string | null>(getYoutubeVideoId(initialLink));

  const handleYoutubeLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;
    setTutorialLink(url);
    const id = getYoutubeVideoId(url);
    setVideoId(id);
    onLinkChange(url);
  };

  return { tutorialLink, videoId, handleYoutubeLinkChange };
};

interface YoutubeThumbnailProps {
  link: string;
  onLinkChange: (link: string) => void;
}

const YoutubeThumbnail: React.FC<YoutubeThumbnailProps> = ({ link, onLinkChange }) => {
  const { tutorialLink, videoId, handleYoutubeLinkChange } = useYoutubeThumbnail(link, onLinkChange);

  return (
    <div className="col-span-full">
      <div className="flex items-center">
        <div className="flex-grow">
          <label
            htmlFor="youtube-link"
            className="block text-md font-medium leading-6 text-gray-900"
          >
            Link a video de YouTube
          </label>
          <div className="mt-2">
            <input
              id="youtube-link"
              name="youtube-link"
              type="text"
              value={tutorialLink}
              onChange={handleYoutubeLinkChange}
              placeholder="https://www.youtube.com/watch?v=example"
              className="w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {videoId && (
          <div className="ml-4 flex items-center">
            <a href={tutorialLink} target="_blank" rel="noopener noreferrer">
              <img
                src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                alt="YouTube Thumbnail"
                className="h-16 w-28 rounded-md shadow-sm transition-transform duration-200 hover:scale-105"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default YoutubeThumbnail;