'use client';

import { useEffect } from 'react';
import Hero from '../../components/Hero';
import VideoSection from '../../components/VideoSection';
import PopupContact from '../../components/PopupContact';
import Footer from '../../components/Footer';
import CustomCursor from '../../components/CustomCursor';

export default function Home() {
  // Add body class only on Hero page
  useEffect(() => {
    document.body.classList.add('hero-active');
    return () => document.body.classList.remove('hero-active');
  }, []);

  return (
    <>
      <PopupContact />

      {/* Custom cursor only on Hero */}
      <CustomCursor />

      <main className="w-full">
        <Hero /> {/* Ensure Hero is rendered */}
        <VideoSection />

        <Footer />
      </main>
    </>
  );
}
