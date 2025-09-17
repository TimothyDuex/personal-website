import React from "react";
import SpotifyPlaylistEmbed from "./SpotifyPlaylistEmbed";
import SoundcloudTrackEmbed from "./SoundcloudTrackEmbed";

function MusicSection() {
  return (
    <>
      <h2 className="adaptive-text-heading adaptive-margin-bottom-general">
        Productions and Mixes
      </h2>
      <div className="grid grid-cols-1 adaptive-column-gap-general">
        <p className="adaptive-text-body adaptive-text-body-line-height adaptive-margin-bottom-general">
          Welcome to my Music Page! I&#39;m a hobbyist DJ and Producer making
          music and playing gigs in NYC.
        </p>
        <h2 className="adaptive-text-subheading adaptive-margin-bottom-general">
          Most Recent Mix
        </h2>
        <SoundcloudTrackEmbed trackId="2160349479" />
        <h2 className="adaptive-text-subheading adaptive-margin-bottom-general">
          Current Spotify Picks
        </h2>
        <SpotifyPlaylistEmbed playlistId="7fyaLFggepWCTkGzt104BD" />
      </div>
    </>
  );
}

export default MusicSection;
