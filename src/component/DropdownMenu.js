import React from 'react';

const DropdownMenu = ({ showDropdown, setShowDropdown, grouping, setGrouping, ordering, setOrdering, dropdownRef }) => (
  <div>
    <div className="display-button" onClick={() => setShowDropdown(!showDropdown)}>
      <img src="/logos/display.svg" alt="Filter" width={20} height={20} />
      <span>Display</span>
      <img src="/logos/down.svg" alt="Chevron Down" width={20} height={20} />
    </div>
    
    {showDropdown && (
      <div className="dropdown-menu" ref={dropdownRef}>
        <div className="dropdown-item">
          <span>Grouping</span>
          <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="dropdown-item">
          <span>Ordering</span>
          <select value={ordering} onChange={(e) => setOrdering(e.target.value)}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    )}
  </div>
);

export default DropdownMenu;
