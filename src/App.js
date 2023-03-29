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
import PostLoginLoading from './components/loading/PostLoginLoading';
import VideoBackground from './components/videoBackground/VideoBackground';
import Program from './components/programs/Program';
import Workout from './components/workout/Workout';
import SignUpForm from './pages/SignUpForm';

import ContributeWorkOut from './pages/ContributeWorkout';
import ContributeProgram from './pages/ContributeProgram';
import ContributeExercise from './pages/ContributeExercise';

import AdminPage from './pages/AdminPage';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='signup' element={<KeycloakRoute role={ROLES.User}><SignUpForm /></KeycloakRoute>} />

          <Route path='/signup' element={<SignUpForm />} />


          <Route path='/profile' element={<KeycloakRoute role={ROLES.User}><Profile /></KeycloakRoute>} />
          <Route path='/dashboard' element={<KeycloakRoute role={ROLES.User}><Dashboard /></KeycloakRoute>} />
          <Route path='/goals' element={<KeycloakRoute role={ROLES.User}><Goals /></KeycloakRoute>} />
          <Route path='/programs' element={<KeycloakRoute role={ROLES.User}><Programs /></KeycloakRoute>} />
          <Route exact path='/program/:id' element={<KeycloakRoute role={ROLES.User}><Program /></KeycloakRoute>} />
          <Route path='/workouts' element={<KeycloakRoute role={ROLES.User}><Workouts /></KeycloakRoute>} />
          <Route path='/workout' element={<KeycloakRoute role={ROLES.User}><Workout /></KeycloakRoute>} />
          <Route exact path='/workout/:id' element={<KeycloakRoute role={ROLES.User}><Workout /></KeycloakRoute>} />


          <Route path='/contribute-program' element={<KeycloakRoute role={ROLES.Contributor}><ContributeProgram /></KeycloakRoute>} />
          <Route path='/contribute-workout' element={<KeycloakRoute role={ROLES.Contributor}><ContributeWorkOut /></KeycloakRoute>} />
          <Route path='/contribute-exercise' element={<KeycloakRoute role={ROLES.Contributor}><ContributeExercise /></KeycloakRoute>} />


          <Route path='/admin' element={<KeycloakRoute role={ROLES.Admin}><AdminPage/></KeycloakRoute>}/>


          
          <Route path='/loading' element={<PostLoginLoading />} />
          <Route path='/video' element={<VideoBackground />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
