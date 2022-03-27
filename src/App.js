import Home from "Pages/Home"
import {globalstyles} from 'Design';
import {Container} from "Design";
const App = () => {
  globalstyles()
  return (
      <Container >
        <Home />
      </Container>
  );
}
export default App;
