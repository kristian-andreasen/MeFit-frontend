import LoginForm from './components/login/LoginForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KeycloakRoute from './routes/KeycloakRoute';
import { ROLES } from './const/roles';
import StartPage from './pages/StartPage';
import Profile from './pages/profile/Profile';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Dashboard from './pages/Dashboard';
import Workouts from './pages/Workouts';
import Programs from './pages/Programs';
import Goals from './pages/Goals';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about' element={<About />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/goals' element={<Goals />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/workouts' element={<Workouts />} />
          <Route
            path='/login'
            element={
              <KeycloakRoute role={ROLES.User}>
                {<p>successfully assigned role</p>}
              </KeycloakRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
