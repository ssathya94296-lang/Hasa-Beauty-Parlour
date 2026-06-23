App.jsx

import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <h1>Hasa Beauty Parlour</h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h2>Glow With Confidence</h2>
          <p>
            Bridal Makeup • Hair Styling • Facials • Skin Care • Beauty
            Treatments
          </p>

          <button>Book Appointment</button>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Us</h2>
        <p>
          We provide professional beauty services with premium quality products.
          Make your special day more beautiful with our expert team.
        </p>
      </section>

      <section className="services" id="services">
        <h2>Our Services</h2>

        <div className="cards">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e"
              alt=""
            />
            <h3>Bridal Makeup</h3>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250"
              alt=""
            />
            <h3>Hair Styling</h3>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796"
              alt=""
            />
            <h3>Facial Care</h3>
          </div>
        </div>
      </section>

      <section className="gallery" id="gallery">
        <h2>Beauty Gallery</h2>

        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f" alt="" />
          <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e" alt="" />
          <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250" alt="" />
          <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796" alt="" />
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Us</h2>

        <p>📍 Tenkasi</p>
        <p>📞 +91 8011240800</p>
        <p>📧 Hasabeauty@gmail.com</p>
      </section>

      <footer>
        <p>© 2026 Hasa Beauty Parlour</p>
      </footer>
    </div>
  );
}

export default App;