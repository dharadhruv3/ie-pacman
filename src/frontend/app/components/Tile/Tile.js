import React from "react";
import PropTypes from "prop-types";
import Pacman from "../Pacman/Pacman";
import "./Tile.scss";

const Tile = props => {
  return (
    <div
      id={props.id}
      className={`tile ${props.type}`}
    >
      {props.isPacmanHere ? <Pacman direction={props.pacmanDirection} /> : null}
    </div>
  );
};

Tile.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isPacmanHere: PropTypes.bool.isRequired,
  pacmanDirection: PropTypes.string
};

export default Tile;