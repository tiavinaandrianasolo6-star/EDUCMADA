import SujImage from '../assets/images/123.avif'
function CepeMatieres() {
  const matieres = [
    {
      icon: 'fas fa-calculator',
      name: 'Mathématiques',
      description: 'Calcul, opérations, problèmes et géométrie.',
    },
    {
      icon: 'fas fa-language',
      name: 'Français',
      description: 'Lecture, grammaire, conjugaison, vocabulaire et compréhension.',
    },
    {
      icon: 'fas fa-book',
      name: 'Malagasy',
      description: 'Famakiana, fitsipi-pitenenana, voambolana ary fahazoana lahatsoratra.',
    },
    {
      icon: 'fas fa-globe-africa',
      name: 'Connaissance générale',
      description: 'Histoire, géographie, environnement et connaissances générales.',
    },
    {
      icon: 'fas fa-flask',
      name: 'Sciences',
      description: 'Corps humain, environnement, matière et phénomènes scientifiques.',
    },
    {
      icon: 'fas fa-leaf',
      name: 'Éducation environnementale',
      description: 'Nature, environnement et protection des ressources.',
    },
  ]

  return (
    <div className="cepe-full-page">

      <section className="cepe-page-header">
        <div className="container text-center">
          <span className="section-label">CEPE</span>

          <h1>Toutes les matières</h1>

          <p>
            Retrouvez les différentes matières disponibles pour préparer
            votre examen du CEPE.
          </p>
        </div>
      </section>

      <section className="cepe-section"style={{ backgroundImage: `url(${SujImage})` }}>
        <div className="container">

          <div className="row g-4">

            {matieres.map((matiere) => (
              <div
                className="col-md-6 col-lg-4"
                key={matiere.name}
              >
                <div className="cepe-matiere-card">

                  <div className="cepe-matiere-icon">
                    <i className={matiere.icon}></i>
                  </div>

                  <h3>{matiere.name}</h3>

                  <p>{matiere.description}</p>

                  <button className="btn btn-outline-success">
                    Voir les ressources
                    <i className="fas fa-arrow-right ms-2"></i>
                  </button>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  )
}

export default CepeMatieres