import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface IEditIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const EditIcon: React.FC<IEditIconProps> = ({
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.988 2.01215L21.9882 5.01245L19.7013 7.2992L16.7011 4.29889L18.988 2.01215ZM8 16H11L18.287 8.71301L15.287 5.71301L8 13V16ZM8.158 19H19V12.332L21 10.332V19C21 20.104 20.104 21 19 21H5C3.897 21 3 20.104 3 19V5C3 3.896 3.897 3 5 3H13.847L11.847 5H5V19H7.979C7.99515 19.0005 8.01108 19.0028 8.02688 19.005C8.04435 19.0075 8.06168 19.01 8.079 19.01C8.092 19.01 8.10525 19.0075 8.1185 19.005C8.13175 19.0025 8.145 19 8.158 19Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </i>
  );
};
