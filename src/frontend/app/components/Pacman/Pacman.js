import React from 'react';
import PropTypes from 'prop-types';
import './Pacman.css';
import pacmanImage from './images/pacman.png';

const Pacman = (props) => {
  return (
    <img
      className={`pacman ${props.direction}`}
      src={pacmanImage}
      alt="pacman"
    />
  );
};

Pacman.propTypes = {
  direction: PropTypes.string.isRequired
};

export default Pacman;