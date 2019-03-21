import React, { Component } from "react";
import {
  renderSurface,
  place,
  move,
  left,
  right,
  report
} from "./helpers/helpers";
import "./Grid.scss";
import ReactTerminal from "../../components/ReactTerminal/ReactTerminal";

class Grid extends Component {

  constructor(props){
    super(props);

    this.state = {
      pacman: {
        initialized: false,
        isOnGrid: false,
        place: {
          x: 4,
          y: 0,
          f: "WEST"
        }
      },
      surface: [],
      loading: true
    }
  }

  componentDidMount() {
    const pacman = place(4, 0, "WEST");
    const surface = renderSurface(pacman.place);
    this.setState({ pacman: pacman, surface: surface, loading: false });
    this.main.focus();
  }

  onChangePacmanCommand = (command, arr=[]) => {
    const { pacman } = this.state;
    const { initialized, isOnGrid } = pacman;

    // Clone pacman info to mutate the state
    const pacmanWillBeUpdated = {
      ...pacman,
      place: {
        ...pacman.place
      }
    };

    // Check pacman onGrid and initialized
    if (initialized && isOnGrid) {
      let updatedPacman = {};

      if(command === 'place'){
        updatedPacman = place(arr[0], arr[1], arr[2]);
      } else if(command === 'move'){
        updatedPacman = move(pacmanWillBeUpdated);
      } else if(command === 'left'){
        updatedPacman = left(pacmanWillBeUpdated);
      } else if(command === 'right'){
        updatedPacman = right(pacmanWillBeUpdated);
      } else if(command === 'report'){
        const pacmanPlace = report(pacman);
        updatedPacman = pacmanWillBeUpdated;
        return `Output: ${pacmanPlace}`
      }
      // Update state immutably
      const updatedSurface = renderSurface(updatedPacman.place);
      this.setState({pacman: updatedPacman, surface: updatedSurface});
    }
  };

  render() {
    return (
        <div className="d-flex container flex-row">
          <ReactTerminal onChangePacmanCommand={this.onChangePacmanCommand.bind(this)}
          />
          <main
            className="grid"
            ref={main => {
              this.main = main;
            }}
          >
            {this.state.loading ? (
              <p className="loading">Loading...</p>
            ) : (
              this.state.surface
            )}
          </main>
        </div>
    );
  }
}

export default Grid;
