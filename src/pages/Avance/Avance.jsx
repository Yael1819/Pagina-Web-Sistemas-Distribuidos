import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Avance.css';

function Avance() {
  const [faseActual, setFaseActual] = useState('eliminatoria');

  const fases = {
    grupos: {
      nombre: 'Fase de Grupos',
      icono: '📋',
      descripcion: '48 equipos divididos en 12 grupos de 4 equipos cada uno. Los 2 mejores de cada grupo avanzan.',
      equipos: 48,
      avanzan: 32,
      color: '#4CAF50'
    },
    eliminatoria: {
      nombre: 'Eliminatoria de 32',
      icono: '⚡',
      descripcion: 'Los 32 equipos clasificados se enfrentan en eliminación directa. Los ganadores avanzan a octavos.',
      equipos: 32,
      avanzan: 16,
      color: '#2196F3'
    },
    octavos: {
      nombre: 'Octavos de Final',
      icono: '🏟️',
      descripcion: 'Los 16 equipos clasificados se enfrentan en eliminación directa.',
      equipos: 16,
      avanzan: 8,
      color: '#FF9800'
    },
    cuartos: {
      nombre: 'Cuartos de Final',
      icono: '🔥',
      descripcion: 'Los 8 mejores equipos se enfrentan por un lugar en semifinales.',
      equipos: 8,
      avanzan: 4,
      color: '#9C27B0'
    },
    semifinales: {
      nombre: 'Semifinales',
      icono: '🏆',
      descripcion: 'Los 4 equipos restantes luchan por un lugar en la final.',
      equipos: 4,
      avanzan: 2,
      color: '#E91E63'
    },
    final: {
      nombre: 'Final',
      icono: '👑',
      descripcion: 'Los dos mejores equipos se enfrentan por el título mundial.',
      equipos: 2,
      avanzan: 1,
      color: '#F44336'
    }
  };

  // PARTIDOS DE LA ELIMINATORIA DE 32 CON GANADORES
  const partidosEliminatoria = [
    { id: 1, equipo1: '🇧🇷 Brasil', equipo2: '🇯🇵 Japón', hora: '11:00 a.m.', fecha: 'Mañana', ganador: '🇧🇷 Brasil' },
    { id: 2, equipo1: '🇩🇪 Alemania', equipo2: '🇵🇾 Paraguay', hora: '2:30 p.m.', fecha: 'Mañana', ganador: '🇩🇪 Alemania' },
    { id: 3, equipo1: '🇳🇱 Países Bajos', equipo2: '🇲🇦 Marruecos', hora: '7:00 p.m.', fecha: 'Mañana', ganador: '🇳🇱 Países Bajos' },
    { id: 4, equipo1: '🇨🇮 Costa de Marfil', equipo2: '🇳🇴 Noruega', hora: '11:00 a.m.', fecha: 'Mar, 30/6', ganador: '🇳🇴 Noruega' },
    { id: 5, equipo1: '🇫🇷 Francia', equipo2: '🇸🇪 Suecia', hora: '3:00 p.m.', fecha: 'Mar, 30/6', ganador: '🇫🇷 Francia' },
    { id: 6, equipo1: '🇲🇽 México', equipo2: '🇵🇹 Portugal', hora: '7:00 p.m.', fecha: 'Mar, 30/6', ganador: '🇲🇽 México' }, // 🇲🇽 GANA
  ];

  // Equipos que avanzan a octavos (basado en los ganadores)
  const equiposOctavos = [
    '🇧🇷 Brasil', '🇩🇪 Alemania', '🇳🇱 Países Bajos', 
    '🇳🇴 Noruega', '🇫🇷 Francia', '🇲🇽 México',
    '🇦🇷 Argentina', '🇪🇸 España', '🇮🇹 Italia',
    '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra', '🇨🇴 Colombia', '🇧🇪 Bélgica',
    '🇭🇷 Croacia', '🇺🇸 Estados Unidos', '🇨🇦 Canadá', '🇯🇵 Japón'
  ];

  // Equipos para el bracket visual según la fase
  const equiposPorFase = {
    grupos: [
      '🇦🇷 Argentina', '🇧🇷 Brasil', '🇫🇷 Francia', '🇪🇸 España',
      '🇮🇹 Italia', '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra', '🇩🇪 Alemania', '🇳🇱 Países Bajos',
      '🇨🇴 Colombia', '🇺🇾 Uruguay', '🇵🇹 Portugal', '🇧🇪 Bélgica',
      '🇭🇷 Croacia', '🇲🇽 México', '🇺🇸 Estados Unidos', '🇨🇦 Canadá'
    ],
    eliminatoria: partidosEliminatoria.map(p => p.equipo1).concat(partidosEliminatoria.map(p => p.equipo2)),
    octavos: equiposOctavos.slice(0, 8),
    cuartos: ['🇧🇷 Brasil', '🇩🇪 Alemania', '🇳🇱 Países Bajos', '🇫🇷 Francia', '🇲🇽 México', '🇦🇷 Argentina', '🇪🇸 España', '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra'],
    semifinales: ['🇧🇷 Brasil', '🇫🇷 Francia', '🇲🇽 México', '🇦🇷 Argentina'],
    final: ['🇲🇽 México', '🇦🇷 Argentina']
  };

  // Función para obtener el texto del campeón
  const getCampeonTexto = () => {
    if (faseActual === 'final') {
      return '🏆 MÉXICO';
    }
    return '?';
  };

  // Función para obtener el color del campeón
  const getCampeonColor = () => {
    if (faseActual === 'final') {
      return '#FFD700';
    }
    return '#ffffff';
  };

  // Función para renderizar un partido en el bracket (versión solo lectura)
  const renderPartido = (partido) => {
    const ganadorEquipo = partido.ganador;

    return (
      <div key={partido.id} className="partido-bracket completado">
        <div className="partido-equipos">
          <div className={`equipo-linea ${ganadorEquipo === partido.equipo1 ? 'ganador' : ''}`}>
            <span>{partido.equipo1}</span>
            {ganadorEquipo === partido.equipo1 && <span className="check">✅</span>}
          </div>
          <div className={`equipo-linea ${ganadorEquipo === partido.equipo2 ? 'ganador' : ''}`}>
            <span>{partido.equipo2}</span>
            {ganadorEquipo === partido.equipo2 && <span className="check">✅</span>}
          </div>
        </div>
        <div className="partido-info">
          <span className="partido-hora">⏰ {partido.hora}</span>
          <span className="partido-fecha">📅 {partido.fecha}</span>
        </div>
        <div className="partido-ganador">
          🏆 {ganadorEquipo}
        </div>
      </div>
    );
  };

  return (
    <div className="avance-page">
      <header className="header">
        <div className="logo">
          <span>🗺️</span>
          <h1>Avance del Torneo</h1>
        </div>
        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/grupos">Grupos</Link>
          <Link to="/historia">Historia</Link>
          <Link to="/avance">Avance</Link>
        </nav>
      </header>

      <div className="avance-content">
        {/* Hero con diseño FIFA */}
        <div className="avance-hero-fifa">
          <div className="fifa-title">
            <span className="fifa-subtitle">FIFA WORLD CUP 2026™</span>
            <h1 className="fifa-main-title">WORLD CHAMPION</h1>
            <div className="fifa-campeon">
              <span className="campeon-interrogacion" style={{ color: getCampeonColor() }}>
                {getCampeonTexto()}
              </span>
            </div>
            <div className="fifa-footer">
              <span>FIFA WORLD CUP 2026</span>
            </div>
          </div>
        </div>

        {/* Selector de fases */}
        <div className="fases-selector">
          <h2>📊 Recorrido del torneo</h2>
          <div className="fases-nav">
            {Object.keys(fases).map((fase) => (
              <button
                key={fase}
                className={`fase-btn ${faseActual === fase ? 'active' : ''}`}
                onClick={() => setFaseActual(fase)}
                style={{ 
                  borderColor: fases[fase].color,
                  background: faseActual === fase ? fases[fase].color : 'transparent'
                }}
              >
                <span>{fases[fase].icono}</span>
                <span className="fase-btn-text">{fases[fase].nombre}</span>
                <span className="fase-btn-count">{fases[fase].equipos}</span>
              </button>
            ))}
          </div>
        </div>

        {/* PARTIDOS DE ELIMINATORIA DE 32 */}
        {faseActual === 'eliminatoria' && (
          <div className="partidos-eliminatoria">
            <h2>⚡ Eliminatoria de 32 - Resultados</h2>
            <p className="subtitulo-eliminatoria">
              🇲🇽 México elimina a 🇵🇹 Portugal y avanza a Octavos de Final
            </p>
            <div className="partidos-grid">
              {partidosEliminatoria.map(partido => renderPartido(partido))}
            </div>
          </div>
        )}

        {/* BRACKET VISUAL DEL TORNEO */}
        {faseActual !== 'eliminatoria' && (
          <div className="bracket-torneo">
            <div className="bracket-container">
              {/* Columna izquierda - Fase de Grupos */}
              <div className="bracket-columna">
                <div className="bracket-columna-header" style={{ background: fases.grupos.color }}>
                  <span>{fases.grupos.icono}</span>
                  <span>{fases.grupos.nombre}</span>
                  <span className="bracket-count">{fases.grupos.equipos}</span>
                </div>
                <div className="bracket-equipos">
                  {equiposPorFase.grupos.slice(0, 8).map((equipo, idx) => (
                    <div key={idx} className="bracket-equipo">
                      <span>{equipo}</span>
                    </div>
                  ))}
                </div>
                <div className="bracket-flecha">
                  <span>↓ {fases.grupos.avanzan} avanzan</span>
                </div>
              </div>

              {/* Columna - Eliminatoria de 32 */}
              <div className="bracket-columna">
                <div className="bracket-columna-header" style={{ background: fases.eliminatoria.color }}>
                  <span>{fases.eliminatoria.icono}</span>
                  <span>{fases.eliminatoria.nombre}</span>
                  <span className="bracket-count">{fases.eliminatoria.equipos}</span>
                </div>
                <div className="bracket-equipos">
                  {equiposPorFase.eliminatoria.slice(0, 8).map((equipo, idx) => (
                    <div key={idx} className="bracket-equipo">
                      <span>{equipo}</span>
                    </div>
                  ))}
                </div>
                <div className="bracket-flecha">
                  <span>↓ {fases.eliminatoria.avanzan} avanzan</span>
                </div>
              </div>

              {/* Columna - Octavos */}
              <div className="bracket-columna">
                <div className="bracket-columna-header" style={{ background: fases.octavos.color }}>
                  <span>{fases.octavos.icono}</span>
                  <span>{fases.octavos.nombre}</span>
                  <span className="bracket-count">{fases.octavos.equipos}</span>
                </div>
                <div className="bracket-equipos">
                  {equiposPorFase.octavos.slice(0, 6).map((equipo, idx) => (
                    <div key={idx} className="bracket-equipo">
                      <span>{equipo}</span>
                    </div>
                  ))}
                </div>
                <div className="bracket-flecha">
                  <span>↓ {fases.octavos.avanzan} avanzan</span>
                </div>
              </div>

              {/* Columna - Cuartos */}
              <div className="bracket-columna">
                <div className="bracket-columna-header" style={{ background: fases.cuartos.color }}>
                  <span>{fases.cuartos.icono}</span>
                  <span>{fases.cuartos.nombre}</span>
                  <span className="bracket-count">{fases.cuartos.equipos}</span>
                </div>
                <div className="bracket-equipos">
                  {equiposPorFase.cuartos.slice(0, 4).map((equipo, idx) => (
                    <div key={idx} className="bracket-equipo">
                      <span>{equipo}</span>
                    </div>
                  ))}
                </div>
                <div className="bracket-flecha">
                  <span>↓ {fases.cuartos.avanzan} avanzan</span>
                </div>
              </div>

              {/* Columna - Semifinales */}
              <div className="bracket-columna">
                <div className="bracket-columna-header" style={{ background: fases.semifinales.color }}>
                  <span>{fases.semifinales.icono}</span>
                  <span>{fases.semifinales.nombre}</span>
                  <span className="bracket-count">{fases.semifinales.equipos}</span>
                </div>
                <div className="bracket-equipos">
                  {equiposPorFase.semifinales.slice(0, 2).map((equipo, idx) => (
                    <div key={idx} className="bracket-equipo">
                      <span>{equipo}</span>
                    </div>
                  ))}
                </div>
                <div className="bracket-flecha">
                  <span>↓ {fases.semifinales.avanzan} avanzan</span>
                </div>
              </div>

              {/* Columna - Final / Campeón */}
              <div className="bracket-columna final-columna">
                <div className="bracket-columna-header" style={{ background: fases.final.color }}>
                  <span>{fases.final.icono}</span>
                  <span>{fases.final.nombre}</span>
                  <span className="bracket-count">{fases.final.equipos}</span>
                </div>
                <div className="bracket-equipos">
                  {equiposPorFase.final.slice(0, 1).map((equipo, idx) => (
                    <div key={idx} className="bracket-equipo campeon">
                      <span>🏆 {equipo}</span>
                      <span className="campeon-badge">👑 CAMPEÓN</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Detalle de la fase seleccionada */}
        <div className="fase-detalle-moderno">
          <div className="fase-detalle-header" style={{ borderColor: fases[faseActual].color }}>
            <div className="fase-detalle-icono" style={{ background: fases[faseActual].color }}>
              {fases[faseActual].icono}
            </div>
            <div className="fase-detalle-info">
              <h2 style={{ color: fases[faseActual].color }}>
                {fases[faseActual].nombre}
              </h2>
              <p>{fases[faseActual].descripcion}</p>
            </div>
          </div>
          
          <div className="fase-detalle-stats">
            <div className="stat-card">
              <span className="stat-number">{fases[faseActual].equipos}</span>
              <span className="stat-label">Equipos</span>
            </div>
            <div className="stat-card arrow-stat">
              <span className="stat-number">→</span>
              <span className="stat-label">Avanzan</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{fases[faseActual].avanzan}</span>
              <span className="stat-label">Equipos</span>
            </div>
          </div>

          <div className="fase-detalle-equipos">
            <h3>Equipos en esta fase</h3>
            <div className="equipos-grid">
              {equiposPorFase[faseActual]?.map((equipo, index) => (
                <div className="equipo-tag" key={index}>
                  {equipo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>⚽ Avance del Mundial FIFA 2026</p>
      </footer>
    </div>
  );
}

export default Avance;