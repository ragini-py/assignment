'use client';

import { useState, useEffect } from 'react';

export default function VideoSection({ theme = 'light' }) {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Theme styles
  const sectionStyles = {
    position: 'relative',
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
      : 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 30%, #f3e8ff 100%)',
    padding: windowWidth < 640 ? '60px 0' : windowWidth < 1024 ? '80px 0' : '100px 0',
    transition: 'all 0.3s ease'
  };

  const backgroundDecorationStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    pointerEvents: 'none'
  };

  const containerStyles = {
    position: 'relative',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: windowWidth < 640 ? '0 16px' : windowWidth < 1024 ? '0 24px' : '0 32px'
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: windowWidth < 640 ? '40px' : windowWidth < 1024 ? '56px' : '64px'
  };

  const badgeStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: windowWidth < 640 ? '8px 16px' : '12px 20px',
    borderRadius: '50px',
    background: theme === 'dark'
      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))'
      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))',
    border: theme === 'dark'
      ? '1px solid rgba(59, 130, 246, 0.2)'
      : '1px solid rgba(59, 130, 246, 0.3)',
    marginBottom: windowWidth < 640 ? '20px' : '24px'
  };

  const badgeIconStyles = {
    width: windowWidth < 640 ? '18px' : '20px',
    height: windowWidth < 640 ? '18px' : '20px',
    color: theme === 'dark' ? '#60a5fa' : '#3b82f6',
    marginRight: '8px'
  };

  const badgeTextStyles = {
    fontSize: windowWidth < 640 ? '13px' : '14px',
    fontWeight: '600',
    color: theme === 'dark' ? '#60a5fa' : '#1d4ed8'
  };

  const titleStyles = {
    fontSize: windowWidth < 640 ? '28px' : windowWidth < 1024 ? '36px' : '48px',
    fontWeight: '800',
    background: theme === 'dark'
      ? 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)'
      : 'linear-gradient(135deg, #1e40af, #7c3aed, #db2777)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    margin: '0 0 16px 0',
    lineHeight: '1.1'
  };

  const descriptionStyles = {
    fontSize: windowWidth < 640 ? '16px' : '18px',
    color: theme === 'dark' ? '#cbd5e1' : '#64748b',
    maxWidth: '640px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  const videoContainerStyles = {
    position: 'relative',
    cursor: 'pointer'
  };

  const glowEffectStyles = {
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    background: theme === 'dark'
      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2), rgba(244, 114, 182, 0.2))'
      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2), rgba(244, 114, 182, 0.2))',
    borderRadius: '20px',
    filter: 'blur(8px)',
    opacity: 0.6,
    transition: 'opacity 0.5s ease'
  };

  const mainVideoContainerStyles = {
    position: 'relative',
    backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
    padding: windowWidth < 640 ? '8px' : '12px',
    borderRadius: '20px',
    boxShadow: theme === 'dark'
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
      : '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)'
  };

  const videoWrapperStyles = {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#111827',
    aspectRatio: '16/9'
  };

  const videoStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '16px',
    transition: 'transform 0.5s ease'
  };

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  };

  const playButtonContainerStyles = {
    position: 'relative'
  };

  const playButtonStyles = {
    position: 'relative',
    width: windowWidth < 640 ? '60px' : '80px',
    height: windowWidth < 640 ? '60px' : '80px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(8px)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    zIndex: 10
  };

  const playIconStyles = {
    width: windowWidth < 640 ? '24px' : '32px',
    height: windowWidth < 640 ? '24px' : '32px',
    color: '#1f2937',
    marginLeft: '4px'
  };

  const cornerAccentStyles = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(8px)',
    borderRadius: '50px',
    padding: '6px 12px'
  };

  const hdTextStyles = {
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: '600'
  };

  const floatingElement1Styles = {
    position: 'absolute',
    top: windowWidth < 640 ? '-12px' : '-16px',
    left: windowWidth < 640 ? '-12px' : '-16px',
    width: windowWidth < 640 ? '24px' : '32px',
    height: windowWidth < 640 ? '24px' : '32px',
    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
    borderRadius: '50%',
    opacity: 0.7,
    animation: 'bounce 2s infinite'
  };

  const floatingElement2Styles = {
    position: 'absolute',
    bottom: windowWidth < 640 ? '-12px' : '-16px',
    right: windowWidth < 640 ? '-12px' : '-16px',
    width: windowWidth < 640 ? '20px' : '24px',
    height: windowWidth < 640 ? '20px' : '24px',
    background: 'linear-gradient(135deg, #f472b6, #ef4444)',
    borderRadius: '50%',
    opacity: 0.7,
    animation: 'bounce 2s infinite 0.5s'
  };

  const cssAnimations = `
    @keyframes bounce {
      0%, 20%, 53%, 80%, 100% {
        transform: translate3d(0, 0, 0);
      }
      40%, 43% {
        transform: translate3d(0, -8px, 0);
      }
      70% {
        transform: translate3d(0, -4px, 0);
      }
      90% {
        transform: translate3d(0, -2px, 0);
      }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.8;
      }
    }

    @keyframes ping {
      75%, 100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    .video-container:hover .glow-effect {
      opacity: 1;
    }

    .video-container:hover .video-element {
      transform: scale(1.02);
    }

    .video-container:hover .overlay {
      opacity: 1;
    }

    .pulse-bg {
      animation: pulse 2s infinite;
    }

    .ping-bg {
      animation: ping 1s infinite;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssAnimations }} />
      <section style={sectionStyles}>
        {/* Background decoration */}
        <div style={backgroundDecorationStyles}>
          <div style={{
            position: 'absolute',
            top: '-160px',
            right: '-160px',
            width: '320px',
            height: '320px',
            background: theme === 'dark'
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))'
              : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))',
            borderRadius: '50%',
            filter: 'blur(60px)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-160px',
            left: '-160px',
            width: '320px',
            height: '320px',
            background: theme === 'dark'
              ? 'linear-gradient(135deg, rgba(244, 114, 182, 0.1), rgba(59, 130, 246, 0.1))'
              : 'linear-gradient(135deg, rgba(244, 114, 182, 0.1), rgba(59, 130, 246, 0.1))',
            borderRadius: '50%',
            filter: 'blur(60px)'
          }}></div>
        </div>

        <div style={containerStyles}>
          {/* Header */}
          <div style={headerStyles}>
            <div style={badgeStyles}>
              <svg
                style={badgeIconStyles}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span style={badgeTextStyles}>Featured Video</span>
            </div>

            <h2 style={titleStyles}>
              Our Latest Innovation
            </h2>

            <p style={descriptionStyles}>
              Watch our featured video showcasing our latest project highlights and innovations.
            </p>
          </div>

          {/* Video Container */}
          <div className="video-container" style={videoContainerStyles}>
            {/* Glow effect */}
            <div className="glow-effect" style={glowEffectStyles}></div>

            {/* Main video container */}
            <div style={mainVideoContainerStyles}>
              <div style={videoWrapperStyles}>
                <video
                  className="video-element"
                  src="https://passionates.com/wp-content/uploads/2025/05/Passionate-Website-video-compressed-1.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  style={videoStyles}
                  title="Passionates Featured Video"
                >
                  Your browser does not support the video tag.
                </video>

                {/* Overlay play button */}
                <div className="overlay" style={overlayStyles}>
                  <div style={playButtonContainerStyles}>
                    {/* Pulsing backgrounds */}
                    <div style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '-10px',
                      right: '-10px',
                      bottom: '-10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%'
                    }} className="ping-bg"></div>
                    <div style={{
                      position: 'absolute',
                      top: '-5px',
                      left: '-5px',
                      right: '-5px',
                      bottom: '-5px',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderRadius: '50%'
                    }} className="pulse-bg"></div>

                    {/* Play button */}
                    <div style={playButtonStyles}>
                      <svg style={playIconStyles} fill="currentColor" viewBox="0 0 24 24">
                        <polygon points="9,6 9,18 17,12" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div style={cornerAccentStyles}>
                  <span style={hdTextStyles}>HD</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div style={floatingElement1Styles}></div>
            <div style={floatingElement2Styles}></div>
          </div>
        </div>
      </section>
    </>
  );
}