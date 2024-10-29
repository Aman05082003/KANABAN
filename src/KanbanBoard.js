import { useState, useEffect, useRef } from 'react';
import './component/KanbanBoard.css';
import DropdownMenu from './component/DropdownMenu';
import Column from './component/Column';
import { fetchData, groupTickets } from './component/utils';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'priority');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetchData(setTickets, setUsers);
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('ordering', ordering);
  }, [grouping, ordering]);

  const groupedTickets = groupTickets(tickets, users, grouping, ordering);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);


  return (
    <div className="kanban-container">
      <div className="header">
        <DropdownMenu 
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          grouping={grouping}
          setGrouping={setGrouping}
          ordering={ordering}
          setOrdering={setOrdering}
          dropdownRef={dropdownRef}
        />
      </div>
      <div className="board">
        {Object.entries(groupedTickets).map(([group, items]) => (
          <Column key={group} 
          group={group} 
          items={items} 
          grouping={grouping} 
          users={users} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
