import { Link } from 'react-router-dom'
import heroImage from '../assets/images/tableau.jpg'
import ctaImage from '../assets/images/fond.jpg'

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
      >
        
        <div className="container">
          <div className="row align-items-center min-vh-75">

            <div className="col-lg-7">
              <span className="hero-badge">
                <i className="fas fa-graduation-cap me-2"></i>
                Plateforme éducative gratuite
              </span>

              <h1 className="hero-title mt-4">
                Préparez vos examens avec
                <span> EduMada</span>
              </h1>

              <p className="hero-text mt-4">
                Une plateforme gratuite pour aider les élèves malgaches
                à mieux se préparer au CEPE, au BEPC et au BACC.
              </p>

              <div className="hero-buttons mt-4">
                <Link to="/sujets" className="btn btn-success btn-lg me-2">
                  <i className="fas fa-file-pdf me-2"></i>
                  Voir les sujets
                </Link>

                <Link to="/quiz" className="btn btn-outline-success btn-lg">
                  <i className="fas fa-gamepad me-2"></i>
                  Faire un quiz
                </Link>
              </div>

              <div className="hero-info mt-4">
                <div>
                  <i className="fas fa-check-circle me-2"></i>
                  Accès gratuit
                </div>

                <div>
                  <i className="fas fa-check-circle me-2"></i>
                  Sans inscription obligatoire
                </div>

                <div>
                  <i className="fas fa-check-circle me-2"></i>
                  Accessible sur mobile
                </div>
              </div>
            </div>

            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="hero-card">

                <div className="hero-card-icon">
                  <i className="fas fa-book-open"></i>
                </div>

                <h3>Apprendre</h3>
                <p>
                  Retrouvez des ressources pour réviser vos matières.
                </p>

                <div className="hero-card-item">
                  <i className="fas fa-file-pdf"></i>
                  <span>Sujets & corrigés</span>
                </div>

                <div className="hero-card-item">
                  <i className="fas fa-question-circle"></i>
                  <span>Quiz interactifs</span>
                </div>

                <div className="hero-card-item">
                  <i className="fas fa-chart-line"></i>
                  <span>Suivez votre progression</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Examens */}
      <section className="exam-section">
        <div className="container">

          <div className="section-heading text-center">
            <span className="section-label">PRÉPARATION</span>

            <h2>
              Choisissez votre examen
            </h2>

            <p>
              Retrouvez les ressources adaptées à votre niveau scolaire.
            </p>
          </div>

          <div className="row g-4 mt-4">

            {/* CEPE */}
            <div className="col-md-4">
              <div className="exam-card">

                <div className="exam-icon">
                  <i className="fas fa-child"></i>
                </div>

                <span className="exam-level">
                  Premier examen
                </span>

                <h3>CEPE</h3>

                <p>
                  Préparez efficacement votre examen avec des sujets,
                  ressources et quiz adaptés.
                </p>

                <Link to="/cepe" className="exam-link">
                  Découvrir
                  <i className="fas fa-arrow-right ms-2"></i>
                </Link>

              </div>
            </div>

            {/* BEPC */}
            <div className="col-md-4">
              <div className="exam-card">

                <div className="exam-icon">
                  <i className="fas fa-user-graduate"></i>
                </div>

                <span className="exam-level">
                  Collège
                </span>

                <h3>BEPC</h3>

                <p>
                  Entraînez-vous avec des sujets d'examen et
                  testez vos connaissances avec les quiz.
                </p>

                <Link to="/bepc" className="exam-link">
                  Découvrir
                  <i className="fas fa-arrow-right ms-2"></i>
                </Link>

              </div>
            </div>

            {/* BACC */}
            <div className="col-md-4">
              <div className="exam-card">

                <div className="exam-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>

                <span className="exam-level">
                  Lycée
                </span>

                <h3>BACC</h3>

                <p>
                  Préparez votre BACC avec les différentes séries
                  et les matières disponibles.
                </p>

                <Link to="/bacc" className="exam-link">
                  Découvrir
                  <i className="fas fa-arrow-right ms-2"></i>
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="features-section">
        <div className="container">

          <div className="section-heading text-center">
            <span className="section-label">EDUMADA</span>

            <h2>
              Tout pour mieux préparer vos examens
            </h2>

            <p>
              Des outils simples pour apprendre, réviser et vous entraîner.
            </p>
          </div>

          <div className="row g-4 mt-4">

            <div className="col-md-4">
              <div className="feature-card">

                <div className="feature-icon">
                  <i className="fas fa-file-pdf"></i>
                </div>

                <h4>Sujets d'examen</h4>

                <p>
                  Consultez et téléchargez gratuitement des sujets
                  d'examen au format PDF.
                </p>

              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">

                <div className="feature-icon">
                  <i className="fas fa-gamepad"></i>
                </div>

                <h4>Quiz interactifs</h4>

                <p>
                  Testez vos connaissances avec des QCM et obtenez
                  votre résultat sur 20.
                </p>

              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">

                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>

                <h4>Votre progression</h4>

                <p>
                  Avec un compte gratuit, gardez vos résultats et
                  suivez votre progression.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">

          <div className="cta-box text-center"style={{ backgroundImage: `url(${ctaImage})` }}>

            <i className="fas fa-rocket cta-icon"></i>

            <h2>
              Prêt à commencer ?
            </h2>

            <p>
              Choisissez votre niveau et commencez votre préparation
              gratuitement.
            </p>

            <Link to="/sujets" className="btn btn-light btn-lg">
              Commencer maintenant
              <i className="fas fa-arrow-right ms-2"></i>
            </Link>

          </div>

        </div>
      </section>
    </>
  )
}

export default Home