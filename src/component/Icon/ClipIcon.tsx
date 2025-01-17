import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface IClipIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const ClipIcon: React.FC<IClipIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
}) => {
  return (
    <i
      className={cn("dds-icon", className, { flip })}
      style={{
        width: size,
        minWidth: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="icon__fill"
          d="M17.004 5C17.002 5 17.001 5 17 5H16.999H9C7.162 5 5.414 5.737 4.076 7.076C2.737 8.415 2 10.163 2 12C2 13.838 2.737 15.586 4.076 16.924C5.414 18.263 7.162 19 9 19H17V17H9C7.697 17 6.45 16.471 5.49 15.51C4.529 14.55 4 13.303 4 12C4 10.698 4.529 9.451 5.49 8.49C6.45 7.529 7.697 7 9 7H17V6L17.001 7C17.002 7 17.003 7 17.004 7C17.794 7 18.543 7.314 19.113 7.886C19.684 8.457 19.999 9.208 20 10.002C20.001 10.791 19.687 11.541 19.116 12.112C18.543 12.684 17.791 12.999 17 13H9C8.744 13 8.495 12.893 8.302 12.7C8.107 12.505 8 12.256 8 12C8 11.748 8.11 11.493 8.301 11.302C8.495 11.107 8.744 11 9 11H17V9H9C8.21 9 7.459 9.315 6.886 9.889C6.314 10.461 6 11.211 6 12C6 12.789 6.314 13.54 6.888 14.114C7.46 14.686 8.211 15 9 15H17.001C18.325 14.999 19.578 14.477 20.529 13.527C21.48 12.577 22.002 11.323 22 9.999C21.999 8.673 21.476 7.42 20.528 6.472C19.58 5.522 18.328 5 17.004 5Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </i>
  );
};
