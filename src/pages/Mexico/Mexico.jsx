import React from 'react';
import { Link } from 'react-router-dom';
import './Mexico.css';

function Mexico() {
  const estadios = [
    { 
      nombre: 'Estadio Azteca', 
      ciudad: 'Ciudad de México', 
      capacidad: '87,523', 
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Vista_a%C3%A9rea_del_Estadio_Azteca_-_2026_-_02.jpg/1280px-Vista_a%C3%A9rea_del_Estadio_Azteca_-_2026_-_02.jpg',
      descripcion: 'El estadio más emblemático de México'
    },
    { 
      nombre: 'Estadio Akron', 
      ciudad: 'Guadalajara', 
      capacidad: '49,850', 
      imagen: 'https://estadiosdb.com/img/news/2025/03/66Akr01.jpg',
      descripcion: 'Casa de las Chivas Rayadas'
    },
    { 
      nombre: 'Estadio BBVA', 
      ciudad: 'Monterrey', 
      capacidad: '53,500', 
      imagen: 'https://estadiosdb.com/pictures/stadiums/mex/estadio_bbva_bancomer/estadio_bbva_bancomer90.jpg',
      descripcion: 'El Gigante de Acero'
    },
  ];

  const ciudades = [
    { 
      nombre: 'Ciudad de México', 
      poblacion: '21.6M', 
      descripcion: 'Capital del país y una de las ciudades más grandes del mundo',
      imagen: 'https://blog-exatec.tec.mx/sites/exatec/files/styles/wide/public/2025-01/ciudad-de-mexico-destino-unico-y-capital-cultural-de-america1.jpg.webp?itok=60Eurpnc',
      atracciones: ['Zócalo', 'Castillo de Chapultepec', 'Museo de Antropología']
    },
    { 
      nombre: 'Guadalajara', 
      poblacion: '5.1M', 
      descripcion: 'Perla de Occidente, cuna del mariachi y el tequila',
      imagen: 'https://media.gq.com.mx/photos/687976a03ca368734df34dfc/master/w_2560%2Cc_limit/Guadalajara-Zona-Financiera.jpg',
      atracciones: ['Catedral', 'Tlaquepaque', 'Teatro Degollado']
    },
    { 
      nombre: 'Monterrey', 
      poblacion: '5.3M', 
      descripcion: 'Sultán del Norte, centro industrial y cultural',
      imagen: 'https://preview.redd.it/monterrey-mexico-second-largest-city-in-mexico-with-5-3-v0-9wlu6uubdd0f1.jpeg?auto=webp&s=ab84b2d0990a2ecd4177bc31c283435bf337c373',
      atracciones: ['Cerro de la Silla', 'Macroplaza', 'Paseo Santa Lucía']
    },
  ];

  return (
    <div className="mexico-page">
      <header className="header">
        <div className="logo">
          <span>🇲🇽</span>
          <h1>México 2026</h1>
        </div>
        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/grupos">Grupos</Link>
          <Link to="/historia">Historia</Link>
          <Link to="/avance">Avance</Link>
        </nav>
      </header>

      <div className="mexico-content">
        <div className="mexico-hero">
          <h2>🇲🇽 México - Sede Mundial 2026</h2>
          <p>Tercera vez que México alberga el torneo más importante del fútbol</p>
        </div>

        <section className="estadios-section">
          <h2>🏟️ Estadios</h2>
          <div className="estadios-grid">
            {estadios.map((estadio, index) => (
              <div className="estadio-card" key={index}>
                <div className="estadio-imagen-container">
                  <img src={estadio.imagen} alt={estadio.nombre} className="estadio-imagen" />
                  <div className="estadio-badge">{estadio.capacidad}</div>
                </div>
                <div className="estadio-info">
                  <h3>{estadio.nombre}</h3>
                  <p className="estadio-ciudad">📍 {estadio.ciudad}</p>
                  <p className="estadio-descripcion">{estadio.descripcion}</p>
                  <div className="estadio-capacidad">
                    <span>👥 Capacidad: {estadio.capacidad}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="ciudades-section">
          <h2>🌆 Ciudades Sede</h2>
          <div className="ciudades-grid">
            {ciudades.map((ciudad, index) => (
              <div className="ciudad-card" key={index}>
                <div className="ciudad-imagen-container">
                  <img src={ciudad.imagen} alt={ciudad.nombre} className="ciudad-imagen" />
                </div>
                <div className="ciudad-info">
                  <h3>{ciudad.nombre}</h3>
                  <p className="ciudad-poblacion">👤 Población: {ciudad.poblacion}</p>
                  <p className="ciudad-descripcion">{ciudad.descripcion}</p>
                  <div className="ciudad-atracciones">
                    <span className="atracciones-titulo">📍 Atracciones:</span>
                    <div className="atracciones-tags">
                      {ciudad.atracciones.map((atraccion, idx) => (
                        <span key={idx} className="atraccion-tag">{atraccion}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="footer">
        <p>⚽ Mundial FIFA 2026 - México Sede</p>
      </footer>
    </div>
  );
}

export default Mexico;