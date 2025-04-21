import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Image 
            src="/images/logo.jpg"
            alt="Accord Logo"
            width={200}
            height={200}
            className="mx-auto mb-8"
          />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-800">
            Human · Nature · Culture
          </h1>
          
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Willkommen bei Accord, wo persönliches Wachstum und Umweltbewusstsein Hand in 
            Hand gehen. Wir bieten Seelsorge, Seminare und Workshops für ein nachhaltiges und 
            erfülltes Leben.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontakt"
              className="bg-emerald-700 text-white px-6 py-3 rounded-md hover:bg-emerald-800 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
            
            <Link
              href="/angebote"
              className="border border-emerald-700 text-emerald-700 px-6 py-3 rounded-md hover:bg-emerald-50 transition-colors"
            >
              Unsere Angebote
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Preview Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-emerald-800">
            Unsere Angebote
          </h2>
          
          <p className="text-center mb-12 max-w-3xl mx-auto">
            Wir bieten vielfältige Unterstützung für Menschen in verschiedenen Lebenssituationen.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Seelsorgliche Begleitung</h3>
              <p className="text-gray-600">
                Für Gefangene, deren Familienangehörige und chronisch-kranke Patienten
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Familienberatung</h3>
              <p className="text-gray-600">
                Muslimische Familienberatung und kultursensible Angebote
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c-1.255 0-2.443.29-3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Bildungsangebote</h3>
              <p className="text-gray-600">
                Sprachkurse und Nachhilfe für Schulkinder
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/angebote"
              className="text-emerald-700 font-medium hover:underline"
            >
              Alle Angebote anzeigen →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
