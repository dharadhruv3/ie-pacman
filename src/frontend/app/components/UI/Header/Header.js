import React from "react";
import "./Header.css";

const Header = props => (
  <header className="container">
    <nav className="nav">
      <p className="logo">Pacman Simulator</p>
    </nav>
    <div>
      There are 5 commands available<br/>
      1. PLACE - This command is available to place the pacman. To run this command add 3 arguments without space after comma e.g X,Y,F. If you run command without arguments it will take default value (4,0,WEST) as arguments.<br/>
      2. MOVE - This command will move Pacman one unit forward in the direction it is currently facing.<br/>
      3. LEFT - This command will rotate Pacman 90 degrees in the left direction without changing the position of Pacman.<br/>
      4. RIGHT - This command will rotate Pacman 90 degrees in the right direction without changing the position of Pacman.<br/>
      5. REPORT - This command will announce the X,Y and F of Pacman.<br/>
    </div>
  </header>
);

export default Header;
