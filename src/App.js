import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KeycloakRoute from './routes/KeycloakRoute';
import { ROLES } from './const/roles';
import StartPage from './pages/StartPage';
import Profile from './pages/Profile';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Dashboard from './pages/Dashboard';
import Workouts from './pages/Workouts';
import Programs from './pages/Programs';
import Goals from './pages/Goals';
import Loading from './components/loading/Loading';
import VideoBackground from './components/videoBackground/VideoBackground';
import Program from './components/programs/Program';
import Workout from './components/workout/Workout';
import Contributor from './pages/contributor';
import SignUpForm from './pages/SignUpForm';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='signup' element={<SignUpForm />} />


          <Route path='/profile' element={<KeycloakRoute role={ROLES.User}><Profile /></KeycloakRoute>} />
          <Route path='/dashboard' element={<KeycloakRoute role={ROLES.User}><Dashboard /></KeycloakRoute>} />
          <Route path='/goals' element={<KeycloakRoute role={ROLES.User}><Goals /></KeycloakRoute>} />
          <Route path='/programs' element={<KeycloakRoute role={ROLES.User}><Programs /></KeycloakRoute>} />
          <Route exact path='/program/:id' element={<KeycloakRoute role={ROLES.User}><Program /></KeycloakRoute>} />
          <Route path='/workouts' element={<KeycloakRoute role={ROLES.User}><Workouts /></KeycloakRoute>} />
          <Route path='/workout' element={<KeycloakRoute role={ROLES.User}><Workout /></KeycloakRoute>} />
          <Route path='/contributor' element={<KeycloakRoute role={ROLES.Contributor}><Contributor /></KeycloakRoute>} />



          
          <Route path='/loading' element={<Loading />} />
          <Route path='/video' element={<VideoBackground />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
