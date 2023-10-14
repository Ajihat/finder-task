import { Container } from './components/Container/Container';
import { Header } from './components/Header/Header';

import './global.css';

function App() {
  return (
    <Container>
      <Header
        title="Join 2 million+ Australians finding better"
        text="Finder's team of 40+ experts will help you find the right choices in over 100 categories."
      />
    </Container>
  );
}

export default App;
