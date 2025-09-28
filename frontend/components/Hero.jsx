'use client';
import { useEffect, useState } from 'react';
import Slider from './Slider';
import Link from 'next/link';
import BackgroundCarousel from './BackgroundCarousel';

export default function Hero({ theme, onThemeToggle }) {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSlides() {
      try {
        const res = await fetch('http://localhost:5000/api/sliders');
        const json = await res.json();
        setSlides(json.sliders || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchSlides();
  }, []);

  // Theme styles
  const headerStyle = {
    backgroundColor: theme === 'dark' ? '#0f172a' : '#000000',
    color: theme === 'dark' ? '#f1f5f9' : '#ffffff',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 20,
    transition: 'all 0.3s ease-in-out'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '5rem 1.5rem',
    position: 'relative',
    zIndex: 10,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center'
  };

  const contentWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '2rem',
    width: '100%'
  };

  const textSectionStyle = {
    flex: 1,
    width: '100%',
    maxWidth: '100%'
  };

  const mainHeadingStyle = {
    fontSize: 'clamp(2rem, 8vw, 4rem)',
    fontWeight: 'bold',
    lineHeight: '1.1',
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)' 
      : 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '0.5rem'
  };

  const descriptionStyle = {
    marginTop: '1.5rem',
    fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
    lineHeight: '1.7',
    color: theme === 'dark' ? '#cbd5e1' : '#d1d5db',
    maxWidth: '600px'
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '0.875rem 2rem',
    marginTop: '2rem',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    textDecoration: 'none',
    backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
    color: theme === 'dark' ? '#ffffff' : '#000000',
    border: `2px solid ${theme === 'dark' ? '#334155' : '#e5e7eb'}`,
    transform: 'translateY(0)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const sliderSectionStyle = {
    width: '100%',
    maxWidth: '100%',
    marginTop: '3rem'
  };

  const themeToggleStyle = {
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    zIndex: 30,
    padding: '0.75rem',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: theme === 'dark' ? '#1e293b' : 'rgba(255, 255, 255, 0.2)',
    color: theme === 'dark' ? '#f1f5f9' : '#ffffff',
    cursor: 'pointer',
    fontSize: '1.25rem',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    border: `1px solid ${theme === 'dark' ? '#334155' : 'rgba(255, 255, 255, 0.3)'}`
  };

  const loadingStyle = {
    color: theme === 'dark' ? '#cbd5e1' : '#d1d5db',
    fontSize: '1.125rem',
    textAlign: 'center',
    padding: '2rem'
  };

  // Media queries through inline styles with resize listener
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive adjustments
  if (windowWidth >= 1024) {
    contentWrapperStyle.flexDirection = 'row';
    contentWrapperStyle.gap = '4rem';
    textSectionStyle.maxWidth = '50%';
    sliderSectionStyle.width = '50%';
    sliderSectionStyle.marginTop = '0';
  }

  if (windowWidth >= 768) {
    containerStyle.padding = '6rem 2rem';
  }

  if (windowWidth >= 1200) {
    containerStyle.padding = '8rem 3rem';
  }

  if (windowWidth < 640) {
    themeToggleStyle.top = '1rem';
    themeToggleStyle.right = '1rem';
    themeToggleStyle.padding = '0.625rem';
    themeToggleStyle.fontSize = '1rem';
  }

  return (
    <header style={headerStyle}>
      {/* Theme Toggle Button */}

      {/* Background carousel */}
      <BackgroundCarousel />

      <div style={containerStyle}>
        <div style={contentWrapperStyle}>
          <div style={textSectionStyle}>
            <h1 style={mainHeadingStyle}>
              We craft digital experiences
            </h1>
            <h2 style={{...mainHeadingStyle, marginBottom: 0}}>
              that inspire and engage.
            </h2>
            <p style={descriptionStyle}>
              We're a creative design agency helping brands stand out through strategy,
              design, and technology. Minimal, modern, and built to connect.
            </p>
            <Link
              href="/contact"
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = theme === 'dark' 
                  ? '0 10px 25px rgba(0, 0, 0, 0.3)' 
                  : '0 10px 25px rgba(0, 0, 0, 0.2)';
                e.target.style.backgroundColor = theme === 'dark' ? '#334155' : '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
                e.target.style.backgroundColor = theme === 'dark' ? '#1e293b' : '#ffffff';
              }}
            >
              Contact
            </Link>
          </div>

          <div style={sliderSectionStyle}>
            {loading && (
              <div style={loadingStyle}>
                Loading slider…
              </div>
            )}
            {!loading && slides.length === 0 && (
              <div style={loadingStyle}>
                No advertisements available
              </div>
            )}
            {!loading && slides.length > 0 && (
              <Slider items={slides} theme={theme} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}