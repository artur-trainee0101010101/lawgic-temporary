import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://script.google.com/macros/s/1_y1-Gn17v9P6-lItecEdIAUV1v7wS-vWDrG2ZssTdDo/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const result = await response.text();
      setMessage("Thanks for signing up!");
      setEmail("");
    } catch (error) {
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Legal Clarity for AI Entrepreneurs</h1>
        <p>
          Lawgic makes GDPR and legal knowledge simple, accessible, and actionable.
        </p>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
          />
          <button type="submit">Join Waitlist</button>
        </form>
        {message && <p className="signup-message">{message}</p>}
      </header>

      <section className="features">
        <div className="card">
          <div className="icon">🛡️</div>
          <h3>GDPR Simplified</h3>
          <p>
            Clear, easy-to-follow guidance tailored for startups and creators.
          </p>
        </div>
        <div className="card">
          <div className="icon">✨</div>
          <h3>AI-Powered Answers That Are Legally Compliant</h3>
          <p>
            Ask any legal question, get real-time help from our AI trained on GDPR and validated by lawyers.
          </p>
        </div>
        <div className="card">
          <div className="icon">✅</div>
          <h3>Built for Entrepreneurs</h3>
          <p>
            We translate the legal maze so you can launch with confidence.
          </p>
        </div>
      </section>

      <section className="section-highlight">
        <h2>Why Now?</h2>
        <p>
          Europe faces global tariff tensions and needs to stay competitive without compromising its values. Startups drive innovation but struggle with complex laws like GDPR and the AI Act. Lawgic AI simplifies compliance, protects privacy, and supports responsible growth.
        </p>
        <p>
          It makes EU law more accessible and adaptive, keeping it in constant dialogue with entrepreneurs and citizens. This strengthens Europe’s legal integrity and fuels its entrepreneurial spirit.
        </p>
        <h2>How We Help Democracy</h2>
        <p>
          Lawgic AI makes it easier for entrepreneurs to comply with GDPR and other EU laws, freeing their innovative spirit and enabling faster prototyping across the EU.
        </p>
        <p>
          When people understand the law and see its value, they’re more likely to follow it — strengthening trust, fairness, and belief in the European legal system.
        </p>
      </section>

      <section className="gallery">
        <img src="/images/team-photo.jpg" alt="Lawgic team at European Forum Alpbach" />
        <img src="/images/redbull-award.png" alt="Lawgic founder with Red Bull Basement trophy" />
        <img src="https://source.unsplash.com/500x300/?ai" alt="AI" />
        <img src="https://source.unsplash.com/300x300/?europe" alt="Europe" />
        <img src="https://source.unsplash.com/400x400/?startup" alt="Startup" />
      </section>

      <footer className="footer">
        © 2025 Lawgic AI. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
