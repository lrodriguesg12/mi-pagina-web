import React from "react";

const Spotify = () => {
  return (
    <div className="">
      <div className="w-full max-w-md">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/7cv28LXcjAC3GsXbUvXKbX?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Spotify;
