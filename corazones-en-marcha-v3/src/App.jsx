
export default function App() {
  return (
    <div>
      <header className="navbar">
        <h1>❤️ Corazones en Marcha</h1>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Quiénes Somos</a>
          <a href="#actividades">Actividades</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="overlay">
          <h2>Transformando vidas con amor y compromiso.</h2>

          <p>
            Comunidad enfocada en actividades sociales,
            encuentros y ayuda comunitaria.
          </p>

          <div className="buttons">
            <button>Conócenos</button>
            <button className="secondary">Ver Actividades</button>
          </div>
        </div>
      </section>

      <section className="section" id="nosotros">
        <h3>¿Quiénes Somos?</h3>

        <p>
          Corazones en Marcha F.A.C.I. es una comunidad dedicada al servicio y el impacto social.
        </p>

        <div className="cards">
          <div className="card">
            <h4>Misión</h4>
            <p>Servir mediante actividades sociales y comunitarias.</p>
          </div>

          <div className="card">
            <h4>Visión</h4>
            <p>Inspirar esperanza y construir una comunidad solidaria.</p>
          </div>
        </div>
      </section>

      <section className="section alt" id="actividades">
        <h3>Actividades</h3>

        <div className="cards">
          <div className="card">
            <h4>Misión Solidaria</h4>
            <p>Entrega de ayuda comunitaria.</p>
          </div>

          <div className="card">
            <h4>Encuentro Juvenil</h4>
            <p>Espacios de reflexión y crecimiento.</p>
          </div>

          <div className="card">
            <h4>Labor Social</h4>
            <p>Actividades comunitarias con impacto positivo.</p>
          </div>
        </div>
      </section>

      <section className="impact">
        <h3>Cada granito de arena cuenta.</h3>

        <p>
          Tu apoyo nos ayuda a seguir realizando actividades sociales y encuentros solidarios.
        </p>

        <button>Quiero colaborar</button>
      </section>

      <section className="section" id="contacto">
        <h3>Contacto</h3>

        <p>corazonesenmarchafaci@gmail.com</p>

        <div className="socials">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://tiktok.com">TikTok</a>
        </div>
      </section>

      <footer>
        © 2026 Corazones en Marcha F.A.C.I.
      </footer>
    </div>
  )
}
