export default function Header() {
  return (
    <div className="pure-menu pure-menu-horizontal">
      <h1 className="pure-menu-heading">BRAND</h1>
      <ul className="pure-menu-list">
        <li className="pure-menu-item">
          <a href="#" className="pure-menu-link">News</a>
        </li>
        <li className="pure-menu-item">
          <a href="#" className="pure-menu-link">Sports</a>
        </li>
        <li className="pure-menu-item">
          <a href="#" className="pure-menu-link">Finance</a>
        </li>
      </ul>
    </div>
  );
}