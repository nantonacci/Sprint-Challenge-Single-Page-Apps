export default function AppRouter() {
  return (
    <div>
      <Route exact path="/character" component={CharacterList} />
      <Route exact path="/location" component={LocationsList} />
      <Route exact path="/episode" component={EpisodeList} />
    </div>
  );
}
