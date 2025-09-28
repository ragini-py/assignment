'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {
  const [show, setShow] = useState(true);
  const [comingSoon, setComingSoon] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const threshold = 100;

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;

      if (currentScrollY > threshold) {
        if (currentScrollY > lastScrollY.current) {
          setShow(false);
        } else {
          setShow(true);
        }
      } else {
        setShow(true);
      }

      lastScrollY.current = currentScrollY;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);
      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Theme styles
  const headerBg = isDarkMode 
    ? 'rgba(0, 0, 0, 0.7)' 
    : 'rgba(255, 255, 255, 0.95)';
  
  const textColor = isDarkMode ? '#ffffff' : '#1f2937';
  const logoColor = isDarkMode ? '#ffffff' : '#1f2937';
  const contactBtnBg = isDarkMode ? '#ffffff' : '#1f2937';
  const contactBtnColor = isDarkMode ? '#000000' : '#ffffff';
  const contactBtnHoverBg = isDarkMode ? '#ec4899' : '#4338ca';

  return (
    <>
      {/* Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 50,
          transform: show ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease-in-out',
          backgroundColor: headerBg,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)'
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 'bold',
                color: logoColor,
                cursor: 'pointer'
              }}
            >
              Auren
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2rem',
              color: textColor,
              fontWeight: '500',
              fontSize: '0.95rem'
            }}
            className="nav-desktop"
          >
            <button 
              onClick={() => setComingSoon(true)}
              style={{
                background: 'none',
                border: 'none',
                color: textColor,
                cursor: 'pointer',
                padding: '0.5rem 0',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ec4899'}
              onMouseLeave={(e) => e.target.style.color = textColor}
            >
              Work
            </button>
            
            <button 
              onClick={() => setComingSoon(true)}
              style={{
                background: 'none',
                border: 'none',
                color: textColor,
                cursor: 'pointer',
                padding: '0.5rem 0',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ec4899'}
              onMouseLeave={(e) => e.target.style.color = textColor}
            >
              Agency
            </button>
            
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setComingSoon(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  background: 'none',
                  border: 'none',
                  color: textColor,
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#ec4899'}
                onMouseLeave={(e) => e.target.style.color = textColor}
              >
                <span>Services</span>
                <svg
                  style={{ width: '16px', height: '16px' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setComingSoon(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  background: 'none',
                  border: 'none',
                  color: textColor,
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#ec4899'}
                onMouseLeave={(e) => e.target.style.color = textColor}
              >
                <span>Industries</span>
                <svg
                  style={{ width: '16px', height: '16px' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <button 
              onClick={() => setComingSoon(true)}
              style={{
                background: 'none',
                border: 'none',
                color: textColor,
                cursor: 'pointer',
                padding: '0.5rem 0',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ec4899'}
              onMouseLeave={(e) => e.target.style.color = textColor}
            >
              Careers
            </button>
          </nav>

          {/* Right side controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            {/* Theme toggle */}
            <button
              onClick={toggleDarkMode}
              style={{
                background: 'none',
                border: '1px solid ' + (isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'),
                borderRadius: '50%',
                padding: '0.5rem',
                color: textColor,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#ec4899';
                e.target.style.color = '#ec4899';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)';
                e.target.style.color = textColor;
              }}
            >
              {isDarkMode ? (
                <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Contact button - Desktop */}
            <div style={{ display: 'none' }} className="contact-desktop">
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: contactBtnBg,
                    color: contactBtnColor,
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = contactBtnHoverBg;
                    e.target.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = contactBtnBg;
                    e.target.style.color = contactBtnColor;
                  }}
                >
                  Contact
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div style={{ display: 'block' }} className="mobile-menu-btn">
              <button
                onClick={toggleMobileMenu}
                style={{
                  background: 'none',
                  border: 'none',
                  color: textColor,
                  cursor: 'pointer',
                  padding: '0.5rem'
                }}
              >
                <svg
                  style={{ width: '24px', height: '24px' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            style={{
              display: 'block',
              backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderTop: '1px solid ' + (isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'),
              padding: '1rem 1.5rem',
              animation: 'slideDown 0.3s ease-out'
            }}
            className="mobile-menu"
          >
            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              <button
                onClick={() => { setComingSoon(true); setMobileMenuOpen(false); }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: textColor,
                  cursor: 'pointer',
                  padding: '0.75rem 0',
                  fontSize: '1rem',
                  fontWeight: '500',
                  textAlign: 'left',
                  borderBottom: '1px solid ' + (isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')
                }}
              >
                Work
              </button>
              <button
                onClick={() => { setComingSoon(true); setMobileMenuOpen(false); }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: textColor,
                  cursor: 'pointer',
                  padding: '0.75rem 0',
                  fontSize: '1rem',
                  fontWeight: '500',
                  textAlign: 'left',
                  borderBottom: '1px solid ' + (isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')
                }}
              >
                Agency
              </button>
              <button
                onClick={() => { setComingSoon(true); setMobileMenuOpen(false); }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: textColor,
                  cursor: 'pointer',
                  padding: '0.75rem 0',
                  fontSize: '1rem',
                  fontWeight: '500',
                  textAlign: 'left',
                  borderBottom: '1px solid ' + (isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')
                }}
              >
                Services
              </button>
              <button
                onClick={() => { setComingSoon(true); setMobileMenuOpen(false); }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: textColor,
                  cursor: 'pointer',
                  padding: '0.75rem 0',
                  fontSize: '1rem',
                  fontWeight: '500',
                  textAlign: 'left',
                  borderBottom: '1px solid ' + (isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')
                }}
              >
                Industries
              </button>
              <button
                onClick={() => { setComingSoon(true); setMobileMenuOpen(false); }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: textColor,
                  cursor: 'pointer',
                  padding: '0.75rem 0',
                  fontSize: '1rem',
                  fontWeight: '500',
                  textAlign: 'left',
                  borderBottom: '1px solid ' + (isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')
                }}
              >
                Careers
              </button>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: contactBtnBg,
                    color: contactBtnColor,
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    fontSize: '1rem',
                    border: 'none',
                    cursor: 'pointer',
                    marginTop: '1rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Contact
                </button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Popup Modal */}
      {comingSoon && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 100,
            padding: '1rem'
          }}
        >
          <div
            style={{
              backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
              borderRadius: '0.5rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              padding: '2rem',
              maxWidth: '400px',
              width: '100%',
              textAlign: 'center'
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: isDarkMode ? '#ffffff' : '#1f2937'
              }}
            >
              🚧 Coming Soon 🚧
            </h2>
            <p
              style={{
                color: isDarkMode ? '#d1d5db' : '#6b7280',
                marginBottom: '1.5rem',
                fontSize: '1rem',
                lineHeight: '1.5'
              }}
            >
              This page is under construction.
            </p>
            <button
              onClick={() => setComingSoon(false)}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#ec4899',
                color: '#ffffff',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#db2777'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#ec4899'}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CSS for responsive behavior */}
      <style jsx>{`
        @media (min-width: 768px) {
          .nav-desktop {
            display: flex !important;
          }
          .contact-desktop {
            display: block !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }

        @media (max-width: 767px) {
          .nav-desktop {
            display: none !important;
          }
          .contact-desktop {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Smooth transitions for all interactive elements */
        button, a {
          transition: all 0.2s ease !important;
        }

        /* Focus states for accessibility */
        button:focus, a:focus {
          outline: 2px solid #ec4899;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
}