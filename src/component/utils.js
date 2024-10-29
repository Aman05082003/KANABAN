export const statusIcons = {
    'In progress': '/logos/in-progress.svg',
    'Backlog': '/logos/Backlog.svg',
    'Done': '/logos/Done.svg',
    'Canceled': '/logos/Cancelled.svg',
    'Todo': '/logos/To-do.svg',
    'High': '/logos/Img - High Priority.svg',
    'Low': '/logos/Img - Low Priority.svg',
    'Medium': '/logos/Img - Medium Priority.svg',
    'Urgent': '/logos/SVG - Urgent Priority colour.svg',
    'No Priority': '/logos/No-priority.svg'
  };
  
  export const priorityLabels = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No Priority'
  };
  
  export const fetchData = async (setTickets, setUsers) => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  export const groupTickets = (tickets, users, grouping, ordering) => {
    let grouped = {};
  
    if (grouping === 'status') {
      grouped = { 'In progress': [], 'Backlog': [], 'Todo': [], 'Done': [], 'Canceled': [] };
      tickets.forEach(ticket => {
        grouped[ticket.status] = grouped[ticket.status] || [];
        grouped[ticket.status].push(ticket);
      });
    } else if (grouping === 'user') {
      users.forEach(user => {
        grouped[user.name] = tickets.filter(ticket => ticket.userId === user.id).map(ticket => ({
          ...ticket,
          available: user.available
        }));
      });
    } else if (grouping === 'priority') {
      Object.keys(priorityLabels).forEach(priority => {
        grouped[priorityLabels[priority]] = tickets.filter(ticket => ticket.priority === parseInt(priority));
      });
    }
  
    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => (ordering === 'priority' ? b.priority - a.priority : a.title.localeCompare(b.title)));
    });
  
    return grouped;
  };
  