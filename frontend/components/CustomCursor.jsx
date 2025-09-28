'use client';

import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function CustomCursor() {
  const [line1Pos, setLine1Pos] = useState({ x: 0, y: 0 });
  const [line2Pos, setLine2Pos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const mountTimeRef = useRef(Date.now());
  const { isDarkMode, toggleDarkMode } = useTheme();

  // Track mouse movement - cursor dot moves instantly
  useEffect(() => {
    const move = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      // Instant cursor update for responsive feel
      setCursorPos({ x: e.clientX, y: e.clientY });
      setIsActive(true);
    };

    const handleMouseLeave = () => setIsActive(false);
    const handleMouseEnter = () => setIsActive(true);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Line 1: elegant slow trailing
  useEffect(() => {
    let raf;
    const follow1 = () => {
      const offset = 25;
      setLine1Pos((prev) => ({
        x: prev.x + (posRef.current.x + offset - prev.x) * 0.04,
        y: prev.y + (posRef.current.y + offset - prev.y) * 0.04,
      }));
      raf = requestAnimationFrame(follow1);
    };
    follow1();
    return () => cancelAnimationFrame(raf);
  }, []);

  // Line 2: smooth medium trailing
  useEffect(() => {
    let raf;
    const follow2 = () => {
      const offset = -25;
      setLine2Pos((prev) => ({
        x: prev.x + (posRef.current.x + offset - prev.x) * 0.12,
        y: prev.y + (posRef.current.y + offset - prev.y) * 0.12,
      }));
      raf = requestAnimationFrame(follow2);
    };
    follow2();
    return () => cancelAnimationFrame(raf);
  }, []);

  const premiumGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)';
  
  const textGradientStyle = {
    background: premiumGradient,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0 0 8px rgba(102, 126, 234, 0.3))',
  };

  const glowEffect = {
    boxShadow: `
      0 0 20px rgba(102, 126, 234, 0.4),
      0 0 40px rgba(118, 75, 162, 0.3),
      0 0 60px rgba(240, 147, 251, 0.2)
    `,
    filter: 'blur(0.5px)',
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Premium cursor dot with instant response - no transition delays */}
      <div
        className={`absolute w-3 h-3 rounded-full ${
          isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: 'translate(-50%, -50%)',
          background: premiumGradient,
          transition: 'opacity 0.15s ease, transform 0.15s ease', // Only transition visibility, not position
          ...glowEffect,
        }}
      />

      {/* Enhanced Line 1 with premium styling and gap for text */}
      <div
        className={`absolute w-[250vw] origin-center transition-opacity duration-500 ${
          isActive ? 'opacity-100' : 'opacity-60'
        }`}
        style={{
          height: '2px',
          top: line1Pos.y,
          left: line1Pos.x,
          transform: 'translate(-50%, -50%) rotate(45deg)',
        }}
      >
        {/* Left line segment */}
        <div
          className="absolute h-full"
          style={{
            width: 'calc(50% - 50px)',
            left: 0,
            background: premiumGradient,
            ...glowEffect,
          }}
        />
        
        {/* Text positioned in the gap */}
        <span
          className={`absolute text-sm font-medium select-none tracking-wider uppercase transition-all duration-300 ${
            isActive ? 'opacity-100 scale-100' : 'opacity-80 scale-95'
          }`}
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '0.1em',
            ...textGradientStyle,
          }}
        >
          Explore
        </span>
        
        {/* Right line segment */}
        <div
          className="absolute h-full"
          style={{
            width: 'calc(50% - 50px)',
            right: 0,
            background: premiumGradient,
            ...glowEffect,
          }}
        />
      </div>

      {/* Enhanced Line 2 with premium styling */}
      <div
        className={`absolute w-[250vw] origin-center transition-opacity duration-500 ${
          isActive ? 'opacity-100' : 'opacity-60'
        }`}
        style={{
          height: '2px',
          top: line2Pos.y,
          left: line2Pos.x,
          transform: 'translate(-50%, -50%) rotate(-45deg)',
          background: premiumGradient,
          ...glowEffect,
        }}
      >
        {/* Subtle decorative elements */}
        <div
          className="absolute w-1 h-1 rounded-full opacity-80"
          style={{
            left: '30%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: premiumGradient,
            boxShadow: '0 0 10px rgba(102, 126, 234, 0.6)',
          }}
        />
        <div
          className="absolute w-1 h-1 rounded-full opacity-80"
          style={{
            left: '70%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: premiumGradient,
            boxShadow: '0 0 10px rgba(118, 75, 162, 0.6)',
          }}
        />
      </div>

      {/* Ambient light effect - follows cursor instantly */}
      <div
        className={`absolute w-32 h-32 rounded-full ${
          isActive ? 'opacity-20 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.2) 50%, transparent 70%)',
          filter: 'blur(20px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease', // Smooth but not laggy
        }}
      />
    </div>
  );
}