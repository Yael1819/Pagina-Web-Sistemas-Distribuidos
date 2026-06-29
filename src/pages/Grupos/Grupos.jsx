import React from 'react';
import { Link } from 'react-router-dom';
import './Grupos.css';

function Grupos() {
  const grupos = [
    {
      nombre: 'Grupo A',
      equipos: [
        { 
          nombre: '🇲🇽 México', 
          pj: 3, g: 3, e: 0, p: 0, gf: 6, gc: 0, dg: 6, pts: 9, 
          ultimos5: ['✅', '✅', '✅', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇿🇦 Sudáfrica', 
          pj: 3, g: 1, e: 1, p: 1, gf: 2, gc: 3, dg: -1, pts: 4, 
          ultimos5: ['❌', '➖', '✅', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇰🇷 Corea del Sur', 
          pj: 3, g: 1, e: 0, p: 2, gf: 2, gc: 3, dg: -1, pts: 3, 
          ultimos5: ['✅', '❌', '❌', '⬜', '⬜'],
          clasificado: false 
        },
        { 
          nombre: '🇨🇿 Chequia', 
          pj: 3, g: 0, e: 1, p: 2, gf: 2, gc: 6, dg: -4, pts: 1, 
          ultimos5: ['❌', '➖', '❌', '⬜', '⬜'],
          clasificado: false 
        }
      ]
    },
    {
      nombre: 'Grupo B',
      equipos: [
        { 
          nombre: '🇨🇭 Suiza', 
          pj: 3, g: 2, e: 1, p: 0, gf: 7, gc: 3, dg: 4, pts: 7, 
          ultimos5: ['➖', '✅', '✅', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇨🇦 Canadá', 
          pj: 3, g: 1, e: 1, p: 1, gf: 8, gc: 3, dg: 5, pts: 4, 
          ultimos5: ['➖', '✅', '❌', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇧🇦 Bosnia y Herzegovina', 
          pj: 3, g: 1, e: 1, p: 1, gf: 5, gc: 6, dg: -1, pts: 4, 
          ultimos5: ['➖', '❌', '✅', '⬜', '⬜'],
          clasificado: false 
        },
        { 
          nombre: '🇶🇦 Catar', 
          pj: 3, g: 0, e: 1, p: 2, gf: 2, gc: 10, dg: -8, pts: 1, 
          ultimos5: ['➖', '❌', '❌', '⬜', '⬜'],
          clasificado: false 
        }
      ]
    },
    {
      nombre: 'Grupo C',
      equipos: [
        { 
          nombre: '🇧🇷 Brasil', 
          pj: 3, g: 2, e: 1, p: 0, gf: 7, gc: 1, dg: 6, pts: 7, 
          ultimos5: ['➖', '✅', '✅', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇲🇦 Marruecos', 
          pj: 3, g: 2, e: 1, p: 0, gf: 6, gc: 3, dg: 3, pts: 7, 
          ultimos5: ['➖', '✅', '✅', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escocia', 
          pj: 3, g: 1, e: 0, p: 2, gf: 1, gc: 4, dg: -3, pts: 3, 
          ultimos5: ['✅', '❌', '❌', '⬜', '⬜'],
          clasificado: false 
        },
        { 
          nombre: '🇭🇹 Haití', 
          pj: 3, g: 0, e: 0, p: 3, gf: 2, gc: 8, dg: -6, pts: 0, 
          ultimos5: ['❌', '❌', '❌', '⬜', '⬜'],
          clasificado: false 
        }
      ]
    },
    {
      nombre: 'Grupo D',
      equipos: [
        { 
          nombre: '🇺🇸 Estados Unidos', 
          pj: 3, g: 2, e: 0, p: 1, gf: 8, gc: 4, dg: 4, pts: 6, 
          ultimos5: ['✅', '✅', '❌', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇦🇺 Australia', 
          pj: 3, g: 1, e: 1, p: 1, gf: 2, gc: 2, dg: 0, pts: 4, 
          ultimos5: ['✅', '❌', '➖', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇵🇾 Paraguay', 
          pj: 3, g: 1, e: 1, p: 1, gf: 2, gc: 4, dg: -2, pts: 4, 
          ultimos5: ['❌', '✅', '➖', '⬜', '⬜'],
          clasificado: false 
        },
        { 
          nombre: '🇹🇷 Turquía', 
          pj: 3, g: 1, e: 0, p: 2, gf: 3, gc: 5, dg: -2, pts: 3, 
          ultimos5: ['❌', '❌', '✅', '⬜', '⬜'],
          clasificado: false 
        }
      ]
    },
    {
      nombre: 'Grupo E',
      equipos: [
        { 
          nombre: '🇩🇪 Alemania', 
          pj: 3, g: 2, e: 0, p: 1, gf: 10, gc: 4, dg: 6, pts: 6, 
          ultimos5: ['✅', '✅', '❌', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇨🇮 Costa de Marfil', 
          pj: 3, g: 2, e: 0, p: 1, gf: 4, gc: 2, dg: 2, pts: 6, 
          ultimos5: ['✅', '❌', '✅', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇪🇨 Ecuador', 
          pj: 3, g: 1, e: 1, p: 1, gf: 2, gc: 2, dg: 0, pts: 4, 
          ultimos5: ['❌', '➖', '✅', '⬜', '⬜'],
          clasificado: false 
        },
        { 
          nombre: '🇨🇼 Curazao', 
          pj: 3, g: 0, e: 1, p: 2, gf: 1, gc: 9, dg: -8, pts: 1, 
          ultimos5: ['❌', '➖', '❌', '⬜', '⬜'],
          clasificado: false 
        }
      ]
    },
    {
      nombre: 'Grupo F',
      equipos: [
        { 
          nombre: '🇳🇱 Países Bajos', 
          pj: 3, g: 2, e: 1, p: 0, gf: 10, gc: 4, dg: 6, pts: 7, 
          ultimos5: ['➖', '✅', '✅', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇯🇵 Japón', 
          pj: 3, g: 1, e: 2, p: 0, gf: 7, gc: 3, dg: 4, pts: 5, 
          ultimos5: ['➖', '✅', '➖', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇸🇪 Suecia', 
          pj: 3, g: 1, e: 1, p: 1, gf: 7, gc: 7, dg: 0, pts: 4, 
          ultimos5: ['✅', '❌', '➖', '⬜', '⬜'],
          clasificado: false 
        },
        { 
          nombre: '🇹🇳 Túnez', 
          pj: 3, g: 0, e: 0, p: 3, gf: 2, gc: 12, dg: -10, pts: 0, 
          ultimos5: ['❌', '❌', '❌', '⬜', '⬜'],
          clasificado: false 
        }
      ]
    },
    {
      nombre: 'Grupo G',
      equipos: [
        { 
          nombre: '🇧🇪 Bélgica', 
          pj: 3, g: 1, e: 2, p: 0, gf: 6, gc: 2, dg: 4, pts: 5, 
          ultimos5: ['➖', '➖', '✅', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇪🇬 Egipto', 
          pj: 3, g: 1, e: 2, p: 0, gf: 5, gc: 3, dg: 2, pts: 5, 
          ultimos5: ['➖', '✅', '➖', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇮🇷 Irán', 
          pj: 3, g: 0, e: 3, p: 0, gf: 3, gc: 3, dg: 0, pts: 3, 
          ultimos5: ['➖', '➖', '➖', '⬜', '⬜'],
          clasificado: false 
        },
        { 
          nombre: '🇳🇿 Nueva Zelanda', 
          pj: 3, g: 0, e: 1, p: 2, gf: 4, gc: 10, dg: -6, pts: 1, 
          ultimos5: ['➖', '❌', '❌', '⬜', '⬜'],
          clasificado: false 
        }
      ]
    },
    {
      nombre: 'Grupo H',
      equipos: [
        { 
          nombre: '🇪🇸 España', 
          pj: 3, g: 2, e: 1, p: 0, gf: 5, gc: 0, dg: 5, pts: 7, 
          ultimos5: ['➖', '✅', '✅', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇨🇻 Cabo Verde', 
          pj: 3, g: 0, e: 3, p: 0, gf: 2, gc: 2, dg: 0, pts: 3, 
          ultimos5: ['➖', '➖', '➖', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇺🇾 Uruguay', 
          pj: 3, g: 0, e: 2, p: 1, gf: 3, gc: 4, dg: -1, pts: 2, 
          ultimos5: ['➖', '➖', '❌', '⬜', '⬜'],
          clasificado: false 
        },
        { 
          nombre: '🇸🇦 Arabia Saudita', 
          pj: 3, g: 0, e: 2, p: 1, gf: 1, gc: 5, dg: -4, pts: 2, 
          ultimos5: ['➖', '❌', '➖', '⬜', '⬜'],
          clasificado: false 
        }
      ]
    },
    {
      nombre: 'Grupo I',
      equipos: [
        { 
          nombre: '🇫🇷 Francia', 
          pj: 3, g: 3, e: 0, p: 0, gf: 10, gc: 2, dg: 8, pts: 9, 
          ultimos5: ['✅', '✅', '✅', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇳🇴 Noruega', 
          pj: 3, g: 2, e: 0, p: 1, gf: 8, gc: 7, dg: 1, pts: 6, 
          ultimos5: ['✅', '✅', '❌', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇸🇳 Senegal', 
          pj: 3, g: 1, e: 0, p: 2, gf: 8, gc: 6, dg: 2, pts: 3, 
          ultimos5: ['❌', '❌', '✅', '⬜', '⬜'],
          clasificado: false 
        },
        { 
          nombre: '🇮🇶 Irak', 
          pj: 3, g: 0, e: 0, p: 3, gf: 1, gc: 12, dg: -11, pts: 0, 
          ultimos5: ['❌', '❌', '❌', '⬜', '⬜'],
          clasificado: false 
        }
      ]
    },
    {
      nombre: 'Grupo J',
      equipos: [
        { 
          nombre: '🇦🇷 Argentina', 
          pj: 3, g: 3, e: 0, p: 0, gf: 8, gc: 1, dg: 7, pts: 9, 
          ultimos5: ['✅', '✅', '✅', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇦🇹 Austria', 
          pj: 3, g: 1, e: 1, p: 1, gf: 6, gc: 6, dg: 0, pts: 4, 
          ultimos5: ['✅', '❌', '➖', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇩🇿 Argelia', 
          pj: 3, g: 1, e: 1, p: 1, gf: 5, gc: 7, dg: -2, pts: 4, 
          ultimos5: ['❌', '✅', '➖', '⬜', '⬜'],
          clasificado: false 
        },
        { 
          nombre: '🇯🇴 Jordania', 
          pj: 3, g: 0, e: 0, p: 3, gf: 3, gc: 8, dg: -5, pts: 0, 
          ultimos5: ['❌', '❌', '❌', '⬜', '⬜'],
          clasificado: false 
        }
      ]
    },
    {
      nombre: 'Grupo K',
      equipos: [
        { 
          nombre: '🇨🇴 Colombia', 
          pj: 3, g: 2, e: 1, p: 0, gf: 4, gc: 1, dg: 3, pts: 7, 
          ultimos5: ['✅', '✅', '➖', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇵🇹 Portugal', 
          pj: 3, g: 1, e: 2, p: 0, gf: 6, gc: 1, dg: 5, pts: 5, 
          ultimos5: ['➖', '✅', '➖', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇨🇩 RD Congo', 
          pj: 3, g: 1, e: 1, p: 1, gf: 4, gc: 3, dg: 1, pts: 4, 
          ultimos5: ['➖', '❌', '✅', '⬜', '⬜'],
          clasificado: false 
        },
        { 
          nombre: '🇺🇿 Uzbekistán', 
          pj: 3, g: 0, e: 0, p: 3, gf: 2, gc: 11, dg: -9, pts: 0, 
          ultimos5: ['❌', '❌', '❌', '⬜', '⬜'],
          clasificado: false 
        }
      ]
    },
    {
      nombre: 'Grupo L',
      equipos: [
        { 
          nombre: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra', 
          pj: 3, g: 2, e: 1, p: 0, gf: 6, gc: 2, dg: 4, pts: 7, 
          ultimos5: ['✅', '➖', '✅', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇭🇷 Croacia', 
          pj: 3, g: 2, e: 0, p: 1, gf: 5, gc: 5, dg: 0, pts: 6, 
          ultimos5: ['❌', '✅', '✅', '⬜', '⬜'],
          clasificado: true 
        },
        { 
          nombre: '🇬🇭 Ghana', 
          pj: 3, g: 1, e: 1, p: 1, gf: 2, gc: 2, dg: 0, pts: 4, 
          ultimos5: ['✅', '➖', '❌', '⬜', '⬜'],
          clasificado: false 
        },
        { 
          nombre: '🇵🇦 Panamá', 
          pj: 3, g: 0, e: 0, p: 3, gf: 0, gc: 4, dg: -4, pts: 0, 
          ultimos5: ['❌', '❌', '❌', '⬜', '⬜'],
          clasificado: false 
        }
      ]
    }
  ];

  // Función para renderizar los últimos 5 partidos
  const renderUltimos5 = (ultimos5) => {
    return ultimos5.map((resultado, index) => {
      let emoji = '⬜';
      let tooltip = 'No jugado';
      if (resultado === '✅') {
        emoji = '✅';
        tooltip = 'Victoria';
      } else if (resultado === '❌') {
        emoji = '❌';
        tooltip = 'Derrota';
      } else if (resultado === '➖') {
        emoji = '➖';
        tooltip = 'Empate';
      }
      return (
        <span key={index} className="resultado" title={tooltip}>
          {emoji}
        </span>
      );
    });
  };

  return (
    <div className="grupos-page">
      <header className="header">
        <div className="logo">
          <span>🏆</span>
          <h1>Grupos del Mundial</h1>
        </div>
        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/grupos">Grupos</Link>
          <Link to="/historia">Historia</Link>
          <Link to="/avance">Avance</Link>
        </nav>
      </header>

      <div className="grupos-content">
        <div className="grupos-hero">
          <h2>🌍 12 Grupos - 48 Equipos</h2>
          <p>Los mejores equipos del mundo compiten por el título</p>
          <div className="leyenda">
            <span>✅ Victoria</span>
            <span>➖ Empate</span>
            <span>❌ Derrota</span>
            <span>⬜ No jugado</span>
          </div>
        </div>

        <div className="grupos-container">
          {grupos.map((grupo, index) => (
            <div className="grupo-card" key={index}>
              <h3 className="grupo-titulo">{grupo.nombre}</h3>
              <div className="tabla-container">
                <table className="tabla-grupos">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th className="equipo-col">Equipo</th>
                      <th>PJ</th>
                      <th>G</th>
                      <th>E</th>
                      <th>P</th>
                      <th>GF</th>
                      <th>GC</th>
                      <th>DG</th>
                      <th>Pts</th>
                      <th className="ultimos5-col">Últimos 5</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grupo.equipos.map((equipo, idx) => (
                      <tr key={idx} className={equipo.clasificado ? 'clasificado' : ''}>
                        <td className="rank">{idx + 1}</td>
                        <td className="equipo-col">
                          <span className="equipo-nombre">{equipo.nombre}</span>
                          {equipo.clasificado && (
                            <span className="badge-clasificado">✅</span>
                          )}
                        </td>
                        <td>{equipo.pj}</td>
                        <td>{equipo.g}</td>
                        <td>{equipo.e}</td>
                        <td>{equipo.p}</td>
                        <td>{equipo.gf}</td>
                        <td>{equipo.gc}</td>
                        <td className={equipo.dg > 0 ? 'dg-positivo' : equipo.dg < 0 ? 'dg-negativo' : ''}>
                          {equipo.dg > 0 ? `+${equipo.dg}` : equipo.dg}
                        </td>
                        <td className="pts">{equipo.pts}</td>
                        <td className="ultimos5-col">
                          <div className="ultimos5">
                            {renderUltimos5(equipo.ultimos5)}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>⚽ Grupos del Mundial FIFA 2026</p>
      </footer>
    </div>
  );
}

export default Grupos;