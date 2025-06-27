import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-[#fdf6e3] text-[#8c4a3e]">
      <div className="max-w-md text-center space-y-6 px-4">
        {/* Titel */}
        <h1 className="text-5xl font-bold">Mama Content Starterkit</h1>
        {/* Untertitel */}
        <p className="text-lg">
          9 moderne Post-Vorlagen & 30 Content-Ideen – perfekt für Business-Mamas!
        </p>
        {/* Call-to-Action */}
        <a
          href="https://payhip.com/b/XW8mL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-[#8c4a3e] text-[#fdf6e3] px-12 py-5 text-2xl rounded-2xl shadow-lg">
            Jetzt Starterkit sichern
          </Button>
        </a>
      </div>
    </main>
  );
}
