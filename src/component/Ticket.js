import React from 'react';
import ProfilePicture from './ProfilePicture';
import { statusIcons, priorityLabels } from './utils';

const Ticket = ({ ticket, users, grouping }) => (
  <div className="ticket">
    <div className="ticket-top">
      <div className="ticket-id">{ticket.id}</div>
      {grouping !== 'user' && (
        <ProfilePicture name={users.find(user => user.id === ticket.userId)?.name || 'Unknown User'} 
                        available={users.find(user => user.id === ticket.userId)?.available} />
      )}
    </div>
    <div className="ticket-middle">
      {grouping !== 'status' && <img src={statusIcons[ticket.status]} alt={ticket.status} width={18} height={18} />}
      <div className="ticket-title">{ticket.title}</div>
    </div>
    <div className="ticket-bottom">
      {grouping !== 'priority' && (
        <img src={statusIcons[priorityLabels[ticket.priority]]} alt={ticket.priority} width={20} height={20} />
      )}
      <div className="ticket-tags">
        {ticket.tag.map(tag => <span key={tag} className="tag">{tag}</span>)}
      </div>
    </div>
  </div>
);

export default Ticket;
