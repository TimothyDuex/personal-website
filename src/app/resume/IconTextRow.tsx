import React from "react";

interface IconTextRowProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  className?: string;
}

const IconTextRow: React.FC<IconTextRowProps> = ({
  icon: Icon,
  text,
  className = "",
}: IconTextRowProps) => {
  return (
    <div className={`flex items-center adaptive-gap-general ${className}`}>
      <Icon className="img-icon adaptive-text-body flex-shrink-0" />
      <p className="adaptive-text-body">{text}</p>
    </div>
  );
};

export default IconTextRow;
