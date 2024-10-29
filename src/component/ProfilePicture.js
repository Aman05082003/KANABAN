import React from 'react';
import PropTypes from 'prop-types';
import './KanbanBoard.css';

const stringToColor = (initials) => {
  let hash = 0;
  for (let i = 0; i < initials.length; i++) {
    hash = initials.charCodeAt(i) + ((hash << 8) - hash); // Use a larger shift for more variation
  }

  // Generate RGB values
  const r = (hash & 0xFF0000) >> 16;
  const g = (hash & 0x00FF00) >> 8;
  const b = hash & 0x0000FF;

  // Adjust colors to ensure a pleasant contrast and some variety
  const red = (r + 100) % 256; // Offset by 100 to avoid very dark colors
  const green = (g + 150) % 256;
  const blue = (b + 200) % 256;

  // Convert RGB to HEX
  const color = `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;
  return color;
};

const ProfilePicture = ({ name, available }) => {
  const initials = React.useMemo(() => {
    return name.split(' ').map(n => n[0]).join('');
  }, [name]);
  const backgroundColor = stringToColor(initials);

  return (
    <div className="profile-picture" style={{ backgroundColor }}>
      <div className="profile-picture-text">{initials}</div>
      <div className={`user-status ${available ? "available" : ""}`}></div>
    </div>
  );
};

ProfilePicture.propTypes = {
  name: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
};

export default ProfilePicture;