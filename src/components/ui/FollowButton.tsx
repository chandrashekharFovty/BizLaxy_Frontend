// FollowButton.tsx
import React, { useState } from "react";

// interface FollowButtonProps {
//   isFollowing: boolean;
//   onClick: () => void;
// }

export const FollowButton: React.FC = () => {
    const [isFollowing, setIsFollowing] = useState(false);

  return (
    <button
      onClick={() => setIsFollowing(!isFollowing)}
      className={`px-1 py-1 text-sm font-mediam ${
        isFollowing ? " text-blue-800 dark:text-white" : "dark:text-white text-blue-800"
      }`}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};