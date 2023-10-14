import { useState } from 'react';

import { Container } from './components/Container/Container';
import { Header } from './components/Header/Header';
import { TilesHolder } from './components/TilesHolder/TilesHolder';
import { Tile } from './components/Tile/Tile';

import { useCalcVisibleTiles } from './customHooks/useCalcVisibleTiles';

import { tiles } from './data/tiles';

import './global.css';

function App() {
  const [areTilesExpanded, setAreTilesExpanded] = useState(true);

  const visibleTilesNumber = useCalcVisibleTiles();

  const visibleTiles = tiles.slice(0, visibleTilesNumber);
  const expandingTiles = tiles.slice(visibleTilesNumber);
  console.log(visibleTiles, expandingTiles);
  return (
    <Container>
      <Header
        title="Join 2 million+ Australians finding better"
        text="Finder's team of 40+ experts will help you find the right choices in over 100 categories."
      />
      <TilesHolder>
        {visibleTiles.map(tile => (
          <Tile key={tile.id} href={tile.href} icon={tile.icon} text={tile.text} />
        ))}
        {areTilesExpanded &&
          expandingTiles.map(tile => <Tile key={tile.id} href={tile.href} icon={tile.icon} text={tile.text} />)}
      </TilesHolder>
    </Container>
  );
}

export default App;
