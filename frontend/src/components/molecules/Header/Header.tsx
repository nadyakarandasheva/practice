import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.css"

export const Header: React.FC = () => {

  const { pathname } = useLocation();

  return (
    <header className="headerContainer">
      <div>
        <div>
          Карандашева Надежда
        </div>

        <div>
          группа P4208
        </div>
      </div>

      <div className="buttonContainer">
        <Link to="/glossary" className="headerLink">
          <div className={`headerButton ${pathname === "/glossary" ? "headerButtonSelected" : ""}`}>
            Глоссарий
          </div>
        </Link>

        <Link to="/semantic-graph" className="headerLink">
          <div className={`headerButton ${pathname === "/semantic-graph" ? "headerButtonSelected" : ""}`}>
            Семантический граф
          </div>
        </Link>
      </div>

    </header>
  );
}