import React from 'react';
import ProfilePicture from './ProfilePicture';
import Ticket from './Ticket';
import { statusIcons } from './utils';

const Column = ({ group, items, grouping, users }) => (
  <div className="column">
    <div className="column-header">
      <div className="column-header-left">
        {grouping === 'user' ? (
          <ProfilePicture name={group} available={users.find(user => user.name === group)?.available} />
        ) : (
          <img className="progress-image" src={statusIcons[group]} alt={group} width={18} height={18} />
        )}
        <span>{group}</span>
        <span className="ticket-count">{items.length}</span>
      </div>
      <div className="column-header-right">
        <img src="/logos/add.svg" alt="Add" width={20} height={20} />
        <img src="/logos/3 dot menu.svg" alt="Settings" width={20} height={20} />
      </div>
    </div>
    <div className="tickets">
      {items.map(ticket => <Ticket key={ticket.id} ticket={ticket} users={users} grouping={grouping} />)}
    </div>
  </div>
);

export default Column;
