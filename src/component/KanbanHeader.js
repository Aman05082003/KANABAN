import React from 'react';

const KanbanHeader = ({ setShowDropdown, showDropdown }) => (
  <div className="header">
    <div className="display-button" onClick={() => setShowDropdown(!showDropdown)}>
      <img src="/logos/display.svg" alt="Filter" width={20} height={20} />
      <span>Display</span>
      <img src="/logos/down.svg" alt="Chevron Down" width={20} height={20} />
    </div>
  </div>
);

export default KanbanHeader;