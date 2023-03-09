import LoginForm from './components/login/LoginForm';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import KeycloakRoute from './routes/KeycloakRoute';
import { ROLES } from './const/roles';
import StartPage from './pages/StartPage';


//<ReactKeycloakProvider authClient = {keycloak}>
function App() {
  return (
    
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path="/" element={<StartPage/>}/>
            <Route path='/login' element={
              <KeycloakRoute role={ROLES.User}>
                  {<p>successfully assigned role</p>}
              </KeycloakRoute>
            }/>
          </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
