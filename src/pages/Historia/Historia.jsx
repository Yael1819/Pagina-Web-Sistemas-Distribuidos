import React from 'react';
import { Link } from 'react-router-dom';
import './Historia.css';

function Historia() {
  const campeones = [
    { año: 1930, pais: 'Uruguay', sede: 'Uruguay' },
    { año: 1934, pais: 'Italia', sede: 'Italia' },
    { año: 1938, pais: 'Italia', sede: 'Francia' },
    { año: 1950, pais: 'Uruguay', sede: 'Brasil' },
    { año: 1954, pais: 'Alemania', sede: 'Suiza' },
    { año: 1958, pais: 'Brasil', sede: 'Suecia' },
    { año: 1962, pais: 'Brasil', sede: 'Chile' },
    { año: 1966, pais: 'Inglaterra', sede: 'Inglaterra' },
    { año: 1970, pais: 'Brasil', sede: 'México' },
    { año: 1974, pais: 'Alemania', sede: 'Alemania' },
    { año: 1978, pais: 'Argentina', sede: 'Argentina' },
    { año: 1982, pais: 'Italia', sede: 'España' },
    { año: 1986, pais: 'Argentina', sede: 'México' },
    { año: 1990, pais: 'Alemania', sede: 'Italia' },
    { año: 1994, pais: 'Brasil', sede: 'EE.UU.' },
    { año: 1998, pais: 'Francia', sede: 'Francia' },
    { año: 2002, pais: 'Brasil', sede: 'Corea/Japón' },
    { año: 2006, pais: 'Italia', sede: 'Alemania' },
    { año: 2010, pais: 'España', sede: 'Sudáfrica' },
    { año: 2014, pais: 'Alemania', sede: 'Brasil' },
    { año: 2018, pais: 'Francia', sede: 'Rusia' },
    { año: 2022, pais: 'Argentina', sede: 'Qatar' },
    { año: 2026, pais: '¿Quién será?', sede: 'México/EE.UU./Canadá' },
  ];

  const maxGanadores = [
    { pais: '🇧🇷 Brasil', titulos: 5 },
    { pais: '🇩🇪 Alemania', titulos: 4 },
    { pais: '🇮🇹 Italia', titulos: 4 },
    { pais: '🇦🇷 Argentina', titulos: 3 },
    { pais: '🇫🇷 Francia', titulos: 2 },
    { pais: '🇺🇾 Uruguay', titulos: 2 },
  ];

  return (
    <div className="historia-page">
      <header className="header">
        <div className="logo">
          <span>📖</span>
          <h1>Historia del Mundial</h1>
        </div>
        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/grupos">Grupos</Link>
          <Link to="/historia">Historia</Link>
          <Link to="/avance">Avance</Link>
        </nav>
      </header>

      <div className="historia-content">
        <div className="historia-hero">
          <h2>🏆 96 años de historia</h2>
          <p>Desde el primer mundial en Uruguay 1930 hasta la edición 2026</p>
        </div>

        <section className="max-ganadores">
          <h2>🥇 Países con más títulos</h2>
          <div className="ganadores-grid">
            {maxGanadores.map((ganador, index) => (
              <div className="ganador-card" key={index}>
                <span className="ganador-pais">{ganador.pais}</span>
                <span className="ganador-titulos">{ganador.titulos} 🏆</span>
              </div>
            ))}
          </div>
        </section>

        <section className="lista-campeones">
          <h2>📅 Todos los campeones</h2>
          <div className="campeones-grid">
            {campeones.map((campeon, index) => (
              <div className="campeon-item" key={index}>
                <span className="campeon-año">{campeon.año}</span>
                <span className="campeon-pais">{campeon.pais}</span>
                <span className="campeon-sede">📍 {campeon.sede}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="footer">
        <p>⚽ Historia del Mundial FIFA 2026</p>
      </footer>
    </div>
  );
}

export default Historia;