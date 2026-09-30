import SujImage from '../assets/images/123.avif'

function CepeSujets() {
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
      year: '2025',
      subject: 'Malagasy',
      type: 'Sujet + Corrigé',
    },
    {
      year: '2024',
      subject: 'Mathématiques',
      type: 'Sujet + Corrigé',
    },
    {
      year: '2024',
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
    <div className="cepe-full-page">

      <section className="cepe-page-header">
        <div className="container text-center">
          <span className="section-label">CEPE</span>

          <h1>Sujets d'examen</h1>

          <p>
            Retrouvez les sujets du CEPE classés par matière et par année.
          </p>
        </div>
      </section>

      <section className="cepe-section"style={{ backgroundImage: `url(${SujImage})` }}>
        <div className="container">

          {/* Filtres */}
          <div className="cepe-filters mb-5">

            <select className="form-select">
              <option value="">Toutes les matières</option>
              <option>Mathématiques</option>
              <option>Français</option>
              <option>Malagasy</option>
              <option>Connaissance générale</option>
            </select>

            <select className="form-select">
              <option value="">Toutes les années</option>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>

          </div>

          <div className="row g-4">

            {sujets.map((sujet, index) => (
              <div className="col-md-6 col-lg-4" key={index}>

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
      </section>

    </div>
  )
}

export default CepeSujets