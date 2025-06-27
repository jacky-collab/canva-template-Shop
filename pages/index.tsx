import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-50 to-white text-amber-900">
      {/* Navbar */}
      <header className="w-full py-6 px-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Mama Starterkit</h2>
        <nav className="space-x-4">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#testimonials" className="hover:underline">Erfahrungen</a>
          <a href="#cta" className="hover:underline">Jetzt sichern</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex-grow flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold max-w-3xl leading-tight">
          Das „Mama Content Starterkit“ für dein Online-Business
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-amber-700">
          9 fertig designte Social-Media-Posts, 30 Content-Ideen & Planungstools – 
          so sparst du jede Woche mehrere Stunden.
        </p>
        <a href="https://payhip.com/b/XW8mL" target="_blank" rel="noopener noreferrer">
          <Button className="mt-8 bg-amber-800 hover:bg-amber-900 text-white px-12 py-4 text-2xl rounded-lg shadow-lg">
            Jetzt Starterkit sichern
          </Button>
        </a>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-6 bg-amber-100">
        <h2 className="text-3xl font-bold text-center mb-12">Was du bekommst</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: "🖼️", title: "9 Post-Vorlagen", desc: "Fertige PNGs 1080×1080 – einfach posten." },
            { icon: "📝", title: "30 Content-Ideen", desc: "Themenvorschläge für mehr Engagement." },
            { icon: "📆", title: "Content-Planer", desc: "PDF-Vorlage für deine Wochenplanung." },
            { icon: "🎁", title: "Bonus-Freebie", desc: "10 Zusatz-Ideen als Extra-PDF." },
            { icon: "⚡", title: "Zeitsparend", desc: "Reduziere deinen Planungsaufwand enorm." },
            { icon: "🎨", title: "Modernes Design", desc: "Professionell, clean & familienfreundlich." },
          ].map((f) => (
            <div key={f.title} className="bg-white p-6 rounded-xl shadow-md text-left">
              <div className="text-4xl">{f.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-amber-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Erfahrungen</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {[
            { text: "„Endlich habe ich Struktur und spare täglich Zeit!“, Mama Lina" },
            { text: "„Die Designs sind soooo schön und super easy anzupassen.“, Coach Marie" },
            { text: "„Meine Reichweite ist seitdem um 40 % gestiegen!“, Unternehmerin Jana" },
          ].map((t, i) => (
            <blockquote key={i} className="bg-amber-50 p-6 rounded-lg italic border-l-4 border-amber-300">
              {t.text}
            </blockquote>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="py-16 px-6 bg-gradient-to-t from-amber-50 to-white text-center">
        <h2 className="text-4xl font-bold mb-4">Bereit durchzustarten?</h2>
        <a href="https://payhip.com/b/XW8mL" target="_blank" rel="noopener noreferrer">
          <Button className="bg-amber-800 hover:bg-amber-900 text-white px-12 py-4 text-2xl rounded-lg shadow-lg">
            Starterkit jetzt sichern
          </Button>
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-amber-600">
        &copy; {new Date().getFullYear()} Deine Firma. 
        <a href="/impressum" className="underline mx-2">Impressum</a>
        <a href="/datenschutz" className="underline">Datenschutz</a>
      </footer>
    </div>
  );
}
