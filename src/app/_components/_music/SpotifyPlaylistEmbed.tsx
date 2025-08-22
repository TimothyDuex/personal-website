import React from "react";

interface SpotifyPlaylistEmbedProps {
  playlistId: string;
}

const SpotifyPlaylistEmbed: React.FC<SpotifyPlaylistEmbedProps> = ({
  playlistId,
}: SpotifyPlaylistEmbedProps) => {
  const playlistUrl = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`;

  return (
    <>
      <iframe
        src={playlistUrl}
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </>
  );
};

export default SpotifyPlaylistEmbed;
