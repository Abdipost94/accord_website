import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 bg-white">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.jpg" 
            alt="Accord Logo" 
            width={120} 
            height={50}
            className="h-auto"
          />
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-accord-dark hover:text-accord transition-colors">
            Home
          </Link>
          <Link href="/angebote" className="text-accord-dark hover:text-accord transition-colors">
            Angebote
          </Link>
          <Link href="/ueber-uns" className="text-accord-dark hover:text-accord transition-colors">
            Über Uns
          </Link>
          <Link href="/kontakt" className="text-accord-dark hover:text-accord transition-colors">
            Kontakt
          </Link>
        </nav>
        
        {/* Language switcher placeholder - we'll implement this later */}
        <div className="hidden md:block">
          <select className="border border-gray-200 rounded px-2 py-1">
            <option value="de">DE</option>
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
        </div>
        
        {/* Mobile menu button - we'll implement the mobile menu later */}
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}