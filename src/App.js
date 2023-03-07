import LoginForm from './components/login/LoginForm';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import KeycloakRoute from './routes/KeycloakRoute';
import { ROLES } from './const/roles';


//<ReactKeycloakProvider authClient = {keycloak}>
function App() {
  return (
    
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path='/login' element={
              <KeycloakRoute role="USER">
                  {<p>successfully logged in</p>}
              </KeycloakRoute>
            }/>
          </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
