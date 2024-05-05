import AnimatedRoutes from '../components/AnimatedRoutes';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <AnimatedRoutes/>
        </BrowserRouter>
    </div>
  );
}

export default App;
