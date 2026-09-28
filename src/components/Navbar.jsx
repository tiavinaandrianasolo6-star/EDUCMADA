import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">

        {/* Logo */}
        <NavLink to="/" className="navbar-brand">
          <span className="logo-icon">
            <i className="fas fa-graduation-cap"></i>
          </span>

          <span className="logo-text">
            Edu<span>Mada</span>
          </span>
        </NavLink>

        {/* Mobile button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Afficher la navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div className="collapse navbar-collapse" id="mainNavbar">

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                end
              >
                Accueil
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/cepe"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                CEPE
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/bepc"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                BEPC
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/bacc"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                BACC
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/sujets"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Sujets
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/quiz"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Quiz
              </NavLink>
            </li>

          </ul>

          {/* Connexion */}
          <NavLink
            to="/connexion"
            className="btn btn-success navbar-login"
          >
            <i className="fas fa-user me-2"></i>
            Connexion
          </NavLink>

        </div>
      </div>
    </nav>
  )
}

export default Navbar