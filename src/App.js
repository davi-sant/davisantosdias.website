import Home from "../src/Pages/Home"
import {GlobalStyles, Container} from '../src/Design';
const App = () => {
  GlobalStyles()
  return (
      <Container >
        <Home />
      </Container>
  );
}
export default App;
