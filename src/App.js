import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/MenuComponent'
import { DISHES } from './shared/dishes';
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="contoainer">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={DISHES} />
    </div>
  );
}

export default App;
