import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accord-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image 
              src="/images/logo.jpg" 
              alt="Accord Logo" 
              width={120} 
              height={50}
              className="h-auto mb-4"
            />
            <p className="text-sm">
              Accord - Begleitung in den Bereichen Mensch, Natur und Kultur
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <address className="not-italic text-sm">
              <p>Email: info@accord-coaching.com</p>
              <p>Telefon: +49 123 456789</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/angebote" className="hover:underline">Angebote</Link>
              <Link href="/ueber-uns" className="hover:underline">Über Uns</Link>
              <Link href="/kontakt" className="hover:underline">Kontakt</Link>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-accord mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Accord. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}