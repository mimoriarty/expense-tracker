import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="pure-menu pure-menu-horizontal">
      <h1 className="pure-menu-heading">Expense tracker</h1>
      <ul className="pure-menu-list">
        <li className="pure-menu-item">
          <NavLink to="/new" className="pure-menu-link">New</NavLink>
        </li>
        <li className="pure-menu-item">
          <NavLink to="/list" className="pure-menu-link">History</NavLink>
        </li>
        <li className="pure-menu-item">
          <NavLink to="/summary" className="pure-menu-link">Summary</NavLink>
        </li>
      </ul>
    </div>
  );
}