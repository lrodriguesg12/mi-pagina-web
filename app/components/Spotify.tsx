import React from "react";

const Spotify = () => {
  return (
    <div className="w-full max-w-lg text-center">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/63BcfK6YAzJYeISaTPr6IO?utm_source=generator"
          width="100%"
          height="270"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          
        ></iframe>
    </div>
  );
};

export default Spotify;
