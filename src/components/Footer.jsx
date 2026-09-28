function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">

          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="fw-bold">EduMada</h5>

            <p className="text-light mb-0">
              Plateforme éducative gratuite pour accompagner
              les élèves malgaches dans leur préparation aux examens.
            </p>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">Examens</h6>

            <ul className="list-unstyled">
              <li>
                <a href="/cepe" className="text-light">
                  CEPE
                </a>
              </li>

              <li>
                <a href="/bepc" className="text-light">
                  BEPC
                </a>
              </li>

              <li>
                <a href="/bacc" className="text-light">
                  BACC
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">Plateforme</h6>

            <ul className="list-unstyled">
              <li>
                <a href="/sujets" className="text-light">
                  Sujets
                </a>
              </li>

              <li>
                <a href="/quiz" className="text-light">
                  Quiz
                </a>
              </li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          <small className="text-light">
            © 2026 EduMada — Plateforme éducative gratuite
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer