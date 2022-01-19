import {Route,Switch} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritePage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {
  return (
    
      <Layout>
          <Switch>

            <Route path='/' exact>
              <AllMeetupsPage />

            </Route>
            <Route path='/New-meetup'>
              <NewMeetupPage />

            </Route>
            <Route path='/favourite'>
              <FavoritePage />

            </Route>


          </Switch>

      </Layout>
      
    
        
  );
}

export default App;
