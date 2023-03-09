import keycloak from '../../keycloak';
import './LoginForm.css';

function LoginForm() {
  return (
    <>
      <h3>Log in</h3>
      <form>
        <div class="login-field">
          <div class="row">
            <label class="title">Username or Email</label>
            <input type="text" id="login" />
          </div>
          <div class="row">
            <label class="title">Password</label>
            <input type="password" id="login" />
            
          </div>
        </div>
        <div class="btn-wrapper">
          <button id="login-btn" onClick={()=>keycloak.login()}>LOG IN</button>
        </div>
      </form>
      <div class="btn-wrapper">
        <button id="signup-btn">SIGN UP</button>
      </div>
    </>
  );
}

export default LoginForm;
