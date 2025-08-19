import React from "react";
import SpotifyPlaylistEmbed from "./SpotifyPlaylistEmbed";

function MusicSection() {
    return (
        <div className="max-w-4xl px-6 py-2">
            <h2 className="text-2xl font-bold text-primary-text mb-8">Productions and Mixes</h2>
            <SpotifyPlaylistEmbed playlistId="7fyaLFggepWCTkGzt104BD"/>
        </div>
    );
}

export default MusicSection;