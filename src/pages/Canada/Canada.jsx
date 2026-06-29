import React from 'react';
import { Link } from 'react-router-dom';
import './Canada.css';

function Canada() {
  const estadios = [
    { 
      nombre: 'BC Place', 
      ciudad: 'Vancouver', 
      capacidad: '54,500', 
      imagen: 'https://images.spaicelabs.com/images/flus6j8v/production/37d069f71f67b4591905dfab4aa98bb4c9703e07-2048x1360.jpg?rect=0,143,2048,1075&w=1200&h=630',
      descripcion: 'Estadio con techo retráctil en la costa del Pacífico'
    },
    { 
      nombre: 'Estadio Olímpico', 
      ciudad: 'Montreal', 
      capacidad: '56,040', 
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Olympiastadion_Berlin_Sep-2015.jpg',
      descripcion: 'Sede de los Juegos Olímpicos de 1976'
    },
    { 
      nombre: 'BMO Field', 
      ciudad: 'Toronto', 
      capacidad: '45,000', 
      imagen: 'https://estadiosdb.com/pic-projects/toronto_stadium/toronto_stadium10.jpg',
      descripcion: 'Casa del Toronto FC en el corazón de Ontario'
    },
  ];

  const ciudades = [
    { 
      nombre: 'Toronto', 
      poblacion: '6.2M', 
      descripcion: 'La ciudad más grande de Canadá, centro financiero y multicultural',
      imagen: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=500&fit=crop',
      atracciones: ['CN Tower', 'Casa Loma', 'Toronto Islands']
    },
    { 
      nombre: 'Vancouver', 
      poblacion: '2.6M', 
      descripcion: 'Ciudad costera rodeada de montañas y naturaleza',
      imagen: 'https://images.unsplash.com/photo-1559511260-66a654ae982a?w=800&h=500&fit=crop',
      atracciones: ['Stanley Park', 'Granville Island', 'Capilano Suspension Bridge']
    },
    { 
      nombre: 'Montreal', 
      poblacion: '4.2M', 
      descripcion: 'Ciudad bilingüe y cultural con influencia europea',
      imagen: 'https://www.airtransat.com/getmedia/cafc7e6e-d0ff-497e-9998-e708f41aa191/Montreal-estival.aspx',
      atracciones: ['Viejo Montreal', 'Basílica de Notre-Dame', 'Mont Royal']
    },
  ];

  return (
    <div className="canada-page">
      <header className="header">
        <div className="logo">
          <span>🇨🇦</span>
          <h1>Canadá 2026</h1>
        </div>
        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/grupos">Grupos</Link>
          <Link to="/historia">Historia</Link>
          <Link to="/avance">Avance</Link>
        </nav>
      </header>

      <div className="canada-content">
        <div className="canada-hero">
          <h2>🇨🇦 Canadá - Sede Mundial 2026</h2>
          <p>Primera vez que Canadá alberga el torneo mundialista</p>
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
        <p>⚽ Mundial FIFA 2026 - Canadá Sede</p>
      </footer>
    </div>
  );
}

export default Canada;