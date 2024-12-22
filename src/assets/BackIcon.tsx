import React from "react";

interface BackIconProps {
  width?: string;
  height?: string;
  color?: string;
}

const BackIcon: React.FC<BackIconProps> = ({
  width = "24px", // Default width
  height = "24px", // Default height
  color = "#000000", // Default color
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      className="icon"
    >
      <path fill={color} d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z" />
      <path
        fill={color}
        d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z"
      />
    </svg>
  );
};

export default BackIcon;
