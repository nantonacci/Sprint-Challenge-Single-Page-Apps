import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList.js';
import EpisodeList from './components/EpisodeList.js';
// import AppRouter from './components/AppRouter.js';

export default function App() {
  return (
    <main>
      <Header />
      {/* <CharacterList />
      <LocationsList />
      <EpisodeList /> */}
      <TabNav />
      {/* <AppRouter /> */}
      <Route exact path="/character" component={CharacterList} />
      <Route exact path="/location" component={LocationsList} />
      <Route exact path="/episode" component={EpisodeList} />
    </main>
  );
}
