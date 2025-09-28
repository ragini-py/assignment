'use client';

import { ThemeProvider } from '../../context/ThemeContext';
import CustomCursor from '../../components/CustomCursor';

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider>
      <CustomCursor />
      {children}
    </ThemeProvider>
  );
}
