import React from "react";
import IframeWithLoading from "../_components/_util/IframeWithLoading";

interface SoundcloudTrackEmbedProps {
  trackId: string;
}

const SoundcloudTrackEmbed: React.FC<SoundcloudTrackEmbedProps> = ({
  trackId,
}: SoundcloudTrackEmbedProps) => {
  const trackUrl = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true`;

  return (
    <div className="adaptive-margin-bottom-general">
      <IframeWithLoading
        src={trackUrl}
        width="100%"
        height="166"
        allow="autoplay"
        loading="lazy"
      />
    </div>
  );
};

export default SoundcloudTrackEmbed;
