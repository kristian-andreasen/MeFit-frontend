import AuthMenu from './AuthMenu';
import MenuItems from './MenuItems';
import './Navbar.css';

function Navbar() {
  return (
    <header className='header-container'>
      <nav className='main-navigation'>
        <MenuItems />
        <h1 id='logo' className='header-heading'>
          MeFit
        </h1>
        <AuthMenu />
      </nav>
    </header>
  );
}

export default Navbar;
