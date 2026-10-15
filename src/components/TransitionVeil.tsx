import React from 'react';

export const TransitionVeil: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden select-none pointer-events-none">
      {/* Visual gradient veil from deep navy to soft crisp recruiter surface */}
      <div className="h-16 sm:h-24 bg-gradient-to-b from-[#0B0F27] via-[#161C42] to-[#F6F7FB]" />
    </div>
  );
};
