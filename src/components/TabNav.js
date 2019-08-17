import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Tab } from './Styles.js';

export default function TabNav() {
  return (
    <Nav>
      <Tab>
        <NavLink to="/character" activeClassName="activeNavButton">
          Characters
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to="/location" activeClassName="activeNavButton">
          Locations
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to="/episode" activeClassName="activeNavButton">
          Episodes
        </NavLink>
      </Tab>
    </Nav>
  );
}
