import React from 'react';
import PropTypes from 'prop-types';

function Chair(props) {
  const { type, onClick } = props;

  const selectString = (t) => {
    switch (t) {
      case 'd':
        return 'disabled';
      case 's':
        return 'standart';
      case 't':
        return 'taken';
      case 'v':
        return 'vip';
      case 'sl':
        return 'selected';
      default:
        return null;
    }
  };

  const string = selectString(type);

  return (
    <span
      onClick={onClick}
      className={`buying-scheme__chair buying-scheme__chair_${string}`}
    />
  );
}

Chair.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Chair;
