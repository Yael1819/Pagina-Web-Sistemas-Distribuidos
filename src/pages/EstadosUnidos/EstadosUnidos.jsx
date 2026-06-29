import React from 'react';
import { Link } from 'react-router-dom';
import './EstadosUnidos.css';

function EstadosUnidos() {
  const estadios = [
    { 
      nombre: 'MetLife Stadium', 
      ciudad: 'East Rutherford, NJ', 
      capacidad: '82,500', 
      imagen: 'https://images.copaamerica.com/Metlife_Stadium_2_8333461e8b.jpeg',
      descripcion: 'El estadio más grande de la NFL'
    },
    { 
      nombre: 'SoFi Stadium', 
      ciudad: 'Los Ángeles, CA', 
      capacidad: '70,240', 
      imagen: 'https://images.copaamerica.com/editions/copa-america-2024/stadiums/sofi-stadium-photo.webp',
      descripcion: 'Tecnología de punta y diseño futurista'
    },
    { 
      nombre: 'AT&T Stadium', 
      ciudad: 'Arlington, TX', 
      capacidad: '80,000', 
      imagen: 'https://images.copaamerica.com/editions/copa-america-2024/stadiums/att-stadium-photo.webp',
      descripcion: 'El Jerry World de los Dallas Cowboys'
    },
    { 
      nombre: 'Hard Rock Stadium', 
      ciudad: 'Miami, FL', 
      capacidad: '65,326', 
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/200127-H-PX819-0092.jpg',
      descripcion: 'Casa de los Miami Dolphins'
    },
  ];

  const ciudades = [
    { 
      nombre: 'Los Ángeles', 
      poblacion: '18.5M', 
      descripcion: 'Ciudad del entretenimiento y el cine mundial',
      imagen: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/ee/9b/d6.jpg',
      atracciones: ['Hollywood', 'Disneyland', 'Beverly Hills']
    },
    { 
      nombre: 'Nueva York', 
      poblacion: '19.8M', 
      descripcion: 'La Gran Manzana, capital del mundo',
      imagen: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop',
      atracciones: ['Times Square', 'Central Park', 'Estatua de la Libertad']
    },
    { 
      nombre: 'Miami', 
      poblacion: '6.5M', 
      descripcion: 'Puerta de Latinoamérica, playas y vida nocturna',
      imagen: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=800&h=500&fit=crop',
      atracciones: ['South Beach', 'Little Havana', 'Everglades']
    },
    { 
      nombre: 'Dallas', 
      poblacion: '7.6M', 
      descripcion: 'Corazón de Texas, centro empresarial',
      imagen: 'https://images.trvl-media.com/place/178253/280997e1-2e41-47c4-b4ae-7f65ce64eab4.jpg',
      atracciones: ['Dealey Plaza', 'Reunion Tower', 'Fort Worth Stockyards']
    },
  ];

  return (
    <div className="usa-page">
      <header className="header">
        <div className="logo">
          <span>🇺🇸</span>
          <h1>Estados Unidos 2026</h1>
        </div>
        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/grupos">Grupos</Link>
          <Link to="/historia">Historia</Link>
          <Link to="/avance">Avance</Link>
        </nav>
      </header>

      <div className="usa-content">
        <div className="usa-hero">
          <h2>🇺🇸 Estados Unidos - Sede Mundial 2026</h2>
          <p>Segunda vez que Estados Unidos alberga el torneo</p>
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
        <p>⚽ Mundial FIFA 2026 - Estados Unidos Sede</p>
      </footer>
    </div>
  );
}

export default EstadosUnidos;