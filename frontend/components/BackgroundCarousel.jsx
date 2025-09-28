'use client';
import { useEffect, useState } from "react";

export default function BackgroundCarousel() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch("http://localhost:5000/api/backgrounds");
        const data = await res.json();
        setImages(data.images || []);
      } catch (err) {
        console.error("Error fetching background images:", err);
      }
    }
    fetchImages();
  }, []);

  // auto-rotate every 5s
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images]);

  if (images.length === 0) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {images.map((img, i) => (
        <img
          key={i}
          src={`http://localhost:5000${img.url}`}
          alt="Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" /> {/* overlay */}
    </div>
  );
}
