import React from "react";
import SpotifyPlaylistEmbed from "./SpotifyPlaylistEmbed";

function MusicSection() {
    return (
        <div className="max-w-4xl px-6 py-2">
            <h2 className="text-2xl font-bold text-primary-text mb-8">Productions and Mixes</h2>
            <p className="text-lg text-secondary-text leading-relaxed mb-6">
                Welcome to my Music Page! I&#39;m a hobbyist DJ and Producer making music and playing gigs in NYC.
            </p>
            <SpotifyPlaylistEmbed playlistId="7fyaLFggepWCTkGzt104BD"/>
        </div>
    );
}

export default MusicSection;