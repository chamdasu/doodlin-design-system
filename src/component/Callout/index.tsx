import React, { useState } from "react";
import cn from "classnames";
import "./index.scss";
import { CloseIcon } from "../Icon/CloseIcon";
import { InfoMarkIcon } from "../Icon/InfoMarkIcon";

export interface ICalloutProps {
  className?: string;
  several?: boolean;
  variant?: "info" | "danger";
}

const Callout: React.FC<ICalloutProps> = ({
  className,
  children,
  several,
  variant = "info",
  ...props
}) => {
  const [open, setOpen] = useState(true);

  if (!open) return <></>;
  return (
    <div
      className={cn("_CALLOUT_", className, variant, { several })}
      {...props}
    >
      <div className="left">
        <InfoMarkIcon
          className="icon"
          color={variant === "info" ? "blue_7" : "red_7"}
        />
        <div>{children}</div>
      </div>
      <button className="close-btn" onClick={() => setOpen(false)}>
        <CloseIcon
          className="icon"
          color={variant === "info" ? "blue_7" : "red_7"}
        />
      </button>
    </div>
  );
};

export default Callout;
