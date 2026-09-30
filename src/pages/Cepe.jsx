import { Link } from 'react-router-dom'
import heroImage from '../assets/images/tableau.jpg'
import QuizImage from '../assets/images/sada.avif'

function Cepe() {
  const matieres = [
    {
      icon: 'fas fa-calculator',
      name: 'Mathématiques',
      description: 'Calcul, problèmes et géométrie.',
    },
    {
      icon: 'fas fa-language',
      name: 'Français',
      description: 'Lecture, grammaire et compréhension.',
    },
    {
      icon: 'fas fa-book',
      name: 'Malagasy',
      description: 'Famakiana, fitsipi-pitenenana ary fahazoana lahatsoratra.',
    },
    {
      icon: 'fas fa-globe-africa',
      name: 'Connaissance générale',
      description: 'Histoire, géographie et connaissances générales.',
    },
  ]

  const sujets = [
    {
      year: '2025',
      subject: 'Mathématiques',
      type: 'Sujet + Corrigé',
    },
    {
      year: '2025',
      subject: 'Français',
      type: 'Sujet + Corrigé',
    },
    {
      year: '2024',
      subject: 'Malagasy',
      type: 'Sujet + Corrigé',
    },
  ]

  return (
    <div className="cepe-page">

      {/* =========================
          HERO CEPE
      ========================= */}

      <section className="cepe-hero"style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-8">
              <span className="cepe-badge">
                <i className="fas fa-graduation-cap me-2"></i>
                Préparation au CEPE
              </span>

              <h1>
                Préparez votre <span>CEPE</span> avec <span>EduMada</span> 
              </h1>

              <p>
                Retrouvez les matières, sujets d'examen, corrigés et quiz
                interactifs pour vous entraîner efficacement avant le CEPE.
              </p>

              <div className="cepe-hero-buttons">
                <a href="#matieres" className="btn btn-success">
                  <i className="fas fa-book-open me-2"></i>
                  Voir les matières
                </a>

                <a href="#quiz-cepe" className="btn btn-outline-success">
                  <i className="fas fa-brain me-2"></i>
                  Faire un quiz
                </a>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="cepe-hero-card">
                <div className="cepe-hero-icon">
                  <i className="fas fa-school"></i>
                </div>

                <h3>Objectif CEPE</h3>

                <p>
                  Réviser régulièrement, s'entraîner avec des sujets
                  d'examen et tester ses connaissances grâce aux quiz.
                </p>

                <div className="cepe-stat">
                  <i className="fas fa-check-circle"></i>
                  Ressources gratuites
                </div>

                <div className="cepe-stat">
                  <i className="fas fa-file-pdf"></i>
                  Sujets et corrigés
                </div>

                <div className="cepe-stat">
                  <i className="fas fa-question-circle"></i>
                  Quiz interactifs
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          MATIERES
      ========================= */}

      <section className="cepe-section" id="matieres">
        <div className="container">

          <div className="section-heading text-center mb-5">
            <span className="section-label">RÉVISIONS</span>

            <h2>Les matières du CEPE</h2>

            <p>
              Choisissez une matière et commencez vos révisions.
            </p>
          </div>

          <div className="row g-4">

            {matieres.map((matiere) => (
              <div className="col-md-6 col-lg-3" key={matiere.name}>
                <div className="cepe-matiere-card">

                  <div className="cepe-matiere-icon">
                    <i className={matiere.icon}></i>
                  </div>

                  <h3>{matiere.name}</h3>

                  <p>{matiere.description}</p>

                  <Link to="/sujets" className="cepe-card-link">
                    Voir les ressources
                    <i className="fas fa-arrow-right ms-2"></i>
                  </Link>

                </div>
              </div>
            ))}

          </div>
        </div>

            <div className="text-center mt-5">
                <Link to="/cepe/matieres" className="btn btn-outline-success cepe-more-btn">
                  Voir toutes les matières
                  <i className="fas fa-arrow-right ms-2"></i>
                </Link>
            </div>

      </section>

      {/* =========================
          SUJETS
      ========================= */}

      <section className="cepe-section cepe-subjects-section"style={{ backgroundImage: `url(${QuizImage})` }}>
        <div className="container">

          <div className="section-heading text-center mb-5">
            <span className="section-label">ENTRAÎNEMENT</span>

            <h2>Sujets et corrigés</h2>

            <p>
              Entraînez-vous avec des sujets d'examen et consultez leurs
              corrigés.
            </p>
          </div>

          <div className="row g-4">

            {sujets.map((sujet) => (
              <div className="col-md-6 col-lg-4" key={`${sujet.year}-${sujet.subject}`}>
                <div className="cepe-document-card">

                  <div className="cepe-document-icon">
                    <i className="fas fa-file-pdf"></i>
                  </div>

                  <div className="cepe-document-content">
                    <span>{sujet.year}</span>

                    <h3>{sujet.subject}</h3>

                    <p>{sujet.type}</p>
                  </div>

                  <button className="btn btn-outline-success">
                    <i className="fas fa-download me-2"></i>
                    Télécharger
                  </button>

                </div>
              </div>
            ))}

          </div>

        </div>

              <div className="text-center mt-5">
                  <Link
                    to="/cepe/sujets"
                    className="btn btn-outline-success cepe-more-btn"
                  >
                    Voir tous les sujets
                    <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
              </div>

      </section>

      {/* =========================
          QUIZ
      ========================= */}

      <section className="cepe-section" id="quiz-cepe">
        <div className="container">

          <div className="section-heading text-center mb-5">
            <span className="section-label">QUIZ</span>

            <h2>Testez vos connaissances</h2>

            <p>
              Répondez aux questions et découvrez votre score.
            </p>
          </div>

          <div className="cepe-quiz-box">

            <div className="cepe-quiz-icon">
              <i className="fas fa-brain"></i>
            </div>

            <div className="cepe-quiz-content">
              <h3>Quiz de préparation au CEPE</h3>

              <p>
                20 questions pour vous entraîner dans différentes matières
                du programme.
              </p>
            </div>

            <Link to="/quiz" className="btn btn-success">
              <i className="fas fa-play me-2"></i>
              Commencer le quiz
            </Link>

          </div>

        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}

      <section className="cepe-cta-section">
        <div className="container">

          <div className="cepe-cta-box text-center">

            <i className="fas fa-graduation-cap cepe-cta-icon"></i>

            <h2>Prêt à commencer vos révisions ?</h2>

            <p>
              Explorez les ressources disponibles et préparez votre CEPE
              gratuitement avec EduMada.
            </p>

            <Link to="/quiz" className="btn btn-light">
              Commencer maintenant
              <i className="fas fa-arrow-right ms-2"></i>
            </Link>

          </div>

        </div>
      </section>

    </div>
  )
}

export default Cepe