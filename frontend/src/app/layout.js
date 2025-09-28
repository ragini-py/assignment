import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../../components/Header';
import ClientLayout from './ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Auren – Creative UI/UX & Design Studio",
  description: "Auren is a design-focused studio specializing in UI/UX, web design, and digital experiences that inspire and engage.",
  keywords: [
    "UI/UX design",
    "web design",
    "product design",
    "user experience",
    "creative design",
    "digital experiences",
    "interface design",
    "branding"
  ],
  openGraph: {
    title: "Auren – Crafting Digital Experiences",
    description: "We design beautiful, functional, and user-focused digital experiences. Explore our work in UI/UX, web design, and branding.",
    url: "https://auren.com",
    siteName: "Auren",
    images: [
      {
        url: "https://auren.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Auren – Creative UI/UX & Design Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Auren",
      "url": "https://auren.com",
      "logo": "https://auren.com/logo.png",
      "sameAs": [
        "https://dribbble.com/auren",
        "https://behance.net/auren",
        "https://linkedin.com/company/auren"
      ]
    }),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="transition-colors duration-400 cursor-none">
        <Header />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
