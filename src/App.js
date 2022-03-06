import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Admin from './Admin/Admin';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Admin} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
