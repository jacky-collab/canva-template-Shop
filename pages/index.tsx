import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 text-gray-800">
      {/* Hero */}
      <section className="relative flex items-center justify-center h-screen px-6">
        <div className="absolute inset-0 bg-[url('/product_preview.png')] bg-center bg-cover opacity-20" />
        <div className="relative max-w-2xl text-center space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            Mama Content Starterkit
          </h1>
          <p className="text-lg">
            9 moderne Post-Vorlagen & 30 Content-Ideen – perfekt für Business-Mamas!
          </p>
          <Button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 text-xl">
            Jetzt sichern
          </Button>
        </div>
      </section>

      {/* Vorschau Grid */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">
          Ein Blick ins Paket
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Beispielhafte Vorschaubilder – ersetze src mit deinen echten Pfaden */}
          {[
            "/post_idee_01.png",
            "/post_idee_02.png",
            "/post_idee_03.png",
            "/post_idee_04.png",
            "/post_idee_05.png",
            "/post_idee_06.png",
          ].map((src) => (
            <div key={src} className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={src}
                alt="Vorschau"
                width={400}
                height={400}
                className="object-cover w-full h-64"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-16 px-6 bg-pink-50">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold">Warum es funktioniert</h2>
          <p>⏱️ Spart dir Stunden Planung pro Woche</p>
          <p>🎨 Modernes, professionelles Design</p>
          <p>💡 Sofort einsetzbar & unbegrenzt nutzbar</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white text-center text-sm text-gray-500">
        <p>&copy; 2025 Deine Firma. Impressum & Datenschutz</p>
      </footer>
    </div>
  );
}
