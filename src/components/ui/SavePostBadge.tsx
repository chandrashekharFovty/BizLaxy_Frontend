// remove or comment out unwanted exports
// export function SavePostBadge { ... }
// export function PostSave { ... }

import { useState } from "react";

export function SaveIcon({
  size = 24,
  color = "#000",
  filled = false,
}: {
  size?: number;
  color?: string;
  filled?: boolean;
}) {

  const [isFilled, setIsFilled] = useState(true);
  

  return isFilled ? (
    <svg onClick={() => setIsFilled(false) } width={size} height={size} viewBox="0 0 24 24" fill={color}  stroke={color} strokeWidth="2"
    className="dark:stroke-white">
      <path d="M6 4C5.447 4 5 4.447 5 5v15l7-6 7 6V5c0-.553-.447-1-1-1H6z" />
    </svg>
  ) : (
    <svg
    onClick={() => setIsFilled(true) }
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      strokeWidth="2"
      className="dark:fill-white dark:stroke-white"
    >
      <path d="M6 4c-.553 0-1 .447-1 1v15l7-6 7 6V5c0-.553-.447-1-1-1H6z" />
    </svg>
  );
}

// keep default export if needed; otherwise, remove it
export default SaveIcon;
