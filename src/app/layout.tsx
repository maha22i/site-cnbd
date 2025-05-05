import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import BackToTopButton from '../components/BackToTopButton';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'CNBD - Distributeur de solutions informatiques pour entreprises',
  description: 'CNBD est spécialisé dans le commerce de gros d\'ordinateurs, d\'équipements informatiques périphériques et de logiciels pour les entreprises.',
  keywords: 'informatique, entreprise, ordinateurs, équipements informatiques, logiciels, Canon, partenaire officiel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans min-h-screen`}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
} 