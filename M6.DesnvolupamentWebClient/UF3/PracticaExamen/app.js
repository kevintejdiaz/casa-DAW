function Profile() {
    return (
      <img
        className="avatar"
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Frida Kahlo"
      />
    );
  }
  
  function Bio() {
    return (
      <div>
        <h1>Frida Kahlo</h1>
        <h2>1907 - 1954</h2>
        <p>Pintora mexicana conocida por sus autorretratos y obras inspiradas en la naturaleza.</p>
      </div>
    );
  }
  
  function Gallery() {
    return (
      <section>
        <h2>Galería de retratos</h2>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }
  
  function HomePage() {
    return (
      <div>
        <Bio />
        <Gallery />
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('app'));
  root.render(<HomePage />);