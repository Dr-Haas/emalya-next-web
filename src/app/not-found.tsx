import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page non trouvée</p>
          <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
