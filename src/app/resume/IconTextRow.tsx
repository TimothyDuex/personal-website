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
    <div className={`flex items-center gap-3 ${className}`}>
      <Icon className="w-5 h-5 text-secondary-text flex-shrink-0" />
      <p className="text-secondary-text">{text}</p>
    </div>
  );
};

export default IconTextRow;
