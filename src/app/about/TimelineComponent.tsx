"use client";

import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MapPin, Briefcase, GraduationCap, Star, Award } from "lucide-react";
import getTimelineEvents, { TimelineEvent } from "../_info/TimelineEvent";

const TimelineComponent = () => {
  const timelineEvents: TimelineEvent[] = getTimelineEvents();

  const getIcon = (type: TimelineEvent["type"]) => {
    const iconProps = { size: 24, className: "text-secondary-text" };

    switch (type) {
      case "job":
        return <Briefcase {...iconProps} />;
      case "location":
        return <MapPin {...iconProps} />;
      case "education":
        return <GraduationCap {...iconProps} />;
      case "achievement":
        return <Star {...iconProps} />;
      default:
        return <Award {...iconProps} />;
    }
  };

  const getColors = (type: TimelineEvent["type"]) => {
    const baseStyle = {
      color: "#737373",
      boxShadow: "#525252 0px 0px 0px 4px",
    };

    switch (type) {
      case "job":
        return { ...baseStyle, background: "#3b82f6" }; // Blue
      case "location":
        return { ...baseStyle, background: "#10b981" }; // Green
      case "education":
        return { ...baseStyle, background: "#8b5cf6" }; // Purple
      case "achievement":
        return { ...baseStyle, background: "#f59e0b" }; // Yellow/Orange
      default:
        return { ...baseStyle, background: "#6b7280" }; // Gray
    }
  };

  return (
    <div className="py-8">
      <VerticalTimeline lineColor="#525252">
        {timelineEvents.map((event) => (
          <VerticalTimelineElement
            key={event.id}
            className="vertical-timeline-element"
            contentStyle={{
              background: "#262626",
              color: "#525252",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              border: "1px solid #525252",
              borderRadius: "8px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid#525252",
              borderTop: "7px solid transparent",
              borderBottom: "7px solid transparent",
            }}
            date={event.date}
            dateClassName="text-secondary-text font-medium m-2"
            iconStyle={getColors(event.type)}
            icon={getIcon(event.type)}
          >
            <div>
              <h3 className="text-xl font-bold text-primary-text mb-1">
                {event.title}
              </h3>

              {event.subtitle && (
                <h4 className="text-lg font-medium text-secondary-text mb-2">
                  {event.subtitle}
                </h4>
              )}

              {event.location && (
                <div className="flex items-center text-tertiary-text text-sm mb-3">
                  <MapPin size={14} className="mr-1" />
                  {event.location}
                </div>
              )}

              <p className="text-secondary-text leading-relaxed">
                {event.description}
              </p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default TimelineComponent;
