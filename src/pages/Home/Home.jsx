import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [slideActual, setSlideActual] = useState(0);

  // Imágenes para el carrusel (usando imágenes de estadios y fútbol)
  const carruselImagenes = [
    {
      id: 1,
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Vista_a%C3%A9rea_del_Estadio_Azteca_-_2026_-_02.jpg/1280px-Vista_a%C3%A9rea_del_Estadio_Azteca_-_2026_-_02.jpg',
      titulo: 'Estadio Azteca - México',
      descripcion: 'Una de las sedes más emblemáticas del mundo'
    },
    {
      id: 2,
      url: 'https://images.copaamerica.com/editions/copa-america-2024/stadiums/sofi-stadium-photo.webp',
      titulo: 'SoFi Stadium - Estados Unidos',
      descripcion: 'Tecnología de punta para el Mundial 2026'
    },
    {
      id: 3,
      url: 'https://images.spaicelabs.com/images/flus6j8v/production/37d069f71f67b4591905dfab4aa98bb4c9703e07-2048x1360.jpg?rect=0,143,2048,1075&w=1200&h=630',
      titulo: 'BC Place - Canadá',
      descripcion: 'Primera vez que Canadá es sede mundialista'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1200&h=500&fit=crop',
      titulo: 'Fútbol de clase mundial',
      descripcion: 'La pasión del fútbol en su máximo nivel'
    },
    {
      id: 5,
      url: 'https://estaticos.elcolombiano.com/binrepository/842x565/63c1/780d565/none/11101/MVYU/messi-por-fin-supo-cuanto-pesa-la-copa_41287005_20221218140210.jpg',
      titulo: 'El trofeo más deseado',
      descripcion: 'La Copa del Mundo espera a su nuevo campeón'
    }
  ];

  // Autoplay del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideActual((prev) => (prev + 1) % carruselImagenes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carruselImagenes.length]);

  // Navegación manual
  const irAlSlide = (index) => {
    setSlideActual(index);
  };

  const slideAnterior = () => {
    setSlideActual((prev) => (prev - 1 + carruselImagenes.length) % carruselImagenes.length);
  };

  const slideSiguiente = () => {
    setSlideActual((prev) => (prev + 1) % carruselImagenes.length);
  };

  // Noticias destacadas
  const noticiasDestacadas = [
    {
      id: 1,
      titulo: '¡Comienza la Eliminatoria de 32!',
      resumen: 'Los mejores 32 equipos del mundo se enfrentan en la fase de eliminación directa.',
      icono: '⚡'
    },
    {
      id: 2,
      titulo: 'Argentina, campeón defensor, ya está en octavos',
      resumen: 'La Scaloneta busca repetir la hazaña del 2022 y levantar la copa nuevamente.',
      icono: '🇦🇷'
    },
    {
      id: 3,
      titulo: 'Brasil vs Japón, el duelo estelar de mañana',
      resumen: 'La selección brasileña se mide ante Japón en un partido clave de la eliminatoria.',
      icono: '🇧🇷'
    },
    {
      id: 4,
      titulo: 'México recibe a Ecuador en casa',
      resumen: 'El Estadio Azteca será testigo del duelo entre México y Ecuador por un lugar en octavos.',
      icono: '🇲🇽'
    }
  ];

  // Estadísticas del Mundial
  const estadisticas = [
    { numero: '48', label: 'Equipos participantes', icono: '🌍' },
    { numero: '12', label: 'Grupos', icono: '📋' },
    { numero: '104', label: 'Partidos', icono: '⚽' },
    { numero: '16', label: 'Sedes', icono: '🏟️' },
  ];

  // PRÓXIMOS PARTIDOS ACTUALIZADOS
  const proximosPartidos = [
    { 
      id: 1, 
      equipo1: '🇧🇷 Brasil', 
      equipo2: '🇯🇵 Japón', 
      fecha: '29 de junio', 
      hora: '11:00 a.m.',
      fase: 'Eliminatoria de 32'
    },
    { 
      id: 2, 
      equipo1: '🇩🇪 Alemania', 
      equipo2: '🇵🇾 Paraguay', 
      fecha: '29 de junio', 
      hora: '2:30 p.m.',
      fase: 'Eliminatoria de 32'
    },
    { 
      id: 3, 
      equipo1: '🇳🇱 Países Bajos', 
      equipo2: '🇲🇦 Marruecos', 
      fecha: '29 de junio', 
      hora: '7:00 p.m.',
      fase: 'Eliminatoria de 32'
    },
    { 
      id: 4, 
      equipo1: '🇨🇮 Costa de Marfil', 
      equipo2: '🇳🇴 Noruega', 
      fecha: 'Mar, 30/6', 
      hora: '11:00 a.m.',
      fase: 'Eliminatoria de 32'
    },
    { 
      id: 5, 
      equipo1: '🇫🇷 Francia', 
      equipo2: '🇸🇪 Suecia', 
      fecha: 'Mar, 30/6', 
      hora: '3:00 p.m.',
      fase: 'Eliminatoria de 32'
    },
    { 
      id: 6, 
      equipo1: '🇲🇽 México', 
      equipo2: '🇪🇨 Ecuador', 
      fecha: 'Mar, 30/6', 
      hora: '7:00 p.m.',
      fase: 'Eliminatoria de 32'
    }
  ];

  // Agrupar partidos por fecha
  const partidosAgrupados = {};
  proximosPartidos.forEach(partido => {
    if (!partidosAgrupados[partido.fecha]) {
      partidosAgrupados[partido.fecha] = [];
    }
    partidosAgrupados[partido.fecha].push(partido);
  });

  const paisesAnfitriones = [
    { 
      pais: 'México', 
      bandera: '🇲🇽', 
      descripcion: 'Sede por tercera vez en su historia',
      link: '/mexico'
    },
    { 
      pais: 'Estados Unidos', 
      bandera: '🇺🇸', 
      descripcion: 'Sede por segunda vez',
      link: '/estados-unidos'
    },
    { 
      pais: 'Canadá', 
      bandera: '🇨🇦', 
      descripcion: 'Primera vez como sede',
      link: '/canada'
    }
  ];

  return (
    <div className="home">
      <header className="header">
        <div className="logo">
          <span>⚽</span>
          <h1>Mundial FIFA 2026</h1>
        </div>
        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/grupos">Grupos</Link>
          <Link to="/historia">Historia</Link>
          <Link to="/avance">Avance</Link>
        </nav>
      </header>

      {/* HERO con Carrusel */}
      <section className="hero-carrusel">
        <div className="carrusel-container">
          <div 
            className="carrusel-slides"
            style={{ transform: `translateX(-${slideActual * 100}%)` }}
          >
            {carruselImagenes.map((imagen) => (
              <div className="carrusel-slide" key={imagen.id}>
                <img src={imagen.url} alt={imagen.titulo} />
                <div className="carrusel-overlay">
                  <div className="carrusel-texto">
                    <h2>{imagen.titulo}</h2>
                    <p>{imagen.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botones de navegación */}
          <button className="carrusel-btn prev" onClick={slideAnterior}>
            ❮
          </button>
          <button className="carrusel-btn next" onClick={slideSiguiente}>
            ❯
          </button>

          {/* Indicadores */}
          <div className="carrusel-indicadores">
            {carruselImagenes.map((_, index) => (
              <span
                key={index}
                className={`indicador ${index === slideActual ? 'activo' : ''}`}
                onClick={() => irAlSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="hero-info">
          <div className="hero-texto">
            <h2>🏆 ¡Comienza la Eliminatoria de 32!</h2>
            <p>Los mejores equipos del mundo se enfrentan en la fase de eliminación directa.</p>
            <p className="hero-sub">México • Estados Unidos • Canadá</p>
          </div>
        </div>
      </section>

      {/* Estadísticas rápidas */}
      <section className="estadisticas-rapidas">
        {estadisticas.map((stat, index) => (
          <div className="stat-item" key={index}>
            <span className="stat-icono">{stat.icono}</span>
            <span className="stat-numero">{stat.numero}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Países Anfitriones */}
      <section className="anfitriones">
        <h2>🌎 Países Anfitriones</h2>
        <div className="anfitriones-container">
          {paisesAnfitriones.map((pais, index) => (
            <Link to={pais.link} className="anfitrion-card" key={index}>
              <div className="anfitrion-bandera">{pais.bandera}</div>
              <h3>{pais.pais}</h3>
              <p>{pais.descripcion}</p>
              <span className="ver-mas">Ver más →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Noticias Destacadas */}
      <section className="noticias">
        <h2>📰 Noticias Destacadas</h2>
        <div className="noticias-grid">
          {noticiasDestacadas.map((noticia) => (
            <div className="noticia-card" key={noticia.id}>
              <div className="noticia-icono">{noticia.icono}</div>
              <h3>{noticia.titulo}</h3>
              <p>{noticia.resumen}</p>
              <span className="noticia-leer">Leer más →</span>
            </div>
          ))}
        </div>
      </section>

      {/* Próximos Partidos - Versión mejorada */}
      <section className="partidos">
        <h2>📅 Próximos partidos - Eliminatoria de 32</h2>
        
        {Object.keys(partidosAgrupados).map((fecha) => (
          <div key={fecha} className="fecha-partidos">
            <h3 className="fecha-titulo">{fecha}</h3>
            <div className="card-container">
              {partidosAgrupados[fecha].map(partido => (
                <div className="card" key={partido.id}>
                  <div className="card-fase">
                    <span className="fase-badge">⚡ {partido.fase}</span>
                  </div>
                  <div className="card-equipos">
                    <span className="equipo">{partido.equipo1}</span>
                    <span className="vs">VS</span>
                    <span className="equipo">{partido.equipo2}</span>
                  </div>
                  <div className="card-fecha">
                    <span>📅 {partido.fecha}</span>
                    <span>⏰ {partido.hora}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      
      <footer className="footer">
        <p>⚽ Mundial FIFA 2026 - Todos los derechos reservados</p>
        <div className="social">
          <span>📱 Síguenos en redes</span>
          <div className="social-icons">
            <span>🐦</span>
            <span>📸</span>
            <span>📘</span>
            <span>▶️</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;