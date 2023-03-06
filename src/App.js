import LoginForm from './components/login/LoginForm';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';



function App() {
  return (
<BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/login' element={<LoginForm />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
