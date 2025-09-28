'use client';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function Slider({ items = [], theme = 'light' }) {
  const [index, setIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // Autoplay
  useEffect(() => {
    if (!items || items.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [items?.length]);

  const len = items?.length || 0;

  if (!items || len === 0) return null;

  const handleStartNowClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // Theme-aware styles
  const popupOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '20px',
    animation: 'fadeIn 0.3s ease-out'
  };

  const popupContentStyle = {
    backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
    borderRadius: '20px',
    padding: '40px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    boxShadow: theme === 'dark' 
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
      : '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    position: 'relative',
    animation: 'slideIn 0.3s ease-out'
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'none',
    border: 'none',
    color: theme === 'dark' ? '#9ca3af' : '#6b7280',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '50%',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const emojiStyle = {
    fontSize: '4rem',
    marginBottom: '20px',
    display: 'block'
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '16px',
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #60a5fa, #a78bfa)' 
      : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent'
  };

  const messageStyle = {
    fontSize: '16px',
    color: theme === 'dark' ? '#d1d5db' : '#4b5563',
    marginBottom: '24px',
    lineHeight: '1.6'
  };

  const buttonStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #4f46e5, #7c3aed)' 
      : 'linear-gradient(135deg, #1f2937, #374151)',
    color: '#ffffff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.2)'
  };

  const sliderContainerStyle = {
    backgroundColor: theme === 'dark' ? '#374151' : '#ffffff',
    border: `1px solid ${theme === 'dark' ? '#4b5563' : '#e5e7eb'}`,
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: theme === 'dark' 
      ? '0 10px 25px rgba(0, 0, 0, 0.3)' 
      : '0 10px 25px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  };

  const contentStyle = {
    padding: '12px',
    backgroundColor: theme === 'dark' ? '#374151' : '#ffffff'
  };

  const headlineStyle = {
    fontSize: '12px',
    fontWeight: '600',
    color: theme === 'dark' ? '#f3f4f6' : '#111827',
    marginBottom: '4px',
    lineHeight: '1.3'
  };

  const subStyle = {
    fontSize: '10px',
    color: theme === 'dark' ? '#d1d5db' : '#6b7280',
    lineHeight: '1.3'
  };

  const dotStyle = (isActive) => ({
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    backgroundColor: isActive 
      ? (theme === 'dark' ? '#60a5fa' : '#3b82f6')
      : (theme === 'dark' ? 'rgba(156, 163, 175, 0.5)' : 'rgba(255, 255, 255, 0.5)')
  });

  const keyframes = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideIn {
      from { 
        opacity: 0;
        transform: scale(0.9) translateY(20px);
      }
      to { 
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }
    
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />
      
      <div style={{ 
        position: 'fixed', 
        bottom: '32px', 
        right: '32px', 
        width: '192px', 
        zIndex: 50 
      }}>
        {/* Start Now Button */}
        <button
          onClick={handleStartNowClick}
          style={{
            marginBottom: '8px',
            width: '100%',
            padding: '8px 0',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: '600',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899, #ef4444)',
            backgroundSize: '200% 200%',
            animation: 'gradient 3s ease infinite',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)';
          }}
        >
          Start Now
        </button>

        {/* Slider */}
        <div 
          style={sliderContainerStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = theme === 'dark' 
              ? '0 15px 35px rgba(0, 0, 0, 0.4)' 
              : '0 15px 35px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = theme === 'dark' 
              ? '0 10px 25px rgba(0, 0, 0, 0.3)' 
              : '0 10px 25px rgba(0, 0, 0, 0.1)';
          }}
        >
          <div style={{ position: 'relative', height: '128px', width: '100%', overflow: 'hidden' }}>
            <img
               src={`${process.env.NEXT_PUBLIC_API_URL}${items[index]?.image || ''}`}
              alt={items[index]?.headline || 'Slide'}
              style={imageStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            />
          </div>

          <div style={contentStyle}>
            <h4 style={headlineStyle}>
              {items[index]?.headline || 'No title'}
            </h4>
            <p style={subStyle}>
              {items[index]?.sub || 'No description'}
            </p>
          </div>
        </div>

        {/* Dot navigation */}
        {len > 1 && (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: '8px', 
            gap: '4px' 
          }}>
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                style={dotStyle(i === index)}
                onMouseEnter={(e) => {
                  if (i !== index) {
                    e.target.style.backgroundColor = theme === 'dark' ? '#9ca3af' : 'rgba(255, 255, 255, 0.8)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (i !== index) {
                    e.target.style.backgroundColor = theme === 'dark' ? 'rgba(156, 163, 175, 0.5)' : 'rgba(255, 255, 255, 0.5)';
                  }
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Coming Soon Popup */}
      {showPopup && (
        <div style={popupOverlayStyle} onClick={closePopup}>
          <div style={popupContentStyle} onClick={(e) => e.stopPropagation()}>
            <button
              style={closeButtonStyle}
              onClick={closePopup}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = theme === 'dark' ? '#374151' : '#f3f4f6';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <X size={20} />
            </button>
            
            <span style={emojiStyle}>🚀</span>
            <h3 style={titleStyle}>Coming Soon!</h3>
            <p style={messageStyle}>
              We're working hard to bring you something amazing. Stay tuned for updates!
            </p>
            <button
              style={buttonStyle}
              onClick={closePopup}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.2)';
              }}
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
}