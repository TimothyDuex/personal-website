import React from "react";
import SpotifyPlaylistEmbed from "./SpotifyPlaylistEmbed";
import SoundcloudTrackEmbed from "./SoundcloudTrackEmbed";

function MusicSection() {
    return (
        <div className="max-w-4xl px-6 py-2">
            <h2 className="text-2xl font-bold text-primary-text mb-8">Productions and Mixes</h2>
            <div className="grid grid-cols-1 gap-3">
                <p className="text-lg text-secondary-text leading-relaxed mb-6">
                    Welcome to my Music Page! I&#39;m a hobbyist DJ and Producer making music and playing gigs in NYC.
                </p>
                <h2 className="text-1xl font-bold text-secondary-text mb-2">Most Recent Mix</h2>
                <SoundcloudTrackEmbed trackId="2134015293"/>
                <h2 className="text-1xl font-bold text-secondary-text mb-2">Current Spotify Picks</h2>
                <SpotifyPlaylistEmbed playlistId="7fyaLFggepWCTkGzt104BD"/>
            </div>
        </div>
    );
}

export default MusicSection;