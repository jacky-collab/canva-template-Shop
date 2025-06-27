import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-100 text-amber-900">
      <div className="text-center space-y-8 p-6">
        {/* Hero */}
        <h1 className="text-5xl font-extrabold">
          Mama Content Starterkit
        </h1>
        <p className="text-xl">
          9 moderne Post-Vorlagen & 30 Content-Ideen – perfekt für Business-Mamas!
        </p>
        {/* Großer Button */}
        <a
          href="https://payhip.com/b/XW8mL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-amber-800 hover:bg-amber-900 text-white px-10 py-5 text-2xl rounded-2xl">
            Jetzt Starterkit sichern
          </Button>
        </a>
      </div>
    </div>
  );
}
