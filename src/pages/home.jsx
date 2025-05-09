import React, { useEffect, useState } from "react";
import "../styles/Hero.css";

const Home = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const [showFullForm, setShowFullForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("home");
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setAnimationKey(prev => prev + 1);
        setShowFullForm(false);
        setTimeout(() => setShowFullForm(true), 3000); // delay full form
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div key={animationKey} className="aspire-text">A.S.P.I.R.E</div>
      {showFullForm && (
        <div className="aspire-full-form">
          AI Society Promoting Innovation, Research and Education
        </div>
      )}
    </section>
  );
};

export default Home;
