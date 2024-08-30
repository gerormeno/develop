import React, { useState } from 'react';

const YoutubeThumbnail: React.FC = () => {
  const [tutorialLink, setTutorialLink] = useState("");

  const handleYoutubeLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTutorialLink(event.target.value);
  };

  const getYoutubeThumbnail = (url: string) => {
    const videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    return ampersandPosition !== -1 ? videoId.substring(0, ampersandPosition) : videoId;
  };

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
        {tutorialLink && (
          <div className="ml-4 flex items-center">
            <a href={tutorialLink} target="_blank" rel="noopener noreferrer">
              <img
                src={`https://img.youtube.com/vi/${getYoutubeThumbnail(tutorialLink)}/0.jpg`}
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